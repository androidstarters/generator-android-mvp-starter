package <%= appPackage %>.data.remote;


import java.util.List;

import <%= appPackage %>.data.model.NamedResource;
import <%= appPackage %>.data.model.Pokemon;
import retrofit2.http.GET;
import retrofit2.http.Path;
import retrofit2.http.Query;
import rx.Single;

public interface MvpStarterService {

    @GET("pokemon")
    Single<PokemonListResponse> getPokemonList(@Query("limit") int limit);

    @GET("pokemon/{name}")
    Single<Pokemon> getPokemon(@Path("name") String name);

    class PokemonListResponse {
        public List<NamedResource> results;
    }

}
