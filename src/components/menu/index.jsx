import { useState, useEffect } from "react";

export default function Menu() {
  return (
    <>
      <div className="m-12">
        <md-filled-button id="usage-document-anchor">
          Open document menu
        </md-filled-button>
      </div>
      <md-menu
        positioning="document"
        id="usage-document"
        anchor="usage-document-anchor"
      >
        <md-menu-item>
          <div slot="headline">Apple</div>
        </md-menu-item>
        <md-menu-item>
          <div slot="headline">Banana</div>
        </md-menu-item>
        <md-menu-item>
          <div slot="headline">Cucumber</div>
        </md-menu-item>
      </md-menu>
    </>
  );
}
