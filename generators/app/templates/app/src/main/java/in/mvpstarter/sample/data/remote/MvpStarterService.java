package <%= appPackage %>.data.remote;


import <%= appPackage %>.data.model.Pokemon;
import <%= appPackage %>.data.model.PokemonListResponse;
import retrofit2.http.GET;
import retrofit2.http.Path;
import retrofit2.http.Query;
import rx.Single;

public interface MvpStarterService {

    @GET("pokemon")
    Single<PokemonListResponse> getPokemonList(@Query("limit") int limit);

    @GET("pokemon/{name}")
    Single<Pokemon> getPokemon(@Path("name") String name);

}
