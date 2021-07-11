import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faJetBackup } from "./custom";
library.add(fab, faJetBackup);
interface Icon {
  icon: IconName;
}
function LiteSpeedIcon(apps: Icon) {
  return (
    <div className=" inline-block h-10 w-24 border-2s border-blackx m-2 pt-0 pr-10 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
      >
        <g>
          <g>
            <path
              fill="#232020"
              d="M63.925,603.719v105.776c0,0.991,0.772,1.838,1.754,1.918c5.575,0.468,11.764,0.468,18.27,0
			c5.312-0.402,11.791-1.165,19.787-2.317c-0.291,1.607-0.437,3.355-0.437,5.24c0,1.607,0.164,3.556,0.479,5.67H40.822V603.745
			c1.201,0.104,2.731,0.48,4.664,0.558c2.938,0.116,5.731,0.135,7.367,0.034l5.664-0.024
			C60.669,604.015,62.455,603.812,63.925,603.719z M139.387,609.508c-3.357,0.199-5.595-0.026-7.21,0.023h-5.663
			c-1.995-0.273-3.523-0.448-4.681-0.558v111.032h21.92V608.95C142.493,609.044,141.078,609.407,139.387,609.508z M161.097,608.87
			c0.211,1.572,0.318,3.145,0.318,4.689c0,2.021-0.101,3.816-0.288,5.342h3.657c10.37-1.313,19.078-1.98,25.761-1.98
			c1.064,0,1.926,0.859,1.926,1.92v101.165h21.262V618.841c0-1.061,0.862-1.92,1.926-1.92c4.856,0,11.807,0.445,20.679,1.323
			c2.241,0.326,4.623,0.528,7.104,0.618c-0.252-1.528-0.252-3.29,0.013-5.255c-0.28-1.574-0.265-3.165,0.046-4.737H161.097z
			 M260.942,608.87v111.136h60.045c-0.3-2.006-0.453-3.834-0.453-5.336c0-1.733,0.131-3.354,0.384-4.846
			c-4.098,0.625-8.65,1.127-13.53,1.462c-5.678,0.447-13.509,0.677-23.268,0.677c-1.063,0-1.917-0.863-1.917-1.932v-42.955
			c0-1.055,0.854-1.922,1.917-1.922h16.068c5.354,0.318,9.662,0.629,13.961,0.94l3.192,0.222c-0.092-0.425-0.198-0.901-0.323-1.415
			l-0.057-7.728c0-0.22,0.03-0.431,0.104-0.617c0.049-0.151,0.096-0.303,0.142-0.445c-5.661,0.699-10.834,0.997-17.02,0.997H284.12
			c-1.063,0-1.917-0.863-1.917-1.924v-36.344c0-1.061,0.854-1.92,1.917-1.92c11.857,0,24.295,0.771,37.02,2.302
			c-0.408-1.758-0.605-3.438-0.605-5.004c0-1.867,0.197-3.664,0.61-5.349H260.942z M411.373,685.854
			c-0.455-13.723-11.015-25.915-31.429-36.126c-15.126-7.798-22.47-15.368-22.47-23.133c0-12.517,7.329-19.389,21.207-19.889
			c9.435,0,16.7,5.06,21.62,15.052c0.52-1.752,1.238-4.004,2.171-6.829c1.135-2.999,2.096-5.511,2.9-7.59
			c-7.254-4.319-15.997-6.729-26.01-7.149c-25.184,1.333-37.889,12.932-38.766,35.455c0,15.179,9.615,27.368,28.598,36.185
			c15.861,7.21,23.899,15.469,23.899,24.533c-1.01,12.733-8.604,19.395-22.575,19.895c-13.826-0.481-22.474-6.98-25.76-19.355
			h-0.244c-0.889,6.729-2.289,13.359-4.181,19.739c8.412,3.179,17.14,5.01,25.973,5.444
			C394.198,722.085,409.594,708.862,411.373,685.854z M448.097,669.861c-0.334,0.024-0.822,0.107-1.218,0.512
			c-0.357,0.343-0.563,0.826-0.563,1.316v48.316h-22.064V608.852h39.746c22.761,0,34.037,8.694,34.458,26.57
			c0.168,9.729-2.507,17.47-7.939,22.999c-7.479,7.619-20.564,11.479-38.896,11.479
			C450.496,669.899,449.361,669.885,448.097,669.861z M447.897,664.263c0.85,0.128,1.766,0.19,2.693,0.19
			c2.711,0,5.836-0.525,9.285-1.559c10.011-2.862,15.572-11.005,16.509-24.319c-0.937-15.014-6.845-23.362-17.672-24.822h-10.551
			c-1.015,0-1.846,0.83-1.846,1.843v46.854C446.316,663.357,446.994,664.137,447.897,664.263z M586.72,608.852v111.154h60.145
			c-0.293-2.02-0.453-3.882-0.453-5.422c0-1.764,0.129-3.419,0.404-4.931c-4.147,0.638-8.729,1.143-13.622,1.483
			c-5.726,0.444-13.318,0.666-23.218,0.666c-1.018,0-1.842-0.826-1.842-1.838v-42.9c0-1.009,0.824-1.838,1.842-1.838h17.812
			c6.685,0.402,12.781,0.788,18.361,1.171c-0.1-0.457-0.202-0.969-0.346-1.529l-0.056-7.694c0-0.209,0.024-0.411,0.099-0.587
			c0.063-0.2,0.127-0.39,0.185-0.567c-5.564,0.664-11.697,1.008-18.243,1.008h-17.812c-1.018,0-1.842-0.83-1.842-1.835v-36.3
			c0-1.013,0.824-1.838,1.842-1.838c11.874,0,24.333,0.784,37.065,2.314c-0.425-1.792-0.63-3.5-0.63-5.091
			c0-1.91,0.205-3.724,0.646-5.427H586.72z M698.928,720.006h-36.622V608.852l47.105-0.011c31.761,2.159,48.04,19.265,49.767,52.18
			C757.045,698.023,736.772,717.867,698.928,720.006z M734.47,661.127c0-30.556-13.717-46.058-40.768-46.058h-8.16
			c-1.007,0-1.833,0.833-1.833,1.843v95.038c0,1.005,0.826,1.836,1.833,1.836h7.217c13.818,0,24.367-4.51,31.35-13.404
			C730.976,691.623,734.47,678.408,734.47,661.127z M510.774,608.852v111.154h60.134c-0.292-2.02-0.452-3.882-0.452-5.422
			c0-1.764,0.13-3.419,0.395-4.931c-4.155,0.638-8.729,1.143-13.61,1.483c-5.725,0.444-13.327,0.666-23.23,0.666
			c-1.007,0-1.837-0.826-1.837-1.838v-42.9c0-1.009,0.83-1.838,1.837-1.838h17.819c6.696,0.402,12.783,0.788,18.363,1.171
			c-0.097-0.457-0.207-0.969-0.343-1.529l-0.06-7.694c0-0.209,0.039-0.411,0.1-0.587c0.064-0.2,0.122-0.39,0.168-0.567
			c-5.544,0.664-11.672,1.008-18.229,1.008H534.01c-1.007,0-1.837-0.83-1.837-1.835v-36.3c0-1.013,0.83-1.838,1.837-1.838
			c11.876,0,24.337,0.784,37.07,2.314c-0.418-1.792-0.624-3.5-0.624-5.091c0-1.91,0.218-3.724,0.632-5.427H510.774z"
            />
          </g>
          <g>
            <g>
              <g>
                <path
                  fill="#929496"
                  d="M567.671,293.159L465.725,191.221l-43.429,55.117l46.826,46.82c4.311,4.325,4.311,11.389,0,15.697
					l-13.55,13.555c0,0,9.133,13.656,9.553,14.492c2.106,4.219,2.61,14.131-3.365,18.67l-106.487,81.74
					c-0.023,27.429-0.054,83.846-0.017,83.871c0.023,0.006,212.415-212.328,212.415-212.328
					C571.996,304.531,571.996,297.484,567.671,293.159z"
                />
              </g>
              <g>
                <path
                  fill="#232020"
                  d="M330.879,305.992c-4.312-4.309-4.312-11.354,0-15.686l13.556-13.556l-9.267-13.324
					c-4.424-6.268-3.037-15.165,3.066-19.824l106.504-81.757l0.074-83.81l-0.066-0.045l-0.054-0.076L232.324,290.306
					c-4.32,4.332-4.32,11.377,0.008,15.705l101.937,101.931l43.437-55.13L330.879,305.992z"
                />
              </g>
            </g>
            <g>
              <path
                fill="none"
                stroke="#232020"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="
				M301.284,471.98c-2.016-0.135-4.026-1.457-4.905-3.229c-1.745-3.548,0.811-6.843,2.041-8.427l93.291-118.411
				c0.856-1.12,0.945-3.409,0.182-4.556l-52.076-74.903c-3.898-5.536-2.692-13.381,2.701-17.501l150.065-115.198
				c2.34-1.827,4.028-2.568,5.833-2.568c2.16,0,4.245,1.308,5.205,3.248c1.739,3.596-0.824,6.829-2.054,8.382l-93.321,118.447
				c-0.835,1.062-0.908,3.44-0.143,4.541c0,0,50.371,73.046,52.103,75.553c2.452,3.543,2.438,12.917-2.75,16.849L307.41,469.4
				C305.303,471.021,303.632,471.962,301.284,471.98z"
              />
              <g>
                <path
                  fill="#BBBCC0"
                  d="M454.815,338.737c1.216,1.839,2.295,8.754-0.735,11.061L304.006,464.984
					c-1.26,0.982-2.067,1.445-2.429,1.415c-0.518,0.03-0.144-0.88,1.237-2.653l93.284-118.385c2.354-3.038,2.511-8.043,0.346-11.175
					l-52.067-74.928C344.377,259.258,453.608,336.903,454.815,338.737z"
                />
              </g>
              <g>
                <path
                  fill="#E6E6E7"
                  d="M454.815,338.737l-51.28-73.767c-2.173-3.134-1.994-8.145,0.34-11.123l93.291-118.433
					c1.387-1.766,1.746-2.654,1.25-2.654c-0.374,0-1.198,0.434-2.435,1.416L345.906,249.372c-3.015,2.312-3.72,6.776-1.529,9.887
					L454.815,338.737z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default LiteSpeedIcon;
