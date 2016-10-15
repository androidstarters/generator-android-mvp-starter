package <%= appPackage %>.injection.component;

import android.app.Application;
import android.content.Context;

import javax.inject.Singleton;

import dagger.Component;
import <%= appPackage %>.data.DataManager;
import <%= appPackage %>.injection.ApplicationContext;
import <%= appPackage %>.injection.module.ApplicationModule;
import <%= appPackage %>.injection.module.NetworkModule;
import retrofit2.Retrofit;

@Singleton
@Component(modules = {ApplicationModule.class, NetworkModule.class})
public interface ApplicationComponent {

    @ApplicationContext
    Context context();

    Application application();

    DataManager dataManager();

    Retrofit provideRetrofit();
}
