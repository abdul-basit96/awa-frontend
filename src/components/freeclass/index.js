import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

function FreeClass() {
  return (
    <Container className="free-class mt-5 mb-4 mx-auto">
      <Row className="align-items-center ps-5">
        <Col lg={2} md={2}>
          <span className="fw-bold text-dark">Get 3 days </span>
          <br />
          <span className="fw-bold text-dark fs-4">Free Classes</span>
        </Col>

        <Col lg={9} md={9} className="text-right">
          <input type="text" placeholder="Name" className="ms-3 jss1 p-2" />
          <input type="email" placeholder="Email" className="ms-3 jss1 p-2" />
          <input
            type="text"
            placeholder="Phone with country code"
            className="m-4 jss2 p-2"
          />
          <select
            data-field-name="country"
            data-name="country"
            id="dhvc_form_control_country"
            name="country"
            className="jss1 p-2"
            required=""
            aria-required="true"
          >
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Afghanistan ">Afghanistan</option>
            <option value="Angola ">Angola</option>
            <option value="Albania ">Albania</option>
            <option value="Andorra ">Andorra</option>
            <option value="Argentina ">Argentina</option>
            <option value="Armenia ">Armenia</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Burundi">Burundi</option>
            <option value="Belgium">Belgium</option>
            <option value="Benin">Benin</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bosnia and Herzegovina">
              Bosnia and Herzegovina
            </option>
            <option value="Belarus">Belarus</option>
            <option value="Belize">Belize</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Brazil">Brazil</option>
            <option value="Barbados">Barbados</option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Botswana">Botswana</option>
            <option value="Central African Republic">
              Central African Republic
            </option>
            <option value="Canada">Canada</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Congo">Congo</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cuba">Cuba</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Germany">Germany</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Denmark">Denmark</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Algeria">Algeria</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Spain">Spain</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Finland">Finland</option>
            <option value="Fiji">Fiji</option>
            <option value="France">France</option>
            <option value="Federated States of Gabon Micronesia">
              Federated States of Gabon Micronesia
            </option>
            <option value="Georgia">Georgia</option>
            <option value="Ghana">Ghana</option>
            <option value="Guinea">Guinea</option>
            <option value="Gambia">Gambia</option>
            <option value="Guinea Bissau">Guinea Bissau</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Greece">Greece</option>
            <option value="Grenada">Grenada</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guam">Guam</option>
            <option value="Guyana">Guyana</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Honduras">Honduras</option>
            <option value="Croatia">Croatia</option>
            <option value="Haiti">Haiti</option>
            <option value="Hungary">Hungary</option>
            <option value="Indonesia">Indonesia</option>
            <option value="India">India</option>
            <option value="Ireland">Ireland</option>
            <option value="Iran">Iran</option>
            <option value="Iraq">Iraq</option>
            <option value="Iceland">Iceland</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Jordan">Jordan</option>
            <option value="Japan">Japan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Korea">Korea</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Lao">Lao</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Liberia">Liberia</option>
            <option value="Libya">Libya</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Latvia">Latvia</option>
            <option value="Morocco">Morocco</option>
            <option value="Monaco">Monaco</option>
            <option value="Moldova">Moldova</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Maldives">Maldives</option>
            <option value="Mexico">Mexico</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Macedonia">Macedonia</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Namibia">Namibia</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Norway">Norway</option>
            <option value="Nepal">Nepal</option>
            <option value="Nauru">Nauru</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Panama">Panama</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Palau">Palau</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Poland">Poland</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Portugal">Portugal</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Palestine">Palestine</option>
            <option value="Romania">Romania</option>
            <option value="Russian Federation">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Sudan">Sudan</option>
            <option value="Senegal">Senegal</option>
            <option value="Singapore">Singapore</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="South Africa">South Africa</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="El Salvador">El Salvador</option>
            <option value="San Marino">San Marino</option>
            <option value="Somalia">Somalia</option>
            <option value="Serbia">Serbia</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Suriname">Suriname</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Sweden">Sweden</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
            <option value="Togo">Togo</option>
            <option value="Thailand">Thailand</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Timor-Leste">Timor-Leste</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="Uruguay">Uruguay</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Saint Vincent and the Grenadines">
              Saint Vincent and the Grenadines
            </option>
            <option value="Venezuela">Venezuela</option>
            <option value="Virgin Islands">Virgin Islands</option>
            <option value="Viet Nam">Viet Nam</option>
            <option value="VanuatuSamoa">VanuatuSamoa</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
          <button className="btnn1 ms-5 p-2">
            <span className="px-3 fw-bold"> Book Now </span>
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default FreeClass;
