// import React from "react";
import React, { useState } from 'react';
// import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import Header from '../pages/common/Header';
import LeftSidebar from '../pages/common/LeftSidebar';
import Footer from '../pages/common/Footer';

const Dashboard = () => {
    
    const navigate = useNavigate();
 
    return(
            <main>
                <div class="container-fluid library-app">
                    <div class="row">
                    <div class="col-12">
                        <div class="mb-3">
                            {/* <div className="add"> */}
                            <div class="text-zero top-left-button-container">
                                <button type="button" class="btn btn-primary btn-lg top-right-button mr-3 ins-all-btn">all</button>
                                <button type="button" class="btn btn-outline-primary btn-lg top-right-button mr-3 ins-wait-btn">awaiting inspection</button>
                                <button type="button" class="btn btn-outline-primary btn-lg top-right-button mr-3 ins-progress-btn btn-progress-selected">inspection in progress</button>
                                <button type="button" class="btn btn-outline-primary btn-lg top-right-button mr-3 ins-complete-btn">inspection in complete</button>
                                {/* <div className="add"> */}
                                  <button type="button" id="addvechicle" class="add btn btn-danger btn-md top-left-button mr-2 ins-all-btn" data-toggle="modal" data-target=".bd-example-modal-md"><b>+</b></button>
                                {/* </div> */}
                                
                            </div>
                            
                        </div>
                        
                        <div class="separator mb-5"></div>
                    </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mb-4 data-table-rows data-tables-hide-filter">
                            <table id="datatableRow" class="data-table responsive nowrap" data-order="[[ 1, &quot;desc&quot; ]]">
                                    
                                    <tr>
                                        <th>2006 Jaguar X-Type</th>
                                        <th>QSBSRR</th>
                                        <th>VIN-SAJWA51A16WE80610</th>
                                    </tr>
                                    <tr class="row-mb row-border">
                                        <td>
                                            <button type="button" class="btn btn-primary btn-lg mr-1" onClick={()=>navigate("/Choosepart")}><i class="fa fa-bars" aria-hidden="true"></i> <i class="fa fa-check-square-o" aria-hidden="true"></i>  Checklist </button>
                                        </td>
                                        <td>
                                        <button type="button" class="btn btn-primary btn-lg mr-1"><i class="fa fa-check-square-o" aria-hidden="true"></i>  Parts Selector </button>
                                        </td>
                                        <td>
                                            <center>
                                                <p class="text-muted ins-status"><b>STATUS</b></p>
                                                <p class="ins-wait-text">awaiting inspection</p>
                                            </center>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="empty-row"></td>
                                        <td class="empty-row"></td>
                                        <td class="empty-row"></td>
                                    </tr>
    
                                    <tr>
                                        <th>2004 Honda CR-V</th>
                                        <th>M55XAS</th>
                                        <th>VIN-IJHLRD77874C02645</th>
                                    </tr>
                                    
                                    <tr class="row-mb row-border">
                                        <td>
                                        <button type="button" class="btn btn-primary btn-lg mr-1"><i class="fa fa-bars" aria-hidden="true"></i> <i class="fa fa-check-square-o" aria-hidden="true"></i>  Checklist </button>
                                        </td>
                                        <td>
                                        <button type="button" class="btn btn-primary btn-lg mr-1"><i class="fa fa-check-square-o" aria-hidden="true"></i>  Parts Selector </button>
                                        </td>
                                        <td>
                                            <center>
                                                <p class="text-muted ins-status"><b>STATUS</b></p>
                                                <p class="ins-progress-text">inspection progress</p>
                                            </center>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="empty-row"></td>
                                        <td class="empty-row"></td>
                                        <td class="empty-row"></td>
                                    </tr>

                                    <tr>
                                        <th>2006 Jaguar X-Type</th>
                                        <th>QSBSRR</th>
                                        <th>VIN-SAJWA51A16WE80610</th>
                                    </tr>
                                    <tr class="row-mb row-border">
                                        <td>
                                            <button type="button" class="btn btn-primary btn-lg mr-1"><i class="fa fa-bars" aria-hidden="true"></i> <i class="fa fa-check-square-o" aria-hidden="true"></i>  Checklist </button>
                                        </td>
                                        <td>
                                        <button type="button" class="btn btn-primary btn-lg mr-1"><i class="fa fa-check-square-o" aria-hidden="true"></i>  Parts Selector </button>
                                        </td>
                                        <td>
                                            <center>
                                                <p class="text-muted ins-status"><b>STATUS</b></p>
                                                <p class="ins-complete-text">inspection complete</p>
                                            </center>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="empty-row"></td>
                                        <td class="empty-row"></td>
                                        <td class="empty-row"></td>
                                    </tr>
                            </table>
                        </div>
                        </div>
                </div>
                <div class="modal fade bd-example-modal-md" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div class="modal-dialog modal-md">
                                        <div class="modal-content">
                                        <div className="add_new_vehicle">
                                            <div class="modal-header">
                                                <h1 class="modal-title" id="exampleModalLabel">Add New Vehicle</h1>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                            </div>
                                            </div>
                                            <div class="modal-body">
                                            <form>
                                                    <div class="form-group"><label>Enter Repair Order Number</label> <input type="text" class="form-control" placeholder="" /></div>
                                                    {/* <div class="form-group"><label>Details</label> <textarea class="form-control" rows="2"></textarea></div> */}
                                                    <div class="form-group">
                                                        <label>Select Customer</label>
                                                        <select class="form-control select2-single" data-width="100%">
                                                            <option label="&nbsp;">&nbsp;</option>
                                                            <option value="Flexbox">Akilan</option>
                                                            <option value="Sass">Durai</option>
                                                            <option value="React">Satiz</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Select Vechicle</label>
                                                        <select class="form-control select2-single" data-width="100%">
                                                            <option label="&nbsp;">&nbsp;</option>
                                                            <option value="Flexbox">Audi</option>
                                                            <option value="Sass">Benz</option>
                                                            <option value="React">Jaguar</option>
                                                        </select>
                                                    </div>
                                                    {/* <div class="form-group">
                                                        <label>Labels</label>
                                                        <select class="form-control select2-multiple" multiple="multiple" data-width="100%">
                                                            <option value="New Framework">New Framework</option>
                                                            <option value="Education">Education</option>
                                                            <option value="Personal">Personal</option>
                                                        </select>
                                                    </div> */}
                                                   <div class="form-group"><label>Enter Odometer Reading</label> <input type="text" class="form-control" placeholder="" /></div>
                                                    {/* <div class="form-group">
                                                        <label>Status</label>
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="customCheck1" /> <label class="custom-control-label" for="customCheck1">Completed</label>
                                                        </div>
                                                    </div> */}
                                                  <div class="form-group"><label>Select Worksheet</label> <input type="text" class="form-control" placeholder="" /></div>

                                                </form>


                                            </div>
                                            <div class="modal-footer"><button type="button" class="btn btn-outline-primary" data-dismiss="modal">Cancel</button> <button type="button" class="btn btn-primary">Submit</button></div>
                                        </div>
                                        
                                    </div>
                                </div>
                        
                         
            </main>
            
    );
};

export default Dashboard;