import {Component, OnDestroy, OnInit} from '@angular/core';
import * as d3 from 'd3';
import * as d3Cloud from 'd3-cloud'
import { data } from "./data";
import { Observable, of} from "rxjs";
import {ITag} from "../../../core/models/interfaces";
import {delay, map } from "rxjs/operators";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {Router} from "@angular/router";

@UntilDestroy()
@Component({
  selector: 'mbg-tags-cloud',
  templateUrl: './tags-cloud.component.html',
  styleUrls: ['./tags-cloud.component.scss']
})
export class TagsCloudComponent implements OnInit, OnDestroy {

  data: ITag[];

  constructor(private router: Router) { }

  width = window.screen.width - 32;

  svg:  d3.Selection<SVGGElement, unknown, HTMLElement, any>;

  private _getData(): Observable<ITag[]> {
    return of(data).pipe(
      map(data => data.slice(0,100)),
      map(data => this._increaseTagsSize(data)),
      delay(300),
    );
  }

  private _increaseTagsSize(tags: ITag[]): ITag[] {
    return tags.map( tag => {
      tag.size = tag.size * 4 + 14;
      return tag;
    })
  }

  private _setWordColor(tag: ITag): string {
    return `#${this.colorSpectrum(tag.size)}${this.colorSpectrum(tag.size)}${this.colorSpectrum(tag.size)}`
  }

  colorSpectrum(size: number): string {
    return (Math.floor(Math.random() * 1000 * size) % 256).toString(16);
  }

  ngOnInit() {
    this._getData()
      .pipe(untilDestroyed(this))
      .subscribe(data => {
        this.svg = this._createSvg();
        this._render(data);
      })
  }

  private _createSvg() {
    return d3.select('#tags-cloud')
      .append('svg')
      .attr("width", this.width)
      .attr("height", 600)
      .append('g')
      .attr('transform', 'translate(' + ~~(this.width / 2) + ',' + ~~(500 / 2) + ')');
  }

  private _render(words: ITag[]) {
    d3Cloud()
      .size([this.width,450])
      .words(words)
      .fontSize(d => d.size!)
      // .fontWeight(d => d.size! * 100 % 600)
      .rotate(() => ~~(Math.random() * 2) * 90)
      .random(() => Math.random())
      .padding(8)
      .on("end", this._draw.bind(this))
      .start();
  }

  private _draw(words: ITag[]) {
    this.svg.selectAll('text')
      .data<ITag>(words)
      .enter()
      .append('text')
      .style('font-size', d => d.size)
      .attr('text-anchor', 'middle')
      .style('fill', d => this._setWordColor(d))
      .attr('class','default-tag')
      .attr('data-text',d => d.text)
      .attr('transform', d => {
        return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
      })
      .text(d => d.text)
      .on("click", (d) => this.searchTag(d.target.dataset.text))
  }

  private searchTag(text: string): void {
    this.router.navigate([`/home?q=${text}`])
  }
  ngOnDestroy() { }
}
