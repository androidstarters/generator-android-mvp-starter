package <%= appPackage %>.ui.main;

import java.util.List;

import javax.inject.Inject;

import <%= appPackage %>.data.DataManager;
import <%= appPackage %>.injection.ConfigPersistent;
import <%= appPackage %>.ui.base.BasePresenter;
import <%= appPackage %>.util.rx.scheduler.SchedulerUtils;

@ConfigPersistent
public class MainPresenter extends BasePresenter<MainMvpView> {

    private final DataManager mDataManager;

    @Inject
    public MainPresenter(DataManager dataManager) {
        mDataManager = dataManager;
    }

    @Override
    public void attachView(MainMvpView mvpView) {
        super.attachView(mvpView);
    }

    public void getPokemon(int limit) {
        checkViewAttached();
        getMvpView().showProgress(true);
        mDataManager.getPokemonList(limit)
                .compose(SchedulerUtils.ioToMain())
                .subscribe(pokemons -> {
                  getMvpView().showProgress(false);
                  getMvpView().showPokemon(pokemons);
                }, throwable -> {
                  getMvpView().showProgress(false);
                  getMvpView().showError(throwable);
                });
    }

}
