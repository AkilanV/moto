import React from "react";

const LeftSidebar = () =>{
    return(
        <div class="menu">
            <div class="main-menu">
            <div class="scroll">
                <ul class="list-unstyled">
                    <li><a href="#dashboard"><i class="iconsminds-shop-4"></i> <span>Dashboards</span></a></li>
                    <li><a href="#layouts" class="sidebar-icons"><i class="fa fa-bars" aria-hidden="true"></i> <i class="fa fa-check-square-o" aria-hidden="true"></i> </a></li>
                    <li class="active"><a href="#applications"><i class="fa fa-car" aria-hidden="true"></i></a></li>
                    <li><a href="#ui"><i class="fa fa-cart"></i> </a></li>
                    <li><a href="#ui"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                    <li><a href="#menu"><i class="fa fa-save"></i></a></li>
                    <li><a href="Blank.Page.html"><i class="simple-icon-login"></i> </a></li>
                </ul>
            </div>
            </div>
            <div class="sub-menu">
            <div class="scroll">
                <ul class="list-unstyled" data-link="layouts" id="layouts">
                    <li>
                        <a href="javascript:void(0)" data-toggle="collapse" data-target="#collapseAuthorization" aria-expanded="true" aria-controls="collapseAuthorization" class="rotate-arrow-icon opacity-50"><i class="simple-icon-arrow-down"></i> <span class="d-inline-block">Break System</span></a>
                        <div id="collapseAuthorization" class="collapse show">
                        <ul class="list-unstyled inner-level-menu">
                            <li><a href="javascript:void(0)"><i class="fa fa-caret-left" aria-hidden="true"></i> <span class="d-inline-block">Disk Brake</span></a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-caret-left" aria-hidden="true"></i> <span class="d-inline-block">Drum Brake</span></a></li>
                        </ul>
                        </div>
                    </li>
                    <li>
                        <a href="javascript:void(0)" data-toggle="collapse" data-target="#collapseProduct" aria-expanded="true" aria-controls="collapseProduct" class="rotate-arrow-icon opacity-50"><i class="simple-icon-arrow-down"></i> <span class="d-inline-block">Suspension System</span></a>
                        <div id="collapseProduct" class="collapse show">
                        <ul class="list-unstyled inner-level-menu">
                            <li><a href="javascript:void(0)"><i class="fa fa-caret-left" aria-hidden="true"></i> <span class="d-inline-block">Front Suspension</span></a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-caret-left" aria-hidden="true"></i> <span class="d-inline-block">Back Suspension</span></a></li>
                        </ul>
                        </div>
                    </li>
                </ul>
            
                <ul class="list-unstyled" data-link="menu" id="menuTypes">
                    <li>
                        <a href="javascript:void(0)" data-toggle="collapse" data-target="#collapseMenuTypes" aria-expanded="true" aria-controls="collapseMenuTypes" class="rotate-arrow-icon"><i class="simple-icon-arrow-down"></i> <span class="d-inline-block">Menu Types</span></a>
                        <div id="collapseMenuTypes" class="collapse show" data-parent="#menuTypes">
                        <ul class="list-unstyled inner-level-menu">
                            <li><a href="Menu.Default.html"><i class="simple-icon-control-pause"></i> <span class="d-inline-block">Default</span></a></li>
                            <li><a href="Menu.Subhidden.html"><i class="simple-icon-arrow-left mi-subhidden"></i> <span class="d-inline-block">Subhidden</span></a></li>
                            <li><a href="Menu.Hidden.html"><i class="simple-icon-control-start mi-hidden"></i> <span class="d-inline-block">Hidden</span></a></li>
                            <li><a href="Menu.Mainhidden.html"><i class="simple-icon-control-rewind mi-hidden"></i> <span class="d-inline-block">Mainhidden</span></a></li>
                        </ul>
                        </div>
                    </li>
                    <li>
                        <a href="javascript:void(0)" data-toggle="collapse" data-target="#collapseMenuLevel" aria-expanded="true" aria-controls="collapseMenuLevel" class="rotate-arrow-icon collapsed"><i class="simple-icon-arrow-down"></i> <span class="d-inline-block">Menu Levels</span></a>
                        <div id="collapseMenuLevel" class="collapse" data-parent="#menuTypes">
                        <ul class="list-unstyled inner-level-menu">
                            <li><a href="javascript:void(0)"><i class="simple-icon-layers"></i> <span class="d-inline-block">Sub Level</span></a></li>
                            <li>
                                <a href="javascript:void(0)" data-toggle="collapse" data-target="#collapseMenuLevel2" aria-expanded="true" aria-controls="collapseMenuLevel2" class="rotate-arrow-icon collapsed"><i class="simple-icon-arrow-down"></i> <span class="d-inline-block">Another Level</span></a>
                                <div id="collapseMenuLevel2" class="collapse">
                                    <ul class="list-unstyled inner-level-menu">
                                    <li><a href="javascript:void(0)"><i class="simple-icon-layers"></i> <span class="d-inline-block">Sub Level</span></a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li>
                        <a href="javascript:void(0)" data-toggle="collapse" data-target="#collapseMenuDetached" aria-expanded="true" aria-controls="collapseMenuDetached" class="rotate-arrow-icon collapsed"><i class="simple-icon-arrow-down"></i> <span class="d-inline-block">Detached</span></a>
                        <div id="collapseMenuDetached" class="collapse">
                        <ul class="list-unstyled inner-level-menu">
                            <li><a href="javascript:void(0)"><i class="simple-icon-layers"></i> <span class="d-inline-block">Sub Level</span></a></li>
                        </ul>
                        </div>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default LeftSidebar;