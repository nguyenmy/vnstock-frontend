import React, { useState, useEffect } from "react";

import classes from './Filter.module.css'
const Filter = (props) => {
    const [filters, setFilters] = useState({
        EMA10: "",
        EMA21: "",
        EMA50: "",
        EMA200: "",
        VolumeDays: 20,
        VolumeAvg: 15000,
        Price: 5000,
        FlatBaseDays:0,
        FlatBasePercentages:0,
        NearEMA: "",
    });

    useEffect(() => {
        var query = buildSearchQuery();
        console.log(query);
        props.onFilterChange(query);

    }, []);

    // function to handle changes in dropdowns
    const handleFilterChange = (event) => {
        console.log(event.target.value);
        const { name, value } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        var query = buildSearchQuery();
        console.log(query);
        props.onFilterChange(query);
    };

    const buildSearchQuery = () => {
        var query = "";
        if (filters.EMA10 !== "") {
            query = filters.EMA10;
        }

        if (filters.EMA21 !== "") {
            if (query.length > 0) {
                query = query + "&";
            }
            query = query + filters.EMA21;
        }
        if (filters.EMA50 !== "") {
            if (query.length > 0) {
                query = query + "&";
            }
            query = query + filters.EMA50;
        }

        if (filters.EMA200 !== "") {
            if (query.length > 0) {
                query = query + "&";
            }
            query = query + filters.EMA200;
        }

        if (filters.NearEMA !== "") {
            if (query.length > 0) {
                query = query + "&";
            }
            query = query + "near_ema=" + filters.NearEMA;
        }

        if ((+filters.VolumeDays) !== 0 && (+filters.VolumeAvg) !== 0) {
            console.log(filters.VolumeDays, filters.VolumeAvg);
            if (query.length > 0) {
                query = query + "&";
            }

            query = query + "volavg=" + filters.VolumeDays + "_" + filters.VolumeAvg;
        }

        if ((+filters.FlatBaseDays) !== 0 && (+filters.FlatBasePercentages) !== 0) {
            console.log(filters.FlatBaseDays, filters.FlatBasePercentages);
            if (query.length > 0) {
                query = query + "&";
            }

            query = query + "flat_base=" + filters.FlatBaseDays + "_" + filters.FlatBasePercentages;
        }

        if ((+filters.Price) !== 0) {
            if (query.length > 0) {
                query = query + "&";
            }

            query = query + "pr=" + filters.Price;
        }
        return query;
    }

    return (
        <div className={classes.filterContainer}>
            <form onSubmit={handleSearchSubmit} >
                <div className="card">
                    <div class="card-body">
                        <div className="form-row">
                            <div className="form-group col-mb-1">
                                <div className="input-group input-group-sm">
                                    <select name="EMA10" id="filterEma10" className="form-control" value={filters.category} onChange={handleFilterChange}>
                                        <option value=""></option>
                                        <option value="ema10=1">above &#xf062;</option>
                                        <option value="ema10=2">below &#xf063;</option>
                                    </select>
                                    <div class="input-group-append">
                                        <span className="input-group-text" >{'EMA 10'}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-mb-1">
                                <div className="input-group input-group-sm">
                                    <select name="EMA21" id="filterEma21" className="form-control" value={filters.priceRange} onChange={handleFilterChange}>
                                        <option value=""></option>
                                        <option value="ema21=1">above &#xf062;</option>
                                        <option value="ema21=2">below &#xf063;</option>
                                    </select>
                                    <div class="input-group-append">
                                        <span className="input-group-text" >{'EMA 21'}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-mb-1">
                                <div className="input-group input-group-sm">
                                    <select name="EMA50" id="filterEma50" className="form-control" value={filters.EMA50} onChange={handleFilterChange}>
                                        <option value=""></option>
                                        <option value="ema50=1">above &#xf062;</option>
                                        <option value="ema50=2">below &#xf063;</option>
                                    </select>
                                    <div class="input-group-append">
                                        <span className="input-group-text" >{'EMA 50'}</span>
                                    </div>
                                </div>

                            </div>
                            <div className="form-group col-mb-1">
                                <div className="input-group input-group-sm ">
                                    <select name="EMA200" id="filterEma200" className="form-control" value={filters.EMA200} onChange={handleFilterChange}>
                                        <option value=""></option>
                                        <option value="ema200=1">above &#xf062;</option>
                                        <option value="ema200=2">below &#xf063;</option>
                                    </select>
                                    <div class="input-group-append">
                                        <span className="input-group-text" >{'EMA 200'}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-mb-1">
                                <div className="input-group input-group-sm">
                                    <div class="input-group-prepend">
                                        <span className="input-group-text" >{'Price'}</span>
                                    </div>
                                    <div class="input-group-prepend">
                                        <span className="input-group-text" >{'>='}</span>
                                    </div>
                                    <input name="Price" id="filterPrice" className="form-control" type="number" value={filters.Price} onChange={handleFilterChange} ></input>
                                    <div class="input-group-append">
                                        <span className="input-group-text" >{'VND'}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-mb-1">
                                <div className="form-group input-group-sm">
                                    <div className="input-group input-group-sm">
                                        <div class="input-group-prepend">
                                            <span className="input-group-text" >{'Average volume'}</span>
                                        </div>
                                        <input name="VolumeDays" id="filterVolumeDays" className="form-control" type="number" value={filters.VolumeDays} onChange={handleFilterChange} ></input>
                                        <div class="input-group-prepend">
                                            <span className="input-group-text" >Days</span>
                                        </div>
                                        <div class="input-group-prepend">
                                            <span className="input-group-text" >{'>='}</span>
                                        </div>
                                        <input name="VolumeAvg" id="filterVolumeAvg" className="form-control" type="number" value={filters.VolumeAvg} onChange={handleFilterChange}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-mb-1">
                                <div className="form-group input-group-sm">
                                    <div className="input-group input-group-sm">
                                        <div class="input-group-prepend">
                                            <span className="input-group-text" >{'Flat base'}</span>
                                        </div>
                                        <input name="FlatBaseDays" id="filterFlatBaseDays" className="form-control" type="number" value={filters.FlatBaseDays} onChange={handleFilterChange} ></input>
                                        <div class="input-group-prepend">
                                            <span className="input-group-text" >Days</span>
                                        </div>
                                        <div class="input-group-prepend">
                                            <span className="input-group-text" >{'<='}</span>
                                        </div>
                                        <input name="FlatBasePercentages" id="filterFlatBasePercentages" className="form-control" type="number" value={filters.FlatBasePercentages} onChange={handleFilterChange}></input>
                                        <div class="input-group-append">
                                            <span className="input-group-text" >{'%'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-mb-1">
                                <div className="input-group input-group-sm ">
                                <div class="input-group-prepend">
                                        <span className="input-group-text" >{'Price near an EMA'}</span>
                                    </div>
                                    <select name="NearEMA" id="filterNearEMA" className="form-control" value={filters.NearEMA} onChange={handleFilterChange}>
                                        <option value=""></option>
                                        <option value="10">EMA 10</option>
                                        <option value="21">EMA 21</option>
                                        <option value="50">EMA 50</option>
                                        <option value="200">EMA 200</option>
                                    </select>
                                   
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm">Search</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Filter;