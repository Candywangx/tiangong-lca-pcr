---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.agglomerated-wood-waste-and-scrap-in-forms-other-than-pellets-including-wood-briquettes
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 干燥未处理锯木厂锯屑制无外加黏结剂木质燃料压块

## 1. 范围与适用性

本归因方法针对由未经化学处理的实木产生、单独收集的单一锯木厂干锯屑流，追溯实际产生与收集、继承的准备及干燥与供货、入厂运输、遮蔽接收、筛分与必要尺寸准备、机械往复式活塞压制、实际模具及输送线冷却、定尺与检验、初始聚乙烯薄膜包装及首次质量放行，并纳入后续可归属的成品库存储存、重新包装、搬运和出厂装载。这是非颗粒燃料压块的制造方法。

本路线接收的锯屑已经达到实际压机适用的含水率和粒径分布。接收前必要的干燥保留在关联上游清单中，记录真实热源、水相、粉尘、燃料、能耗与损失；干料接收不证明干燥不必要或无负荷。需要厂内热干燥的湿料必须先扩展并审查清单，才能适用。保留筛分，仅在实测粒径需要时增加粉碎。本方法不给通用含水率目标、树种纯度、压力、自热温度、等级、密度、能耗或热值。本选定组成不引入外加黏结剂、煤、木炭、蜡或其他产品添加剂；真实添加须明确新组成并逐项识别交换。

本稿是FAO工艺描述与现代设备资料的透明技术综合，不证明各示例属于同一产品型号、场址或订单。FAO区分机械活塞、液压、螺杆及颗粒技术，并描述不同冷却配置。现代C.F. Nielsen资料记载冷却线和可选的后续锯切、检验及包装。其产能、含水率窗口、电机功率和冷却线长度均为设备示例，不作为本方法的清单默认值。资料中的MDF及混合废木示例不进入本未处理锯屑组成。[fao-briquetting-1996; cfn-mobile-2023; cfn-saw-2023.]

排除穿孔模木颗粒（39281）、非团聚木废料（39283）、保留连续木纹的压缩实木、胶结板、木炭及炭化或焙烧产品、经过化学处理或胶合或涂漆的木材、消费后混合垃圾、农业残余物混合物以及液压或螺杆压块。本参考是在生产者门口供应固体木质燃料，不证明燃烧性能、交付有效热、碳中和、替代燃料信用或法律上的废物终止状态。唯一生产分母Q_c为批群c按实际放行含水率计的新增首次放行压块净质量，排除包装。期末已放行成品已含于Q_c；已放行批次的发运、复验或重工均不再次产生Q_c。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.agglomerated-wood-waste-and-scrap-in-forms-other-than-pellets-including-wood-briquettes |
| classification_refs | CPC 3.0:39282；范围更窄的未处理锯屑机械活塞压块子类；接受判定另行进行 |
| covered_products | 由单独收集的一种未处理锯木厂锯屑供货流制造的非颗粒、未炭化、无外加黏结剂木质燃料压块 |
| excluded_products | 颗粒；散锯屑；连续木纹致密化实木；木炭；胶结板；处理木材；混合垃圾；其他生物质；螺杆及液压路线 |
| representative_product | 一种明确木锯屑压块规格；首次放行净质量；聚乙烯薄膜包装 |
| production_route | 追溯来源和既往干燥 → 收集供货 → 运输接收 → 筛分整粒 → 机械活塞压制 → 实际冷却 → 定尺检验包装 → 首次放行 → 可归属库存装载 |
| market_state | 未炭化固体燃料压块；实际含水率和尺寸；不设通用质量等级 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应声明的非颗粒木质燃料压块，首次质量放行并附可归属出厂服务 |
| How much | 按实际放行含水率计的新增首次放行压块净料1 kg，排除薄膜 |
| How well | 满足真实声明的水分尺寸完整性污染燃料规格，不设通用等级或有效热等效 |
| How long or cycle | 一个首次放行批群及披露的后续储存装载历史，不假设使用寿命 |
| reference_flow_link | `finished_briquette` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 生物质致密成型燃料 `e464a548-5c9d-41d5-afb7-a88eba3849cc` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 木材来源过程及废物或共产品状态; 单一锯木厂来源流及实际树种组成; 木材未处理及无外加产品黏结剂的确认; 来源分配及完整继承负荷向量; 既往干燥场址及真实热源燃料水和排放清单; 来料与放行含水率及湿干基和测试方法; 给料粒径分布及实际筛分粉碎; 机械往复活塞路线及设备模具设置; 真实模具输送线冷却及水回路配置; 压块非颗粒尺寸及预定燃料规格; 首次放行事件编号及排除薄膜的净质量Q_c; 期初期末在制品及每一交换的继承向量; 期初期末成品批群编号及原Q_c; 实物总发运与返回且不重复产量; 每种包装库存和去向; 场址及核算期和真实产品提供方; 选用UUID时为中国低于1千伏的用户侧电网平均电力; 运输真实车辆及服务边界; 原生身份限制及独立提供方兼容性; 仅在需要换算时实测对应状态密度或低位热值 |

在数据集元数据、过程说明或参考流备注中声明全部限定信息。原生Product身份仅为定位符：每次具体使用均保留finished_briquette卡的完整物理限制、已披露分类缺陷、不采用数值及中和宣传和独立单一提供方核对。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按实测放行含水率使用首次放行压块净质量。采用经校准秤并扣除真实薄膜及皮重。Q_c排除包装、不合格出口和已放行材料；记录已放行期末成品但不得再次加入产量。 |
| unit_conversion | all inventory rows | row-specific | row-specific | 保留原始单位。分配前按3.6 MJ/kWh把千瓦时换成兆焦，按1000 kg*km/吨千米换算运输。只对真实速率按实测时间积分；累积体积或累积能量不得再乘持续时间。体积换质量时取得该物质在实测温度压力组成下的密度；不得套用水密度或原生流的次级系数推断木材密度。 |
| moisture_accounts | wood exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每项实测湿质量m和湿基水分w：水=m*w，干固体=m*(1-w)。干基水分u按w=u/(1+u)换算。来料和放行分别测量。实物总质量、干木质、游离及吸附水与相关元素分别核算；水分损失不产生干木质。本路线不预设反应、结构水生成或燃烧。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 由未处理实木产生的单独锯木厂锯屑；干料接收且具备真实产生收集和干燥历史 |
| starting_condition_role | 明确前景接收接口；关联上游负荷而非丢弃 |
| product_classification_scope | CPC 39282内非颗粒木压块；不声称覆盖全叶 |
| recursive_input_rule | 外来成品压块不得当作新锯屑或新增生产。记录原批群及上游提供方；厂内细粉和重工在实物账抵消并继承负荷向量。外购压块须另行评估输入路线。 |
| upstream_dataset_requirement | 每项供货交换使用一个经核验兼容的提供方；来源木材生产、来源过程分配、真实既往干燥、收集和供货运输仅计一次。废物分类或低价不使负荷为零。 |
| disclosure | 披露场址核算期、来源水分组成、既往干燥、全部门口位置、分配、实际工艺配置、库存向量、服务批群、排除项和未取得的提供方证据。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | all processes | 纳入全部失败运行、零产出期、开停机、空转、清理、收尘、重工和真实损失。缺仪表不等于零。在数据集完整前逐项补入每一种真实材料、制剂、燃料、制冷剂、水流、包装、废物及已识别排放。 | fao-briquetting-1996; ilcd-attributional-2010 |
| boundary_gates | all physical balances | 制造成品及合并采用相同实物接口。定义V_new=Q_c+首次放行时附着包装实测质量；V_old为重工返回的旧已放行料及其真实包装总质量。制造质量账：期初原料空包装机内流体库存及在制品+外部质量输入+送重工旧成品=期末同类库存及在制品+V_new+重回成品的V_old+外部质量废物排放。各独立账保留木质净料水及包装组分，Q_c排除包装。每项内部转移两侧各记一次且合并抵消；新增Q_c已在V_new内，不再作另加产出。实物总V与归属A分开，内部细粉不作采购共产品。 | ilcd-attributional-2010 |
| boundary_stock | all inventory rows | 每项交换j按批次工序保留期初末在制品实物量和历史当期负荷向量，含来源公用工程及失败作业。对新增首次放行批群，A_jc含真实当期归属记录加转入的历史未放行在制品负荷，减另行保留的期末未放行在制品负荷，并保留损失分配。已放行期末成品已在Q_c内，不扣其生产负荷。此前已放行成品重工时，原向量作为两端相等转移继承，不再次把历史生产加进A_jc；只把真实新增重工服务归给原批群及原Q_c。跨期修正始终关联原批次。 | ilcd-attributional-2010 |
| boundary_service | p_service | 一致采用含真实附着包装的成品总质量：期初成品总量+V_new+外部已放行返回+制造返回V_old+实际吸水+服务新领用包装=期末成品总量+实物总发运+送重工旧成品总量+真实外部损失排放。木质净料水及各包装子账独立，外部返回含真实附着包装。服务空包装库存变化纳入另行闭合的包装账。期末成品已首次放行；新增Q_c仅在V_new中出现。将每次实物返回库存事件关联原发运，保留双方总量事件以核对库存。原生产负荷仅保留一次，已实际执行的原储存、搬运、重包及装载负荷继续归原批群；真实返回、复验、重包和重工增量只加一次。只有证据表明服务记账错误、重复或未实际执行时才可更正；实物返回不得抵消已消耗能源材料或实际排放废物。服务归原批群及原Q_c，H仅分配服务不作生产。 | ilcd-attributional-2010 |
| boundary_water_heat | cooling and upstream drying | 按实测状态记录真实模具水循环、补水、排污、蒸发和排热；厂内循环水不重复采购。本路线不预设锅炉、蒸汽、外购热或冷凝水返回。若实际存在则扩展路线：外部冷凝水及换热水返回作为单独产品返回，记录质量状态焓及供方水能约定，不能虚造负自来水或负热量输入。 | fao-briquetting-1996 |
| boundary_packaging | each packaging material | 每种实际包装材料分别满足：期初空包装 + 期初附着在制品 + 期初附着成品 + 期初周转库存 + 采购P + 首次非采购外部实物收货N_ext + 实际外部收到退回ER = 期末空包装 + 期末附着在制品 + 期末附着成品 + 期末周转库存 + 随实物总发运外出包装S + 对外退回EO + 废物W。P仅为真实组件采购，随整批货实际购入的组件只作非叠加份额计入。N_ext为未发生组件采购的真实首次非退回外部实收，包括供方随货附着、首次受托、借用或租入包装。ER须关联先前真实对外发运及真实退回，P/N_ext/ER按事件互斥。期初只记期间开始时场内实存，不能代记当期收货。实测组件量、所有权/保管、原批群及继承向量与环境负荷分开：真实制造/供货及增量租赁/退回/搬运服务按有记录的单一供方约定归属，不得自动把N_ext当作同kg新制造或重计上游已含负荷。N_ext通过非叠加整件/组件桥与boundary_gates/boundary_service同一外部质量门匹配一次；空包装库与在制品/成品之间领用为相抵内部转移，不是另一收货。内部复用/转移不新增采购、Q_c、自动共产品或信用。实际新增的托盘、标签、绑带或其他组件使用时须有各自具体原子实物收货/去向接口及账；缺数量或接口为具体清单完整性缺口，不是零或集合身份。 | ilcd-attributional-2010 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_manufacture | 锯屑接收准备活塞压制冷却定尺包装首次放行 | required | 所选干锯屑路线，来源干燥保留上游 | manufacturing | 新增首次放行净压块Q_c千克 |
| p_service | 放行后库存搬运重包及装载 | conditional | 已放行批次存在真实储存搬运返回时 | cohort_service | 原批群Q_c；H仅为服务分配依据 |

以下卡片为两个有界过程的外部交换。准备压制冷却定尺在p_manufacture内分别计量；内部木料细粉和回路水转移两端采用同批次向量并抵消，不追加外部供给。各卡从协议取得未归一化记录，经calc_raw及calc_attribution后仅引用一次calc_normalize结果。真实新增流须分别增加卡片并核查提供方和测量后才可完成。

### 过程：完整机械活塞木压块制造 (`p_manufacture`)

#### 输入

##### 产品流

###### 外包锯屑入厂货运 (`inbound_transport`)

一项真实30吨柴油货车公路货运服务。原生混合生产及道路身份限定该车辆类型；其他车型运方式须另核身份。记录实物运输负载距离、装载及空返分配；提供方包含其燃料排放，厂内不重复计入。

- 选定流：公路货物运输服务 `9425f2bf-e734-4884-be1b-645473a3e82d`
- 流属性/单位：mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- 数量规则：引用第8节由cp_supply所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_supply`
- 来源：ilcd-attributional-2010

###### 接收筛分及必要粉碎电力 (`prep_electricity`)

计量输送筛分、经实际需要确认的粉碎及配套抽尘。 仅限中国低于1千伏用户侧电网平均交流电；原生属性名为Net calorific value，本处按电能兆焦使用，不代表燃烧。真实场址、电压、组合、时期、输配边界及一个兼容提供方须匹配；流身份不是用电系数。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节由cp_energy所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：fao-briquetting-1996; cfn-saw-2023

###### 机械活塞和实际冷却电力 (`press_electricity`)

计量给料往复压机、实际模具循环泵及冷却风机，包含全部开停机和失败压制作业。 仅限中国低于1千伏用户侧电网平均交流电；原生属性名为Net calorific value，本处按电能兆焦使用，不代表燃烧。真实场址、电压、组合、时期、输配边界及一个兼容提供方须匹配；流身份不是用电系数。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节由cp_energy所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：fao-briquetting-1996; cfn-saw-2023

###### 定尺检验包装及空压机电力 (`finish_electricity`)

计量真实定尺包装驱动，实际锯机气动时纳入厂内空压机。压缩配气泄漏和待机保留在该电力供给中，不再次采购内部压缩空气。 仅限中国低于1千伏用户侧电网平均交流电；原生属性名为Net calorific value，本处按电能兆焦使用，不代表燃烧。真实场址、电压、组合、时期、输配边界及一个兼容提供方须匹配；流身份不是用电系数。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节由cp_energy所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：fao-briquetting-1996; cfn-saw-2023

###### 模具冷却回路补充水 (`cooling_makeup`)

实际水冷模具配置才适用；计量新补水而非厂内循环。原生自来水为已处理市政饮用管网供水、工厂生产混合和水生产供应；无固定地域或处理配方。核实一个兼容供方及实测供货状态。原生次级体积系数不是本站密度或换算依据；称重或独立测量对应状态的水密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节由cp_water所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：fao-briquetting-1996

###### 外购整份矿物基机械润滑油 (`lubricant`)

用于真实压机曲轴轴承或传动润滑的一种整份外购矿物油制剂，仅采购一次。保留供方SDS、黏度级别及添加剂子账，不重复采购组分。不得将PAO全合成原生记录替代矿物油。本路线润滑油不是产品黏结剂，泄漏及污染另行测量。

- 选定流：矿物基机械润滑油
- 流属性/单位：Mass / kg
- 数量规则：引用第8节由cp_consumables所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_consumables`
- 来源：fao-briquetting-1996

###### 初始聚乙烯薄膜包装 (`film_input`)

一种厂内外购聚乙烯薄膜包装制品，CAS 9002-88-4；核实真实聚合物、厚度等级添加剂再生比例及供方。原生注释中的PET聚酯是竞争材料，不是此PE输入；箱包分类为单独标签矛盾，不构成PET、树脂颗粒、纸箱或绑带的物理许可。整份薄膜仅入账一次，添加剂只作子账。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节由cp_packaging所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：cfn-saw-2023

##### 废物流

###### 单独接收的干燥未处理锯木厂锯屑 (`sawdust_input`)

一种真实未处理锯木厂锯屑废物流，由细木粉到小木屑组成，厂内、untreated comb/rec，原生参考为Mass/kg且未团聚。保留真实树种来源、法律废物或共产品状态、污染检查、含水率、既往干燥收集负荷和一个供方数据集。原生燃料覆盖物用途不证明处理、等级组成密度或零负荷。团聚废木料UUID不能替代此未团聚给料；实际为产品状态时须另核兼容Product身份，不能悄然改变Waste类型。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节由cp_supply所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_supply`
- 来源：fao-briquetting-1996

##### 基本流

###### 实测吸附环境水分 (`ambient_moisture`)

仅计制造中有独立证据的木材净吸水，与原生空气排放水身份分开。不预设吸水或数量，不用负蒸发；载气进出不变湿度相抵，不算工艺耗水。

- 选定流：从环境空气吸附的水蒸气
- 流属性/单位：Mass / kg
- 数量规则：引用第8节由cp_water所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：fao-briquetting-1996

#### 输出

##### 产品流

###### 新增首次放行燃料压块净料 (`finished_briquette`)

仅记录经真实冷却定尺检验和初始薄膜包装后的新增验收非颗粒机械活塞木压块。原生生物质致密成型燃料为Product、厂内生产混合、工业固体燃料、Mass/kg，范围含农林残余物并有颗粒同义词。本处限制为已声明的木压块组成形态及门口，不代表颗粒等效或提供方数据。原生蒸汽热水分类与其一致的固体燃料名称注释及质量参考矛盾；披露该孤立分类缺陷，绝不据此选蒸汽。原生热值范围、低排放及可再生宣传不作为量化系数等级或中和结论。实际净质量与限定信息建立参考；期末成品已计入原Q_c。

- 选定流：生物质致密成型燃料 `e464a548-5c9d-41d5-afb7-a88eba3849cc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 来源：fao-briquetting-1996; cfn-mobile-2023; cfn-saw-2023

##### 废物流

###### 未回用捕集未处理锯屑 (`sawdust_reject`)

仅限真实送至外部接收方的非团聚未处理锯屑细粉，与来料采用相同未处理锯屑Waste身份及Mass/kg限制。厂内捕集并重压的细粉抵消且负荷向量保留。混合垃圾、团聚压块或油污染清扫物不属于本行。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节由cp_residuals所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_residuals`
- 来源：fao-briquetting-1996; cfn-saw-2023

###### 分出的未处理木质块状剔除物 (`wood_cut_reject`)

称量真实筛出并外送的过大实木块，记录组成含水率及接收方。内部重粉碎是转移，不是本废物出口。

- 选定流：未处理实木块状剔除物
- 流属性/单位：Mass / kg
- 数量规则：引用第8节由cp_residuals所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_residuals`
- 来源：fao-briquetting-1996; cfn-saw-2023

###### 未回用团聚木压块废物 (`briquette_reject`)

称量真实外送且仍保持团聚形态的不合格木压块，保留失败批次含水率与去向。与已破碎散锯屑区分。Waste记录不能标识已验收Product产出。

- 选定流：不合格未处理木质燃料压块
- 流属性/单位：Mass / kg
- 数量规则：引用第8节由cp_residuals所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_residuals`
- 来源：fao-briquetting-1996; cfn-saw-2023

###### 废弃聚乙烯包装薄膜 (`film_waste`)

按一种材料流称量真实PE边角及拆除薄膜，记录污染和去向，不套输入Product UUID或合并所有包装废物。闭合独立PE库存账。

- 选定流：废聚乙烯包装薄膜
- 流属性/单位：Mass / kg
- 数量规则：引用第8节由cp_residuals所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_residuals`
- 来源：fao-briquetting-1996; cfn-saw-2023

###### 冷却回路排污水 (`cooling_purge`)

仅限真实送外部处理的排污。记录整份废水质量温度及实测溶解悬浮物种子账，组分不再叠加总量。不预设直接环境排放，不推断冷凝器或蒸汽返回。

- 选定流：模具冷却回路排污水
- 流属性/单位：Mass / kg
- 数量规则：引用第8节由cp_residuals所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_residuals`
- 来源：fao-briquetting-1996; cfn-saw-2023

###### 收集的空压机冷凝液 (`compressor_condensate`)

仅记录真实厂内空压机收集并送外部处理的冷凝液。保留实测整份质量及油水分析，油子质量不得作为另一份整废水叠加，不虚造干燥冷凝水。

- 选定流：空压机冷凝废水
- 流属性/单位：Mass / kg
- 数量规则：引用第8节由cp_residuals所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_residuals`
- 来源：fao-briquetting-1996; cfn-saw-2023

###### 排出的废润滑油 (`spent_lubricant`)

产生点使用后受污染的石油基或合成润滑油Waste，处理未指定，Mass/kg。本处限制为真实排出的矿物基机械油，保留分析及一个真实外部处理提供方。原生记录不给再生燃烧处置信用默认值，不包含含油水或清洁织物。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节由cp_consumables所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_consumables`
- 来源：fao-briquetting-1996

##### 基本流

###### 剩余木质颗粒物空气释放 (`wood_pm_air`)

真实未捕集木质颗粒物排至空气，子环境及粒径未特指，记录实测控制边界采样及不确定性。原生Mass/kg不指定化学组成、粒径分布、烟囱高度或影响因子。其熟料案例明确仅为案例，不提供木质排放系数。捕集细粉另作废物或内部返回。粒径嵌套分数不可相加；实测时用互斥粒级并分别识别。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节由cp_air所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：fao-briquetting-1996

###### 真实净水蒸气释放 (`water_vapour_air`)

CAS 7732-18-5的水以气相排至空气未特指子环境，Mass/kg。用排气水分账时扣除进气湿度，冷却回路与木材水来源是整项排放的来源分区，不再追加水出口。原生导入同义词中的冰重水及同位素水不改变此普通H2O水蒸气身份。此项不是液体排污或外购工艺蒸汽；发生量须测量，不能由单一残差强行得到。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节由cp_air所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：fao-briquetting-1996

###### 实际存在时的分物种α-蒎烯释放 (`alpha_pinene_air`)

仅限实际从本木材压制作业识别的α-蒎烯CAS 80-56-8，不断言通用存在或数量。未指定异构体不可映射固定(1S)-(-)原生记录，VOC总检测响应也不能转成本物种。每一种额外真实气体须分别识别数量及去向；未知VOC组成保留为明确测量缺口。

- 选定流：α-蒎烯排至空气，立体化学未特指
- 流属性/单位：Mass / kg
- 数量规则：引用第8节由cp_air所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：fao-briquetting-1996

### 过程：原批群成品服务 (`p_service`)

#### 输入

##### 产品流

###### 成品库存搬运及重新包装电力 (`service_electricity`)

计量真实电力储存搬运装载重新包装作业，含空转及返回检验。仅限中国低于1千伏用户侧电网平均交流电；原生属性名为Net calorific value，本处按电能兆焦使用，不代表燃烧。真实场址、电压、组合、时期、输配边界及一个兼容提供方须匹配；流身份不是用电系数。按原批群和实测活动归属；仅用原Q_c一次，不以总发运或服务H作生产。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用第8节由cp_service所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：ilcd-attributional-2010

###### 更换聚乙烯包装 (`service_film`)

仅限真实新用更换PE薄膜；沿用CAS 9002-88-4厂内聚乙烯薄膜的全部限制：核实聚合物厚度等级添加剂再生比例及一个供方，披露无关箱包分类，排除PET树脂颗粒及其他包装。返回或内部复用薄膜是库存转移，不再算新采购，归至原批群和原Q_c。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节由cp_packaging_service所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_service`
- 来源：cfn-saw-2023; ilcd-attributional-2010

##### 基本流

###### 库存压块吸水 (`service_moisture`)

仅计独立测量的放行后原批群真实净吸附，改变成品实物质量但不改变原放行Q_c，不把排放流反向套用。

- 选定流：从环境空气吸附的水蒸气
- 流属性/单位：Mass / kg
- 数量规则：引用第8节由cp_service所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：fao-briquetting-1996

#### 输出

##### 废物流

###### 拆除PE包装 (`service_film_waste`)

按原批群记录真实外送拆除薄膜，保留独立包装库存平衡及实测质量去向。

- 选定流：废聚乙烯包装薄膜
- 流属性/单位：Mass / kg
- 数量规则：引用第8节由cp_packaging_service所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_service`
- 来源：ilcd-attributional-2010

###### 储存损坏团聚木压块 (`service_wood_waste`)

真实储存中损坏并外送、仍团聚的木压块。保留原生产负荷和新增服务及原放行编号Q_c，不冲销或新增生产。实际解体散锯屑须另以其自身身份记录。

- 选定流：不合格未处理木质燃料压块
- 流属性/单位：Mass / kg
- 数量规则：引用第8节由cp_service所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：ilcd-attributional-2010

###### 库存压块损坏形成的散锯屑 (`service_sawdust`)

仅计实际外送、单独称量的解体未处理木锯屑，与来料相同非团聚、厂内、untreated comb/rec、Waste及Mass/kg限制。保留原批群负荷及原Q_c；同一质量不再计入仍团聚压块废物或厂内捕集循环。

- 选定流：木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节由cp_service所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：ilcd-attributional-2010

##### 基本流

###### 库存压块净蒸发 (`service_vapour`)

真实H2O CAS 7732-18-5水蒸气排至未特指空气，Mass/kg，归属原批群。原生冰或重水同义词不改变普通水蒸气身份，不推断工艺蒸汽、液体废水或密度系数。实物水分损失与分配分开，原Q_c不改变。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节由cp_service所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：ilcd-attributional-2010

###### 真实搬运粉尘空气排放 (`service_pm`)

真实空气木质颗粒物，粒径子环境未特指，Mass/kg。原生不指定组成粒径烟囱高度排放系数或影响因子；熟料案例不提供本处数值。捕集粉尘与互斥实测粒级分别处理，归属原批群。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用第8节由cp_service所得本交换唯一结果x_jc；保留未归一化原始记录，不再次相除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：ilcd-attributional-2010

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_goal | all processes | 采用归因核算。先识别真实功能并分开专属作业或虚拟细分，包括来源锯木、干燥、压块生产及成品服务。各专属输入及所含组分归至实际接受方，不按任意质量比例分配全厂。 | ilcd-attributional-2010 |
| allocation_physical | remaining multifunctional exchanges | 细分后逐项确定其余交换是否有量化物理因果关系真实决定其存在和数量。区分内含木材水分、工艺电力、运输及储存。仅与产品质量价格或热值相关不构成因果。关系中保留损失和无价出口；不得在湿质量、干木质、时间或能量间任意选全过程分配键。 | ilcd-attributional-2010 |
| allocation_residual | genuinely residual shared exchanges | 只有前述步骤后确实剩余的共享交换，才按同一真实分配门口对应状态的同期数量和市场价值处理。用后续报价回推时扣除门口之后的干燥包装运输价值。记录数量价格币种日期及不确定性并检验敏感性。负价值处理功能须明确审查功能与边界，不虚造正产品价、固定比例或替代信用。 | ilcd-attributional-2010 |
| allocation_recycle | fines rejects and returns | 厂内兼容细粉继承负荷向量及循环能耗，不生成第二次原料采购、避免负荷或新增参考产出。外送废物对应真实处理及提供方去向。实际可售共产品须先记录并重新评估分配；废物流名称不证明零负荷或环境信用。生物碳吸收、储存碳与实际物种释放分别记录，不自动碳中和。 | ilcd-attributional-2010 |

## 8. 前景数据采集、计算与质量规则

协议aggregation_rule单元格仅标明最终报告基准。各collection_method只采集保留未归一化原记录；这些单元格不执行除法。第8节唯一x_jc计算在原单位换算、库存核对及真实分配后才除Q_c一次；清单数量及最终聚合复用同一结果。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_supply | p_manufacture | sawdust_input; inbound_transport | supplier_and_weighing | 来源锯木厂及真实树种; 未处理声明; 来源工序及废物状态; 供方及参考数量; 来源分配向量; 既往干燥原始输入热源水相粉尘损失; 含水率测试和基准; 毛重及皮重; 运输车型距离负载; 供货边界 | 追溯原始锯木及干燥记录和一个兼容上游提供方，校准称量来料批次并取样水分粒径。选用该UUID时核实真实30吨柴油货运，剔清上游已含运输以防重复。 保留换算分配前的接收原质量和运输活动，按批继承来源负荷，不除Q_c。 | kg; kg*km; moisture fraction | 每批及每运次 | 完整生产期及继承上游时期 | 来源锯木干燥供方及实际接收场址 | 每 1 kg 参考流 | 地磅校准; 水分试验; 供方路线与来源分配证据 |
| cp_release | p_manufacture | finished_briquette | first_release | 批号; 既往放行编号核对; 时间; 放行毛重及实际薄膜皮重; 净质量; 水分方法及湿干基; 尺寸; 质量试验和目标; 无外加黏结剂及路线; 去向; Q_c批群台账 | 对经冷却检验初始包装的压块校准称重并扣除真实包装，仅按真实声明规格和批次记录放行，含返回批次在内去重既往已放行物。 唯一首次放行净质量求和为Q_c，期末成品仅为总量内去向，不另设收率或发运分母。 | kg | 每次首次放行事件 | 完整批群生产期 | 真实制造及放行门口 | 每 1 kg 参考流 | 秤校准; 放行规格; 批次台账; 剔除及返回关联 |
| cp_energy | p_manufacture | prep_electricity; press_electricity; finish_electricity | meters | 表号; 期初末读数; 原始单位; 适用时真实功率速率和时间; 设备工序; 运行模式; 冷却空压边界; 场址电压供方; 失败空转; 共享电表分区 | 使用校准分表或与总表闭合的实测工序分区，含真实输送整粒压制冷却抽尘包装空压。不用铭牌功率作默认量。 存储未归一化原始表差及实测活动分区，全部模式与单位换算留给calc_raw，不除Q_c。 | kWh; MJ; kW and h when actual rate | 连续电表记录及每批 | 全期含全部失败空转开停机清理 | 实际生产场址和共享公用工程 | 每 1 kg 参考流 | 校准; 总分表闭合; 时间运行日志 |
| cp_water | p_manufacture | cooling_makeup; ambient_moisture | water_and_moisture | 真实模具冷却配置; 回路期初末库存; 补水; 排污; 蒸发损失; 进出口状态温度; 体积法时实测水密度; 木材吸水; 进出空气湿度; 独立测量 | 计量称量真实水转移，记录回路库存及独立测得的排热。成对湿度水分测量确定真实净吸附释放，不推断锅炉蒸汽。 保留原始数量状态库存，区分内部循环和外部补水，不除Q_c。 | kg; temperature; actual volume only with state | 每批每次排污及核算边界 | 完整生产期 | 真实模具回路和制造空气木材接口 | 每 1 kg 参考流 | 计量校准; 状态密度试验; 水热平衡核对 |
| cp_consumables | p_manufacture | lubricant; spent_lubricant | purchase_stock_waste | 整份矿物润滑油接收; SDS黏度级别; 库房及机内期初末量; 领用质量; 排出质量; 泄漏污染; 真实处理接收方 | 称量接收领用排出，闭合库房与机内存量并继承期初历史负荷，添加剂分析只作子账。 保留接收消耗废物库存原质量，calc_normalize前分配真实机器使用负荷，不除Q_c。 | kg | 每次领用换油及库存边界 | 全期及继承机内填充 | 真实压机传动润滑与外部接收方 | 每 1 kg 参考流 | SDS; 发票; 库存核对; 废物转移联单 |
| cp_packaging | p_manufacture | film_input; film_waste；每项实际首次非采购PE收货N_ext及新增组件接口 | packaging_stock | PE供方组成; 厚度等级; 期初空包装附着在制品附着成品周转量; 采购; 外部收到返回; 期末同类库存; 总发运包装质量; 对外返回; 废物; 原批群编号; P真实组件采购; N_ext按来源分别记录首次非采购非退回外部实收kg; ER关联先前对外发运; 收货事件号/时间/方向及实际材质/形态/类型/状态; 实测毛重/皮重/组件kg及不确定性; 收货前后所有权/保管及受托/借用/租赁条款; 关联随货批次; 逐交换继承向量; 实际负荷归属方及供方已含范围; 非叠加整件/组件桥接; 具体原子外部收货行/接口 | 各实际PE组件及其他包装结构按事件、阶段及原批群独立于木质净料称量。按boundary_packaging保留空包装、附着在制品、附着成品、周转的期初期末完整存量、实际P/N_ext/ER收货及实物总量S/EO/W去向。首次供方随货、受托、借用或租入的非采购实收即使制造已含于上游也须记录；不能记作期初存量、虚构采购或无先前发运凭据的ER。每项实际N_ext须有与材质/形态/类型/方向相符、分别识别的原子外部输入数量/接口；现有采购/真实退回行不覆盖事件时，声明具体清单完整前须补该具体收货接口。不得仅加文字符号、克隆采购行或用集合包装/UUID。保留每事件所有权/保管、继承向量及实际供方范围，真实供货或增量服务只归属一次，不再次购买已含制造。整批货/组件视图非叠加。保留未归一化原始库存/移动量，核对相同制造/成品门，内部空包装库/成品领用与复用抵消，不新增采购或Q_c。 | kg | 每次包装重包发运返回及库存边界 | 完整生产及可归属服务历史 | 真实包装和成品服务场址 | 每 1 kg 参考流 | 称量记录; 聚合物SDS声明; 库存返回审计轨迹；交货/受托/借用/租赁收货凭据；先前对外发运；所有者/批群及继承向量/供方桥接 |
| cp_residuals | p_manufacture | sawdust_reject; wood_cut_reject; briquette_reject; film_waste; cooling_purge; compressor_condensate | separate_waste_measurement | 流编号及真实材料形态; 原整份质量; 水固体油分析; 失败运行编号; 捕集粉尘内部返回或外送; 接收提供方及去向; 污染; 库存变化 | 分别称量每项外部废物，核对捕集筛分压制锯切库存和内部返回；真实液废以整份计量，物种来源分区不再叠加。 存储未归一化实物整份数量、互斥去向及组成来源子账，不除Q_c。 | kg | 每次产生转移及库存边界 | 全期含失败和清理 | 制造门口到每个真实接收方 | 每 1 kg 参考流 | 秤; 分析; 转移联单; 粉尘返回闭合 |
| cp_air | p_manufacture | wood_pm_air; water_vapour_air; alpha_pinene_air | emission_measurement | 物种CAS立体化学介质; 采样控制点; 浓度基准及真实积分气量或速率时间; 进气湿度; 气体真实温压; 干湿基; 检出限; 颗粒粒级; 独立水分固体测量 | 使用真实监测浓度和兼容总气量，或将真实速率仅积分一次，明确治理后及无组织覆盖。水、木质固体和VOC分物种须独立证据，不能用一个残差拟合两个未知。 保留原浓度气量速率时间和真实发生证据，由calc_raw分配前进行一次换算，不除Q_c。 | kg; actual concentration and volume units | 有代表性的运行模式含异常期 | 全期且记录实测及外推覆盖 | 真实厂界空气边界及每个物种去向 | 每 1 kg 参考流 | 采样报告; 分析仪校准; 检出限; 覆盖和不确定性 |
| cp_service | p_service | service_electricity; service_film_waste; service_wood_waste; service_sawdust; service_moisture; service_vapour; service_pm | cohort_service_stock | 原放行批群与原Q_c; 期初末成品湿干水质量及继承负荷; 总发运编号质量; 关联实物总返回及原发运库存事件; 已实际执行的原服务负荷; 错误/重复/未实际执行服务记账更正证据; 复验重工新增量; 仪表; H活动; 损失物种测量; 不重复验收计数 | 沿批次谱系追踪储存返回重包及装载，测量真实搬运活动及实物净水分粉尘变化，使用兼容仪表分析和原供方关联，保留损失与失败搬运。 保留原活动原Q_c及库存向量，先分配服务至原批群，仅calc_normalize把归属A除原Q_c一次。H及总发运不替代Q_c。 | kg; MJ; actual H unit | 每事件及批群库存边界 | 每个纳入批群的真实服务历史 | 真实成品储存搬运装载场址 | 每 1 kg 参考流 | 批群谱系; 库存仪表闭合; 发运返回关联; 采样报告 |
| cp_wip | p_manufacture | all inventory rows | lot_stage_stock_vectors | 批次和工序; 期初末在制品湿干水质量; 逐交换历史当期负荷向量; 内部细粉重工转移; 失败空转开停机清理负荷; 真实分配; 来源 | 实测库存并按批次工序保留各交换向量，核对生产公用工程记录、内部转移和原成品返回。 保留原数量完整向量，仅在calc_attribution作库存归属调整，库存记录绝不除Q_c。 | kg; each original exchange unit | 每次批次转移及期界 | 全期及继承历史批群 | 全部制造工序 | 每 1 kg 参考流 | 实物库存审计; 批次谱系; 来源向量核对 |
| cp_packaging_service | p_service | service_film; service_film_waste；每项实际首次非采购PE收货N_ext及新增组件接口 | packaging_stock | PE供方组成; 厚度等级; 期初空包装附着在制品附着成品周转量; 采购; 外部收到返回; 期末同类库存; 总发运包装质量; 对外返回; 废物; 原批群编号; P真实组件采购; N_ext按来源分别记录首次非采购非退回外部实收kg; ER关联先前对外发运; 收货事件号/时间/方向及实际材质/形态/类型/状态; 实测毛重/皮重/组件kg及不确定性; 收货前后所有权/保管及受托/借用/租赁条款; 关联随货批次; 逐交换继承向量; 实际负荷归属方及供方已含范围; 非叠加整件/组件桥接; 具体原子外部收货行/接口 | 各实际PE组件及其他包装结构按事件、阶段及原批群独立于木质净料称量。按boundary_packaging保留空包装、附着在制品、附着成品、周转的期初期末完整存量、实际P/N_ext/ER收货及实物总量S/EO/W去向。首次供方随货、受托、借用或租入的非采购实收即使制造已含于上游也须记录；不能记作期初存量、虚构采购或无先前发运凭据的ER。每项实际N_ext须有与材质/形态/类型/方向相符、分别识别的原子外部输入数量/接口；现有采购/真实退回行不覆盖事件时，声明具体清单完整前须补该具体收货接口。不得仅加文字符号、克隆采购行或用集合包装/UUID。保留每事件所有权/保管、继承向量及实际供方范围，真实供货或增量服务只归属一次，不再次购买已含制造。整批货/组件视图非叠加。保留未归一化原始库存/移动量，核对相同制造/成品门，内部空包装库/成品领用与复用抵消，不新增采购或Q_c。 | kg | 每次包装重包发运返回及库存边界 | 完整生产及可归属服务历史 | 真实包装和成品服务场址 | 每 1 kg 参考流 | 称量记录; 聚合物SDS声明; 库存返回审计轨迹；交货/受托/借用/租赁收货凭据；先前对外发运；所有者/批群及继承向量/供方桥接 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | 归属前换算原单位且真实速率仅积分一次：E_MJ=3.6*E_kWh；transport_kgkm=1000*transport_tkm；物种质量=兼容质量浓度*积分气量。已积分体积不再乘时间。仅必要处作实测状态修正及独立物质密度换算，保留原观察。 | 原始单位; 实测状态; 适用时速率和时间 | 按交换换算后的原始分子 | fao-briquetting-1996 |
| calc_attribution | all inventory rows | 按boundary_stock从已换算真实记录、继承来源及期初在制品交换向量、真实内部转移和期末在制品向量构建A_jc。先归属专属作业，其余仅按allocation_goal/physical/residual分配。保留全部失败和Q_c=0负荷、真实损失及原成品重工批群。服务A_jc按实测H归至原批群，H只分配服务，不作生产输出。实物发运/返回库存事件不抵消已实际执行的原服务负荷。保留这些负荷并把真实返回/复验/重包/重工增量仅一次归至原批群及原Q_c。仅更正有证据的错误、重复或未实际执行服务记账；保留生产历史及全部真实服务消耗、排放和废物。 | 换算后记录; cp_wip; 原批群; 分配证据 | 原交换单位的A_jc | ilcd-attributional-2010 |
| calc_normalize | all inventory rows | 仅在Q_c>0时执行一次x_jc=A_jc/Q_c；x_jc为原首次放行批群c每1 kg参考流的交换量。卡片与聚合引用同一结果，不再除。参考产出恰为1 kg。Q_c=0时保留真实负荷并披露后续因果归属或未解结转，不输出单位结果，不除零，不丢弃失败空转负荷。 | A_jc; Q_c; cp_release; cp_service | 每1 kg参考流的x_jc | ilcd-attributional-2010 |
| calc_physical | all physical exchanges | 在相同制造成品及合并门口独立核对湿质量、干木质、水和相关元素账，含库存和内部抵消。整份液气废物排放仅计一次，实测组成来源分区之和对应整份，不再叠加。质量残差是待调查偏差，不同时证明未测蒸发及粉尘VOC。用实测温度排热及驱动能量单独检查相关能量账；质量闭合不代替能量闭合或通用热值密度系数。 | cp_supply; cp_water; cp_air; cp_release; cp_wip; cp_service | 独立实物与能量核对 | fao-briquetting-1996; ilcd-attributional-2010 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 核实真实形态组成CAS路线类型介质地域及全部原生属性，再独立核实一个兼容提供方。采用UUID用官方中文名。缺失辅助身份保留具体名称及追踪；核心终端身份或必要路线无据时不得形成可用完整数据集。 | 完整原生记录; 供方规格及匹配提供方参考 |
| dq_measurement | all quantities | 保留原单位、校准、检出限、时期覆盖与不确定性；本PCR不提供工厂数量或等级。真实不存在须有配置测量依据及not_applicable解释，不猜零。 | 校准及来源记录; 完整覆盖矩阵 |
| dq_history | all stocks and services | 完整批次谱系及逐交换向量须连接产生干燥运输在制品首次放行成品返回及新增重工，不在废物或日历边界抹去负荷。 | 库存向量审计; 原批群Q_c及返回关联 |
| dq_completeness | all processes | 列出每项真实交换及提供方测量状态，含条件物种和包装。未知VOC冷却剂污染或上游干燥负荷明确保留；声称完整前调查平衡和缺失路线。 | 场址图; 完整仪表材料排放核对 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference and all exchanges | 确认一种非颗粒未处理木压块组成及机械活塞路线、明确finished_briquette关联和Mass/kg参考。逐卡执行原生限制、当前投影指纹、全部限定信息和来源关联。单独分类标签不证明物理适用性。 | fao-briquetting-1996; un-cpc3-2025 |
| validate_quantity | all inventory rows | 检查唯一首次放行Q_c和各归属分子的一次calc_normalize，协议卡片不重复归一化，Q_c=0不作除法。期末已放行成品在Q_c内，发运复验不增加产量。保留所有模式和逐交换库存历史。 | ilcd-attributional-2010 |
| validate_balances | manufacturing and FG and consolidated gates | 同门口执行独立质量干木质水及相关元素检查、相关能量检查和每种包装身份库存闭合。不用单残差估两个未知，不用VOC总量声明未知气体组成已解。保留真实接收路线和混合物非叠加分区。 | fao-briquetting-1996; ilcd-attributional-2010 |
| validate_provider | all upstream exchanges | 对上游来源干燥运输公用工程材料及废物处理提供方逐项核实且只关联一次，匹配产品参考单位状态及边界。UUID身份和工程检查不批准科学适用性、翻译、映射、发布或工厂实测数据。 | ilcd-attributional-2010 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 规定非颗粒木质燃料压块首次放行门口供货，披露可归属出厂服务 |
| allowed_use | 组成路线水分质量场址时间匹配，提供方及边界独立兼容 |
| excluded_use | 燃料使用燃烧; 有效热等效; 颗粒或散废木替代; 零负荷残余物; 自动生物碳中和及信用; 把候选指南当作批准 |
| required_metadata | 全部第3节限定信息; 真实来源路线提供方时期; 首次放行批群及原Q_c; 库存服务边界; 真实规格 |
| required_quality_disclosure | 原始证据及覆盖; 未确定身份提供方分物种; 真实采集分配值; 来源独立性; 完整库存向量; 分配敏感性; 无数值默认值 |
| update_trigger | 给料来源处理状态压机路线热干燥位置燃料冷却系统添加剂包装提供方质量门口或材料排放身份变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Ver.3.0 Structure 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 39281/39282/39283相互独立产品形态分类，不作为制造分配或映射批准 |
| fao-briquetting-1996 | handbook | Grover and Mishra, FAO/RWEDP Field Document 46, Biomass Briquetting: Technology and Practices, April 1996, §§3–4 and adjacent screw/piston/pellet contrasts, Table 4.1 and Fig.4.1. https://www.fao.org/4/ad579e/ad579e00.pdf | 准备及机械活塞差异，有条件的无外加黏结剂压制及冷却上下文，路线示例不作数值默认或分配规则 |
| cfn-mobile-2023 | handbook | C.F. Nielsen, Mechanical Briquetting Presses: Mobile Briquetting Plant, 2023 brochure, complete single page and table footnote. https://cfnielsen.com/wp-content/uploads/2024/03/7.-Mobile-Briquetting-Plant2023.pdf | 现代机械压机给料冷却线配置，产能有条件，MDF及混合料示例排除 |
| cfn-saw-2023 | handbook | C.F. Nielsen, Briquette Saw BS350, 2023 brochure, complete single page including layout/table. https://cfnielsen.com/wp-content/uploads/2024/11/BS350-briquetting-saw-brochure-2023_CFN.pdf | 定尺前冷却抽吸及锯屑内部返回、可选剔除称量和薄膜包装及气动驱动，不强制固定线长或包质量 |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA—Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp.255–272 including sawmill and transport examples and common-gate counterexample. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因细分虚拟细分、逐交换决定性物理因果及仅剩余部分同门口市场价值；核算规则是本PCR明确操作化，不是来源工厂清单 |
