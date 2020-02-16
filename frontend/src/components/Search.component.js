import React, { Component } from 'react';

export default class Search extends Component {

  constructor(props) {
    super(props);

    this.onChangeCarModel = this.onChangeCarModel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      car_model: 'audi',
    }
  }

  onChangeCarModel(e) {
    this.setState({
      car_model: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Car model: ${this.state.car_model}`);

    this.setState({
      car_model: 'audi'
    })
  }

  render() {
    return (
      <div style={{marginTop: 10}}>
        <h5>Search</h5>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <select
              value={this.state.carModel}
              onChange={this.onChangeCarModel}>
                <optgroup label="Popularne">
                  <option value="volkswagen">Volkswagen</option>
                  <option value="audi">Audi</option>
                  <option value="bmw">BMW</option>
                  <option value="opel">Opel</option>
                  <option value="mercedes-benz">Mercedes-Benz</option>
                </optgroup>
                <optgroup label="Wszystkie (alfabetycznie)">
                  <option value="abarth">Abarth</option>
                  <option value="acura">Acura</option>
                  <option value="aixam">Aixam</option>
                  <option value="alfa-romeo">Alfa Romeo</option>
                  <option value="alpine">Alpine</option>
                  <option value="aro">Aro</option>
                  <option value="aston-martin">Aston Martin</option>
                  <option value="audi">Audi</option>
                  <option value="austin">Austin</option>
                  <option value="autobianchi">Autobianchi</option>
                  <option value="befard">Befard</option>
                  <option value="bentley">Bentley</option>
                  <option value="bmw">BMW</option>
                  <option value="bobcat">Bobcat</option>
                  <option value="buick">Buick</option>
                  <option value="cadillac">Cadillac</option>
                  <option value="casalini">Casalini</option>
                  <option value="chatenet">Chatenet</option>
                  <option value="chevrolet">Chevrolet</option>
                  <option value="chrysler">Chrysler</option>
                  <option value="citroen">Citroën</option>
                  <option value="cupra">Cupra</option>
                  <option value="dacia">Dacia</option>
                  <option value="daewoo">Daewoo</option>
                  <option value="daihatsu">Daihatsu</option>
                  <option value="de-lorean">De Lorean</option>
                  <option value="dfsk">DFSK</option>
                  <option value="dkw">DKW</option>
                  <option value="dodge">Dodge</option>
                  <option value="ds-automobiles">DS Automobiles</option>
                  <option value="ferrari">Ferrari</option>
                  <option value="fiat">Fiat</option>
                  <option value="ford">Ford</option>
                  <option value="gaz">Gaz</option>
                  <option value="gmc">GMC</option>
                  <option value="gonow">Gonow</option>
                  <option value="grecav">Grecav</option>
                  <option value="gwm">GWM</option>
                  <option value="honda">Honda</option>
                  <option value="hummer">Hummer</option>
                  <option value="hyundai">Hyundai</option>
                  <option value="infiniti">Infiniti</option>
                  <option value="isuzu">Isuzu</option>
                  <option value="iveco">Iveco</option>
                  <option value="jaguar">Jaguar</option>
                  <option value="jeep">Jeep</option>
                  <option value="kia">Kia</option>
                  <option value="lada">Lada</option>
                  <option value="lamborghini">Lamborghini</option>
                  <option value="lancia">Lancia</option>
                  <option value="land-rover">Land Rover</option>
                  <option value="lexus">Lexus</option>
                  <option value="ligier">Ligier</option>
                  <option value="lincoln">Lincoln</option>
                  <option value="lotus">Lotus</option>
                  <option value="lti">LTI</option>
                  <option value="maruti">Maruti</option>
                  <option value="maserati">Maserati</option>
                  <option value="maybach">Maybach</option>
                  <option value="mazda">Mazda</option>
                  <option value="mclaren">McLaren</option>
                  <option value="mercedes-benz">Mercedes-Benz</option>
                  <option value="mercury">Mercury</option>
                  <option value="mg">MG</option>
                  <option value="microcar">Microcar</option>
                  <option value="mini">Mini</option>
                  <option value="mitsubishi">Mitsubishi</option>
                  <option value="morgan">Morgan</option>
                  <option value="moskwicz">Moskwicz</option>
                  <option value="nissan">Nissan</option>
                  <option value="nsu">NSU</option>
                  <option value="nysa">Nysa</option>
                  <option value="oldsmobile">Oldsmobile</option>
                  <option value="opel">Opel</option>
                  <option value="peugeot">Peugeot</option>
                  <option value="plymouth">Plymouth</option>
                  <option value="polonez">Polonez</option>
                  <option value="pontiac">Pontiac</option>
                  <option value="porsche">Porsche</option>
                  <option value="ram">RAM</option>
                  <option value="renault">Renault</option>
                  <option value="rolls-royce">Rolls-Royce</option>
                  <option value="rover">Rover</option>
                  <option value="saab">Saab</option>
                  <option value="saturn">Saturn</option>
                  <option value="scion">Scion</option>
                  <option value="seat">Seat</option>
                  <option value="skoda">Škoda</option>
                  <option value="smart">Smart</option>
                  <option value="ssangyong">SsangYong</option>
                  <option value="subaru">Subaru</option>
                  <option value="suzuki">Suzuki</option>
                  <option value="syrena">Syrena</option>
                  <option value="tarpan">Tarpan</option>
                  <option value="tata">Tata</option>
                  <option value="tatra">Tatra</option>
                  <option value="tesla">Tesla</option>
                  <option value="toyota">Toyota</option>
                  <option value="trabant">Trabant</option>
                  <option value="triumph">Triumph</option>
                  <option value="uaz">Uaz</option>
                  <option value="vauxhall">Vauxhall</option>
                  <option value="volkswagen">Volkswagen</option>
                  <option value="volvo">Volvo</option>
                  <option value="warszawa">Warszawa</option>
                  <option value="wartburg">Wartburg</option>
                  <option value="wolga">Wołga</option>
                  <option value="zaporozec">Zaporożec</option>
                  <option value="zastawa">Zastava</option>
                  <option value="zuk">Żuk</option>
                  <option value="inny">Inny</option>
                </optgroup>
            </select>
          </div>
          <div className="form-group">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}