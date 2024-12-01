import "./../../css/coinpage-css/CoinPageChange.css";

export default function CoinPageChange({
  currency,
  hour,
  day,
  week,
  halfMonth,
  month
}) {
  let hourV;
  let dayV;
  let weekV;
  let halfMonthV;
  let monthV;

  (() => {
    switch (currency) {
      case "USD":
        return (
          (hourV = (
            <>
              {hour.usd.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{hour.usd.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{hour.usd.toFixed(2)}%</p>
              )}
            </>
          )),
          (dayV = (
            <>
              {day.usd.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{day.usd.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{day.usd.toFixed(2)}%</p>
              )}
            </>
          )),
          (weekV = (
            <>
              {week.usd.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{week.usd.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{week.usd.toFixed(2)}%</p>
              )}
            </>
          )),
          (halfMonthV = (
            <>
              {halfMonth.usd.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{halfMonth.usd.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">
                  +{halfMonth.usd.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (monthV = (
            <>
              {month.usd.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{month.usd.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{month.usd.toFixed(2)}%</p>
              )}
            </>
          ))
        );
      case "EUR":
        return (
          (hourV = (
            <>
              {hour.usd.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{hour.eur.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{hour.eur.toFixed(2)}%</p>
              )}
            </>
          )),
          (dayV = (
            <>
              {day.eur.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{day.eur.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{day.eur.toFixed(2)}%</p>
              )}
            </>
          )),
          (weekV = (
            <>
              {week.eur.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{week.eur.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{week.eur.toFixed(2)}%</p>
              )}
            </>
          )),
          (halfMonthV = (
            <>
              {halfMonth.eur.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{halfMonth.eur.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">
                  +{halfMonth.eur.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (monthV = (
            <>
              {month.eur.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{month.eur.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{month.eur.toFixed(2)}%</p>
              )}
            </>
          ))
        );
      case "CNY":
        return (
          (hourV = (
            <>
              {hour.cny.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{hour.cny.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{hour.cny.toFixed(2)}%</p>
              )}
            </>
          )),
          (dayV = (
            <>
              {day.cny.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{day.cny.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{day.cny.toFixed(2)}%</p>
              )}
            </>
          )),
          (weekV = (
            <>
              {week.cny.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{week.cny.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{week.cny.toFixed(2)}%</p>
              )}
            </>
          )),
          (halfMonthV = (
            <>
              {halfMonth.cny.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{halfMonth.cny.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">
                  +{halfMonth.cny.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (monthV = (
            <>
              {month.cny.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{month.cny.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{month.cny.toFixed(2)}%</p>
              )}
            </>
          ))
        );
      case "JPY":
        return (
          (hourV = (
            <>
              {hour.jpy.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{hour.jpy.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{hour.jpy.toFixed(2)}%</p>
              )}
            </>
          )),
          (dayV = (
            <>
              {day.jpy.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{day.jpy.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{day.jpy.toFixed(2)}%</p>
              )}
            </>
          )),
          (weekV = (
            <>
              {week.jpy.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{week.jpy.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{week.jpy.toFixed(2)}%</p>
              )}
            </>
          )),
          (halfMonthV = (
            <>
              {halfMonth.jpy.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{halfMonth.jpy.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">
                  +{halfMonth.jpy.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (monthV = (
            <>
              {month.jpy.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{month.jpy.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{month.jpy.toFixed(2)}%</p>
              )}
            </>
          ))
        );
      case "GBP":
        return (
          (hourV = (
            <>
              {hour.gbp.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{hour.gbp.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{hour.gbp.toFixed(2)}%</p>
              )}
            </>
          )),
          (dayV = (
            <>
              {day.gbp.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{day.gbp.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{day.gbp.toFixed(2)}%</p>
              )}
            </>
          )),
          (weekV = (
            <>
              {week.gbp.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{week.gbp.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{week.gbp.toFixed(2)}%</p>
              )}
            </>
          )),
          (halfMonthV = (
            <>
              {halfMonth.gbp.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{halfMonth.gbp.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">
                  +{halfMonth.gbp.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (monthV = (
            <>
              {month.gbp.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{month.gbp.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{month.gbp.toFixed(2)}%</p>
              )}
            </>
          ))
        );
      case "AUD":
        return (
          (hourV = (
            <>
              {hour.aud.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{hour.aud.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{hour.aud.toFixed(2)}%</p>
              )}
            </>
          )),
          (dayV = (
            <>
              {day.aud.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{day.aud.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{day.aud.toFixed(2)}%</p>
              )}
            </>
          )),
          (weekV = (
            <>
              {week.aud.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{week.aud.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{week.aud.toFixed(2)}%</p>
              )}
            </>
          )),
          (halfMonthV = (
            <>
              {halfMonth.aud.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{halfMonth.aud.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">
                  +{halfMonth.aud.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (monthV = (
            <>
              {month.aud.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{month.aud.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{month.aud.toFixed(2)}%</p>
              )}
            </>
          ))
        );
      case "CAD":
        return (
          (hourV = (
            <>
              {hour.cad.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{hour.cad.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{hour.cad.toFixed(2)}%</p>
              )}
            </>
          )),
          (dayV = (
            <>
              {day.cad.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{day.cad.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{day.cad.toFixed(2)}%</p>
              )}
            </>
          )),
          (weekV = (
            <>
              {week.cad.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{week.cad.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{week.cad.toFixed(2)}%</p>
              )}
            </>
          )),
          (halfMonthV = (
            <>
              {halfMonth.cad.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{halfMonth.cad.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">
                  +{halfMonth.cad.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (monthV = (
            <>
              {month.cad.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{month.cad.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{month.cad.toFixed(2)}%</p>
              )}
            </>
          ))
        );
      case "CHF":
        return (
          (hourV = (
            <>
              {hour.chf.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{hour.chf.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{hour.chf.toFixed(2)}%</p>
              )}
            </>
          )),
          (dayV = (
            <>
              {day.chf.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{day.chf.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{day.chf.toFixed(2)}%</p>
              )}
            </>
          )),
          (weekV = (
            <>
              {week.chf.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{week.chf.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{week.chf.toFixed(2)}%</p>
              )}
            </>
          )),
          (halfMonthV = (
            <>
              {halfMonth.chf.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{halfMonth.chf.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">
                  +{halfMonth.chf.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (monthV = (
            <>
              {month.chf.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{month.chf.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{month.chf.toFixed(2)}%</p>
              )}
            </>
          ))
        );
      case "KRW":
        return (
          (hourV = (
            <>
              {hour.krw.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{hour.krw.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{hour.krw.toFixed(2)}%</p>
              )}
            </>
          )),
          (dayV = (
            <>
              {day.krw.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{day.krw.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{day.krw.toFixed(2)}%</p>
              )}
            </>
          )),
          (weekV = (
            <>
              {week.krw.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{week.krw.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{week.krw.toFixed(2)}%</p>
              )}
            </>
          )),
          (halfMonthV = (
            <>
              {halfMonth.krw.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{halfMonth.krw.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">
                  +{halfMonth.krw.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (monthV = (
            <>
              {month.krw.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{month.krw.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{month.krw.toFixed(2)}%</p>
              )}
            </>
          ))
        );
      case "SGD":
        return (
          (hourV = (
            <>
              {hour.sgd.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{hour.sgd.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{hour.sgd.toFixed(2)}%</p>
              )}
            </>
          )),
          (dayV = (
            <>
              {day.sgd.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{day.sgd.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{day.sgd.toFixed(2)}%</p>
              )}
            </>
          )),
          (weekV = (
            <>
              {week.sgd.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{week.sgd.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{week.sgd.toFixed(2)}%</p>
              )}
            </>
          )),
          (halfMonthV = (
            <>
              {halfMonth.sgd.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{halfMonth.sgd.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">
                  +{halfMonth.sgd.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (monthV = (
            <>
              {month.sgd.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{month.sgd.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{month.sgd.toFixed(2)}%</p>
              )}
            </>
          ))
        );
      case "PLN":
        return (
          (hourV = (
            <>
              {hour.pln.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{hour.pln.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{hour.pln.toFixed(2)}%</p>
              )}
            </>
          )),
          (dayV = (
            <>
              {day.pln.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{day.pln.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{day.pln.toFixed(2)}%</p>
              )}
            </>
          )),
          (weekV = (
            <>
              {week.pln.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{week.pln.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{week.pln.toFixed(2)}%</p>
              )}
            </>
          )),
          (halfMonthV = (
            <>
              {halfMonth.pln.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{halfMonth.pln.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">
                  +{halfMonth.pln.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (monthV = (
            <>
              {month.pln.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{month.pln.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{month.pln.toFixed(2)}%</p>
              )}
            </>
          ))
        );
      default:
        return (
          (hourV = (
            <>
              {hour.usd.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{hour.usd.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{hour.usd.toFixed(2)}%</p>
              )}
            </>
          )),
          (dayV = (
            <>
              {day.usd.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{day.usd.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{day.usd.toFixed(2)}%</p>
              )}
            </>
          )),
          (weekV = (
            <>
              {week.usd.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{week.usd.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{week.usd.toFixed(2)}%</p>
              )}
            </>
          )),
          (halfMonthV = (
            <>
              {halfMonth.usd.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{halfMonth.usd.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">
                  +{halfMonth.usd.toFixed(2)}%
                </p>
              )}
            </>
          )),
          (monthV = (
            <>
              {month.usd.toFixed(2) < 0 ? (
                <p className="priceChangePerRed">{month.usd.toFixed(2)}%</p>
              ) : (
                <p className="priceChangePerGreen">+{month.usd.toFixed(2)}%</p>
              )}
            </>
          ))
        );
    }
  })();

  if ((hourV || dayV || weekV || halfMonthV || monthV || yearV) !== null)
    return (
      <>
        <table>
          <tr>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>14d</th>
            <th>30d</th>
          </tr>
          <tr>
            <td>{hourV}</td>
            <td>{dayV}</td>
            <td>{weekV}</td>
            <td>{halfMonthV}</td>
            <td>{monthV}</td>
          </tr>
        </table>
      </>
    );
}
