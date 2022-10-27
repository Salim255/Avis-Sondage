import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function SondageRight() {
  return (
    <div className="sondage-section__right right">
      <div className="right__header">
        <div>
          <h2 className="avis__right--header">Sondage</h2>
          <p className="avis__right--title">SUIVIS DES SONDAGES</p>
        </div>
        <hr />
      </div>

      <div className="right__date">
        <div className="subdate__date">
          <input
            type="date"
            id="start"
            name=""
            value="2018-07-22"
            className="subdate__date--input"
          />
          <p className="subdate__date--seperator">AU</p>
          <input
            type="date"
            id="end"
            name=""
            value="2018-07-22"
            className="subdate__date--input"
          />
        </div>

        <div className="right__date--ajouter">
          <CiCirclePlus className="ajouter__icon" />
          <Link to="/create" className="ajouter__text">
            AJOUTER
          </Link>
        </div>
      </div>
      <div className="right__card">
        <div className="scroll">
          <div className="programmedSurvey">
            <div className="programmedSurvey__header">
              <div className="programmedSurvey__header--title">
                <p>13/20/2021 - programmé</p>
              </div>
              <div className="programmedSurvey__header--duration">
                <p> Temps du sondage : 8 jours</p>
              </div>
            </div>
            <div className="programmedSurvey__statistics">
              <div className="box ">
                <div className="box__planning">
                  <div className="box__planning--plng">UI du Planning</div>
                  <div className="box__planning--detail">
                    <a href="#sondagePopUP" className="link">
                      Details
                    </a>
                  </div>
                  <div className="box__planning--modifier">Modifier</div>
                </div>

                <div className="box__tage">
                  <p className="box__tage--4 box__tage--4 box__tage--arreter">
                    Arreter
                  </p>
                </div>
              </div>
              <div className="box ">
                <div className="box__chiffre">75%</div>

                <d className="box__text--4 box__text">
                  <p> demandes de rappel</p>
                </d>

                <div className="box__tage">
                  <p className="box__tage--4">+22%</p>
                </div>
              </div>
              <div className="box ">
                <div className="box__chiffre">75%</div>

                <d className="box__text--4 box__text">
                  <p>demandes de rappel</p>
                </d>

                <div className="box__tage">
                  <p className="box__tage--4">+22%</p>
                </div>
              </div>
              <div className="box ">
                <div className="box__chiffre">1212</div>
                <p className="box__text box__text--2 box__text">notes</p>

                <div className="box__tage">
                  <p className="box__tage--2">-12%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="runningSurvey">
            <div className="runningSurvey__header">
              <div className="runningSurvey__header--title">
                <p>18/10/2022 - en cours</p>
              </div>
              <div className="runningSurvey__header--duration">
                <p> Temps du sondage : 8 jours</p>
              </div>
            </div>
            <div className="runningSurvey__statistics">
              <div className="box ">
                <div className="box__planning">
                  <div className="box__planning--plng">UI du Planning</div>
                  <div className="box__planning--detail">
                    <a href="#sondagePopUP" className="link">
                      Details
                    </a>
                  </div>
                  <div className="box__planning--modifier">Modifier</div>
                </div>

                <div className="box__tage">
                  <p className="box__tage--4 box__tage--4 box__tage--arreter">
                    Arreter
                  </p>
                </div>
              </div>
              <div className="box ">
                <div className="box__chiffre">75%</div>

                <d className="box__text--4 box__text">
                  <p> demandes de rappel</p>
                </d>

                <div className="box__tage">
                  <p className="box__tage--4">+22%</p>
                </div>
              </div>
              <div className="box ">
                <div className="box__chiffre">1212</div>
                <p className="box__text box__text--2 box__text">notes</p>

                <div className="box__tage">
                  <p className="box__tage--2">-12%</p>
                </div>
              </div>
              <div className="box ">
                <div className="box__chiffre">75%</div>

                <d className="box__text--4 box__text">
                  <p> demandes de rappel</p>
                </d>

                <div className="box__tage">
                  <p className="box__tage--4">+22%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="finishedSurvey">
            <div className="finishedSurvey__header">
              <div className="finishedSurvey__header--title">
                <p>20/09/2022 - fini</p>
              </div>
              <div className="finishedSurvey__header--duration">
                <p> Temps du sondage : 8 jours</p>
              </div>
            </div>
            <div className="finishedSurvey__statistics">
              <div className="box ">
                <div className="box__planning">
                  <div className="box__planning--plng">UI du Planning</div>
                  <div className="box__planning--detail">
                    <a href="#sondagePopUP" className="link">
                      Details
                    </a>
                  </div>
                  <div className="box__planning--modifier">Modifier</div>
                </div>

                <div className="box__tage">
                  <p className="box__tage--4 box__tage--4 box__tage--arreter">
                    Arreter
                  </p>
                </div>
              </div>
              <div className="box ">
                <div className="box__chiffre">75%</div>

                <d className="box__text--4 box__text">
                  <p> demandes de rappel</p>
                </d>

                <div className="box__tage">
                  <p className="box__tage--4">+22%</p>
                </div>
              </div>
              <div className="box ">
                <div className="box__chiffre">75%</div>

                <d className="box__text--4 box__text">
                  <p> demandes de rappel</p>
                </d>

                <div className="box__tage">
                  <p className="box__tage--4">+22%</p>
                </div>
              </div>
              <div className="box ">
                <div className="box__chiffre">75%</div>

                <d className="box__text--4 box__text">
                  <p> demandes de rappel</p>
                </d>

                <div className="box__tage">
                  <p className="box__tage--4">+22%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
