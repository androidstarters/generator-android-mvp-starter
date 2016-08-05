package <%= appPackage %>.injection.component;

import dagger.Subcomponent;
import <%= appPackage %>.injection.PerActivity;
import <%= appPackage %>.injection.module.ActivityModule;
import <%= appPackage %>.ui.base.BaseActivity;
import <%= appPackage %>.ui.detail.DetailActivity;
import <%= appPackage %>.ui.main.MainActivity;

@PerActivity
@Subcomponent(modules = ActivityModule.class)
public interface ActivityComponent {
    void inject(BaseActivity baseActivity);

    void inject(MainActivity mainActivity);

    void inject(DetailActivity detailActivity);
}
