import {AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import * as d3 from 'd3';
import * as d3Cloud from 'd3-cloud'
import { data } from "./data";
import {Observable, of} from "rxjs";
import {ITag} from "../../../core/models/interfaces";
import {delay} from "rxjs/operators";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'mbg-tags-cloud',
  templateUrl: './tags-cloud.component.html',
  styleUrls: ['./tags-cloud.component.scss']
})
export class TagsCloudComponent implements OnInit, AfterViewInit {

  data: ITag[];

  constructor() { }
  margin = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  };
  width = 450 - this.margin.left - this.margin.right;
  height = 450 - this.margin.top - this.margin.bottom;

  svg:  d3.Selection<SVGGElement, unknown, HTMLElement, any>;

  private _createSvg() {
    return d3.select('#tags-cloud')
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  private _getData(): Observable<ITag[]> {
    return of(data).pipe(
      untilDestroyed(this),
      delay(1500)
    );
  }

  ngAfterViewInit() {
    this._getData().subscribe(data => {
      this.data = data;
      this._render();
    })
  }

  private _render() {
    d3Cloud().words(this.data)
      .size([400,400])
      .timeInterval(20)
      .padding(5)
      .fontSize(d => d.size! * 2)
      .rotate(() => ~~(Math.random() * 2) * 90)
      .on("end", this._draw.bind(this))
      .start();
  }

  private _draw() {
      d3.select("#tags-cloud")
        .append("svg")
        .attr("width", this.width + this.margin.left + this.margin.right)
        .attr("height", this.height + this.margin.top + this.margin.bottom)
        .append("g")
        .attr("transform",
          "translate(" + this.margin.left + "," + this.margin.top + ")")
        .data<ITag>(this.data)
        .enter().append("text")
        .style("font-size", d => 24 + d.size*4 + "px")
        .attr("text-anchor", "middle")
        .text(d=> d.text );
  }

  ngOnInit() {
    console.log('onInit');
  }
}
