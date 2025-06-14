import React, { useState, useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";

export default function SideBar() {
  const [visible, setVisible] = useState(false);
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);

  return (
    <div className="card flex justify-content-center">
      {/* <Button /> */}
      <button
        label="Open Sidebar"
        icon="pi pi-bars"
        onClick={() => setVisible(true)}
        type="button"
        className="p-link layout-menu-button layout-topbar-button border-none bg-transparent"
      >
        <i className="pi pi-bars text-gray-500 text-xl" />
      </button>
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        content={({ closeIconRef, hide }) => (
          
              <div className="flex flex-column h-full">
                {/* Header */}
                <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                  <span className="inline-flex align-items-center gap-2">
                    <i className="pi pi-star-fill text-primary text-2xl" />
                    <span className="font-semibold text-2xl text-primary">
                      Your Logo
                    </span>
                  </span>
                  <Button
                    type="button"
                    ref={closeIconRef}
                    onClick={hide}
                    icon="pi pi-times"
                    rounded
                    outlined
                    className="h-2rem w-2rem"
                  />
                </div>

                {/* Menu */}
                <div className="overflow-y-auto">
                  <ul className="list-none p-3 m-0">
                    <li>
                      <StyleClass
                        nodeRef={btnRef1}
                        selector="@next"
                        enterFromClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                      >
                        <div
                          ref={btnRef1}
                          className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                        >
                          <span className="font-medium">FAVORITES</span>
                          <i className="pi pi-chevron-down"></i>
                          <Ripple />
                        </div>
                      </StyleClass>
                      <ul className="list-none p-0 m-0 overflow-hidden">
                        <li>
                          <a className="p-ripple flex align-items-center p-3 text-700 hover:surface-100 cursor-pointer">
                            <i className="pi pi-home mr-2"></i> Dashboard
                            <Ripple />
                          </a>
                        </li>
                        <li>
                          <a className="p-ripple flex align-items-center p-3 text-700 hover:surface-100 cursor-pointer">
                            <i className="pi pi-bookmark mr-2"></i> Bookmarks
                            <Ripple />
                          </a>
                        </li>
                        <li>
                          <StyleClass
                            nodeRef={btnRef2}
                            selector="@next"
                            enterFromClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <a
                              ref={btnRef2}
                              className="p-ripple flex align-items-center p-3 text-700 hover:surface-100 cursor-pointer"
                            >
                              <i className="pi pi-chart-line mr-2"></i> Reports
                              <i className="pi pi-chevron-down ml-auto mr-1"></i>
                              <Ripple />
                            </a>
                          </StyleClass>
                          <ul className="list-none p-0 pl-3 m-0 hidden overflow-hidden transition-all">
                            <li>
                              <StyleClass
                                nodeRef={btnRef3}
                                selector="@next"
                                enterFromClassName="hidden"
                                enterActiveClassName="slidedown"
                                leaveToClassName="hidden"
                                leaveActiveClassName="slideup"
                              >
                                <a
                                  ref={btnRef3}
                                  className="p-ripple flex align-items-center p-3 text-700 hover:surface-100 cursor-pointer"
                                >
                                  <i className="pi pi-chart-line mr-2"></i>{" "}
                                  Revenue
                                  <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                  <Ripple />
                                </a>
                              </StyleClass>
                              <ul className="list-none p-0 pl-3 m-0 hidden overflow-hidden transition-all">
                                <li>
                                  <a className="p-ripple flex align-items-center p-3 text-700 hover:surface-100 cursor-pointer">
                                    <i className="pi pi-table mr-2"></i> View
                                    <Ripple />
                                  </a>
                                </li>
                                <li>
                                  <a className="p-ripple flex align-items-center p-3 text-700 hover:surface-100 cursor-pointer">
                                    <i className="pi pi-search mr-2"></i> Search
                                    <Ripple />
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="p-ripple flex align-items-center p-3 text-700 hover:surface-100 cursor-pointer">
                                <i className="pi pi-chart-line mr-2"></i>{" "}
                                Expenses
                                <Ripple />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  {/* Application section */}
                  <ul className="list-none p-3 m-0">
                    <li>
                      <StyleClass
                        nodeRef={btnRef4}
                        selector="@next"
                        enterFromClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                      >
                        <div
                          ref={btnRef4}
                          className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                        >
                          <span className="font-medium">APPLICATION</span>
                          <i className="pi pi-chevron-down"></i>
                          <Ripple />
                        </div>
                      </StyleClass>
                      <ul className="list-none p-0 m-0 overflow-hidden">
                        <li>
                          <a className="p-ripple flex align-items-center p-3 text-700 hover:surface-100 cursor-pointer">
                            <i className="pi pi-folder mr-2"></i> Projects
                            <Ripple />
                          </a>
                        </li>
                        <li>
                          <a className="p-ripple flex align-items-center p-3 text-700 hover:surface-100 cursor-pointer">
                            <i className="pi pi-chart-bar mr-2"></i> Performance
                            <Ripple />
                          </a>
                        </li>
                        <li>
                          <a className="p-ripple flex align-items-center p-3 text-700 hover:surface-100 cursor-pointer">
                            <i className="pi pi-cog mr-2"></i> Settings
                            <Ripple />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
       
        )}
      />
    </div>
  );
}
