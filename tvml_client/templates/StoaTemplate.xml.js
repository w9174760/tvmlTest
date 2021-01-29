var Template = function () {
  return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
	<head>
		<style>
			.headerWrapper {
				tv-position: top-right;
				tv-align: right;
				font-size: 50px;
				margin: 30px;
				margin-top: 100px;
				color: rgb(255, 255, 255)
			}
			.imgQR {
				tv-position: right;
				tv-align: right;
				margin: 100px 70px;
			}
			.img2 {
				tv-position: bottom-right;
			}
			.footerWrapper {
				tv-position: footer;
				tv-align: center;
				font-size: 20px;
				margin: 30px;

			}
			.footerWrapper text {
				tv-text-style: caption2;
				tv-interitem-spacing: 40;
			}
		
		</style>
	</head>
   <divTemplate>
		<background>
			<img src="${this.BASEURL}images/gradient.jpg"/>
		</background>

		<row class="headerWrapper">
			<title>STOA TVML</title>
		</row>

		<img src="${this.BASEURL}images/frame.png" width="160" height="160" class="imgQR"/>
		<img src="${this.BASEURL}images/frame.png" width="160" height="160" class="imgQR img2"/>

		<row class="footerWrapper">
			<text><badge src="resource://tomato-fresh"/> 99% </text>
			<text>1hr 54min </text>
			<text>Comedy </text>
			<text>2015 </text>
			<badge src="resource://mpaa-pg" class="badge" />
			<badge src="resource://cc" class="badge" />
		</row>
		<row class="footerWrapper">
			<description>Subtitles for the deaf and Hard of Hearing (SDH) refer to subtitles in the original lanuage with the addition of relevant non-dialog information.</description>
		</row>
    </divTemplate>
  </document>`;
};

// var Template = function () {
//   return `<?xml version="1.0" encoding="UTF-8" ?>
//     <document>
//      <productTemplate>
//         <background>
//         </background>
//         <banner>
//            <stack>
//               <title>STOA TVML</title>
//               <row>
//                  <text><badge src="resource://tomato-fresh"/> 99%</text>
//                  <text>1hr 54min</text>
//                  <text>Comedy</text>
//                  <text>2015</text>
//                  <badge src="resource://mpaa-pg" class="badge" />
//                  <badge src="resource://cc" class="badge" />
//               </row>
//               <description handlesOverflow ="true">An aspiring developer gets a ticket to WWDC at the last minute. Now they need to get across country in time for the keynote, and the only person who can help is their quirky roommate.</description>
//               <text>Language information can go here</text>
//               <row>
//                  <buttonLockup>
//                     <badge src="resource://button-preview" />
//                     <title>Preview</title>
//                  </buttonLockup>
//                  <buttonLockup type="buy">
//                     <text>$9.99</text>
//                     <title>Buy</title>
//                  </buttonLockup>
//   			</row>
//            </stack>
//            <heroImg src="${this.BASEURL}images/vicki.png" />
// 		</banner>
// 		<row>
// 		<img src="${this.BASEURL}images/frame.png" width="200" height="200" style="tv-position: top-right;"/>
// 		<img src="${this.BASEURL}images/frame.png" width="200" height="200" style="tv-position: right;"/>
// 		<img src="${this.BASEURL}images/frame.png" width="200" height="200" style="tv-position: bottom-right;"/>
// 		</row>
//         <shelf>
//            <header>
//               <title>Viewers Also Watched</title>
//            </header>
//            <section>
//               <lockup>
//                  <img src="path to images on your server/Car_Movie_250x375_A.png" width="150" height="226" />
//                  <title>Turn</title>
//               </lockup>
//               <lockup>
//                  <img src="path to images on your server/Car_Movie_250x375_B.png" width="150" height="226" />
//                  <title>Road</title>
//               </lockup>
//               <lockup>
//                  <img src="path to images on your server/Car_Movie_250x375_C.png" width="150" height="226" />
//                  <title>Helicopter</title>
//               </lockup>
//            </section>
//         </shelf>
//         <shelf>
//            <header>
//               <title>Reviews and Ratings</title>
//            </header>
//            <section>
//               <ratingCard>
//                  <title>4.1 / 5</title>
//                  <ratingBadge value="0.7"></ratingBadge>
//                  <description>Average of 2,241 iTunes user ratings and reviews.</description>
//               </ratingCard>
//               <ratingCard>
//                  <title><badge src="resource://tomato-fresh" /> 99%</title>
//                  <text>Tomatometer</text>
//                  <infoTable>
//                     <info>
//                        <header>
//                           <title>175</title>
//                        </header>
//                        <text>Reviews</text>
//                     </info>
//                     <info>
//                        <header>
//                           <title>173</title>
//                        </header>
//                        <text>Fresh</text>
//                     </info>
//                     <info>
//                        <header>
//                           <title>2</title>
//                        </header>
//                        <text>Rotten</text>
//                     </info>
//                  </infoTable>
//               </ratingCard>
//               <reviewCard>
//                  <badge src="resource://tomato-fresh-m" />
//                  <title>WWDC Review</title>
//                  <description>Brief review here</description>
//                  <text>Ravi Patel June, 8 2015</text>
//               </reviewCard>
//            </section>
//         </shelf>
//         <shelf>
//            <header>
//               <title>Cast and Crew</title>
//            </header>
//            <section>
//               <monogramLockup>
//                  <monogram firstName="Anne" lastName="Johnson"/>
//                  <title>Anne Johnson</title>
//                  <subtitle>Actor</subtitle>
//               </monogramLockup>
//               <monogramLockup>
//                  <monogram firstName="Tom" lastName="Clark"/>
//                  <title>Tom Clark</title>
//                  <subtitle>Actor</subtitle>
//               </monogramLockup>
//               <monogramLockup>
//                  <monogram firstName="Maria" lastName="Ruiz"/>
//                  <title>Maria Ruiz</title>
//                  <subtitle>Actor</subtitle>
//               </monogramLockup>
//            </section>
//         </shelf>
//         <productInfo>
//            <infoTable>
//               <header>
//                  <title>Information</title>
//               </header>
//               <info>
//                  <header>
//                     <title>Studio</title>
//                  </header>
//                  <text>Apple</text>
//               </info>
//               <info>
//                  <header>
//                     <title>Runtime</title>
//                  </header>
//                  <text>1:54</text>
//               </info>
//               <info>
//                  <header>
//                     <title>Format</title>
//                  </header>
//                  <text>Widescreen</text>
//               </info>
//            </infoTable>
//            <infoTable>
//               <header>
//                  <title>Languages</title>
//               </header>
//               <info>
//                  <header>
//                     <title>Primary</title>
//                  </header>
//                  <text>English (Dolby 5.1), Subtitles, CC</text>
//               </info>
//               <info>
//                  <header>
//                     <title>Additional</title>
//                  </header>
//                  <text>Cantonese (Subtitles)</text>
//               </info>
//            </infoTable>
//            <infoTable style="tv-line-spacing:10;">
//               <header>
//                  <title>Accessibility</title>
//               </header>
//               <info>
//                  <header>
//                     <textBadge>SDH</textBadge>
//                  </header>
//                  <text>Subtitles for the deaf and Hard of Hearing (SDH) refer to subtitles in the original lanuage with the addition of relevant non-dialog information.</text>
//               </info>
//            </infoTable>
//         </productInfo>
//      </productTemplate>
//   </document>`;
// };
