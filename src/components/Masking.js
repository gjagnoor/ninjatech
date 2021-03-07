import React, { useEffect, useState } from "react"
// import skrollr from "skrollr"
import { ParallaxProvider, Parallax } from "react-skrollr"
// import { Helmet } from "react-helmet"


const IndexPage = () => {
    const [s, setS] = useState(null)
    // useEffect(() => {
    //     const s_ = skrollr.init()
        
    //     setS(s_)
    // }, [])
    // useEffect(() => {
    //     const s_ = skrollr.init();
    //     setS(s_)
    // }, [])
  return (
    <React.Fragment>
           {/* <Helmet>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js" />
          </Helmet> */}
          <ParallaxProvider>
          <Parallax
      data={{
        "data-center-center": "opacity: 1;",
        "data-bottom-top": "opacity: 0;",
      }}
    >
      <div>
        Doggo ipsum heckin good boys doggorino. Heckin good boys doggorino shibe
        puggorino I am bekom fat doge, clouds bork I am bekom fat puggorino.
        What a nice floof blop thicc puggo extremely cuuuuuute, doge pupperino
        h*ck. such treat wow such tempt mlem. Snoot borking doggo extremely
        cuuuuuute length boy borkf you are doin me a concern smol, length boy
        dat tungg tho stop it fren noodle horse. Maximum borkdrive many pats
        shoober, long bois. Thicc very hand that feed shibe long woofer wow very
        biscit heckin big ol pupper I am bekom fat puggorino, long bois shibe
        heckin good boys boofers puggo pats. Pats you are doin me a concern
        snoot porgo what a nice floof mlem boof woofer extremely cuuuuuute,
        shoober floofs long water shoob wow such tempt snoot long doggo such
        treat. Heckin good boys and girls length boy ur givin me a spook stop it
        fren, doggorino. shibe very taste wow blep. 
       ........
      </div>
    </Parallax>
          <svg
        className="overlay"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id="knockout" maskContentUnits="objectBoundingBox">
            <rect x="0" y="0" width="1" height="1" fill="white" />
            {/* <Parallax
                data={{
                  "data-0":
                    "transform: translate(0.49px,0.5px) scale(0.0015) translate(-49px,-49px);",
                  "data-50p":
                    "transform: translate(0.5px,0.5px) scale(0.2) translate(-49px,-60px);",
                }}
              > */}
            <g
              fill="black"
              data-0="transform: translate(0.49px,0.5px) scale(0.0015) translate(-49px,-49px);"
              data-50p="transform: translate(0.5px,0.5px) scale(0.2) translate(-49px,-60px);"
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 980.000000 650.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,650.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M3633 5963 c-15 -16 -36 -40 -46 -55 -18 -29 -24 -108 -7 -108 6 0
10 -6 10 -12 0 -17 55 -78 69 -78 7 0 9 -4 6 -10 -4 -6 22 -10 70 -10 48 0 74
4 70 10 -3 6 1 10 9 10 9 0 16 -4 16 -10 0 -5 6 -10 13 -10 7 0 19 -9 27 -20
8 -11 20 -20 28 -20 7 0 10 -4 7 -10 -3 -5 1 -10 9 -10 9 0 16 -4 16 -10 0 -5
6 -10 13 -10 7 0 19 -9 27 -20 8 -11 19 -20 25 -20 6 0 17 -9 25 -20 8 -11 19
-20 25 -20 6 0 17 -9 25 -20 8 -11 18 -20 23 -20 4 0 18 -10 31 -22 32 -32 65
-58 72 -58 3 0 16 -11 29 -24 14 -14 41 -37 62 -53 40 -30 92 -74 129 -110 13
-13 28 -23 34 -23 6 0 8 -4 5 -10 -3 -5 1 -10 9 -10 9 0 16 -4 16 -10 0 -5 12
-10 26 -10 14 0 23 4 19 10 -3 6 1 10 10 10 9 0 13 5 10 10 -3 6 -1 10 5 10 6
0 23 12 39 28 15 15 36 34 47 42 11 8 33 26 50 40 17 14 45 36 64 50 18 14 40
32 50 40 10 8 32 26 50 40 18 14 39 31 46 38 7 6 16 12 21 12 5 0 15 9 23 20
8 11 19 20 25 20 6 0 17 9 25 20 8 11 20 20 27 20 7 0 13 5 13 10 0 6 6 10 13
10 7 0 19 9 27 20 8 11 20 20 28 20 7 0 10 5 7 10 -3 6 1 10 9 10 9 0 16 5 16
10 0 6 6 10 13 10 7 0 19 9 27 20 15 21 40 27 40 10 0 -6 30 -10 70 -10 40 0
70 4 70 10 0 6 5 10 10 10 6 0 19 9 30 20 11 11 20 25 20 30 0 6 5 10 10 10 6
0 10 32 10 75 0 43 -4 75 -10 75 -5 0 -10 9 -10 20 0 11 -6 20 -14 20 -8 0
-16 7 -20 15 -4 12 -24 15 -90 15 -92 0 -80 6 -151 -71 -19 -20 -21 -125 -2
-132 9 -4 9 -6 -1 -6 -7 -1 -10 -5 -7 -11 3 -5 1 -10 -5 -10 -6 0 -17 -6 -24
-12 -29 -28 -83 -74 -116 -99 -19 -15 -45 -35 -57 -45 -50 -44 -64 -54 -71
-54 -4 0 -14 -9 -22 -20 -8 -11 -18 -20 -22 -20 -9 0 -38 -23 -74 -57 -13 -13
-28 -23 -34 -23 -5 0 -10 -4 -10 -10 0 -5 -6 -10 -13 -10 -7 0 -19 -9 -27 -20
-8 -11 -20 -20 -28 -20 -7 0 -10 -4 -7 -10 3 -5 -1 -10 -9 -10 -9 0 -16 -4
-16 -10 0 -5 -6 -10 -13 -10 -7 0 -19 -9 -27 -20 -8 -11 -20 -20 -26 -20 -7 0
-15 -6 -18 -12 -5 -10 -7 -10 -12 0 -3 6 -12 12 -20 12 -9 0 -12 5 -9 10 3 6
-1 10 -9 10 -9 0 -16 5 -16 10 0 6 -6 10 -13 10 -7 0 -19 9 -27 20 -8 11 -19
20 -25 20 -6 0 -17 9 -25 20 -8 11 -19 20 -25 20 -6 0 -17 9 -25 20 -8 11 -18
20 -23 20 -4 0 -18 10 -31 23 -32 31 -65 57 -72 57 -3 0 -15 10 -28 23 -32 31
-65 57 -72 57 -3 0 -16 11 -29 24 -14 14 -42 37 -62 53 -73 53 -122 113 -93
113 6 0 10 23 10 50 0 28 -4 50 -10 50 -5 0 -10 7 -10 16 0 9 -14 29 -31 45
-29 27 -37 29 -109 29 -71 0 -80 -2 -107 -27z m150 -57 c9 -7 17 -20 17 -28 0
-8 5 -19 12 -26 9 -9 9 -12 0 -12 -7 0 -12 -7 -12 -16 0 -8 -6 -22 -14 -30
-16 -16 -101 -20 -91 -4 3 6 0 10 -7 10 -18 0 -15 83 3 104 17 19 68 20 92 2z
m1546 -10 c24 -26 28 -96 4 -96 -7 0 -13 -4 -13 -10 0 -20 -72 -11 -91 12 -60
68 37 161 100 94z"
                  />
                  <path
                    d="M1725 5620 c-3 -5 -13 -10 -21 -10 -8 0 -31 -17 -52 -37 -35 -36 -37
-40 -37 -103 0 -50 4 -71 18 -84 9 -10 17 -21 17 -25 0 -15 79 -51 114 -51 34
0 96 27 120 53 6 7 17 23 24 37 l13 25 932 -2 932 -2 153 -150 c84 -83 157
-151 163 -151 6 0 7 -4 4 -10 -3 -5 -2 -10 4 -10 5 0 92 -81 193 -180 100 -99
190 -180 200 -180 9 0 55 37 102 83 156 151 206 197 212 197 3 0 23 18 44 40
21 22 44 40 50 40 6 0 8 5 5 10 -3 6 1 10 10 10 9 0 13 5 10 10 -3 6 -2 10 3
10 6 0 67 56 137 125 l127 125 919 0 c739 0 919 -3 919 -13 0 -13 21 -33 58
-54 26 -15 142 -17 142 -3 0 6 5 10 10 10 6 0 26 16 45 35 32 32 35 39 35 96
0 60 -1 62 -46 105 -46 45 -63 50 -144 44 -19 -1 -36 -6 -38 -11 -2 -5 -8 -9
-13 -9 -15 0 -49 -33 -49 -48 0 -7 -4 -10 -10 -7 -6 4 -10 -5 -10 -19 l0 -26
-918 0 c-906 0 -918 0 -932 -20 -8 -11 -18 -20 -23 -20 -4 0 -35 -27 -67 -60
-32 -33 -64 -60 -70 -60 -6 0 -8 -4 -5 -10 3 -5 -1 -10 -10 -10 -9 0 -13 -4
-10 -10 3 -5 0 -10 -7 -10 -7 0 -22 -12 -33 -26 -11 -15 -22 -29 -25 -33 -3
-3 -48 -44 -100 -91 -52 -47 -125 -115 -162 -152 -37 -38 -70 -68 -73 -68 -4
0 -24 -18 -45 -40 l-39 -41 -104 103 c-58 57 -149 146 -203 199 -55 53 -121
122 -149 152 -27 31 -56 56 -63 57 -7 0 -10 5 -7 10 3 6 -1 10 -10 10 -9 0
-13 5 -10 10 3 6 1 10 -5 10 -6 0 -38 27 -70 60 l-59 60 -946 0 c-999 0 -975
-1 -975 43 0 7 -11 20 -25 27 -14 7 -25 17 -25 22 0 4 -9 8 -19 8 -11 0 -23 5
-26 10 -3 6 -21 10 -40 10 -19 0 -37 -4 -40 -10z m103 -115 c23 -49 7 -95 -33
-95 -9 0 -13 -4 -10 -10 4 -6 -5 -10 -19 -10 -14 0 -26 5 -26 10 0 6 -6 10
-14 10 -17 0 -26 22 -26 60 0 53 8 60 64 60 47 0 54 -3 64 -25z m5397 0 c14
-13 25 -33 25 -45 0 -58 -93 -92 -131 -48 -63 72 38 162 106 93z"
                  />
                  <path
                    d="M1330 5280 c0 -5 -12 -10 -26 -10 -14 0 -23 -4 -19 -10 3 -5 -1 -10
-9 -10 -9 0 -41 -12 -73 -26 -32 -14 -67 -30 -78 -34 -11 -4 -33 -13 -50 -20
-16 -7 -40 -17 -52 -21 -13 -5 -34 -13 -48 -19 -14 -5 -36 -14 -50 -20 -14 -5
-35 -14 -47 -19 -13 -4 -35 -14 -49 -21 -22 -10 -30 -9 -47 6 -11 9 -38 23
-59 30 -49 17 -98 2 -154 -47 -38 -33 -39 -35 -39 -99 0 -59 3 -68 33 -100 45
-48 69 -60 122 -60 51 0 74 11 122 57 27 27 33 40 33 76 0 48 13 67 47 67 13
0 23 5 23 10 0 6 11 10 25 10 14 0 25 5 25 10 0 6 11 10 25 10 14 0 25 5 25
10 0 6 11 10 25 10 14 0 25 5 25 10 0 6 11 10 25 10 14 0 25 5 25 10 0 6 11
10 25 10 14 0 25 5 25 10 0 6 11 10 25 10 14 0 25 5 25 10 0 6 11 10 25 10 14
0 25 5 25 10 0 6 11 10 25 10 14 0 25 5 25 10 0 6 11 10 25 10 14 0 25 5 25
10 0 7 290 10 851 10 564 0 848 -3 844 -10 -4 -6 5 -10 20 -10 15 0 24 -4 20
-10 -3 -5 3 -10 14 -10 12 0 21 -4 21 -10 0 -5 9 -10 20 -10 11 0 20 -4 20
-10 0 -5 9 -10 20 -10 11 0 20 -4 20 -10 0 -5 9 -10 20 -10 11 0 20 -4 20 -10
0 -5 9 -10 20 -10 11 0 20 -4 20 -10 0 -5 9 -10 20 -10 11 0 20 -4 20 -10 0
-5 9 -10 20 -10 11 0 20 -4 20 -10 0 -5 9 -10 20 -10 11 0 20 -4 20 -10 0 -5
9 -10 20 -10 11 0 20 -4 20 -10 0 -5 9 -10 20 -10 11 0 20 -4 20 -10 0 -5 9
-10 20 -10 11 0 20 -4 20 -10 0 -5 9 -10 19 -10 11 0 21 -4 23 -8 2 -4 74 -43
161 -86 86 -43 160 -82 163 -87 3 -5 18 -9 35 -9 28 0 29 2 29 45 0 41 -2 45
-25 45 -14 0 -25 5 -25 10 0 6 -9 10 -20 10 -11 0 -20 5 -20 10 0 6 -9 10 -21
10 -11 0 -17 5 -14 10 4 6 -5 10 -20 10 -15 0 -24 4 -20 10 3 6 -3 10 -14 10
-12 0 -21 5 -21 10 0 6 -9 10 -20 10 -11 0 -20 5 -20 10 0 6 -9 10 -20 10 -11
0 -20 5 -20 10 0 6 -9 10 -20 10 -11 0 -20 5 -20 10 0 6 -9 10 -20 10 -11 0
-20 5 -20 10 0 6 -9 10 -20 10 -11 0 -20 5 -20 10 0 6 -9 10 -20 10 -11 0 -20
5 -20 10 0 6 -9 10 -20 10 -11 0 -20 5 -20 10 0 6 -9 10 -20 10 -11 0 -20 5
-20 10 0 6 -9 10 -20 10 -11 0 -20 5 -20 10 0 6 -9 10 -19 10 -11 0 -21 4 -23
8 -2 6 -48 31 -218 117 -11 5 -20 13 -20 17 0 5 -9 8 -20 8 -11 0 -20 5 -20
10 0 7 -298 10 -875 10 -577 0 -875 -3 -875 -10z m-586 -282 c28 -39 13 -98
-24 -98 -6 0 -8 -4 -5 -10 4 -6 -7 -10 -24 -10 -17 0 -31 5 -31 10 0 6 -5 10
-10 10 -23 0 -35 24 -32 58 6 49 20 61 69 62 32 0 45 -5 57 -22z"
                  />
                  <path
                    d="M5920 5280 c0 -5 -9 -10 -20 -10 -11 0 -20 -3 -20 -8 0 -7 -4 -10
-77 -46 -21 -11 -40 -23 -43 -26 -3 -3 -72 -39 -155 -80 -82 -41 -151 -78
-153 -82 -2 -5 -12 -8 -23 -8 -10 0 -19 -4 -19 -10 0 -5 -9 -10 -20 -10 -11 0
-20 -4 -20 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -10 0 -5 -9 -10 -20 -10
-11 0 -20 -4 -20 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -10 0 -5 -9 -10
-20 -10 -11 0 -20 -4 -20 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -10 0 -5
-9 -10 -20 -10 -11 0 -20 -4 -20 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20
-10 0 -5 -11 -10 -25 -10 -23 0 -25 -4 -25 -45 0 -42 2 -45 26 -45 22 0 79 24
94 40 3 3 73 39 155 80 83 41 152 78 153 82 2 5 12 8 23 8 10 0 19 5 19 10 0
6 9 10 20 10 11 0 20 5 20 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 9 10 20 10
11 0 20 5 20 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 9 10 20 10 11 0 20 5 20
10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 9 10
20 10 11 0 20 5 20 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 9 10 20 10 11 0 20
5 20 10 0 6 9 10 20 10 11 0 20 5 20 10 0 7 288 10 845 10 557 0 845 -3 845
-10 0 -5 11 -10 25 -10 14 0 25 -4 25 -10 0 -5 14 -10 31 -10 17 0 28 -4 24
-10 -4 -6 7 -10 25 -10 18 0 29 -4 25 -10 -4 -6 7 -10 25 -10 18 0 29 -4 25
-10 -4 -6 7 -10 25 -10 18 0 29 -4 25 -10 -4 -6 7 -10 25 -10 18 0 29 -4 25
-10 -4 -6 7 -10 24 -10 17 0 31 -4 31 -10 0 -5 11 -10 25 -10 14 0 25 -4 25
-10 0 -5 11 -10 25 -10 14 0 25 -4 25 -10 0 -5 11 -10 24 -10 13 0 26 -7 30
-15 3 -8 1 -15 -4 -15 -6 0 -10 -14 -10 -31 0 -17 4 -28 10 -24 6 3 10 -3 10
-14 0 -23 18 -44 67 -79 41 -29 115 -30 162 -1 45 27 61 44 61 63 0 9 5 16 10
16 6 0 10 25 10 55 0 53 -3 59 -44 100 -24 25 -51 45 -59 45 -9 0 -28 5 -42
12 -19 9 -28 9 -37 0 -7 -7 -22 -12 -35 -12 -13 0 -23 -3 -23 -8 0 -16 -40
-32 -57 -23 -10 5 -30 14 -45 20 -16 6 -40 16 -55 22 -16 7 -39 16 -53 22 -14
5 -36 14 -50 20 -14 5 -34 13 -45 17 -41 15 -71 28 -125 54 -30 14 -61 26 -68
26 -6 0 -12 5 -12 10 0 6 -11 10 -25 10 -14 0 -25 5 -25 10 0 7 -298 10 -875
10 -577 0 -875 -3 -875 -10z m2445 -280 c3 -11 11 -20 16 -20 5 0 9 -9 9 -20
0 -11 -4 -20 -10 -20 -5 0 -10 -9 -10 -20 0 -11 -7 -20 -15 -20 -8 0 -15 -4
-15 -10 0 -5 -13 -10 -30 -10 -16 0 -30 5 -30 10 0 6 -7 10 -15 10 -17 0 -16
-1 -20 55 -3 51 10 64 67 65 38 0 48 -4 53 -20z"
                  />
                  <path
                    d="M9227 5135 c-16 -25 -33 -45 -38 -45 -5 0 -9 -7 -9 -15 0 -8 -9 -23
-20 -32 -11 -10 -20 -22 -20 -29 0 -6 -9 -19 -20 -29 -11 -10 -20 -23 -20 -29
0 -7 -9 -18 -20 -26 -11 -8 -20 -21 -20 -30 0 -9 -9 -22 -20 -30 -11 -8 -20
-21 -20 -30 0 -9 -9 -22 -20 -30 -11 -8 -20 -22 -20 -32 0 -10 -4 -18 -10 -18
-5 0 -10 -7 -10 -15 0 -8 -4 -15 -10 -15 -5 0 -10 -7 -10 -15 0 -8 -4 -15 -10
-15 -5 0 -10 -7 -10 -15 0 -8 -4 -15 -8 -15 -5 0 -15 -12 -23 -27 -8 -16 -22
-37 -31 -47 -10 -11 -18 -26 -18 -33 0 -7 -4 -13 -8 -13 -5 0 -15 -12 -23 -27
-8 -16 -22 -35 -31 -44 -10 -9 -18 -22 -18 -28 0 -7 -10 -23 -22 -36 -37 -39
-49 -55 -43 -55 4 0 0 -7 -7 -15 -29 -33 -38 -45 -33 -45 4 0 0 -7 -7 -15 -23
-25 -33 -39 -47 -67 -8 -16 -18 -28 -23 -28 -4 0 -8 -7 -8 -15 0 -8 -4 -15
-10 -15 -5 0 -10 -7 -10 -15 0 -8 -4 -15 -10 -15 -5 0 -10 -7 -10 -15 0 -8 -4
-15 -10 -15 -5 0 -10 -7 -10 -15 0 -8 -4 -15 -10 -15 -5 0 -10 -7 -10 -15 0
-8 -4 -15 -9 -15 -5 0 -12 -10 -17 -22 -5 -15 -9 23 -11 107 -2 71 -8 134 -13
139 -6 6 -10 18 -10 28 0 10 -4 18 -10 18 -5 0 -10 9 -10 20 0 11 -4 20 -10
20 -5 0 -10 9 -10 20 0 11 -7 20 -16 20 -8 0 -12 5 -9 10 3 6 -1 10 -10 10 -9
0 -13 5 -10 10 3 6 0 10 -7 10 -8 0 -20 9 -28 20 -8 11 -20 20 -27 20 -7 0
-13 3 -13 8 0 4 -15 13 -32 20 -18 7 -41 18 -50 23 -11 5 -613 9 -1533 9
-1428 0 -1516 -1 -1536 -17 -12 -10 -27 -24 -34 -30 -8 -7 -18 -13 -24 -13 -6
0 -11 -4 -11 -10 0 -5 -6 -10 -13 -10 -7 0 -19 -9 -27 -20 -8 -11 -20 -20 -27
-20 -7 0 -13 -4 -13 -10 0 -5 -6 -10 -13 -10 -7 0 -19 -9 -27 -20 -8 -11 -20
-20 -27 -20 -7 0 -13 -4 -13 -10 0 -5 -6 -10 -13 -10 -7 0 -19 -9 -27 -20 -8
-11 -20 -20 -27 -20 -7 0 -13 -4 -13 -10 0 -5 -7 -10 -17 -10 -9 0 -14 -3 -10
-6 3 -4 -20 -26 -51 -51 -31 -24 -65 -50 -75 -58 -9 -8 -21 -15 -25 -15 -4 0
-14 -9 -22 -20 -8 -11 -20 -20 -27 -20 -7 0 -13 -4 -13 -10 0 -5 -5 -10 -11
-10 -7 0 -20 -10 -30 -22 -17 -19 -22 -20 -44 -8 -14 7 -33 20 -42 29 -10 9
-34 28 -53 41 -19 13 -46 35 -60 47 -14 13 -28 23 -31 23 -3 0 -17 9 -30 21
-13 11 -34 29 -47 40 -12 10 -27 19 -33 19 -5 0 -7 5 -4 10 3 6 -1 10 -9 10
-9 0 -16 5 -16 10 0 6 -7 10 -16 10 -8 0 -12 5 -9 10 3 6 -3 10 -15 10 -12 0
-18 4 -15 10 3 6 -1 10 -9 10 -9 0 -16 5 -16 10 0 6 -7 10 -16 10 -8 0 -12 5
-9 10 3 6 -3 10 -15 10 -12 0 -18 5 -15 10 3 6 -1 10 -9 10 -9 0 -16 5 -16 10
0 6 -4 10 -10 10 -9 0 -35 19 -65 48 -8 6 -16 12 -20 12 -3 0 -15 9 -27 20
-22 20 -36 20 -1535 20 -919 0 -1520 -4 -1531 -9 -9 -5 -32 -16 -49 -23 -18
-7 -33 -16 -33 -20 0 -5 -5 -8 -10 -8 -16 0 -120 -108 -120 -125 0 -8 -4 -15
-10 -15 -5 0 -10 -8 -10 -18 0 -10 -6 -24 -13 -31 -18 -18 -18 -1508 1 -1601
26 -129 73 -290 85 -290 4 0 7 -7 7 -15 0 -8 5 -24 10 -35 6 -11 15 -29 20
-40 6 -11 10 -27 10 -35 0 -8 4 -15 8 -15 4 0 14 -16 21 -35 7 -19 17 -35 22
-35 5 0 9 -9 9 -20 0 -11 4 -20 9 -20 5 0 14 -13 21 -30 7 -16 16 -30 20 -30
4 0 12 -11 18 -25 13 -28 36 -54 158 -178 95 -96 174 -167 187 -167 4 0 5 -5
2 -10 -3 -6 3 -10 14 -10 12 0 21 -4 21 -10 0 -5 7 -10 16 -10 8 0 12 -5 9
-10 -3 -6 3 -10 14 -10 12 0 21 -4 21 -10 0 -5 7 -10 15 -10 8 0 15 -4 15 -10
0 -5 9 -10 21 -10 11 0 17 -5 14 -10 -3 -5 3 -10 14 -10 12 0 21 -4 21 -10 0
-5 12 -10 26 -10 14 0 23 -4 19 -10 -4 -6 5 -10 19 -10 14 0 26 -4 26 -10 0
-5 11 -10 25 -10 14 0 25 -4 25 -10 0 -5 11 -10 25 -10 14 0 25 -4 25 -10 0
-5 14 -10 30 -10 17 0 30 -4 30 -10 0 -5 16 -10 35 -10 19 0 35 -4 35 -10 0
-5 20 -10 45 -10 25 0 45 -4 45 -10 0 -6 28 -10 64 -10 36 0 68 -4 71 -10 4
-6 112 -10 291 -10 282 0 285 0 308 -22 13 -13 41 -37 62 -55 22 -17 53 -43
69 -57 l30 -26 788 0 787 0 0 -235 c0 -206 -2 -235 -16 -235 -8 0 -12 -4 -9
-10 3 -5 -3 -10 -14 -10 -12 0 -21 -4 -21 -8 0 -5 -8 -17 -18 -28 -10 -10 -24
-38 -31 -62 -12 -36 -12 -48 0 -85 7 -23 26 -54 42 -69 27 -26 36 -28 107 -28
71 0 80 2 107 28 41 37 53 64 53 111 0 42 -11 69 -43 105 -9 11 -17 23 -17 28
0 4 -7 8 -15 8 -8 0 -15 5 -15 10 0 6 -7 10 -15 10 -13 0 -15 37 -15 275 l0
275 -821 0 c-544 0 -818 3 -814 10 3 5 1 10 -5 10 -5 0 -24 14 -42 30 l-31 30
1833 0 1833 0 -31 -30 c-18 -17 -36 -30 -42 -30 -5 0 -10 -4 -10 -10 0 -7
-272 -10 -795 -10 l-796 0 3 -275 c3 -260 2 -275 -15 -275 -10 0 -15 -4 -12
-10 3 -5 -1 -10 -9 -10 -9 0 -16 -4 -16 -10 0 -5 -7 -10 -15 -10 -8 0 -15 -7
-15 -15 0 -8 -4 -15 -10 -15 -5 0 -10 -9 -10 -21 0 -11 -4 -17 -10 -14 -6 4
-10 -17 -10 -55 0 -38 4 -59 10 -55 6 3 10 -1 10 -10 0 -10 14 -30 31 -46 29
-27 36 -29 114 -29 76 0 84 2 101 25 10 14 24 25 31 25 8 0 13 13 13 31 0 17
4 28 10 24 6 -4 10 10 10 35 0 25 -4 39 -10 35 -6 -3 -10 5 -10 19 0 24 -51
86 -71 86 -5 0 -9 5 -9 10 0 6 -6 10 -12 10 -10 0 -13 52 -11 232 l2 233 762
3 762 2 31 24 c17 14 50 42 73 63 86 79 47 72 415 77 342 4 456 11 472 27 6 5
29 9 53 9 24 0 43 5 43 10 0 6 16 10 35 10 19 0 35 5 35 10 0 6 14 10 30 10
17 0 30 5 30 10 0 6 11 10 25 10 14 0 25 5 25 10 0 6 11 10 25 10 14 0 25 5
25 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 12 10 26 10 14 0 23 4 19 10 -3 6 3
10 14 10 12 0 21 5 21 10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 7 10 15 10 8 0
15 5 15 10 0 6 9 10 21 10 11 0 17 5 14 10 -3 6 1 10 9 10 9 0 16 5 16 10 0 6
7 10 15 10 8 0 15 5 15 10 0 6 4 10 8 10 26 0 293 266 323 322 7 13 20 30 31
39 10 9 18 22 18 28 0 7 6 19 13 26 30 34 35 43 30 49 -4 3 -2 6 4 6 5 0 18
20 29 45 10 25 22 45 26 45 4 0 8 9 8 20 0 11 5 20 10 20 6 0 10 9 10 20 0 11
5 20 10 20 6 0 10 14 10 30 0 17 5 30 10 30 6 0 10 14 10 30 0 17 5 30 10 30
6 0 10 14 10 30 0 17 5 30 10 30 6 0 10 18 10 40 0 22 5 40 10 40 6 0 10 25
10 55 0 30 5 55 10 55 6 0 10 150 11 428 0 235 3 421 6 415 3 -10 46 -13 164
-13 99 0 159 -4 159 -10 0 -6 62 -10 165 -10 103 0 165 -4 165 -10 0 -6 60
-10 160 -10 121 0 160 -3 160 -12 0 -9 4 -8 10 2 13 20 13 60 0 60 -6 0 -10
28 -10 65 0 37 -4 65 -10 65 -6 0 -10 28 -10 65 0 37 -4 65 -10 65 -6 0 -10
28 -10 64 0 36 -4 68 -10 71 -5 3 -10 37 -10 76 0 67 -1 69 -25 69 -13 0 -40
-9 -60 -20 -20 -11 -42 -20 -50 -20 -8 0 -15 -4 -15 -10 0 -5 -9 -10 -20 -10
-11 0 -20 -4 -20 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -10 0 -5 -9 -10
-20 -10 -11 0 -20 -4 -20 -10 0 -5 -11 -10 -25 -10 -14 0 -25 -4 -25 -10 0 -5
-9 -10 -20 -10 -11 0 -20 -4 -20 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20
-10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -10 0 -5 -9 -10 -19 -10 -11 0 -21
-5 -23 -12 -2 -6 -10 -9 -18 -6 -8 2 5 16 33 34 26 16 47 32 47 37 0 4 7 7 15
7 8 0 15 5 15 10 0 6 7 10 15 10 8 0 15 5 15 10 0 6 6 10 13 10 7 0 19 9 27
20 8 11 20 20 27 20 7 0 13 5 13 10 0 6 7 10 15 10 8 0 15 5 15 10 0 6 7 10
15 10 8 0 15 5 15 10 0 6 7 10 15 10 8 0 15 5 15 10 0 6 7 10 16 10 8 0 12 5
9 10 -3 6 3 10 15 10 12 0 18 5 15 10 -3 6 1 10 9 10 9 0 16 5 16 10 0 6 7 10
15 10 8 0 15 5 15 10 0 6 4 10 10 10 9 0 19 7 78 58 15 12 49 37 76 54 l49 32
-7 80 c-3 45 -10 82 -16 84 -5 2 -10 17 -10 33 0 16 -4 29 -10 29 -5 0 -10 18
-10 40 0 22 -4 40 -10 40 -5 0 -10 16 -10 36 0 21 -4 33 -10 29 -6 -4 -10 10
-10 34 0 22 -4 43 -10 46 -5 3 -10 22 -10 41 0 21 -4 33 -10 29 -6 -4 -10 10
-10 34 0 23 -4 41 -10 41 -5 0 -10 16 -10 36 0 21 -4 33 -10 29 -6 -4 -10 10
-10 34 0 23 -4 41 -10 41 -5 0 -10 17 -10 38 0 74 -42 83 -83 17z m-6987
-1255 c14 -11 31 -20 38 -20 6 0 12 -4 12 -10 0 -5 5 -10 11 -10 5 0 37 -18
69 -40 32 -22 63 -40 67 -40 5 0 20 -11 35 -25 15 -14 32 -25 38 -25 5 0 10
-4 10 -10 0 -5 9 -10 21 -10 11 0 17 -4 14 -10 -3 -5 3 -10 14 -10 12 0 21 -4
21 -10 0 -5 7 -10 15 -10 8 0 15 -4 15 -10 0 -5 9 -10 21 -10 11 0 17 -4 14
-10 -3 -5 3 -10 14 -10 12 0 21 -4 21 -10 0 -5 7 -10 15 -10 8 0 15 -4 15 -10
0 -5 7 -10 15 -10 8 0 15 -4 15 -10 0 -5 9 -10 20 -10 11 0 20 -4 20 -10 0 -5
7 -10 15 -10 8 0 15 -4 15 -10 0 -5 7 -10 15 -10 8 0 15 -4 15 -8 0 -5 16 -14
35 -22 19 -8 35 -17 35 -22 0 -4 7 -8 15 -8 8 0 15 -4 15 -8 0 -5 16 -14 35
-22 19 -8 35 -17 35 -22 0 -4 6 -8 14 -8 8 0 16 -3 18 -7 4 -10 57 -42 81 -50
9 -3 17 -9 17 -14 0 -5 5 -9 11 -9 6 0 40 -20 76 -45 35 -25 69 -45 74 -45 6
0 7 -4 4 -10 -3 -5 3 -10 14 -10 12 0 21 -4 21 -10 0 -5 7 -10 15 -10 8 0 15
-4 15 -10 0 -5 9 -10 21 -10 11 0 17 -4 14 -10 -3 -5 3 -10 14 -10 12 0 21 -4
21 -10 0 -5 7 -10 15 -10 8 0 15 -4 15 -10 0 -5 7 -10 15 -10 8 0 15 -4 15
-10 0 -5 9 -10 20 -10 11 0 20 -4 20 -10 0 -5 7 -10 15 -10 8 0 15 -4 15 -10
0 -5 7 -10 15 -10 8 0 15 -4 15 -10 0 -5 9 -10 19 -10 32 0 33 -29 1 -63 -17
-18 -52 -56 -79 -84 -28 -29 -55 -53 -61 -53 -6 0 -8 -4 -5 -10 3 -5 -1 -10
-9 -10 -9 0 -16 -4 -16 -10 0 -5 -7 -10 -15 -10 -8 0 -15 -4 -15 -10 0 -5 -6
-10 -14 -10 -8 0 -16 -6 -19 -12 -5 -15 -128 -78 -151 -78 -8 0 -18 -4 -21
-10 -3 -5 -16 -10 -29 -10 -12 0 -26 -4 -31 -9 -34 -31 -372 -33 -450 -2 -11
5 -38 14 -60 20 -58 18 -166 73 -172 88 -3 7 -11 13 -19 13 -8 0 -14 5 -14 10
0 6 -7 10 -15 10 -8 0 -15 5 -15 10 0 6 -5 10 -10 10 -12 0 -160 146 -160 158
0 5 -8 17 -17 28 -25 28 -43 61 -43 79 0 8 -4 15 -10 15 -5 0 -10 9 -10 20 0
11 -4 20 -10 20 -5 0 -10 12 -10 26 0 14 -4 23 -10 19 -6 -4 -10 8 -10 30 0
22 -4 34 -10 30 -9 -5 -15 15 -11 38 1 4 -6 30 -15 57 -20 62 -17 287 4 313 8
9 13 24 12 34 -4 35 0 54 10 48 6 -4 10 8 10 30 0 22 4 34 10 30 6 -4 10 5 10
19 0 14 5 26 10 26 6 0 10 12 10 26 0 14 4 23 10 19 6 -3 10 3 10 14 0 26 18
26 50 1z m4495 -60 c14 -27 25 -56 25 -65 0 -8 5 -15 10 -15 6 0 10 -13 10
-29 0 -17 5 -33 10 -36 6 -3 10 -24 10 -45 0 -21 5 -42 10 -45 6 -4 10 -65 10
-150 0 -85 -4 -146 -10 -150 -5 -3 -10 -24 -10 -45 0 -21 -4 -42 -10 -45 -5
-3 -10 -15 -10 -26 0 -10 -4 -28 -10 -39 -5 -11 -14 -29 -20 -40 -5 -11 -10
-27 -10 -35 0 -8 -4 -15 -9 -15 -5 0 -14 -13 -21 -30 -7 -16 -16 -30 -21 -30
-5 0 -9 -7 -9 -15 0 -17 -7 -25 -99 -122 -33 -35 -64 -63 -68 -63 -5 0 -15 -9
-23 -20 -24 -34 -196 -130 -232 -130 -10 0 -18 -4 -18 -9 0 -5 -17 -12 -37
-15 -21 -4 -65 -11 -98 -17 -99 -18 -327 -10 -349 12 -6 5 -20 9 -33 9 -13 0
-31 4 -41 9 -9 5 -29 14 -44 20 -60 24 -85 37 -135 70 -29 18 -53 38 -53 42 0
5 -7 9 -16 9 -8 0 -12 5 -9 10 3 6 1 10 -5 10 -6 0 -38 28 -73 63 -88 88 -117
137 -82 137 8 0 15 5 15 10 0 6 7 10 15 10 8 0 15 5 15 10 0 6 9 10 20 10 11
0 20 5 20 10 0 6 7 10 15 10 8 0 15 5 15 10 0 6 7 10 15 10 8 0 15 5 15 10 0
6 9 10 20 10 11 0 20 5 20 10 0 6 7 10 15 10 8 0 15 5 15 10 0 6 7 10 15 10 8
0 15 5 15 10 0 6 9 10 21 10 11 0 17 5 14 10 -3 6 3 10 14 10 12 0 21 5 21 10
0 6 7 10 15 10 8 0 15 5 15 10 0 6 9 10 21 10 11 0 17 5 14 10 -3 6 0 10 9 10
8 0 16 3 18 8 4 10 116 82 128 82 5 0 10 4 10 9 0 5 8 11 18 14 23 8 76 40 80
50 2 4 10 7 18 7 8 0 14 4 14 8 0 5 16 14 35 22 19 8 35 17 35 22 0 4 7 8 15
8 8 0 15 5 15 10 0 6 7 10 15 10 8 0 15 5 15 10 0 6 9 10 20 10 11 0 20 5 20
10 0 6 7 10 15 10 8 0 15 5 15 10 0 6 7 10 15 10 8 0 15 5 15 10 0 6 9 10 20
10 11 0 20 5 20 10 0 6 7 10 15 10 8 0 15 5 15 10 0 6 7 10 15 10 8 0 15 5 15
10 0 6 9 10 20 10 11 0 20 5 20 10 0 6 7 10 15 10 8 0 15 5 15 10 0 6 7 10 15
10 8 0 15 5 15 10 0 6 9 10 21 10 11 0 17 5 14 10 -3 6 3 10 14 10 12 0 21 5
21 10 0 6 5 10 10 10 6 0 21 9 33 21 12 11 36 28 52 36 17 9 32 19 35 22 3 3
15 12 28 19 12 6 32 18 45 25 12 6 24 15 27 18 4 5 18 12 37 18 2 1 14 -21 28
-49z m-2392 -3152 c30 -32 31 -58 3 -90 -26 -31 -77 -38 -102 -14 -17 18 -19
92 -1 111 19 22 75 18 100 -7z m347 12 c0 -5 6 -10 13 -10 9 0 14 -16 16 -46
2 -54 -15 -73 -67 -74 -35 0 -51 11 -71 48 -12 22 -5 47 23 78 13 16 86 19 86
4z"
                  />
                  <path
                    d="M1593 5163 c-13 -2 -23 -9 -23 -14 0 -5 -4 -9 -10 -9 -15 0 -50 -33
-50 -47 0 -7 -4 -13 -10 -13 -6 0 -10 -28 -10 -65 0 -55 4 -68 24 -88 53 -53
82 -67 140 -67 31 0 56 5 56 10 0 6 6 10 13 10 16 1 57 35 57 49 0 6 5 11 10
11 6 0 10 8 10 18 0 16 33 17 582 15 319 -2 583 -5 586 -8 3 -3 16 -5 29 -5
12 0 23 -4 23 -10 0 -5 9 -10 20 -10 11 0 20 -4 20 -10 0 -5 11 -10 25 -10 14
0 25 -4 25 -10 0 -5 9 -10 19 -10 11 0 23 -4 26 -10 3 -5 15 -10 26 -10 10 0
19 -4 19 -10 0 -5 7 -10 15 -10 8 0 23 -4 33 -9 25 -13 84 -39 240 -106 23
-11 42 -22 42 -27 0 -4 12 -8 26 -8 14 0 23 -4 19 -10 -4 -6 5 -10 19 -10 14
0 26 -4 26 -10 0 -5 12 -10 26 -10 14 0 23 -4 19 -10 -4 -6 5 -10 19 -10 14 0
26 -4 26 -10 0 -5 11 -10 25 -10 14 0 25 -4 25 -10 0 -5 12 -10 26 -10 14 0
23 -4 19 -10 -4 -6 5 -10 19 -10 14 0 26 -4 26 -10 0 -5 11 -10 25 -10 14 0
25 -4 25 -10 0 -5 9 -10 20 -10 11 0 20 -4 20 -10 0 -5 11 -10 25 -10 14 0 25
-4 25 -10 0 -5 11 -10 25 -10 14 0 25 -4 25 -10 0 -5 9 -10 19 -10 11 0 23 -4
26 -10 3 -5 15 -10 26 -10 10 0 19 -4 19 -10 0 -5 11 -10 25 -10 14 0 25 -4
25 -10 0 -5 9 -10 19 -10 11 0 23 -4 26 -10 3 -5 15 -10 26 -10 10 0 19 -4 19
-10 0 -5 7 -10 15 -10 8 0 23 -4 33 -9 9 -5 40 -19 67 -31 28 -12 58 -26 67
-31 24 -12 85 -11 93 1 3 6 15 10 26 10 10 0 19 5 19 10 0 6 9 10 19 10 11 0
23 5 26 10 3 6 15 10 26 10 10 0 19 5 19 10 0 6 7 10 15 10 8 0 24 4 35 10 11
6 29 15 40 20 11 6 27 10 35 10 8 0 15 5 15 10 0 6 9 10 19 10 11 0 23 5 26
10 3 6 15 10 26 10 10 0 19 5 19 10 0 6 11 10 25 10 14 0 25 5 25 10 0 6 9 10
20 10 11 0 20 5 20 10 0 6 11 10 25 10 14 0 25 5 25 10 0 6 11 10 25 10 14 0
25 5 25 10 0 6 12 10 26 10 14 0 23 4 19 10 -4 6 5 10 19 10 14 0 26 5 26 10
0 6 11 10 25 10 14 0 25 5 25 10 0 6 12 10 26 10 14 0 23 4 19 10 -4 6 5 10
19 10 14 0 26 5 26 10 0 6 12 10 26 10 14 0 23 4 19 10 -4 6 7 10 25 10 18 0
29 4 25 10 -4 6 5 10 19 10 14 0 26 4 26 8 0 5 28 21 63 36 108 48 152 68 169
77 10 5 25 9 33 9 8 0 15 5 15 10 0 6 9 10 19 10 11 0 23 5 26 10 3 6 15 10
26 10 10 0 19 5 19 10 0 6 11 10 25 10 14 0 25 5 25 10 0 6 9 10 19 10 11 0
23 5 26 10 3 6 15 10 26 10 10 0 19 5 19 10 0 6 11 10 23 10 13 0 26 2 29 5 3
3 264 7 580 8 584 2 598 1 598 -33 0 -13 37 -50 68 -67 26 -15 132 -17 132 -3
0 6 6 10 13 10 19 0 67 45 67 63 0 9 5 19 10 22 6 3 10 26 10 51 0 24 -4 44
-10 44 -5 0 -10 7 -10 16 0 27 -69 82 -110 89 -43 7 -110 -3 -110 -16 0 -5 -5
-9 -11 -9 -14 0 -36 -26 -49 -57 l-10 -23 -599 0 c-389 0 -602 -4 -606 -10 -3
-5 -15 -10 -26 -10 -10 0 -19 -4 -19 -10 0 -5 -9 -10 -19 -10 -11 0 -23 -4
-26 -10 -3 -5 -15 -10 -26 -10 -10 0 -19 -4 -19 -10 0 -5 -11 -10 -25 -10 -14
0 -25 -4 -25 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -10 0 -5 -11 -10 -25
-10 -14 0 -25 -4 -25 -10 0 -5 -11 -10 -25 -10 -14 0 -25 -4 -25 -10 0 -5 -9
-10 -20 -10 -11 0 -20 -4 -20 -10 0 -5 -11 -10 -25 -10 -14 0 -25 -4 -25 -10
0 -5 -12 -10 -26 -10 -14 0 -23 -4 -19 -10 4 -6 -5 -10 -19 -10 -14 0 -26 -4
-26 -10 0 -5 -12 -10 -26 -10 -14 0 -23 -4 -19 -10 4 -6 -7 -10 -25 -10 -18 0
-29 -4 -25 -10 4 -6 -5 -10 -19 -10 -14 0 -26 -4 -26 -10 0 -5 -9 -10 -20 -10
-11 0 -20 -4 -20 -8 0 -5 -19 -16 -42 -26 -24 -10 -63 -27 -88 -38 -25 -11
-54 -24 -65 -28 -24 -9 -113 -48 -137 -61 -10 -5 -25 -9 -33 -9 -8 0 -15 -4
-15 -10 0 -5 -9 -10 -19 -10 -11 0 -23 -4 -26 -10 -3 -5 -15 -10 -26 -10 -10
0 -19 -4 -19 -10 0 -5 -11 -10 -25 -10 -14 0 -25 -4 -25 -10 0 -5 -9 -10 -20
-10 -11 0 -20 -4 -20 -10 0 -5 -11 -10 -25 -10 -14 0 -25 -4 -25 -10 0 -5 -11
-10 -25 -10 -14 0 -25 -4 -25 -10 0 -5 -9 -10 -20 -10 -11 0 -20 -4 -20 -10 0
-5 -11 -10 -25 -10 -14 0 -25 -4 -25 -10 0 -5 -11 -10 -25 -10 -14 0 -25 -4
-25 -10 0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 -9 10 -20 10 -11 0 -20 5
-20 10 0 6 -11 10 -25 10 -14 0 -25 5 -25 10 0 6 -11 10 -25 10 -14 0 -25 5
-25 10 0 6 -9 10 -19 10 -11 0 -23 5 -26 10 -3 6 -15 10 -26 10 -10 0 -19 5
-19 10 0 6 -11 10 -25 10 -14 0 -25 5 -25 10 0 6 -9 10 -20 10 -11 0 -20 5
-20 10 0 6 -11 10 -25 10 -14 0 -25 5 -25 10 0 6 -9 10 -19 10 -11 0 -23 5
-26 10 -3 6 -15 10 -26 10 -10 0 -19 5 -19 10 0 6 -7 10 -15 10 -8 0 -23 4
-33 9 -9 5 -37 18 -62 29 -25 11 -80 36 -123 56 -43 20 -82 36 -88 36 -5 0 -9
5 -9 10 0 6 -9 10 -20 10 -11 0 -20 5 -20 10 0 6 -11 10 -25 10 -14 0 -25 5
-25 10 0 6 -12 10 -26 10 -14 0 -23 4 -19 10 4 6 -5 10 -19 10 -14 0 -26 5
-26 10 0 6 -11 10 -25 10 -14 0 -25 5 -25 10 0 6 -12 10 -26 10 -14 0 -23 4
-19 10 4 6 -5 10 -19 10 -14 0 -26 5 -26 10 0 6 -11 10 -25 10 -14 0 -25 5
-25 10 0 6 -9 10 -20 10 -11 0 -20 5 -20 10 0 6 -11 10 -25 10 -14 0 -25 5
-25 10 0 6 -11 10 -25 10 -14 0 -25 5 -25 10 0 6 -9 10 -20 10 -11 0 -20 5
-20 10 0 6 -11 10 -25 10 -14 0 -25 5 -25 10 0 6 -9 10 -19 10 -11 0 -23 5
-26 10 -3 6 -15 10 -26 10 -10 0 -19 5 -19 10 0 7 -207 10 -600 10 -548 0
-600 1 -600 16 0 20 -42 58 -87 79 -30 14 -72 17 -120 8z m113 -97 c23 -24 18
-79 -11 -104 -26 -22 -75 -30 -75 -12 0 6 -5 10 -11 10 -7 0 -18 8 -25 18 -15
20 -18 62 -5 62 5 0 13 9 16 20 5 16 15 20 51 20 26 0 52 -6 60 -14z m5689 0
c24 -24 24 -106 0 -106 -8 0 -15 -4 -15 -10 0 -15 -59 -12 -75 3 -16 16 -24
100 -10 115 14 16 84 15 100 -2z"
                  />
                  <path
                    d="M940 4770 c0 -5 -11 -10 -25 -10 -14 0 -25 -4 -25 -10 0 -5 -5 -10
-11 -10 -6 0 -25 -6 -42 -14 -18 -7 -48 -19 -67 -26 -61 -21 -121 -45 -152
-61 -27 -14 -36 -11 -68 19 -58 56 -133 59 -205 9 -43 -30 -45 -34 -45 -118 0
-71 2 -79 28 -105 40 -42 66 -54 117 -54 51 0 75 11 122 57 25 24 33 39 33 67
0 29 4 36 20 36 11 0 20 5 20 10 0 6 14 10 30 10 17 0 30 5 30 10 0 6 11 10
25 10 14 0 25 5 25 10 0 6 14 10 31 10 17 0 28 4 24 10 -4 6 7 10 24 10 17 0
31 5 31 10 0 6 14 10 31 10 17 0 28 4 24 10 -4 7 341 10 1027 10 791 0 1037 3
1046 12 16 16 15 66 -2 84 -12 12 -163 14 -1030 14 -671 0 -1016 -3 -1016 -10z
m-443 -175 c24 -25 23 -76 -3 -102 -30 -30 -69 -29 -99 2 -48 48 -20 115 48
115 21 0 45 -7 54 -15z"
                  />
                  <path
                    d="M6012 4764 c-7 -8 -12 -31 -10 -52 l3 -37 1043 -3 c689 -1 1041 -5
1037 -12 -4 -6 7 -10 24 -10 17 0 31 -4 31 -10 0 -5 14 -10 31 -10 17 0 28 -4
24 -10 -4 -6 7 -10 24 -10 17 0 31 -4 31 -10 0 -5 11 -10 25 -10 14 0 25 -4
25 -10 0 -5 14 -10 30 -10 17 0 30 -4 30 -10 0 -5 7 -10 15 -10 11 0 15 -11
15 -35 0 -27 8 -44 35 -70 19 -19 39 -35 45 -35 5 0 10 -4 10 -10 0 -6 27 -10
60 -10 33 0 60 4 60 10 0 6 6 10 13 10 8 0 27 15 44 33 78 86 34 226 -79 255
-34 9 -50 7 -90 -8 -26 -10 -56 -28 -66 -40 -15 -18 -22 -20 -38 -12 -24 12
-54 25 -129 52 -33 12 -74 29 -92 36 -17 8 -36 14 -42 14 -6 0 -11 5 -11 10 0
6 -15 10 -32 10 -25 0 -29 3 -18 10 10 6 -345 10 -1010 9 -893 0 -1027 -2
-1038 -15z m2584 -168 c25 -25 16 -106 -12 -106 -8 0 -14 -4 -14 -10 0 -18
-49 -10 -75 12 -28 24 -34 78 -12 103 16 19 94 19 113 1z"
                  />
                  <path
                    d="M648 1691 c-65 -33 -88 -70 -88 -142 0 -72 18 -101 84 -138 38 -22
116 -29 116 -11 0 6 7 10 16 10 9 0 29 14 44 30 28 30 63 39 75 20 3 -5 19
-10 36 -10 16 0 29 -4 29 -10 0 -5 13 -10 29 -10 17 0 33 -4 36 -10 3 -5 19
-10 35 -10 16 0 32 -4 35 -10 3 -5 19 -10 36 -10 16 0 29 -4 29 -10 0 -5 13
-10 29 -10 17 0 33 -4 36 -10 3 -5 19 -10 35 -10 16 0 32 -4 35 -10 3 -5 17
-10 30 -10 13 0 27 -4 30 -10 3 -5 17 -10 31 -10 13 0 32 -4 42 -9 9 -5 51
-19 92 -31 41 -12 88 -28 103 -36 16 -8 40 -14 53 -14 14 0 22 -4 19 -10 -4
-6 8 -10 29 -10 20 0 36 -4 36 -10 0 -5 16 -10 36 -10 21 0 33 -4 29 -10 -4
-6 10 -10 35 -10 25 0 39 -4 35 -10 -4 -6 8 -10 29 -10 20 0 36 -4 36 -10 0
-5 16 -10 36 -10 21 0 33 -4 29 -10 -4 -6 10 -10 35 -10 25 0 39 -4 35 -10 -4
-6 8 -10 29 -10 20 0 36 -4 36 -10 0 -7 280 -10 820 -10 l820 0 0 40 0 40
-799 0 c-523 0 -802 3 -806 10 -3 6 -17 10 -31 10 -13 0 -32 4 -42 9 -19 10
-132 45 -174 55 -16 4 -28 11 -28 16 0 6 -13 10 -30 10 -16 0 -30 5 -30 10 0
6 -16 10 -36 10 -21 0 -33 4 -29 10 4 6 -10 10 -35 10 -25 0 -39 4 -35 10 4 6
-8 10 -29 10 -20 0 -36 5 -36 10 0 6 -16 10 -35 10 -19 0 -35 5 -35 10 0 6
-16 10 -36 10 -21 0 -33 4 -29 10 4 6 -8 10 -29 10 -20 0 -36 5 -36 10 0 6
-16 10 -35 10 -19 0 -35 5 -35 10 0 6 -16 10 -35 10 -19 0 -35 5 -35 10 0 6
-13 10 -30 10 -16 0 -30 5 -30 10 0 6 -16 10 -35 10 -19 0 -35 5 -35 10 0 6
-13 10 -29 10 -17 0 -33 5 -36 10 -3 6 -19 10 -36 10 -16 0 -29 5 -29 10 0 6
-16 10 -35 10 -19 0 -35 5 -35 10 0 6 -13 10 -29 10 -17 0 -33 5 -36 10 -3 6
-17 10 -29 10 -19 0 -25 7 -31 37 -7 40 -52 91 -98 111 -39 17 -75 14 -119 -7z
m117 -91 c-3 -5 -1 -10 5 -10 7 0 10 -16 8 -42 -2 -33 -8 -45 -25 -53 -13 -5
-23 -13 -23 -17 0 -5 -7 -8 -15 -8 -8 0 -15 5 -15 10 0 6 -8 10 -19 10 -29 0
-47 52 -31 90 12 28 16 30 67 30 34 0 52 -4 48 -10z"
                  />
                  <path
                    d="M8190 1697 c-44 -21 -70 -41 -70 -55 0 -7 -4 -10 -10 -7 -6 4 -10 -5
-10 -20 0 -17 -4 -24 -11 -19 -9 5 -10 -1 -5 -20 6 -23 3 -26 -18 -26 -14 0
-28 -4 -31 -10 -3 -5 -19 -10 -36 -10 -16 0 -29 -4 -29 -10 0 -5 -16 -10 -35
-10 -19 0 -35 -4 -35 -10 0 -5 -13 -10 -29 -10 -17 0 -33 -4 -36 -10 -3 -5
-19 -10 -36 -10 -16 0 -29 -4 -29 -10 0 -5 -16 -10 -35 -10 -19 0 -35 -4 -35
-10 0 -5 -16 -10 -36 -10 -21 0 -33 -4 -29 -10 4 -6 -8 -10 -29 -10 -20 0 -36
-4 -36 -10 0 -5 -16 -10 -35 -10 -19 0 -35 -4 -35 -10 0 -5 -16 -10 -36 -10
-21 0 -33 -4 -29 -10 4 -6 -8 -10 -29 -10 -20 0 -36 -4 -36 -10 0 -5 -16 -10
-36 -10 -21 0 -33 -4 -29 -10 4 -6 -10 -10 -35 -10 -25 0 -39 -4 -35 -10 4 -6
-10 -10 -35 -10 -25 0 -39 -4 -35 -10 4 -6 -8 -10 -29 -10 -20 0 -36 -4 -36
-10 0 -5 -13 -10 -30 -10 -16 0 -30 -4 -30 -10 0 -5 -12 -12 -27 -16 -43 -10
-156 -45 -175 -55 -10 -5 -29 -9 -42 -9 -14 0 -28 -4 -31 -10 -4 -7 -282 -10
-801 -10 l-794 0 0 -40 0 -40 815 0 c537 0 815 3 815 10 0 6 16 10 36 10 21 0
33 4 29 10 -4 6 8 10 29 10 20 0 36 5 36 10 0 6 16 10 35 10 19 0 35 5 35 10
0 6 16 10 36 10 21 0 33 4 29 10 -4 6 10 10 35 10 25 0 39 4 35 10 -4 6 8 10
30 10 22 0 34 4 30 10 -4 6 10 10 35 10 23 0 39 4 36 9 -3 5 7 11 22 14 15 3
52 14 82 25 30 10 75 25 100 32 25 7 54 16 65 20 11 4 40 13 65 20 25 6 53 16
62 21 10 5 29 9 42 9 14 0 28 5 31 10 3 6 19 10 36 10 16 0 29 5 29 10 0 6 13
10 29 10 17 0 33 5 36 10 3 6 19 10 36 10 16 0 29 5 29 10 0 6 16 10 35 10 19
0 35 5 35 10 0 6 14 10 30 10 17 0 30 5 30 10 0 6 14 10 30 10 17 0 30 -4 30
-10 0 -15 42 -50 62 -50 10 0 18 -4 18 -10 0 -5 18 -10 40 -10 58 0 124 41
158 98 14 26 16 112 2 112 -5 0 -10 9 -10 21 0 11 -4 17 -10 14 -5 -3 -10 -1
-10 6 0 25 -83 70 -129 68 -14 0 -37 -6 -51 -12z m120 -117 c16 -38 -2 -90
-31 -90 -11 0 -19 -4 -19 -10 0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 -8
10 -19 10 -29 0 -47 52 -31 90 12 28 16 30 65 30 49 0 53 -2 65 -30z"
                  />
                </g>
              </svg>
            </g>
            {/* </Parallax> */}
          </mask>
        </defs>
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          fill="white"
          mask="url('/#knockout')"
        />
      </svg>
    </ParallaxProvider>
    </React.Fragment>
  )
}

export default IndexPage
