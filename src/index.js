import React, { Component } from 'react'
import './TreePreservationSiteCalculator.css'

import TreePreservationCalculatorApp from './TreePreservationCalculatorApp'

export default class extends Component {
  render () {
    return (
      <div className="TreePreservationSiteCalculator">
        <link rel="dns-prefetch" href="//cdn.datatables.net" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//www.ashevillenc.gov" />
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//stackpath.bootstrapcdn.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="//translate.google.com" />
        <link rel="dns-prefetch" href="//platform.twitter.com" />
        <link rel="alternate" type="application/rss+xml" title="The City of Asheville &raquo; Feed" href="https://www.ashevillenc.gov/feed/" />
        <link rel="alternate" type="application/rss+xml" title="The City of Asheville &raquo; Comments Feed" href="https://www.ashevillenc.gov/comments/feed/" />
        <link rel="alternate" type="text/calendar" title="The City of Asheville &raquo; iCal Feed" href="https://www.ashevillenc.gov/events/?ical=1" />
        <link rel="stylesheet" id="tribe-common-skeleton-style-css" href="https://www.ashevillenc.gov/wp-content/plugins/the-events-calendar/common/src/resources/css/common-skeleton.min.css?ver=4.10.2" type="text/css" media="all" />
        <link rel="stylesheet" id="tribe-tooltip-css" href="https://www.ashevillenc.gov/wp-content/plugins/the-events-calendar/common/src/resources/css/tooltip.min.css?ver=4.10.2" type="text/css" media="all" />
        <link rel="stylesheet" id="wp-block-library-css" href="https://www.ashevillenc.gov/wp-includes/css/dist/block-library/style.min.css?ver=5.3.2" type="text/css" media="all" />
        <link rel="stylesheet" id="jquery-datatables-css" href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css?ver=5.3.2" type="text/css" media="all" />
        <link rel="stylesheet" id="datatables-buttons-css" href="https://cdn.datatables.net/buttons/1.4.2/css/buttons.dataTables.min.css?ver=5.3.2" type="text/css" media="all" />
        <link rel="stylesheet" id="datatables-select-css" href="https://cdn.datatables.net/select/1.2.3/css/select.dataTables.min.css?ver=5.3.2" type="text/css" media="all" />
        <link rel="stylesheet" id="datatables-fixedheader-css" href="https://cdn.datatables.net/fixedheader/3.1.3/css/fixedHeader.dataTables.min.css?ver=5.3.2" type="text/css" media="all" />
        <link rel="stylesheet" id="datatables-fixedcolumns-css" href="https://cdn.datatables.net/fixedcolumns/3.2.3/css/fixedColumns.dataTables.min.css?ver=5.3.2" type="text/css" media="all" />
        <link rel="stylesheet" id="datatables-responsive-css" href="https://cdn.datatables.net/responsive/2.2.0/css/responsive.dataTables.min.css?ver=5.3.2" type="text/css" media="all" />
        <link rel="stylesheet" id="wpfront-notification-bar-css" href="https://www.ashevillenc.gov/wp-content/plugins/wpfront-notification-bar/css/wpfront-notification-bar.css?ver=1.7.1" type="text/css" media="all" />
        <link rel="stylesheet" id="bootstrap-style-css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" type="text/css" media="all" />
        <link rel="stylesheet" id="lindua-style-css" href="https://www.ashevillenc.gov/wp-content/themes/avl/css/lindua.css" type="text/css" media="all" />
        <link rel="stylesheet" id="icomoon-style-css" href="https://www.ashevillenc.gov/wp-content/themes/avl/css/icomoon.css" type="text/css" media="all" />
        <link rel="stylesheet" id="algolia-autocomplete-css" href="https://www.ashevillenc.gov/wp-content/plugins/search-by-algolia-instant-relevant-results/includes/../css/algolia-autocomplete.css?ver=2.11.3" type="text/css" media="screen" />
        <link rel="stylesheet" id="avl-style-css" href="https://www.ashevillenc.gov/wp-content/themes/avl/style.css?ver=1584663251" type="text/css" media="all" />
        <link rel="stylesheet" id="header-style-css" href="https://www.ashevillenc.gov/wp-admin/admin-ajax.php?action=get_header_style" type="text/css" media="all" />
        <link rel="stylesheet" id="fancybox-style-css" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" type="text/css" media="all" />
        <div>
          <TreePreservationCalculatorApp />
        </div>
      </div>
    )
  }
}
