/**
 * Update Typography Customizer settings live.
 *
 * @version 1.0.0
 */
// phpcs:ignoreFile
( function( $ ) {

	// Declare vars
	var api = wp.customize;

	/******** TYPOGRAPHY OPTIONS LOOP *********/
	api( "body_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var fontName = pair.split(",")[0];
					fontName = fontName.replace(/'/g, '');
				var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-body-font-family" );
				var fontSize = fontName.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
                if ( fontName in responsive.googleFonts ) {
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append('<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">');
                    }
                }
			}
			var $child = $( ".customizer-typography-body-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-font-family">body{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-font-weight">body{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-font-style">body{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-font-size">body{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-tablet-font-size">@media (max-width: 768px){body{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-mobile-font-size">@media (max-width: 480px){body{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-color">body{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-line-height">body{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-tablet-line-height">@media (max-width: 768px){body{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-mobile-line-height">@media (max-width: 480px){body{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-letter-spacing">body{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-tablet-letter-spacing">@media (max-width: 768px){body{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-mobile-letter-spacing">@media (max-width: 480px){body{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "body_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-body-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-body-text-transform">body{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var fontName = pair.split(",")[0];
					fontName = fontName.replace(/'/g, '');
				var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-heading_h1-font-family" );
				var fontSize = fontName.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
                if ( fontName in responsive.googleFonts ) {
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append('<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">');
                    }
                }
			}
			var $child = $( ".customizer-typography-heading_h1-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-font-family">h1{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-font-weight">h1{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-font-style">h1{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-font-size">h1{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-tablet-font-size">@media (max-width: 768px){h1{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-mobile-font-size">@media (max-width: 480px){h1{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-color">h1{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-line-height">h1{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-tablet-line-height">@media (max-width: 768px){h1{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-mobile-line-height">@media (max-width: 480px){h1{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-letter-spacing">h1{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-tablet-letter-spacing">@media (max-width: 768px){h1{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-mobile-letter-spacing">@media (max-width: 480px){h1{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h1_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h1-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h1-text-transform">h1{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var fontName = pair.split(",")[0];
					fontName = fontName.replace(/'/g, '');
				var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-heading_h2-font-family" );
				var fontSize = fontName.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
                if ( fontName in responsive.googleFonts ) {
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append('<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">');
                    }
                }
			}
			var $child = $( ".customizer-typography-heading_h2-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-font-family">h2{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-font-weight">h2{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-font-style">h2{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-font-size">h2{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-tablet-font-size">@media (max-width: 768px){h2{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-mobile-font-size">@media (max-width: 480px){h2{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-color">h2{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-line-height">h2{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-tablet-line-height">@media (max-width: 768px){h2{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-mobile-line-height">@media (max-width: 480px){h2{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-letter-spacing">h2{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-tablet-letter-spacing">@media (max-width: 768px){h2{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-mobile-letter-spacing">@media (max-width: 480px){h2{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h2_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h2-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h2-text-transform">h2{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var fontName = pair.split(",")[0];
					fontName = fontName.replace(/'/g, '');
				var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-heading_h3-font-family" );
				var fontSize = fontName.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
                if ( fontName in responsive.googleFonts ) {
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append('<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">');
                    }
                }
			}
			var $child = $( ".customizer-typography-heading_h3-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-font-family">h3{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-font-weight">h3{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-font-style">h3{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-font-size">h3{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-tablet-font-size">@media (max-width: 768px){h3{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-mobile-font-size">@media (max-width: 480px){h3{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-color">h3{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-line-height">h3{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-tablet-line-height">@media (max-width: 768px){h3{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-mobile-line-height">@media (max-width: 480px){h3{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-letter-spacing">h3{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-tablet-letter-spacing">@media (max-width: 768px){h3{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-mobile-letter-spacing">@media (max-width: 480px){h3{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h3_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h3-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h3-text-transform">h3{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var fontName = pair.split(",")[0];
					fontName = fontName.replace(/'/g, '');
				var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-heading_h4-font-family" );
				var fontSize = fontName.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
                if ( fontName in responsive.googleFonts ) {
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append('<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">');
                    }
                }
			}
			var $child = $( ".customizer-typography-heading_h4-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-font-family">h4{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-font-weight">h4{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-font-style">h4{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-font-size">h4{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-tablet-font-size">@media (max-width: 768px){h4{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-mobile-font-size">@media (max-width: 480px){h4{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-color">h4{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-line-height">h4{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-tablet-line-height">@media (max-width: 768px){h4{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-mobile-line-height">@media (max-width: 480px){h4{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-letter-spacing">h4{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-tablet-letter-spacing">@media (max-width: 768px){h4{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-mobile-letter-spacing">@media (max-width: 480px){h4{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h4_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h4-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h4-text-transform">h4{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ),api( "content_header_heading_typography[font-family]", function( $swipe ) {
	    $swipe.bind( function( pair ) {
	        if ( pair ) {
	            /** @type {string} */
	            var fontName = pair.split(",")[0];
	                fontName = fontName.replace(/'/g, '');
	            var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-content_header_heading-font-family" );
	            var fontSize = fontName.replace( " ", "%20" );
	            fontSize = fontSize.replace( ",", "%2C" );
	            /** @type {string} */
	            fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
                if ( fontName in responsive.googleFonts ) {
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append('<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">');
                    }
                }
	        }
	        var $child = $( ".customizer-typography-content_header_heading-font-family" );
	        if ( pair ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_heading-font-family">.site-content-header .page-header .page-title,.site-content-header .page-title{font-family: ' + pair + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_heading_typography[font-weight]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_heading-font-weight" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_heading-font-weight">.site-content-header .page-header .page-title,.site-content-header .page-title{font-weight: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_heading_typography[font-style]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_heading-font-style" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_heading-font-style">.site-content-header .page-header .page-title,.site-content-header .page-title{font-style: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_heading_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_heading-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_heading-font-size">.site-content-header .page-header .page-title,.site-content-header .page-title{font-size: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_heading_tablet_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_heading-tablet-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_heading-tablet-font-size">@media (max-width: 768px){.site-content-header .page-header .page-title,.site-content-header .page-title{font-size: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_heading_mobile_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_heading-mobile-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_heading-mobile-font-size">@media (max-width: 480px){.site-content-header .page-header .page-title,.site-content-header .page-title{font-size: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_heading_typography[color]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_heading-color" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_heading-color">.site-content-header .page-header .page-title,.site-content-header .page-title{color: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_heading_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_heading-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_heading-line-height">.site-content-header .page-header .page-title,.site-content-header .page-title{line-height: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_heading_tablet_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_heading-tablet-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_heading-tablet-line-height">@media (max-width: 768px){.site-content-header .page-header .page-title,.site-content-header .page-title{line-height: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_heading_mobile_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_heading-mobile-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_heading-mobile-line-height">@media (max-width: 480px){.site-content-header .page-header .page-title,.site-content-header .page-title{line-height: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_heading_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_heading-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_heading-letter-spacing">.site-content-header .page-header .page-title,.site-content-header .page-title{letter-spacing: ' + dataAndEvents + "px;}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_heading_tablet_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_heading-tablet-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_heading-tablet-letter-spacing">@media (max-width: 768px){.site-content-header .page-header .page-title,.site-content-header .page-title{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_heading_mobile_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_heading-mobile-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_heading-mobile-letter-spacing">@media (max-width: 480px){.site-content-header .page-header .page-title,.site-content-header .page-title{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_heading_typography[text-transform]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_heading-text-transform" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_heading-text-transform">.site-content-header .page-header .page-title,.site-content-header .page-title{text-transform: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ),api( "content_header_description_typography[font-family]", function( $swipe ) {
	    $swipe.bind( function( pair ) {
	        if ( pair ) {
	            /** @type {string} */
	            var fontName = pair.split(",")[0];
	                fontName = fontName.replace(/'/g, '');
	            var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-content_header_description-font-family" );
	            var fontSize = fontName.replace( " ", "%20" );
	            fontSize = fontSize.replace( ",", "%2C" );
	            /** @type {string} */
	            fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
                if ( fontName in responsive.googleFonts ) {
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append('<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">');
                    }
                }
	        }
	        var $child = $( ".customizer-typography-content_header_description-font-family" );
	        if ( pair ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_description-font-family">.site-content-header .page-header .page-description{font-family: ' + pair + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_description_typography[font-weight]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_description-font-weight" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_description-font-weight">.site-content-header .page-header .page-description{font-weight: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_description_typography[font-style]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_description-font-style" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_description-font-style">.site-content-header .page-header .page-description{font-style: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_description_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_description-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_description-font-size">.site-content-header .page-header .page-description{font-size: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_description_tablet_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_description-tablet-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_description-tablet-font-size">@media (max-width: 768px){.site-content-header .page-header .page-description{font-size: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_description_mobile_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_description-mobile-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_description-mobile-font-size">@media (max-width: 480px){.site-content-header .page-header .page-description{font-size: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_description_typography[color]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_description-color" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_description-color">.site-content-header .page-header .page-description{color: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_description_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_description-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_description-line-height">.site-content-header .page-header .page-description{line-height: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_description_tablet_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_description-tablet-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_description-tablet-line-height">@media (max-width: 768px){.site-content-header .page-header .page-description{line-height: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_description_mobile_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_description-mobile-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_description-mobile-line-height">@media (max-width: 480px){.site-content-header .page-header .page-description{line-height: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_description_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_description-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_description-letter-spacing">.site-content-header .page-header .page-description{letter-spacing: ' + dataAndEvents + "px;}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_description_tablet_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_description-tablet-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_description-tablet-letter-spacing">@media (max-width: 768px){.site-content-header .page-header .page-description{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_description_mobile_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_description-mobile-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_description-mobile-letter-spacing">@media (max-width: 480px){.site-content-header .page-header .page-description{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "content_header_description_typography[text-transform]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-content_header_description-text-transform" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-content_header_description-text-transform">.site-content-header .page-header .page-description{text-transform: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ),api( "breadcrumb_typography[font-family]", function( $swipe ) {
	    $swipe.bind( function( pair ) {
	        if ( pair ) {
	            /** @type {string} */
	            var fontName = pair.split(",")[0];
	                fontName = fontName.replace(/'/g, '');
	            var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-breadcrumb-font-family" );
	            var fontSize = fontName.replace( " ", "%20" );
	            fontSize = fontSize.replace( ",", "%2C" );
	            /** @type {string} */
	            fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
                if ( fontName in responsive.googleFonts ) {
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append('<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">');
                    }
                }
	        }
	        var $child = $( ".customizer-typography-breadcrumb-font-family" );
	        if ( pair ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-breadcrumb-font-family">.site-content-header .breadcrumb-list,.woocommerce .woocommerce-breadcrumb{font-family: ' + pair + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "breadcrumb_typography[font-weight]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-breadcrumb-font-weight" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-breadcrumb-font-weight">.site-content-header .breadcrumb-list,.woocommerce .woocommerce-breadcrumb{font-weight: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "breadcrumb_typography[font-style]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-breadcrumb-font-style" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-breadcrumb-font-style">.site-content-header .breadcrumb-list,.woocommerce .woocommerce-breadcrumb{font-style: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "breadcrumb_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-breadcrumb-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-breadcrumb-font-size">.site-content-header .breadcrumb-list,.woocommerce .woocommerce-breadcrumb{font-size: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "breadcrumb_tablet_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-breadcrumb-tablet-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-breadcrumb-tablet-font-size">@media (max-width: 768px){.site-content-header .breadcrumb-list,.woocommerce .woocommerce-breadcrumb{font-size: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "breadcrumb_mobile_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-breadcrumb-mobile-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-breadcrumb-mobile-font-size">@media (max-width: 480px){.site-content-header .breadcrumb-list,.woocommerce .woocommerce-breadcrumb{font-size: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "breadcrumb_typography[color]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-breadcrumb-color" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-breadcrumb-color">.site-content-header .breadcrumb-list,.woocommerce .woocommerce-breadcrumb{color: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "breadcrumb_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-breadcrumb-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-breadcrumb-line-height">.site-content-header .breadcrumb-list,.woocommerce .woocommerce-breadcrumb{line-height: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "breadcrumb_tablet_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-breadcrumb-tablet-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-breadcrumb-tablet-line-height">@media (max-width: 768px){.site-content-header .breadcrumb-list,.woocommerce .woocommerce-breadcrumb{line-height: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "breadcrumb_mobile_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-breadcrumb-mobile-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-breadcrumb-mobile-line-height">@media (max-width: 480px){.site-content-header .breadcrumb-list,.woocommerce .woocommerce-breadcrumb{line-height: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "breadcrumb_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-breadcrumb-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-breadcrumb-letter-spacing">.site-content-header .breadcrumb-list,.woocommerce .woocommerce-breadcrumb{letter-spacing: ' + dataAndEvents + "px;}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "breadcrumb_tablet_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-breadcrumb-tablet-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-breadcrumb-tablet-letter-spacing">@media (max-width: 768px){.site-content-header .breadcrumb-list,.woocommerce .woocommerce-breadcrumb{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "breadcrumb_mobile_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-breadcrumb-mobile-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-breadcrumb-mobile-letter-spacing">@media (max-width: 480px){.site-content-header .breadcrumb-list,.woocommerce .woocommerce-breadcrumb{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "breadcrumb_typography[text-transform]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-breadcrumb-text-transform" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-breadcrumb-text-transform">.site-content-header .breadcrumb-list,.woocommerce .woocommerce-breadcrumb{text-transform: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ),
	api( "footer_typography[font-family]", function( $swipe ) {
	    $swipe.bind( function( pair ) {
	        if ( pair ) {
	            /** @type {string} */
	            var fontName = pair.split(",")[0];
	                fontName = fontName.replace(/'/g, '');
	            var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customize-control-footer_typography-font-family" );
	            var fontSize = fontName.replace( " ", "%20" );
	            fontSize = fontSize.replace( ",", "%2C" );
	            /** @type {string} */
	            fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
                if ( fontName in responsive.googleFonts ) {
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append('<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">');
                    }
                }
	        }
	        var $child = $( ".customize-control-footer_typography-font-family" );
	        if ( pair ) {
	            /** @type {string} */
	            var img = '<style class="customize-control-footer_typography-font-family">.site-footer {font-family: ' + pair + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "footer_typography[font-weight]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customize-control-footer_typography-font-weight" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customize-control-footer_typography-font-weight">.site-footer {font-weight: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "footer_typography[font-style]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customize-control-footer_typography-font-style" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customize-control-footer_typography-font-style">.site-footer {font-style: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "footer_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customize-control-footer_typography-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customize-control-footer_typography-font-size">.site-footer {font-size: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "footer_tablet_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customize-control-footer_typography-tablet-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customize-control-footer_typography-tablet-font-size">@media (max-width: 768px){.site-footer {font-size: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "footer_mobile_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customize-control-footer_typography-mobile-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customize-control-footer_typography-mobile-font-size">@media (max-width: 480px){.site-footer {font-size: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "footer_typography[color]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customize-control-footer_typography-color" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customize-control-footer_typography-color">.site-footer {color: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "footer_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customize-control-footer_typography-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customize-control-footer_typography-line-height">.site-footer {line-height: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "footer_tablet_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customize-control-footer_typography-tablet-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customize-control-footer_typography-tablet-line-height">@media (max-width: 768px){.site-footer {line-height: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "footer_mobile_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customize-control-footer_typography-mobile-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customize-control-footer_typography-mobile-line-height">@media (max-width: 480px){.site-footer {line-height: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "footer_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customize-control-footer_typography-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customize-control-footer_typography-letter-spacing">.site-footer {letter-spacing: ' + dataAndEvents + "px;}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "footer_tablet_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customize-control-footer_typography-tablet-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customize-control-footer_typography-tablet-letter-spacing">@media (max-width: 768px){.site-footer {letter-spacing: ' + dataAndEvents + "px;}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "footer_mobile_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customize-control-footer_typography-mobile-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customize-control-footer_typography-mobile-letter-spacing">@media (max-width: 480px){.site-footer {letter-spacing: ' + dataAndEvents + "px;}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "footer_typography[text-transform]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customize-control-footer_typography-text-transform" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customize-control-footer_typography-text-transform">.site-footer {text-transform: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ),
	api( "header_menu_typography[font-family]", function( $swipe ) {
	   $swipe.bind( function( pair ) {
	       if ( pair ) {
	           /** @type {string} */
	           var fontName = pair.split(",")[0];
	               fontName = fontName.replace(/'/g, '');
	           var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customize-control-header_menu_typography-font-family" );
	           var fontSize = fontName.replace( " ", "%20" );
	           fontSize = fontSize.replace( ",", "%2C" );
	           /** @type {string} */
	           fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
               if ( fontName in responsive.googleFonts ) {
                   if ($("#" + idfirst).length) {
                       $("#" + idfirst).attr("href", fontSize);
                   } else {
                       $("head").append('<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">');
                   }
               }
	       }
	       var $child = $( ".customize-control-header_menu_typography-font-family" );
	       if ( pair ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-header_menu_typography-font-family">.main-navigation a{font-family: ' + pair + ";}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "header_menu_typography[font-weight]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-header_menu_typography-font-weight" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-header_menu_typography-font-weight">.main-navigation a{font-weight: ' + dataAndEvents + ";}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "header_menu_typography[font-style]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-header_menu_typography-font-style" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-header_menu_typography-font-style">.main-navigation a{font-style: ' + dataAndEvents + ";}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "header_menu_typography[font-size]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-header_menu_typography-font-size" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-header_menu_typography-font-size">.main-navigation a{font-size: ' + dataAndEvents + ";}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "header_menu_typography[font-size]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-header_menu_typography-tablet-font-size" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-header_menu_typography-tablet-font-size">@media (max-width: 768px){.main-navigation a{font-size: ' + dataAndEvents + ";}}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "heading_h1_mobile_typography[font-size]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-header_menu_typography-mobile-font-size" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-header_menu_typography-mobile-font-size">@media (max-width: 480px){.main-navigation a{font-size: ' + dataAndEvents + ";}}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "header_menu_typography[color]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-header_menu_typography-color" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-header_menu_typography-color">.main-navigation a{color: ' + dataAndEvents + ";}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "header_menu_typography[line-height]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-header_menu_typography-line-height" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-header_menu_typography-line-height">.main-navigation a{line-height: ' + dataAndEvents + ";}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "header_menu_typography[line-height]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-header_menu_typography-tablet-line-height" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-header_menu_typography-tablet-line-height">@media (max-width: 768px){.main-navigation a{line-height: ' + dataAndEvents + ";}}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "heading_h1_mobile_typography[line-height]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-header_menu_typography-mobile-line-height" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-header_menu_typography-mobile-line-height">@media (max-width: 480px){.main-navigation a{line-height: ' + dataAndEvents + ";}}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "header_menu_typography[letter-spacing]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-header_menu_typography-letter-spacing" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-header_menu_typography-letter-spacing">.main-navigation a{letter-spacing: ' + dataAndEvents + "px;}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "header_menu_typography[letter-spacing]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-header_menu_typography-tablet-letter-spacing" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-header_menu_typography-tablet-letter-spacing">@media (max-width: 768px){.main-navigation a{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "heading_h1_mobile_typography[letter-spacing]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-header_menu_typography-mobile-letter-spacing" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-header_menu_typography-mobile-letter-spacing">@media (max-width: 480px){.main-navigation a{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "header_menu_typography[text-transform]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-header_menu_typography-text-transform" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-header_menu_typography-text-transform">.main-navigation a{text-transform: ' + dataAndEvents + ";}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ),api( "sidebar_typography[font-family]", function( $swipe ) {
	   $swipe.bind( function( pair ) {
	       if ( pair ) {
	           /** @type {string} */
	           var fontName = pair.split(",")[0];
	               fontName = fontName.replace(/'/g, '');
	           var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customize-control-sidebar_typography-font-family" );
	           var fontSize = fontName.replace( " ", "%20" );
	           fontSize = fontSize.replace( ",", "%2C" );
	           /** @type {string} */
	           fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
               if ( fontName in responsive.googleFonts ) {
                   if ($("#" + idfirst).length) {
                       $("#" + idfirst).attr("href", fontSize);
                   } else {
                       $("head").append('<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">');
                   }
               }
	       }
	       var $child = $( ".customize-control-sidebar_typography-font-family" );
	       if ( pair ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-sidebar_typography-font-family">.site-content .widget-area:not(.home-widgets) .widget-wrapper {font-family: ' + pair + ";}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "sidebar_typography[font-weight]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-sidebar_typography-font-weight" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-sidebar_typography-font-weight">.site-content .widget-area:not(.home-widgets) .widget-wrapper {font-weight: ' + dataAndEvents + ";}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "sidebar_typography[font-style]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-sidebar_typography-font-style" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-sidebar_typography-font-style">.site-content .widget-area:not(.home-widgets) .widget-wrapper {font-style: ' + dataAndEvents + ";}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "sidebar_typography[font-size]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-sidebar_typography-font-size" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-sidebar_typography-font-size">.site-content .widget-area:not(.home-widgets) .widget-wrapper {font-size: ' + dataAndEvents + ";}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "sidebar_typography[font-size]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-sidebar_typography-tablet-font-size" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-sidebar_typography-tablet-font-size">@media (max-width: 768px){.site-content .widget-area:not(.home-widgets) .widget-wrapper {font-size: ' + dataAndEvents + ";}}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "heading_h1_mobile_typography[font-size]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-sidebar_typography-mobile-font-size" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-sidebar_typography-mobile-font-size">@media (max-width: 480px){.site-content .widget-area:not(.home-widgets) .widget-wrapper {font-size: ' + dataAndEvents + ";}}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "sidebar_typography[color]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-sidebar_typography-color" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-sidebar_typography-color">.site-content .widget-area:not(.home-widgets) .widget-wrapper {color: ' + dataAndEvents + ";}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "sidebar_typography[line-height]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-sidebar_typography-line-height" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-sidebar_typography-line-height">.site-content .widget-area:not(.home-widgets) .widget-wrapper {line-height: ' + dataAndEvents + ";}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "sidebar_typography[line-height]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-sidebar_typography-tablet-line-height" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-sidebar_typography-tablet-line-height">@media (max-width: 768px){.site-content .widget-area:not(.home-widgets) .widget-wrapper {line-height: ' + dataAndEvents + ";}}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "heading_h1_mobile_typography[line-height]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-sidebar_typography-mobile-line-height" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-sidebar_typography-mobile-line-height">@media (max-width: 480px){.site-content .widget-area:not(.home-widgets) .widget-wrapper {line-height: ' + dataAndEvents + ";}}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "sidebar_typography[letter-spacing]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-sidebar_typography-letter-spacing" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-sidebar_typography-letter-spacing">.site-content .widget-area:not(.home-widgets) .widget-wrapper {letter-spacing: ' + dataAndEvents + "px;}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "sidebar_typography[letter-spacing]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-sidebar_typography-tablet-letter-spacing" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-sidebar_typography-tablet-letter-spacing">@media (max-width: 768px){.site-content .widget-area:not(.home-widgets) .widget-wrapper {letter-spacing: ' + dataAndEvents + "px;}}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "heading_h1_mobile_typography[letter-spacing]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-sidebar_typography-mobile-letter-spacing" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-sidebar_typography-mobile-letter-spacing">@media (max-width: 480px){.site-content .widget-area:not(.home-widgets) .widget-wrapper {letter-spacing: ' + dataAndEvents + "px;}}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "sidebar_typography[text-transform]", function( $swipe ) {
	   $swipe.bind( function( dataAndEvents ) {
	       var $child = $( ".customize-control-sidebar_typography-text-transform" );
	       if ( dataAndEvents ) {
	           /** @type {string} */
	           var img = '<style class="customize-control-sidebar_typography-text-transform">.site-content .widget-area:not(.home-widgets) .widget-wrapper {text-transform: ' + dataAndEvents + ";}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "page_subheading_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var fontName = pair.split(",")[0];
					fontName = fontName.replace(/'/g, '');
				var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-page_subheading-font-family" );
				var fontSize = fontName.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
                if ( fontName in responsive.googleFonts ) {
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append('<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">');
                    }
                }
			}
			var $child = $( ".customizer-typography-page_subheading-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-font-family">.page-header .page-subheading{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-font-weight">.page-header .page-subheading{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-font-style">.page-header .page-subheading{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-font-size">.page-header .page-subheading{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-tablet-font-size">@media (max-width: 768px){.page-header .page-subheading{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-mobile-font-size">@media (max-width: 480px){.page-header .page-subheading{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-color">.page-header .page-subheading{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-line-height">.page-header .page-subheading{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-tablet-line-height">@media (max-width: 768px){.page-header .page-subheading{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-mobile-line-height">@media (max-width: 480px){.page-header .page-subheading{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-letter-spacing">.page-header .page-subheading{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-tablet-letter-spacing">@media (max-width: 768px){.page-header .page-subheading{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-mobile-letter-spacing">@media (max-width: 480px){.page-header .page-subheading{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "page_subheading_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-page_subheading-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-page_subheading-text-transform">.page-header .page-subheading{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var idfirst = ( pair.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-breadcrumbs-font-family" );
				var fontSize = pair.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = responsive.googleFontsUrl + "/css?family=" + pair + ":" + responsive.googleFontsWeight;
                if ( fontName in responsive.googleFonts ) {
                    if ($("#" + idfirst).length) {
                        $("#" + idfirst).attr("href", fontSize);
                    } else {
                        $("head").append('<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">');
                    }
                }
			}
			var $child = $( ".customizer-typography-breadcrumbs-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-font-family">.site-breadcrumbs{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-font-weight">.site-breadcrumbs{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-font-style">.site-breadcrumbs{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-font-size">.site-breadcrumbs{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-tablet-font-size">@media (max-width: 768px){.site-breadcrumbs{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-mobile-font-size">@media (max-width: 480px){.site-breadcrumbs{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-color">.site-breadcrumbs{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-line-height">.site-breadcrumbs{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-tablet-line-height">@media (max-width: 768px){.site-breadcrumbs{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-mobile-line-height">@media (max-width: 480px){.site-breadcrumbs{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-letter-spacing">.site-breadcrumbs{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-tablet-letter-spacing">@media (max-width: 768px){.site-breadcrumbs{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-mobile-letter-spacing">@media (max-width: 480px){.site-breadcrumbs{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "breadcrumbs_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-breadcrumbs-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-breadcrumbs-text-transform">.site-breadcrumbs{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ),
	api( "meta_typography[font-family]", function( $swipe ) {
	    $swipe.bind( function( pair ) {
	        if ( pair ) {
	            /** @type {string} */
	            var fontName = pair.split(",")[0];
	                fontName = fontName.replace(/'/g, '');
	            var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-meta-font-family" );
	            var fontSize = fontName.replace( " ", "%20" );
	            fontSize = fontSize.replace( ",", "%2C" );
	            /** @type {string} */
	            fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
                if ( fontName in responsive.googleFonts ) {
                	if ( $( "#" + idfirst ).length ) {
                        $( "#" + idfirst ).attr( "href", fontSize );
                    } else {
                        $( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
                    }
                }
	        }
	        var $child = $( ".customizer-typography-meta-font-family" );
	        if ( pair ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-meta-font-family">.hentry .post-data,.post-meta *{font-family: ' + pair + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "meta_typography[font-weight]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-meta-font-weight" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-meta-font-weight">.hentry .post-data,.post-meta *{font-weight: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "meta_typography[font-style]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-meta-font-style" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-meta-font-style">.hentry .post-data,.post-meta *{font-style: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "meta_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-meta-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-meta-font-size">.hentry .post-data,.post-meta *{font-size: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "meta_tablet_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-meta-tablet-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-meta-tablet-font-size">@media (max-width: 768px){.hentry .post-data,.post-meta *{font-size: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "meta_mobile_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-meta-mobile-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-meta-mobile-font-size">@media (max-width: 480px){.hentry .post-data,.post-meta *{font-size: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "meta_typography[color]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-meta-color" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-meta-color">.hentry .post-data,.post-meta *{color: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "meta_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-meta-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-meta-line-height">.hentry .post-data,.post-meta *{line-height: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "meta_tablet_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-meta-tablet-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-meta-tablet-line-height">@media (max-width: 768px){.hentry .post-data,.post-meta *{line-height: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "meta_mobile_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-meta-mobile-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-meta-mobile-line-height">@media (max-width: 480px){.hentry .post-data,.post-meta *{line-height: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "meta_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-meta-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-meta-letter-spacing">.hentry .post-data,.post-meta *{letter-spacing: ' + dataAndEvents + "px;}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "meta_tablet_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-meta-tablet-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-meta-tablet-letter-spacing">@media (max-width: 768px){.hentry .post-data,.post-meta *{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "meta_mobile_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-meta-mobile-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-meta-mobile-letter-spacing">@media (max-width: 480px){.hentry .post-data,.post-meta *{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "meta_typography[text-transform]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-meta-text-transform" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-meta-text-transform">.hentry .post-data,.post-meta *{text-transform: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ),api( "button_typography[font-family]", function( $swipe ) {
	    $swipe.bind( function( pair ) {
	        if ( pair ) {
	            /** @type {string} */
	            var fontName = pair.split(",")[0];
	                fontName = fontName.replace(/'/g, '');
	            var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-button-font-family" );
	            var fontSize = fontName.replace( " ", "%20" );
	            fontSize = fontSize.replace( ",", "%2C" );
	            /** @type {string} */
	            fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
                if ( fontName in responsive.googleFonts ) {
                	if ( $( "#" + idfirst ).length ) {
                        $( "#" + idfirst ).attr( "href", fontSize );
                    } else {
                        $( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
                    }
                }
	        }
	        var $child = $( ".customizer-typography-button-font-family" );
	        if ( pair ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-button-font-family">.read-more-button .hentry .read-more .more-link,input[type=button],input[type=submit],button,.button,.wp-block-button__link,div.wpforms-container-full .wpforms-form input[type=submit],div.wpforms-container-full .wpforms-form button[type=submit],div.wpforms-container-full .wpforms-form .wpforms-page-button,.page.woocommerce-cart .woocommerce a.button.alt,.page.woocommerce-cart .woocommerce a.button, .woocommerce-cart .woocommerce a.button.alt,.woocommerce-cart .woocommerce a.button,.woocommerce button.button,.wp-block-button__link{font-family: ' + pair + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "button_typography[font-weight]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-button-font-weight" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-button-font-weight">.read-more-button .hentry .read-more .more-link,input[type=button],input[type=submit],button,.button,.wp-block-button__link,div.wpforms-container-full .wpforms-form input[type=submit],div.wpforms-container-full .wpforms-form button[type=submit],div.wpforms-container-full .wpforms-form .wpforms-page-button,.page.woocommerce-cart .woocommerce a.button.alt,.page.woocommerce-cart .woocommerce a.button, .woocommerce-cart .woocommerce a.button.alt,.woocommerce-cart .woocommerce a.button,.woocommerce button.button,.wp-block-button__link{font-weight: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "button_typography[font-style]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-button-font-style" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-button-font-style">.read-more-button .hentry .read-more .more-link,input[type=button],input[type=submit],button,.button,.wp-block-button__link,div.wpforms-container-full .wpforms-form input[type=submit],div.wpforms-container-full .wpforms-form button[type=submit],div.wpforms-container-full .wpforms-form .wpforms-page-button,.page.woocommerce-cart .woocommerce a.button.alt,.page.woocommerce-cart .woocommerce a.button, .woocommerce-cart .woocommerce a.button.alt,.woocommerce-cart .woocommerce a.button,.woocommerce button.button,.wp-block-button__link{font-style: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "button_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-button-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-button-font-size">.read-more-button .hentry .read-more .more-link,input[type=button],input[type=submit],button,.button,.wp-block-button__link,div.wpforms-container-full .wpforms-form input[type=submit],div.wpforms-container-full .wpforms-form button[type=submit],div.wpforms-container-full .wpforms-form .wpforms-page-button,.page.woocommerce-cart .woocommerce a.button.alt,.page.woocommerce-cart .woocommerce a.button, .woocommerce-cart .woocommerce a.button.alt,.woocommerce-cart .woocommerce a.button,.woocommerce button.button,.wp-block-button__link{font-size: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "button_tablet_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-button-tablet-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-button-tablet-font-size">@media (max-width: 768px){.read-more-button .hentry .read-more .more-link,input[type=button],input[type=submit],button,.button,.wp-block-button__link,div.wpforms-container-full .wpforms-form input[type=submit],div.wpforms-container-full .wpforms-form button[type=submit],div.wpforms-container-full .wpforms-form .wpforms-page-button,.page.woocommerce-cart .woocommerce a.button.alt,.page.woocommerce-cart .woocommerce a.button, .woocommerce-cart .woocommerce a.button.alt,.woocommerce-cart .woocommerce a.button,.woocommerce button.button,.wp-block-button__link{font-size: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "button_mobile_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-button-mobile-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-button-mobile-font-size">@media (max-width: 480px){.read-more-button .hentry .read-more .more-link,input[type=button],input[type=submit],button,.button,.wp-block-button__link,div.wpforms-container-full .wpforms-form input[type=submit],div.wpforms-container-full .wpforms-form button[type=submit],div.wpforms-container-full .wpforms-form .wpforms-page-button,.page.woocommerce-cart .woocommerce a.button.alt,.page.woocommerce-cart .woocommerce a.button, .woocommerce-cart .woocommerce a.button.alt,.woocommerce-cart .woocommerce a.button,.woocommerce button.button,.wp-block-button__link{font-size: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "button_typography[color]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-button-color" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-button-color">.read-more-button .hentry .read-more .more-link,input[type=button],input[type=submit],button,.button,.wp-block-button__link,div.wpforms-container-full .wpforms-form input[type=submit],div.wpforms-container-full .wpforms-form button[type=submit],div.wpforms-container-full .wpforms-form .wpforms-page-button,.page.woocommerce-cart .woocommerce a.button.alt,.page.woocommerce-cart .woocommerce a.button, .woocommerce-cart .woocommerce a.button.alt,.woocommerce-cart .woocommerce a.button,.woocommerce button.button,.wp-block-button__link{color: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "button_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-button-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-button-line-height">.read-more-button .hentry .read-more .more-link,input[type=button],input[type=submit],button,.button,.wp-block-button__link,div.wpforms-container-full .wpforms-form input[type=submit],div.wpforms-container-full .wpforms-form button[type=submit],div.wpforms-container-full .wpforms-form .wpforms-page-button,.page.woocommerce-cart .woocommerce a.button.alt,.page.woocommerce-cart .woocommerce a.button, .woocommerce-cart .woocommerce a.button.alt,.woocommerce-cart .woocommerce a.button,.woocommerce button.button,.wp-block-button__link{line-height: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "button_tablet_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-button-tablet-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-button-tablet-line-height">@media (max-width: 768px){.read-more-button .hentry .read-more .more-link,input[type=button],input[type=submit],button,.button,.wp-block-button__link,div.wpforms-container-full .wpforms-form input[type=submit],div.wpforms-container-full .wpforms-form button[type=submit],div.wpforms-container-full .wpforms-form .wpforms-page-button,.page.woocommerce-cart .woocommerce a.button.alt,.page.woocommerce-cart .woocommerce a.button, .woocommerce-cart .woocommerce a.button.alt,.woocommerce-cart .woocommerce a.button,.woocommerce button.button,.wp-block-button__link{line-height: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "button_mobile_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-button-mobile-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-button-mobile-line-height">@media (max-width: 480px){.read-more-button .hentry .read-more .more-link,input[type=button],input[type=submit],button,.button,.wp-block-button__link,div.wpforms-container-full .wpforms-form input[type=submit],div.wpforms-container-full .wpforms-form button[type=submit],div.wpforms-container-full .wpforms-form .wpforms-page-button,.page.woocommerce-cart .woocommerce a.button.alt,.page.woocommerce-cart .woocommerce a.button, .woocommerce-cart .woocommerce a.button.alt,.woocommerce-cart .woocommerce a.button,.woocommerce button.button,.wp-block-button__link{line-height: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "button_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-button-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-button-letter-spacing">.read-more-button .hentry .read-more .more-link,input[type=button],input[type=submit],button,.button,.wp-block-button__link,div.wpforms-container-full .wpforms-form input[type=submit],div.wpforms-container-full .wpforms-form button[type=submit],div.wpforms-container-full .wpforms-form .wpforms-page-button,.page.woocommerce-cart .woocommerce a.button.alt,.page.woocommerce-cart .woocommerce a.button, .woocommerce-cart .woocommerce a.button.alt,.woocommerce-cart .woocommerce a.button,.woocommerce button.button,.wp-block-button__link{letter-spacing: ' + dataAndEvents + "px;}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "button_tablet_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-button-tablet-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-button-tablet-letter-spacing">@media (max-width: 768px){.read-more-button .hentry .read-more .more-link,input[type=button],input[type=submit],button,.button,.wp-block-button__link,div.wpforms-container-full .wpforms-form input[type=submit],div.wpforms-container-full .wpforms-form button[type=submit],div.wpforms-container-full .wpforms-form .wpforms-page-button,.page.woocommerce-cart .woocommerce a.button.alt,.page.woocommerce-cart .woocommerce a.button, .woocommerce-cart .woocommerce a.button.alt,.woocommerce-cart .woocommerce a.button,.woocommerce button.button,.wp-block-button__link{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "button_mobile_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-button-mobile-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-button-mobile-letter-spacing">@media (max-width: 480px){.read-more-button .hentry .read-more .more-link,input[type=button],input[type=submit],button,.button,.wp-block-button__link,div.wpforms-container-full .wpforms-form input[type=submit],div.wpforms-container-full .wpforms-form button[type=submit],div.wpforms-container-full .wpforms-form .wpforms-page-button,.page.woocommerce-cart .woocommerce a.button.alt,.page.woocommerce-cart .woocommerce a.button, .woocommerce-cart .woocommerce a.button.alt,.woocommerce-cart .woocommerce a.button,.woocommerce button.button,.wp-block-button__link{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "button_typography[text-transform]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-button-text-transform" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-button-text-transform">.read-more-button .hentry .read-more .more-link,input[type=button],input[type=submit],button,.button,.wp-block-button__link,div.wpforms-container-full .wpforms-form input[type=submit],div.wpforms-container-full .wpforms-form button[type=submit],div.wpforms-container-full .wpforms-form .wpforms-page-button,.page.woocommerce-cart .woocommerce a.button.alt,.page.woocommerce-cart .woocommerce a.button, .woocommerce-cart .woocommerce a.button.alt,.woocommerce-cart .woocommerce a.button,.woocommerce button.button,.wp-block-button__link{text-transform: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "input_typography[font-family]", function( $swipe ) {
	    $swipe.bind( function( pair ) {
	        if ( pair ) {
	            /** @type {string} */
	            var fontName = pair.split(",")[0];
	                fontName = fontName.replace(/'/g, '');
	            var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-input-font-family" );
	            var fontSize = fontName.replace( " ", "%20" );
	            fontSize = fontSize.replace( ",", "%2C" );
	            /** @type {string} */
	            fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
                if ( fontName in responsive.googleFonts ) {
                	if ( $( "#" + idfirst ).length ) {
                        $( "#" + idfirst ).attr( "href", fontSize );
                    } else {
                        $( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
                    }
                }
	        }
	        var $child = $( ".customizer-typography-input-font-family" );
	        if ( pair ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-input-font-family">select,textarea,input[type=tel],input[type=email],input[type=number],input[type=search],input[type=text],input[type=date],input[type=datetime],input[type=datetime-local],input[type=month],input[type=password],input[type=range],input[type=time],input[type=url],input[type=week],div.wpforms-container-full .wpforms-form input[type=date],div.wpforms-container-full .wpforms-form input[type=datetime],div.wpforms-container-full .wpforms-form input[type=datetime-local],div.wpforms-container-full .wpforms-form input[type=email],div.wpforms-container-full .wpforms-form input[type=month],div.wpforms-container-full .wpforms-form input[type=number],div.wpforms-container-full .wpforms-form input[type=password],div.wpforms-container-full .wpforms-form input[type=range],div.wpforms-container-full .wpforms-form input[type=search],div.wpforms-container-full .wpforms-form input[type=tel],div.wpforms-container-full .wpforms-form input[type=text],div.wpforms-container-full .wpforms-form input[type=time],div.wpforms-container-full .wpforms-form input[type=url],div.wpforms-container-full .wpforms-form input[type=week],div.wpforms-container-full .wpforms-form select,div.wpforms-container-full .wpforms-form textarea{font-family: ' + pair + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "input_typography[font-weight]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-input-font-weight" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-input-font-weight">select,textarea,input[type=tel],input[type=email],input[type=number],input[type=search],input[type=text],input[type=date],input[type=datetime],input[type=datetime-local],input[type=month],input[type=password],input[type=range],input[type=time],input[type=url],input[type=week],div.wpforms-container-full .wpforms-form input[type=date],div.wpforms-container-full .wpforms-form input[type=datetime],div.wpforms-container-full .wpforms-form input[type=datetime-local],div.wpforms-container-full .wpforms-form input[type=email],div.wpforms-container-full .wpforms-form input[type=month],div.wpforms-container-full .wpforms-form input[type=number],div.wpforms-container-full .wpforms-form input[type=password],div.wpforms-container-full .wpforms-form input[type=range],div.wpforms-container-full .wpforms-form input[type=search],div.wpforms-container-full .wpforms-form input[type=tel],div.wpforms-container-full .wpforms-form input[type=text],div.wpforms-container-full .wpforms-form input[type=time],div.wpforms-container-full .wpforms-form input[type=url],div.wpforms-container-full .wpforms-form input[type=week],div.wpforms-container-full .wpforms-form select,div.wpforms-container-full .wpforms-form textarea{font-weight: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "input_typography[font-style]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-input-font-style" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-input-font-style">select,textarea,input[type=tel],input[type=email],input[type=number],input[type=search],input[type=text],input[type=date],input[type=datetime],input[type=datetime-local],input[type=month],input[type=password],input[type=range],input[type=time],input[type=url],input[type=week],div.wpforms-container-full .wpforms-form input[type=date],div.wpforms-container-full .wpforms-form input[type=datetime],div.wpforms-container-full .wpforms-form input[type=datetime-local],div.wpforms-container-full .wpforms-form input[type=email],div.wpforms-container-full .wpforms-form input[type=month],div.wpforms-container-full .wpforms-form input[type=number],div.wpforms-container-full .wpforms-form input[type=password],div.wpforms-container-full .wpforms-form input[type=range],div.wpforms-container-full .wpforms-form input[type=search],div.wpforms-container-full .wpforms-form input[type=tel],div.wpforms-container-full .wpforms-form input[type=text],div.wpforms-container-full .wpforms-form input[type=time],div.wpforms-container-full .wpforms-form input[type=url],div.wpforms-container-full .wpforms-form input[type=week],div.wpforms-container-full .wpforms-form select,div.wpforms-container-full .wpforms-form textarea{font-style: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "input_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-input-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-input-font-size">select,textarea,input[type=tel],input[type=email],input[type=number],input[type=search],input[type=text],input[type=date],input[type=datetime],input[type=datetime-local],input[type=month],input[type=password],input[type=range],input[type=time],input[type=url],input[type=week],div.wpforms-container-full .wpforms-form input[type=date],div.wpforms-container-full .wpforms-form input[type=datetime],div.wpforms-container-full .wpforms-form input[type=datetime-local],div.wpforms-container-full .wpforms-form input[type=email],div.wpforms-container-full .wpforms-form input[type=month],div.wpforms-container-full .wpforms-form input[type=number],div.wpforms-container-full .wpforms-form input[type=password],div.wpforms-container-full .wpforms-form input[type=range],div.wpforms-container-full .wpforms-form input[type=search],div.wpforms-container-full .wpforms-form input[type=tel],div.wpforms-container-full .wpforms-form input[type=text],div.wpforms-container-full .wpforms-form input[type=time],div.wpforms-container-full .wpforms-form input[type=url],div.wpforms-container-full .wpforms-form input[type=week],div.wpforms-container-full .wpforms-form select,div.wpforms-container-full .wpforms-form textarea{font-size: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "input_tablet_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-input-tablet-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-input-tablet-font-size">@media (max-width: 768px){select,textarea,input[type=tel],input[type=email],input[type=number],input[type=search],input[type=text],input[type=date],input[type=datetime],input[type=datetime-local],input[type=month],input[type=password],input[type=range],input[type=time],input[type=url],input[type=week],div.wpforms-container-full .wpforms-form input[type=date],div.wpforms-container-full .wpforms-form input[type=datetime],div.wpforms-container-full .wpforms-form input[type=datetime-local],div.wpforms-container-full .wpforms-form input[type=email],div.wpforms-container-full .wpforms-form input[type=month],div.wpforms-container-full .wpforms-form input[type=number],div.wpforms-container-full .wpforms-form input[type=password],div.wpforms-container-full .wpforms-form input[type=range],div.wpforms-container-full .wpforms-form input[type=search],div.wpforms-container-full .wpforms-form input[type=tel],div.wpforms-container-full .wpforms-form input[type=text],div.wpforms-container-full .wpforms-form input[type=time],div.wpforms-container-full .wpforms-form input[type=url],div.wpforms-container-full .wpforms-form input[type=week],div.wpforms-container-full .wpforms-form select,div.wpforms-container-full .wpforms-form textarea{font-size: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "input_mobile_typography[font-size]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-input-mobile-font-size" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-input-mobile-font-size">@media (max-width: 480px){select,textarea,input[type=tel],input[type=email],input[type=number],input[type=search],input[type=text],input[type=date],input[type=datetime],input[type=datetime-local],input[type=month],input[type=password],input[type=range],input[type=time],input[type=url],input[type=week],div.wpforms-container-full .wpforms-form input[type=date],div.wpforms-container-full .wpforms-form input[type=datetime],div.wpforms-container-full .wpforms-form input[type=datetime-local],div.wpforms-container-full .wpforms-form input[type=email],div.wpforms-container-full .wpforms-form input[type=month],div.wpforms-container-full .wpforms-form input[type=number],div.wpforms-container-full .wpforms-form input[type=password],div.wpforms-container-full .wpforms-form input[type=range],div.wpforms-container-full .wpforms-form input[type=search],div.wpforms-container-full .wpforms-form input[type=tel],div.wpforms-container-full .wpforms-form input[type=text],div.wpforms-container-full .wpforms-form input[type=time],div.wpforms-container-full .wpforms-form input[type=url],div.wpforms-container-full .wpforms-form input[type=week],div.wpforms-container-full .wpforms-form select,div.wpforms-container-full .wpforms-form textarea{font-size: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "input_typography[color]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-input-color" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-input-color">select,textarea,input[type=tel],input[type=email],input[type=number],input[type=search],input[type=text],input[type=date],input[type=datetime],input[type=datetime-local],input[type=month],input[type=password],input[type=range],input[type=time],input[type=url],input[type=week],div.wpforms-container-full .wpforms-form input[type=date],div.wpforms-container-full .wpforms-form input[type=datetime],div.wpforms-container-full .wpforms-form input[type=datetime-local],div.wpforms-container-full .wpforms-form input[type=email],div.wpforms-container-full .wpforms-form input[type=month],div.wpforms-container-full .wpforms-form input[type=number],div.wpforms-container-full .wpforms-form input[type=password],div.wpforms-container-full .wpforms-form input[type=range],div.wpforms-container-full .wpforms-form input[type=search],div.wpforms-container-full .wpforms-form input[type=tel],div.wpforms-container-full .wpforms-form input[type=text],div.wpforms-container-full .wpforms-form input[type=time],div.wpforms-container-full .wpforms-form input[type=url],div.wpforms-container-full .wpforms-form input[type=week],div.wpforms-container-full .wpforms-form select,div.wpforms-container-full .wpforms-form textarea{color: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "input_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-input-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-input-line-height">select,textarea,input[type=tel],input[type=email],input[type=number],input[type=search],input[type=text],input[type=date],input[type=datetime],input[type=datetime-local],input[type=month],input[type=password],input[type=range],input[type=time],input[type=url],input[type=week],div.wpforms-container-full .wpforms-form input[type=date],div.wpforms-container-full .wpforms-form input[type=datetime],div.wpforms-container-full .wpforms-form input[type=datetime-local],div.wpforms-container-full .wpforms-form input[type=email],div.wpforms-container-full .wpforms-form input[type=month],div.wpforms-container-full .wpforms-form input[type=number],div.wpforms-container-full .wpforms-form input[type=password],div.wpforms-container-full .wpforms-form input[type=range],div.wpforms-container-full .wpforms-form input[type=search],div.wpforms-container-full .wpforms-form input[type=tel],div.wpforms-container-full .wpforms-form input[type=text],div.wpforms-container-full .wpforms-form input[type=time],div.wpforms-container-full .wpforms-form input[type=url],div.wpforms-container-full .wpforms-form input[type=week],div.wpforms-container-full .wpforms-form select,div.wpforms-container-full .wpforms-form textarea{line-height: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "input_tablet_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-input-tablet-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-input-tablet-line-height">@media (max-width: 768px){select,textarea,input[type=tel],input[type=email],input[type=number],input[type=search],input[type=text],input[type=date],input[type=datetime],input[type=datetime-local],input[type=month],input[type=password],input[type=range],input[type=time],input[type=url],input[type=week],div.wpforms-container-full .wpforms-form input[type=date],div.wpforms-container-full .wpforms-form input[type=datetime],div.wpforms-container-full .wpforms-form input[type=datetime-local],div.wpforms-container-full .wpforms-form input[type=email],div.wpforms-container-full .wpforms-form input[type=month],div.wpforms-container-full .wpforms-form input[type=number],div.wpforms-container-full .wpforms-form input[type=password],div.wpforms-container-full .wpforms-form input[type=range],div.wpforms-container-full .wpforms-form input[type=search],div.wpforms-container-full .wpforms-form input[type=tel],div.wpforms-container-full .wpforms-form input[type=text],div.wpforms-container-full .wpforms-form input[type=time],div.wpforms-container-full .wpforms-form input[type=url],div.wpforms-container-full .wpforms-form input[type=week],div.wpforms-container-full .wpforms-form select,div.wpforms-container-full .wpforms-form textarea{line-height: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "input_mobile_typography[line-height]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-input-mobile-line-height" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-input-mobile-line-height">@media (max-width: 480px){select,textarea,input[type=tel],input[type=email],input[type=number],input[type=search],input[type=text],input[type=date],input[type=datetime],input[type=datetime-local],input[type=month],input[type=password],input[type=range],input[type=time],input[type=url],input[type=week],div.wpforms-container-full .wpforms-form input[type=date],div.wpforms-container-full .wpforms-form input[type=datetime],div.wpforms-container-full .wpforms-form input[type=datetime-local],div.wpforms-container-full .wpforms-form input[type=email],div.wpforms-container-full .wpforms-form input[type=month],div.wpforms-container-full .wpforms-form input[type=number],div.wpforms-container-full .wpforms-form input[type=password],div.wpforms-container-full .wpforms-form input[type=range],div.wpforms-container-full .wpforms-form input[type=search],div.wpforms-container-full .wpforms-form input[type=tel],div.wpforms-container-full .wpforms-form input[type=text],div.wpforms-container-full .wpforms-form input[type=time],div.wpforms-container-full .wpforms-form input[type=url],div.wpforms-container-full .wpforms-form input[type=week],div.wpforms-container-full .wpforms-form select,div.wpforms-container-full .wpforms-form textarea{line-height: ' + dataAndEvents + ";}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "input_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-input-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-input-letter-spacing">select,textarea,input[type=tel],input[type=email],input[type=number],input[type=search],input[type=text],input[type=date],input[type=datetime],input[type=datetime-local],input[type=month],input[type=password],input[type=range],input[type=time],input[type=url],input[type=week],div.wpforms-container-full .wpforms-form input[type=date],div.wpforms-container-full .wpforms-form input[type=datetime],div.wpforms-container-full .wpforms-form input[type=datetime-local],div.wpforms-container-full .wpforms-form input[type=email],div.wpforms-container-full .wpforms-form input[type=month],div.wpforms-container-full .wpforms-form input[type=number],div.wpforms-container-full .wpforms-form input[type=password],div.wpforms-container-full .wpforms-form input[type=range],div.wpforms-container-full .wpforms-form input[type=search],div.wpforms-container-full .wpforms-form input[type=tel],div.wpforms-container-full .wpforms-form input[type=text],div.wpforms-container-full .wpforms-form input[type=time],div.wpforms-container-full .wpforms-form input[type=url],div.wpforms-container-full .wpforms-form input[type=week],div.wpforms-container-full .wpforms-form select,div.wpforms-container-full .wpforms-form textarea{letter-spacing: ' + dataAndEvents + "px;}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "input_tablet_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-input-tablet-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-input-tablet-letter-spacing">@media (max-width: 768px){select,textarea,input[type=tel],input[type=email],input[type=number],input[type=search],input[type=text],input[type=date],input[type=datetime],input[type=datetime-local],input[type=month],input[type=password],input[type=range],input[type=time],input[type=url],input[type=week],div.wpforms-container-full .wpforms-form input[type=date],div.wpforms-container-full .wpforms-form input[type=datetime],div.wpforms-container-full .wpforms-form input[type=datetime-local],div.wpforms-container-full .wpforms-form input[type=email],div.wpforms-container-full .wpforms-form input[type=month],div.wpforms-container-full .wpforms-form input[type=number],div.wpforms-container-full .wpforms-form input[type=password],div.wpforms-container-full .wpforms-form input[type=range],div.wpforms-container-full .wpforms-form input[type=search],div.wpforms-container-full .wpforms-form input[type=tel],div.wpforms-container-full .wpforms-form input[type=text],div.wpforms-container-full .wpforms-form input[type=time],div.wpforms-container-full .wpforms-form input[type=url],div.wpforms-container-full .wpforms-form input[type=week],div.wpforms-container-full .wpforms-form select,div.wpforms-container-full .wpforms-form textarea{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "input_mobile_typography[letter-spacing]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-input-mobile-letter-spacing" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-input-mobile-letter-spacing">@media (max-width: 480px){select,textarea,input[type=tel],input[type=email],input[type=number],input[type=search],input[type=text],input[type=date],input[type=datetime],input[type=datetime-local],input[type=month],input[type=password],input[type=range],input[type=time],input[type=url],input[type=week],div.wpforms-container-full .wpforms-form input[type=date],div.wpforms-container-full .wpforms-form input[type=datetime],div.wpforms-container-full .wpforms-form input[type=datetime-local],div.wpforms-container-full .wpforms-form input[type=email],div.wpforms-container-full .wpforms-form input[type=month],div.wpforms-container-full .wpforms-form input[type=number],div.wpforms-container-full .wpforms-form input[type=password],div.wpforms-container-full .wpforms-form input[type=range],div.wpforms-container-full .wpforms-form input[type=search],div.wpforms-container-full .wpforms-form input[type=tel],div.wpforms-container-full .wpforms-form input[type=text],div.wpforms-container-full .wpforms-form input[type=time],div.wpforms-container-full .wpforms-form input[type=url],div.wpforms-container-full .wpforms-form input[type=week],div.wpforms-container-full .wpforms-form select,div.wpforms-container-full .wpforms-form textarea{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ), api( "input_typography[text-transform]", function( $swipe ) {
	    $swipe.bind( function( dataAndEvents ) {
	        var $child = $( ".customizer-typography-input-text-transform" );
	        if ( dataAndEvents ) {
	            /** @type {string} */
	            var img = '<style class="customizer-typography-input-text-transform">select,textarea,input[type=tel],input[type=email],input[type=number],input[type=search],input[type=text],input[type=date],input[type=datetime],input[type=datetime-local],input[type=month],input[type=password],input[type=range],input[type=time],input[type=url],input[type=week],div.wpforms-container-full .wpforms-form input[type=date],div.wpforms-container-full .wpforms-form input[type=datetime],div.wpforms-container-full .wpforms-form input[type=datetime-local],div.wpforms-container-full .wpforms-form input[type=email],div.wpforms-container-full .wpforms-form input[type=month],div.wpforms-container-full .wpforms-form input[type=number],div.wpforms-container-full .wpforms-form input[type=password],div.wpforms-container-full .wpforms-form input[type=range],div.wpforms-container-full .wpforms-form input[type=search],div.wpforms-container-full .wpforms-form input[type=tel],div.wpforms-container-full .wpforms-form input[type=text],div.wpforms-container-full .wpforms-form input[type=time],div.wpforms-container-full .wpforms-form input[type=url],div.wpforms-container-full .wpforms-form input[type=week],div.wpforms-container-full .wpforms-form select,div.wpforms-container-full .wpforms-form textarea{text-transform: ' + dataAndEvents + ";}</style>";
	            if ( $child.length ) {
	                $child.replaceWith( img );
	            } else {
	                $( "head" ).append( img );
	            }
	        } else {
	            $child.remove();
	        }
	    } );
	} ),  api( "heading_h5_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var fontName = pair.split(",")[0];
					fontName = fontName.replace(/'/g, '');
				var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-heading_h5-font-family" );
				var fontSize = fontName.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
                if ( fontName in responsive.googleFonts ) {
                	if ( $( "#" + idfirst ).length ) {
                        $( "#" + idfirst ).attr( "href", fontSize );
                    } else {
                        $( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
                    }
                }
			}
			var $child = $( ".customizer-typography-heading_h5-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h5-font-family">h5{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h5_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h5-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h5-font-weight">h5{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h5_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h5-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h5-font-style">h5{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h5_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h5-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h5-font-size">h5{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h5_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h5-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h5-tablet-font-size">@media (max-width: 768px){h5{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h5_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h5-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h5-mobile-font-size">@media (max-width: 480px){h5{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h5_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h5-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h5-color">h5{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h5_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h5-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h5-line-height">h5{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h5_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h5-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h5-tablet-line-height">@media (max-width: 768px){h5{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h5_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h5-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h5-mobile-line-height">@media (max-width: 480px){h5{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h5_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h5-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h5-letter-spacing">h5{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h5_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h5-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h5-tablet-letter-spacing">@media (max-width: 768px){h5{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h5_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h5-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h5-mobile-letter-spacing">@media (max-width: 480px){h5{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h5_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h5-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h5-text-transform">h5{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h6_typography[font-family]", function( $swipe ) {
		$swipe.bind( function( pair ) {
			if ( pair ) {
				/** @type {string} */
				var fontName = pair.split(",")[0];
					fontName = fontName.replace(/'/g, '');
				var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-heading_h6-font-family" );
				var fontSize = fontName.replace( " ", "%20" );
				fontSize = fontSize.replace( ",", "%2C" );
				/** @type {string} */
				fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
                if ( fontName in responsive.googleFonts ) {
                	if ( $( "#" + idfirst ).length ) {
                        $( "#" + idfirst ).attr( "href", fontSize );
                    } else {
                        $( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
                    }
                }
			}
			var $child = $( ".customizer-typography-heading_h6-font-family" );
			if ( pair ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h6-font-family">h6{font-family: ' + pair + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h6_typography[font-weight]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h6-font-weight" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h6-font-weight">h6{font-weight: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h6_typography[font-style]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h6-font-style" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h6-font-style">h6{font-style: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h6_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h6-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h6-font-size">h6{font-size: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h6_tablet_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h6-tablet-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h6-tablet-font-size">@media (max-width: 768px){h6{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h6_mobile_typography[font-size]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h6-mobile-font-size" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h6-mobile-font-size">@media (max-width: 480px){h6{font-size: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h6_typography[color]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h6-color" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h6-color">h6{color: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h6_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h6-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h6-line-height">h6{line-height: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h6_tablet_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h6-tablet-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h6-tablet-line-height">@media (max-width: 768px){h6{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h6_mobile_typography[line-height]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h6-mobile-line-height" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h6-mobile-line-height">@media (max-width: 480px){h6{line-height: ' + dataAndEvents + ";}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h6_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h6-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h6-letter-spacing">h6{letter-spacing: ' + dataAndEvents + "px;}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h6_tablet_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h6-tablet-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h6-tablet-letter-spacing">@media (max-width: 768px){h6{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h6_mobile_typography[letter-spacing]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h6-mobile-letter-spacing" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h6-mobile-letter-spacing">@media (max-width: 480px){h6{letter-spacing: ' + dataAndEvents + "px;}}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ), api( "heading_h6_typography[text-transform]", function( $swipe ) {
		$swipe.bind( function( dataAndEvents ) {
			var $child = $( ".customizer-typography-heading_h6-text-transform" );
			if ( dataAndEvents ) {
				/** @type {string} */
				var img = '<style class="customizer-typography-heading_h6-text-transform">h6{text-transform: ' + dataAndEvents + ";}</style>";
				if ( $child.length ) {
					$child.replaceWith( img );
				} else {
					$( "head" ).append( img );
				}
			} else {
				$child.remove();
			}
		} );
	} ),
	api( "header_site_title_typography[font-family]", function( $swipe ) {
	   $swipe.bind( function( pair ) {
	       if ( pair ) {
	           /** @type {string} */
	           var fontName = pair.split(",")[0];
	               fontName = fontName.replace(/'/g, '');
	           var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-header_site_title-font-family" );
	           var fontSize = fontName.replace( " ", "%20" );
	           fontSize = fontSize.replace( ",", "%2C" );
	           /** @type {string} */
	           fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
               if ( fontName in responsive.googleFonts ) {
					if ( $( "#" + idfirst ).length ) {
                       $( "#" + idfirst ).attr( "href", fontSize );
                    } else {
                       $( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
                    }
               }
	       }
	       var $child = $( ".customizer-typography-header_site_title-font-family" );
	       if ( pair ) {
	           /** @type {string} */
	           var img = '<style class="customizer-typography-header_site_title-font-family">.site-title a{font-family: ' + pair + ";}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "header_site_title_typography[font-weight]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_title-font-weight" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_title-font-weight">.site-title a{font-weight: ' + dataAndEvents + ";}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_title_typography[font-style]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_title-font-style" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_title-font-style">.site-title{font-style: ' + dataAndEvents + ";}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_title_typography[font-size]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_title-font-size" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_title-font-size">.site-title a{font-size: ' + dataAndEvents + ";}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_title_tablet_typography[font-size]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_title-tablet-font-size" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_title-tablet-font-size">@media (max-width: 768px){.site-title a{font-size: ' + dataAndEvents + ";}}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_title_mobile_typography[font-size]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_title-mobile-font-size" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_title-mobile-font-size">@media (max-width: 480px){.site-title a{font-size: ' + dataAndEvents + ";}}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_title_typography[color]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_title-color" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_title-color">.site-title{color: ' + dataAndEvents + ";}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_title_typography[line-height]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_title-line-height" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_title-line-height">.site-title{line-height: ' + dataAndEvents + ";}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_title_tablet_typography[line-height]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_title-tablet-line-height" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_title-tablet-line-height">@media (max-width: 768px){.site-title{line-height: ' + dataAndEvents + ";}}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_title_mobile_typography[line-height]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_title-mobile-line-height" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_title-mobile-line-height">@media (max-width: 480px){.site-title{line-height: ' + dataAndEvents + ";}}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_title_typography[letter-spacing]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_title-letter-spacing" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_title-letter-spacing">.site-title{letter-spacing: ' + dataAndEvents + "px;}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_title_tablet_typography[letter-spacing]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_title-tablet-letter-spacing" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_title-tablet-letter-spacing">@media (max-width: 768px){.site-title{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_title_mobile_typography[letter-spacing]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_title-mobile-letter-spacing" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_title-mobile-letter-spacing">@media (max-width: 480px){.site-title{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_title_typography[text-transform]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_title-text-transform" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_title-text-transform">.site-title{text-transform: ' + dataAndEvents + ";}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ),api( "header_site_tagline_typography[font-family]", function( $swipe ) {
	   $swipe.bind( function( pair ) {
	       if ( pair ) {
	           /** @type {string} */
	           var fontName = pair.split(",")[0];
	               fontName = fontName.replace(/'/g, '');
	           var idfirst = ( fontName.trim().toLowerCase().replace( " ", "-" ), "customizer-typography-header_site_tagline-font-family" );
	           var fontSize = fontName.replace( " ", "%20" );
	           fontSize = fontSize.replace( ",", "%2C" );
	           /** @type {string} */
	           fontSize = responsive.googleFontsUrl + "/css?family=" + fontName + ":" + responsive.googleFontsWeight;
               if ( fontName in responsive.googleFonts ) {
               		if ( $( "#" + idfirst ).length ) {
                       $( "#" + idfirst ).attr( "href", fontSize );
                   	} else {
                       $( "head" ).append( '<link id="' + idfirst + '" rel="stylesheet" type="text/css" href="' + fontSize + '">' );
                   	}
               }
	       }
	       var $child = $( ".customizer-typography-header_site_tagline-font-family" );
	       if ( pair ) {
	           /** @type {string} */
	           var img = '<style class="customizer-typography-header_site_tagline-font-family">.site-description{font-family: ' + pair + ";}</style>";
	           if ( $child.length ) {
	               $child.replaceWith( img );
	           } else {
	               $( "head" ).append( img );
	           }
	       } else {
	           $child.remove();
	       }
	   } );
	} ), api( "header_site_tagline_typography[font-weight]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_tagline-font-weight" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_tagline-font-weight">.site-description{font-weight: ' + dataAndEvents + ";}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_tagline_typography[font-style]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_tagline-font-style" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_tagline-font-style">.site-description{font-style: ' + dataAndEvents + ";}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_tagline_typography[font-size]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_tagline-font-size" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_tagline-font-size">.site-description{font-size: ' + dataAndEvents + ";}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_tagline_tablet_typography[font-size]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_tagline-tablet-font-size" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_tagline-tablet-font-size">@media (max-width: 768px){.site-description{font-size: ' + dataAndEvents + ";}}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_tagline_mobile_typography[font-size]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_tagline-mobile-font-size" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_tagline-mobile-font-size">@media (max-width: 480px){.site-description{font-size: ' + dataAndEvents + ";}}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_tagline_typography[color]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_tagline-color" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_tagline-color">.site-description{color: ' + dataAndEvents + ";}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_tagline_typography[line-height]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_tagline-line-height" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_tagline-line-height">.site-description{line-height: ' + dataAndEvents + ";}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_tagline_tablet_typography[line-height]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_tagline-tablet-line-height" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_tagline-tablet-line-height">@media (max-width: 768px){.site-description{line-height: ' + dataAndEvents + ";}}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_tagline_mobile_typography[line-height]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_tagline-mobile-line-height" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_tagline-mobile-line-height">@media (max-width: 480px){.site-description{line-height: ' + dataAndEvents + ";}}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_tagline_typography[letter-spacing]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_tagline-letter-spacing" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_tagline-letter-spacing">.site-description{letter-spacing: ' + dataAndEvents + "px;}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_tagline_tablet_typography[letter-spacing]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_tagline-tablet-letter-spacing" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_tagline-tablet-letter-spacing">@media (max-width: 768px){.site-description{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_tagline_mobile_typography[letter-spacing]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_tagline-mobile-letter-spacing" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_tagline-mobile-letter-spacing">@media (max-width: 480px){.site-description{letter-spacing: ' + dataAndEvents + "px;}}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} ), api( "header_site_tagline_typography[text-transform]", function( $swipe ) {
	  $swipe.bind( function( dataAndEvents ) {
	    var $child = $( ".customizer-typography-header_site_tagline-text-transform" );
	    if ( dataAndEvents ) {
	      /** @type {string} */
	      var img = '<style class="customizer-typography-header_site_tagline-text-transform">.site-description{text-transform: ' + dataAndEvents + ";}</style>";
	      if ( $child.length ) {
	        $child.replaceWith( img );
	      } else {
	        $( "head" ).append( img );
	      }
	    } else {
	      $child.remove();
	    }
	  } );
	} );

} )( jQuery );
