package <%= appPackage %>.ui.detail;


import javax.inject.Inject;

import <%= appPackage %>.data.DataManager;
import <%= appPackage %>.data.model.Pokemon;
import <%= appPackage %>.data.model.Statistic;
import <%= appPackage %>.injection.ConfigPersistent;
import <%= appPackage %>.ui.base.BasePresenter;
import rx.SingleSubscriber;
import rx.Subscription;
import rx.android.schedulers.AndroidSchedulers;
import rx.schedulers.Schedulers;

@ConfigPersistent
public class DetailPresenter extends BasePresenter<DetailMvpView> {

    private final DataManager mDataManager;

    @Inject
    DetailPresenter(DataManager dataManager) {
        mDataManager = dataManager;
    }

    @Override
    public void attachView(DetailMvpView mvpView) {
        super.attachView(mvpView);
    }


    void getPokemon(String name) {
        checkViewAttached();
        getMvpView().showProgress(true);
        Subscription subs = mDataManager.getPokemon(name)
                .observeOn(AndroidSchedulers.mainThread())
                .subscribeOn(Schedulers.io())
                .subscribe(new SingleSubscriber<Pokemon>() {
                    @Override
                    public void onSuccess(Pokemon pokemon) {
                        getMvpView().showProgress(false);
                        getMvpView().showPokemon(pokemon);
                        for (Statistic statistic : pokemon.stats) {
                            getMvpView().showStat(statistic);
                        }
                    }

                    @Override
                    public void onError(Throwable error) {
                        getMvpView().showProgress(false);
                        getMvpView().showError(error);
                    }
                });
        addSubscription(subs);
    }


}
