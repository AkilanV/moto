import React from "react";
import './Choosepart.css';
import Header from '../pages/common/Header';
import LeftSidebar from '../pages/common/LeftSidebar';
import Footer from '../pages/common/Footer';

const Choosepart = () => {
    return(
        /* <Header />
        <LeftSidebar /> */
            <main>
                <div class="container-fluid">
                    <div class="row">
                    <div class="col-12">
                    <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <ul class="nav nav-tabs separator-tabs ml-0 mb-3" role="tablist">
                                <li class="nav-item"><a class="tap-choose nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab" aria-controls="first" aria-selected="true">Test Drive <i class="fa fa-check-square-o" aria-hidden="true"></i></a></li>
                                <li class="nav-item"><a class="tap-choose nav-link" id="second-tab" data-toggle="tab" href="#second" role="tab" aria-controls="second" aria-selected="false">Inside/Under Hood <i class="fa fa-check-square-o" aria-hidden="true"></i></a></li>
                                <li class="nav-item"><a class="tap-choose nav-link" id="third-tab" data-toggle="tab" href="#third" role="tab" aria-controls="third" aria-selected="false">Car on Left/Under Car <i class="fa fa-check-square-o" aria-hidden="true"></i></a></li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                                    <div class="row">
                                        <div class="col-12 mb-4 data-table-rows data-tables-hide-filter">
                                            <table id="datatableRowChoose" class="data-table responsive" data-order="[[ 1, &quot;desc&quot; ]]">
                                                    <thead>
                                                        <tr class="first-head">
                                                            <th colspan="6" class="first-head-th"><i class="fa fa-circle-o" aria-hidden="true"></i> 2019 CHEVROLET Equinox </th>
                                                            <th class="last-head-th">VIN-SAJWA51A16WE80610</th>
                                                        </tr>
                                                        
                                                        <tr><th colspan="7" class="second-head-th"><center>Mesurements of tire treads, break linings and rotors for each tire </center> </th>
                                                        </tr>
                                                        <tr class="third-head-th">
                                                            <th></th>
                                                            <th>Ok</th>
                                                            <th>Attn.</th>
                                                            <th>N/A</th>
                                                            <th>Prts.</th>
                                                            <th>Comments</th>
                                                            <th></th>
                                                        </tr>

                                                        
                                                    </thead>

                                                    <tbody>
                                                        <tr class="fourth-head">
                                                            <th>On Road </th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th class="mark-sel-ok"><button type="button" class="btn btn-outline-primary btn-lg mr-1">Mark Selection Ok</button></th>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i id="check1" class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i id="check2" class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i id="check3" class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i id="check4" class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i id="check5" class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>

                                                        <tr class="fourth-head">
                                                            <th>On Road </th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th class="mark-sel-ok"><button type="button" class="btn btn-outline-primary btn-lg mr-1">Mark Selection Ok</button></th>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>
                                                    </tbody>
                                                        
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
                                <div class="row">
                                        <div class="col-12 mb-4 data-table-rows data-tables-hide-filter">
                                            <table id="datatableRowChoose" class="data-table responsive" data-order="[[ 1, &quot;desc&quot; ]]">
                                                    <thead>
                                                        <tr class="first-head">
                                                            <th colspan="6" class="first-head-th"><i class="fa fa-circle-o" aria-hidden="true"></i> 2019 CHEVROLET Equinox </th>
                                                            <th class="last-head-th">VIN-SAJWA51A16WE80610</th>
                                                        </tr>
                                                        
                                                        <tr>
                                                            <th colspan="7" class="second-head-th"><center> Inside and Under hood section of inspection </center> </th>
                                                        </tr>
                                                        <tr class="third-head-th">
                                                            <th></th>
                                                            <th>Ok</th>
                                                            <th>Attn.</th>
                                                            <th>N/A</th>
                                                            <th>Prts.</th>
                                                            <th>Comments</th>
                                                            <th></th>
                                                        </tr>

                                                        
                                                    </thead>

                                                    <tbody>
                                                        <tr class="fourth-head">
                                                            <th>On Road </th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th class="mark-sel-ok"><button type="button" class="btn btn-outline-primary btn-lg mr-1">Mark Selection Ok</button></th>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>

                                                        <tr class="fourth-head">
                                                            <th>On Road </th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th class="mark-sel-ok"><button type="button" class="btn btn-outline-primary btn-lg mr-1">Mark Selection Ok</button></th>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>
                                                    </tbody>
                                                        
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">
                                <div class="row">
                                        <div class="col-12 mb-4 data-table-rows data-tables-hide-filter">
                                            <table id="datatableRowChoose" class="data-table responsive" data-order="[[ 1, &quot;desc&quot; ]]">
                                                    <thead>
                                                        <tr class="first-head">
                                                            <th colspan="6" class="first-head-th"><i class="fa fa-circle-o" aria-hidden="true"></i> 2019 CHEVROLET Equinox </th>
                                                            <th class="last-head-th">VIN-SAJWA51A16WE80610</th>
                                                        </tr>
                                                        
                                                        <tr>
                                                            <th colspan="7" class="second-head-th"><center> Inside and Under hood section of inspection </center> </th>
                                                        </tr>
                                                        <tr class="third-head-th">
                                                            <th></th>
                                                            <th>Ok</th>
                                                            <th>Attn.</th>
                                                            <th>N/A</th>
                                                            <th>Prts.</th>
                                                            <th>Comments</th>
                                                            <th></th>
                                                        </tr>

                                                        
                                                    </thead>

                                                    <tbody>
                                                        <tr class="fourth-head">
                                                            <th>On Road </th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th class="mark-sel-ok"><button type="button" class="btn btn-outline-primary btn-lg mr-1">Mark Selection Ok</button></th>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>

                                                        <tr class="fourth-head">
                                                            <th>On Road </th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th class="mark-sel-ok"><button type="button" class="btn btn-outline-primary btn-lg mr-1">Mark Selection Ok</button></th>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission Fluid Level & Condition</td>
                                                            <td><i class="fa fa-check-square-o" aria-hidden="true"></i></td>
                                                            <td><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></td>
                                                            <td>N/A</td>
                                                            <td><i class="fa fa-shopping-cart" aria-hidden="true"></i></td>
                                                            <td></td>
                                                            <td class="mark-sel-ok"><i class="fa fa-pencil" aria-hidden="true"></i></td>
                                                        </tr>
                                                    </tbody>
                                                        
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        
                        
                    </div>
                    </div>
                </div>
            </main>
    );
};

export default Choosepart;