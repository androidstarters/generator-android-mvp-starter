package <%= appPackage %>.ui.detail;

import <%= appPackage %>.data.model.Pokemon;
import <%= appPackage %>.data.model.Statistic;
import <%= appPackage %>.ui.base.MvpView;

public interface DetailMvpView extends MvpView {

    void showPokemon(Pokemon pokemon);

    void showStat(Statistic statistic);

    void showProgress(boolean show);

    void showError(Throwable error);

}