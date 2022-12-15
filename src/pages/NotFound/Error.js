import React from "react";
import "./error.css";

export default function NotFound() {
  return (
    <div id="containerError">
      <div className="textocont">
        <h2 className="titulo404">ERROR 404, ¡Página no encontrada!</h2>
        <p className="texto404">
          La página que estas buscando no existe, por favor vuelve a:
        </p>
        <div class="wrap">
          <button class="button">Inicio</button>
        </div>
      </div>
      <body>
        <svg
          className="jugadorbody"
          width="857"
          height="511"
          viewBox="0 0 857 511"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="857" height="511" />
          <g id="undraw_junior_soccer_6sop 1" clip-path="url(#clip0)">
            <path
              id="Vector"
              d="M384.301 501.338C377.901 501.332 371.604 502.959 366.008 506.065H402.548C396.968 502.96 390.687 501.333 384.301 501.338Z"
              fill="#E6E6E6"
            />
            <path
              id="Vector_2"
              d="M455.206 496.611C444.515 496.599 434.082 499.902 425.346 506.065H485.026C476.302 499.909 465.884 496.606 455.206 496.611Z"
              fill="#E6E6E6"
            />
            <g id="background">
              <path
                id="Vector_3"
                d="M856.85 436.772C854.181 388.36 815.284 348.889 766.912 345.581C744.614 344.014 722.46 350.202 704.202 363.098C685.944 375.993 672.704 394.803 666.726 416.341C665.552 416.299 664.379 416.252 663.195 416.252C642.259 416.256 621.887 423.038 605.127 435.584C588.368 448.13 576.12 465.766 570.218 485.852C556.345 479.757 540.843 478.434 526.138 482.092C511.433 485.75 498.357 494.181 488.956 506.065H791.229C828.365 506.065 858.433 475.306 856.919 438.201C856.9 437.725 856.877 437.249 856.85 436.772Z"
                fill="#97DAEF"
              />
            </g>
            <path
              id="Vector_4"
              d="M849 505.065H0V507.065H849V505.065Z"
              fill="#3F3D56"
            />
            <g id="hand">
              <path
                id="Vector_5"
                d="M283.344 180.239C283.344 180.239 244.809 168.235 250.725 187.984C256.64 207.733 289.098 197.757 289.098 197.757L283.344 180.239Z"
                fill="#FFB8B8"
              />
              <path
                id="Vector_6"
                d="M430.646 106.114C430.646 106.114 410.898 79.1272 391.711 107.143C372.487 135.213 354.613 158.258 354.613 158.258L306.868 173.825L279.245 176.276L286.855 200.834L367.168 189.183C367.168 189.183 456.582 136.069 430.646 106.114Z"
                fill="#2F2E41"
              />
            </g>
            <g id="leg">
              <path
                id="Vector_28"
                d="M342.5 255.565C342.5 255.565 312.5 276.565 314.5 295.565C316.5 314.565 329.5 366.565 329.5 366.565L356.5 362.565C356.5 362.565 359.5 322.565 349.5 307.565L397.5 280.565L342.5 255.565Z"
                fill="#FFB8B8"
              />
              <path
                id="Vector_29"
                d="M356.5 357.565L327.5 363.565L332.652 384.748C335.188 395.173 335.477 406.019 333.5 416.565C333.5 416.565 363.5 424.565 363.5 420.565C363.5 416.565 356.5 400.565 358.5 389.565C360.5 378.565 356.5 357.565 356.5 357.565Z"
                fill="#F50057"
              />
              <path
                id="Vector_30"
                d="M371.5 432.565C370.5 428.565 362.192 410.43 361.846 413.497C361.5 416.565 345.5 421.565 339.5 415.565C339.5 415.565 331.5 408.565 328.5 415.565C325.5 422.565 319.5 434.565 319.5 434.565C319.5 434.565 292.5 447.565 296.5 454.565C297.309 455.981 299.55 456.578 302.611 456.631C302.539 456.816 302.501 457.012 302.5 457.211V457.92C302.5 458.356 302.673 458.775 302.982 459.083C303.291 459.392 303.709 459.565 304.146 459.565H304.854C305.291 459.565 305.709 459.392 306.018 459.083C306.327 458.775 306.5 458.356 306.5 457.92V457.211C306.498 456.956 306.437 456.704 306.32 456.477C307.138 456.406 307.987 456.311 308.859 456.196C308.628 456.484 308.501 456.842 308.5 457.211V457.92C308.5 458.356 308.673 458.775 308.982 459.083C309.291 459.392 309.709 459.565 310.146 459.565H310.854C311.291 459.565 311.709 459.392 312.018 459.083C312.327 458.775 312.5 458.356 312.5 457.92V457.211C312.499 456.918 312.42 456.63 312.27 456.378C312.12 456.126 311.906 455.919 311.649 455.778C313.951 455.394 316.353 454.905 318.742 454.364C318.585 454.619 318.501 454.912 318.5 455.211V455.92C318.5 456.356 318.673 456.775 318.982 457.083C319.291 457.392 319.709 457.565 320.146 457.565H320.854C321.291 457.565 321.709 457.392 322.018 457.083C322.327 456.775 322.5 456.356 322.5 455.92V455.211C322.5 454.893 322.407 454.582 322.234 454.315C322.06 454.048 321.813 453.838 321.522 453.709C323.313 453.272 325.069 452.817 326.74 452.366C326.584 452.62 326.501 452.912 326.5 453.211V453.92C326.5 454.356 326.673 454.775 326.982 455.083C327.291 455.392 327.709 455.565 328.146 455.565H328.854C329.291 455.565 329.709 455.392 330.018 455.083C330.327 454.775 330.5 454.356 330.5 453.92V453.211C330.499 452.861 330.386 452.52 330.178 452.239C329.97 451.958 329.677 451.75 329.343 451.647C335.215 449.993 339.5 448.565 339.5 448.565C339.5 448.565 344.476 446.755 350.5 444.309V444.92C350.5 445.356 350.673 445.775 350.982 446.083C351.291 446.392 351.709 446.565 352.146 446.565H352.854C353.291 446.565 353.709 446.392 354.018 446.083C354.327 445.775 354.5 445.356 354.5 444.92V444.211C354.499 443.961 354.442 443.715 354.331 443.492C354.221 443.268 354.061 443.072 353.864 442.92C355.073 442.411 356.293 441.889 357.5 441.357V441.92C357.5 442.356 357.673 442.775 357.982 443.083C358.291 443.392 358.709 443.565 359.146 443.565H359.854C360.291 443.565 360.709 443.392 361.018 443.083C361.327 442.775 361.5 442.356 361.5 441.92V441.211C361.5 440.946 361.436 440.685 361.313 440.451C361.19 440.216 361.013 440.015 360.796 439.864C362.101 439.255 363.357 438.647 364.516 438.051C364.511 438.105 364.5 438.156 364.5 438.211V438.92C364.5 439.356 364.673 439.775 364.982 440.083C365.291 440.392 365.709 440.565 366.146 440.565H366.854C367.291 440.565 367.709 440.392 368.018 440.083C368.327 439.775 368.5 439.356 368.5 438.92V438.211C368.5 437.832 368.369 437.464 368.129 437.17C367.889 436.876 367.555 436.674 367.183 436.598C369.979 434.975 371.742 433.534 371.5 432.565Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_31"
                d="M336.233 384.459C336.233 384.459 341.65 375.152 347.112 377.615C352.574 380.077 356.091 381.953 356.091 381.953C356.091 381.953 341.392 378.177 336.233 384.459Z"
                fill="#2F2E41"
              />
            </g>
            <path
              id="Vector_7"
              d="M409 305.065C409 305.065 407 342.065 412 357.065C417 372.065 422 428.065 422 428.065H450C450 428.065 463 379.065 447 357.065C447 357.065 442 328.065 456 314.065L409 305.065Z"
              fill="#FFB8B8"
            />
            <path
              id="Vector_8"
              d="M402.5 202.565C402.5 202.565 337.5 243.565 337.5 256.565L389.5 299.565L407.5 279.565L405.5 309.565L461.5 320.565C461.5 320.565 481.5 244.565 480.5 241.565C479.5 238.565 476.5 194.565 476.5 194.565L402.5 202.565Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_9"
              d="M452 423.565L420.32 421.565C420.32 421.565 422.24 454.565 418.4 465.565C414.56 476.565 416.48 480.565 416.48 480.565L444.32 482.565L452 423.565Z"
              fill="#F50057"
            />
            <path
              id="Vector_10"
              d="M452.39 496.5C452.246 492.379 447.901 472.91 446.924 475.838C445.946 478.766 429.255 480.32 424.638 473.201C424.638 473.201 418.273 464.687 413.879 470.908C409.486 477.128 401.116 487.614 401.116 487.614C401.116 487.614 371.999 494.698 374.451 502.378C374.947 503.932 377.015 504.983 379.997 505.672C379.888 505.838 379.81 506.023 379.768 506.217L379.62 506.91C379.529 507.337 379.611 507.782 379.849 508.148C380.086 508.515 380.459 508.772 380.886 508.863L381.579 509.01C382.006 509.101 382.452 509.019 382.818 508.782C383.184 508.544 383.441 508.171 383.532 507.744L383.68 507.051C383.731 506.801 383.723 506.542 383.657 506.296C384.472 506.396 385.321 506.481 386.198 506.55C385.912 506.784 385.714 507.107 385.636 507.468L385.488 508.161C385.397 508.588 385.479 509.033 385.717 509.4C385.954 509.766 386.327 510.023 386.754 510.114L387.447 510.261C387.874 510.352 388.32 510.27 388.686 510.033C389.052 509.795 389.309 509.422 389.4 508.995L389.548 508.302C389.608 508.015 389.59 507.717 389.497 507.44C389.403 507.162 389.236 506.915 389.014 506.723C391.345 506.827 393.797 506.85 396.246 506.819C396.039 507.035 395.896 507.304 395.833 507.597L395.685 508.29C395.594 508.717 395.676 509.162 395.914 509.529C396.151 509.895 396.525 510.152 396.951 510.243L397.644 510.39C398.071 510.481 398.517 510.399 398.883 510.162C399.249 509.924 399.506 509.551 399.597 509.124L399.745 508.431C399.811 508.12 399.785 507.796 399.671 507.499C399.557 507.202 399.359 506.945 399.101 506.758C400.944 506.705 402.757 506.625 404.485 506.532C404.28 506.749 404.137 507.017 404.074 507.309L403.926 508.002C403.835 508.429 403.917 508.874 404.155 509.241C404.392 509.607 404.766 509.864 405.193 509.955L405.886 510.102C406.312 510.193 406.758 510.111 407.124 509.874C407.49 509.636 407.747 509.263 407.838 508.836L407.986 508.143C408.058 507.8 408.019 507.444 407.874 507.125C407.729 506.807 407.486 506.543 407.18 506.372C413.269 505.979 417.757 505.476 417.757 505.476C417.757 505.476 423 504.743 429.403 503.607L429.275 504.204C429.184 504.631 429.266 505.076 429.504 505.442C429.741 505.809 430.115 506.066 430.542 506.157L431.235 506.304C431.661 506.395 432.107 506.313 432.473 506.076C432.839 505.838 433.096 505.465 433.187 505.038L433.335 504.345C433.386 504.101 433.381 503.848 433.32 503.606C433.259 503.364 433.143 503.14 432.982 502.949C434.271 502.704 435.573 502.448 436.864 502.179L436.747 502.729C436.656 503.156 436.738 503.602 436.976 503.968C437.213 504.334 437.586 504.591 438.013 504.682L438.706 504.83C439.133 504.921 439.579 504.838 439.945 504.601C440.311 504.363 440.568 503.99 440.659 503.563L440.807 502.87C440.862 502.611 440.853 502.343 440.782 502.088C440.711 501.833 440.58 501.599 440.399 501.406C441.802 501.083 443.158 500.75 444.415 500.409C444.399 500.46 444.378 500.508 444.366 500.562L444.219 501.255C444.128 501.682 444.21 502.127 444.447 502.493C444.685 502.86 445.058 503.116 445.485 503.207L446.178 503.355C446.605 503.446 447.05 503.364 447.417 503.126C447.783 502.889 448.04 502.516 448.131 502.089L448.278 501.396C448.357 501.025 448.306 500.638 448.132 500.3C447.959 499.963 447.674 499.696 447.327 499.544C450.4 498.539 452.425 497.498 452.39 496.5Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_11"
              d="M428.5 40.5652C428.5 40.5652 444.5 60.5652 452.5 59.5652L417.5 86.5652C417.5 86.5652 413.5 69.5652 408.5 67.5652C403.5 65.5652 428.5 40.5652 428.5 40.5652Z"
              fill="#FFB8B8"
            />
            <path
              id="Vector_12"
              d="M491 189.065C491 189.065 490.998 78.7189 472.487 69.2134C453.987 59.7134 441.749 54.2913 441.749 54.2913C441.477 57.9121 440.448 61.4353 438.729 64.6335C437.01 67.8318 434.639 70.6337 431.769 72.8584C425.635 77.5941 419.524 81.5209 416.11 81.5335L416 81.0652L415.584 79.8764L405.5 95.5652C405.5 95.5652 396.5 97.5652 393.5 103.565C391.877 106.811 399.531 139.488 395 169.065C391.156 194.159 374.959 216.811 374.5 219.565C373.724 224.221 393.41 212.023 402.275 206.321C402.407 206.468 402.5 206.565 402.5 206.565C402.5 206.565 397.5 208.565 407.5 205.565C413.166 203.865 421.077 203.771 426.872 204.008C426.865 205.746 426.906 207.126 427 208.065C428 218.065 478 232.065 485 229.065C492 226.065 491 189.065 491 189.065Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_13"
              d="M456 227.065C456 227.065 426 254.065 446 259.065C466 264.065 474 231.065 474 231.065L456 227.065Z"
              fill="#FFB8B8"
            />
            <path
              id="Vector_14"
              d="M421 297.065C421 297.065 435 284.065 443 291.065C451 298.065 456 303.065 456 303.065C456 303.065 433 289.065 421 297.065Z"
              fill="#F50057"
            />
            <path
              id="Vector_15"
              d="M424.636 452.614C424.636 452.614 432.527 445.286 437.036 449.232C441.545 453.177 444.364 455.995 444.364 455.995C444.364 455.995 431.4 448.105 424.636 452.614Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_16"
              d="M483.444 82.9341C473.531 63.0081 443.369 73.8757 448.27 95.5848C448.344 95.9084 448.42 96.2352 448.5 96.5652C453.666 117.115 462.107 136.699 473.5 154.565L462.5 203.565L450.5 228.565L475.5 234.565L506.5 159.565C506.5 159.565 497.949 112.092 483.444 82.9341Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_17"
              opacity="0.2"
              d="M469 156.065L450 228.065L466 194.065L469 156.065Z"
              fill="black"
            />
            <g id="head">
              <path
                id="Vector_18"
                d="M402.5 72.5652C418.516 72.5652 431.5 59.5815 431.5 43.5652C431.5 27.549 418.516 14.5652 402.5 14.5652C386.484 14.5652 373.5 27.549 373.5 43.5652C373.5 59.5815 386.484 72.5652 402.5 72.5652Z"
                fill="#FFB8B8"
              />
              <path
                id="Vector_19"
                d="M420.713 9.76134C420.713 9.76134 404.683 -7.11515 388.547 3.51302C372.412 14.1412 364.758 24.4654 366.34 31.654C367.922 38.8426 372.604 48.8416 372.604 48.8416C372.604 48.8416 369.694 33.9489 383.055 32.8468C396.415 31.7447 414.874 22.9031 414.874 22.9031L427.359 49.567C427.359 49.567 429.124 43.3881 434.018 45.1603C438.912 46.9326 435.119 11.7381 420.713 9.76134Z"
                fill="#2F2E41"
              />
            </g>
            <g id="football">
              <path
                id="Vector_20"
                d="M318 391.065C317.999 393.598 317.788 396.127 317.37 398.625V398.635C316.222 405.356 313.562 411.727 309.591 417.269C305.62 422.811 300.442 427.379 294.448 430.628C288.454 433.876 281.8 435.72 274.989 436.021C268.178 436.322 261.387 435.072 255.13 432.365H255.12C253.269 431.566 251.474 430.641 249.75 429.595C244.406 426.369 239.79 422.067 236.196 416.963C232.602 411.859 230.107 406.064 228.87 399.945C228.29 397.021 227.999 394.047 228 391.065C228 389.705 228.06 388.355 228.18 387.025V387.015C229.218 375.532 234.624 364.886 243.282 357.272C251.941 349.659 263.192 345.659 274.713 346.099C286.235 346.539 297.148 351.385 305.2 359.637C313.253 367.889 317.831 378.917 317.99 390.445V390.455C318 390.665 318 390.855 318 391.065Z"
                fill="#F50057"
              />
              <path
                id="Vector_21"
                d="M284.077 376.035H263.923L253.845 358.585L260.681 346.737L261.08 346.63C269.733 344.317 278.872 344.573 287.383 347.365L287.745 347.485L294.155 358.585L284.077 376.035ZM265.077 374.035H282.923L291.845 358.585L286.396 349.147C278.488 346.64 270.035 346.4 261.998 348.456L256.155 358.585L265.077 374.035Z"
                fill="white"
              />
              <path
                id="Vector_22"
                d="M283.077 412.036H262.923L252.845 394.582L262.923 377.128H283.077L293.155 394.582L283.077 412.036ZM264.077 410.036H281.923L290.845 394.582L281.923 379.128H264.077L255.155 394.582L264.077 410.036Z"
                fill="white"
              />
              <path
                id="Vector_23"
                d="M273 437.065C266.715 437.077 260.495 435.789 254.731 433.282L253.704 432.836L263.922 415.125H284.077L293.865 432.08L292.893 432.547C286.689 435.537 279.887 437.082 273 437.065ZM256.563 431.882C262.061 434.094 267.95 435.174 273.875 435.057C279.801 434.94 285.642 433.628 291.048 431.2L282.923 417.125H265.078L256.563 431.882Z"
                fill="white"
              />
              <path
                id="Vector_24"
                d="M317.077 394.035H296.923L286.845 376.585L296.922 359.125H306.1L306.396 359.436C314.354 367.809 318.853 378.881 318.99 390.432V390.722L317.077 394.035ZM298.077 392.035H315.923L316.986 390.194C316.793 379.386 312.608 369.032 305.237 361.125H298.078L289.155 376.585L298.077 392.035Z"
                fill="white"
              />
              <path
                id="Vector_25"
                d="M296.645 430.547L286.845 413.585L296.922 396.125H317.076L318.37 398.355L318.356 398.803C317.263 405.171 314.844 411.238 311.256 416.611C307.667 421.984 302.989 426.543 297.524 429.991L296.645 430.547ZM289.155 413.585L297.33 427.733C302.282 424.443 306.518 420.185 309.782 415.215C313.046 410.245 315.272 404.666 316.324 398.814L315.924 398.125H298.078L289.155 413.585Z"
                fill="white"
              />
              <path
                id="Vector_26"
                d="M250.106 430.978L249.233 430.451C243.772 427.15 239.055 422.752 235.382 417.535C231.708 412.318 229.157 406.395 227.89 400.141L227.815 399.771L229.923 396.125H250.078L260.155 413.585L250.106 430.978ZM229.926 400.116C231.141 405.858 233.489 411.299 236.833 416.122C240.177 420.944 244.449 425.051 249.4 428.202L257.845 413.585L248.922 398.125H231.077L229.926 400.116Z"
                fill="white"
              />
              <path
                id="Vector_27"
                d="M250.077 392.035H229.923L227.18 387.294V387.025C228.168 375.693 233.331 365.131 241.669 357.392L241.957 357.125H250.078L260.155 374.585L250.077 392.035ZM231.077 390.035H248.923L257.845 374.585L248.922 359.125H242.746C235.031 366.406 230.22 376.239 229.205 386.799L231.077 390.035Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="856.974" height="510.427" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </body>
    </div>
  );
}
