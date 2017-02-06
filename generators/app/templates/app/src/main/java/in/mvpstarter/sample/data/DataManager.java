package <%= appPackage %>.data;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.inject.Singleton;

import <%= appPackage %>.data.model.NamedResource;
import <%= appPackage %>.data.model.Pokemon;
import <%= appPackage %>.data.model.PokemonListResponse;
import <%= appPackage %>.data.remote.MvpStarterService;
import io.reactivex.Single;
import io.reactivex.functions.Function;

@Singleton
public class DataManager {

    private final MvpStarterService mMvpStarterService;

    @Inject
    DataManager(MvpStarterService mvpStarterService) {
        mMvpStarterService = mvpStarterService;
    }

    public Single<List<String>> getPokemonList(int limit) {
      return mMvpStarterService.getPokemonList(limit)
              .map(pokemonListResponse -> pokemonListResponse.results)
              .flatMapObservable(namedResources -> Observable.just(namedResources))
              .flatMapIterable(namedResources -> namedResources)
              .map(namedResource -> namedResource.name)
              .toList();
    }

    public Single<Pokemon> getPokemon(String name) {
        return mMvpStarterService.getPokemon(name);
    }

}
