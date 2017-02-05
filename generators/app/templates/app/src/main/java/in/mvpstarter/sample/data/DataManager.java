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
                .flatMap(new Function<PokemonListResponse, Single<List<String>>>() {
                    @Override
                    public Single<List<String>> apply(PokemonListResponse pokemonListResponse) {
                        List<String> pokemonNames = new ArrayList<>();
                        for (NamedResource pokemon : pokemonListResponse.results) {
                            pokemonNames.add(pokemon.name);
                        }
                        return Single.just(pokemonNames);
                    }
                });
    }

    public Single<Pokemon> getPokemon(String name) {
        return mMvpStarterService.getPokemon(name);
    }

}