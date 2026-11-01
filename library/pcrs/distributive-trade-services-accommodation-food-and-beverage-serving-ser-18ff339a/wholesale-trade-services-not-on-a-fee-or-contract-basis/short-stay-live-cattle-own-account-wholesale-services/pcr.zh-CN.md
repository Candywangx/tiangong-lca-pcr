---
pcr_id: pcr.short-stay-live-cattle-own-account-wholesale-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 短期周转活牛自营批发服务

## 1. 范围与适用性

本 PCR 为服务附加过程，适用于取得 Bos 属家牛所有权并承担转售风险、在实际经销商周转场暂时集结或保管后向企业买方转售验收货批的商人。路线包括身份和到场状态检查、短期照料、实际喂料饮水及清洁、适运性和隔离检疫事件、装卸与商业交接。“短期”描述过渡贸易目的，不假定小时数，必须记录实际进出场时间；它不是饲养或增重生产系统。

范围排除繁殖、育成、育肥、牧场生产、屠宰、动物产品制造、拍卖收费或佣金代理、零售及独立出售的纯保管照料。另行必需的动物生产或长期育成会改变边界，需经审核生产数据集，不能默默扩展本服务。动物库存保留为逐个追踪备查台账，不是消耗的活体生产输入，也不是批发服务输出。

成功转售、退回和其后死亡活牛的全部上游生产均在本附加服务外。完整链条声明之前，关联活牛商品系统必须对原生产交接点的损失需求及已有覆盖仅核对一次。实际场内照料、处置和声明接收处理在本服务内仅计一次。本 PCR 不证明健康、福利或法律符合性，必须提供实际专业评估、适用要求、验收及移动记录。
默认范围没有计划挤奶、产犊或专门增重生产，入场必须声明泌乳妊娠及健康状态。任何实际出生、挤出乳或独立生产输出都会触发最终数据前的明确边界修订及额外实际身份、输出和去向记录，不能硬套原动物头数台账，也不能因本候选排除计划生产就假定未发生。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.short-stay-live-cattle-own-account-wholesale-services` |
| classification_refs | CPC 3.0 `61014`；较窄的活牛经销周转场服务子集 |
| covered_products | 通过短期集结或周转场开展的 Bos 属活牛自营批发货批服务 |
| excluded_products | 其他活体动物物种；动物生产、增重或屠宰；代理拍卖收费；零售和独立保管照料 |
| representative_product | 具有动物身份、实际头数类别状态及商业验收交接的已完成活牛批发货批服务 |
| production_route | 商人取得所有权并接收；临时安全保管及实际照料隔离；向企业买方转售交接 |
| market_state | 计数商业服务，配有单独逐动物库存、福利及原交接点商品台账 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的短期周转活牛自营批发货批服务 |
| How much | 1 个已完成验收批发货批服务 |
| How well | 个体动物身份、实际牛类别头数状态和实测活重基准、专业福利及适运性证据、取得所有权后转售及商业验收 |
| How long or cycle | 实际进场至离场保管区间及交接期间；动物天和报表及资产期间单独记录 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的短期周转活牛自营批发货批服务 |
| reference_flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; animal_ids; actual_head_count; cattle_class; sex_age_condition; actual_liveweight_basis; ownership_and_resale_risk; buyer_business_role; origin_and_destination; actual_arrival_exit; duration_unit; welfare_fitness_acceptance; contract_handover_gate; geography_and_period; transport_treatment_coverage; linked_original_gate_loss |

N > 0 为扣除实际撤销后的唯一已验收商业货批数，不是动物头数、车辆、发票行或动物天。每个货批保留实际动物集合，拆分文件不会创造服务。类别、头数、体重与照料时长不同的动物不能仅因服务都计一个而等同。实际数据包必须声明全部限定信息。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | 参考产品 | 物品数量 | Item(s) | 使用实际已验收货批标识和 N > 0，与头数和动物时间区分；实际动物集合、照料适运状态和商业交接点为必需限定信息。 |
| animal_time | enteric_methane 与 other_species; other_species_co2_fossil_air; other_species_nitrous_oxide_air; other_species_ammonia_air | 动物占栏活动 | 实际头数时间 | 记录每个已识别动物进出场、死亡及保管边界，按实际牛类别、日粮、状态和报表期划分不重叠占栏区间，显式换算时间单位；周转头数不是平均存栏。 |
| animal_stock | 动物备查台账与 carcasses; carcasses_atomic_case | 数量及单独实测质量 | 头数；实际测量时使用 kg | 核对身份标识和实际头数。活重变化、运输失重或肠内容物及饮水不能证明死亡、增重、采食量、粪污质量或物种释放；尸体 kg 需实际独立测量或接收记录。 |
| feed_and_fates | feed、bedding 与粪污 | 实际兼容质量或体积 | 原生单位及声明水分或组成基准 | 保留原样与干物质基准、实际库存及投喂拒食采食证据。粪污混合物、挥发性固体、氮和排放物种为不同数量，需各自实测或方法支持的操作数。 |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 在商人取得所有权或保管交接点接收实际声明类别和状态的已识别活牛；说明原产地、此前运输与商品生产覆盖 |
| starting_condition_role | 商品起始状态事实；动物上游生产在本服务外，不被视为无负担的完整供应 |
| product_classification_scope | CPC 61014 中通过临时经销周转场开展的活牛自营批发，排除代理和动物生产 |
| recursive_input_rule | 不把每次活牛出售或转移作为服务递归生产；动物备查库存与原交接点商品关联单独保留。外包实际照料或服务商成果明确不重叠覆盖。 |
| upstream_dataset_requirement | 具体饲料、能源、用品、服务商与完整资产寿命输入；完整链条使用前，单独处理原交接点动物生产及可归属死亡或损失调整 |
| disclosure | 动物身份类别头数状态、实际时间所有权、福利适运验收、来源去向、隔离死亡淘汰退回去向、粪污废水运输覆盖和全部未知项 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_service | depot_wholesale | 实际临时照料、喂料饮水、卫生、装载、共享辅助、实际处理处置及声明运输责任仅计一次。排除全部转售动物上游生产，包括其后死亡；保留关联原交接点损失调整义务。 |  |
| boundary_welfare | depot_wholesale | 记录实际到场状态、安全保管、照料适运评估、兼容隔离、必要实际饲料饮水休息和应急响应，具有专业记录及适用地方标准。本 PCR 不提供通用福利阈值或医疗操作指导。 | woah-land-transport |
| boundary_identity | depot_wholesale | 追踪每头动物实际来源、进场、移动、所有权、离场退回及死亡事件。采用实际适用身份与记录要求；引用的英格兰和威尔士记录示例不是通用法律时限。 | govuk-cattle-holding-register |
| boundary_emissions | depot_wholesale | 动物占栏、日粮和实际粪污系统决定肠道与粪污排放方法所需数据。短停留不表示零排放，年度周转头数不是全年动物存栏。方法来源时间单位及当前适用因子需专门证据。 | ipcc-livestock-2019 |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| depot_wholesale | 商人取得所有权后的活牛周转场综合批发作业 | required | 实际商人所有活牛接收、临时保管和已验收企业间转售 | 综合批发职责；动物备查库存、照料、拒收隔离与残余去向全部关联事件 | `accepted_service` |

全部事件使用动物标识、货批、栏舍或群体和作业期间键。临时喂养照料不是单独增重输出。隔离或拒收动物在实际离场或死亡前持续进入照料和占栏记录，实际退回与来源及适用撤销配对。场内换栏和重复清单不产生新购入、死亡或已验收货批。粪污和可用残余出口属于实际去向，不默认预期粪肥联产。

### 过程：商人取得所有权后的活牛周转场综合批发作业 (`depot_wholesale`)

#### 输入

##### 产品流

###### 实际液态处理自来水供给 (`drinking_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属向活牛供应的购入饮水；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据要求：采用实际饮水供应、水槽及清洁分离、泄漏或倒槽和头数时间记录。饮水证据缺失是缺口，不是零或通用每头升数基准。

###### 实际液态处理自来水供给 (`cleaning_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属周转场冲洗与场址辅助购入水；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据要求：需实际计量或领用体积、清洁事件、场地及车辆责任、期间和服务商覆盖。不把废水设为清洁购水量。

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：每参考流的实际可归属实际周转场作业供应电力；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：需实际计量区间、动物占栏或装卸辅助驱动及全部使用方分母。不设固定每头或每货批电耗；通用电能属性支持与身份单独处理。

###### 实际独立确认的供应柴油 (`fuel_supply_diesel_supply`)

仅适用于本运行燃料要求内实际独立确认的柴油。通用身份为Mass/kg；记录实际配方、供应方、供给门及原生库存范围。原生数量为升时，最终换算kg须有实际相容密度、温度状态、质量体积比单位及来源，不使用目录默认密度或热值。供应库存与燃烧量是不同记录；其他燃料保留余项，购买燃料或未解释库存差不证明燃烧及排放。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Volume / L
- 数量规则：每参考流的实际可归属实际场内车辆及辅助燃料供应；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需牌号、期初收货期末、净量皮重和可用退回证据、必要密度温度换算、实际燃烧及互斥未燃去向。不采用通用燃烧比例。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的短期周转活牛自营批发货批服务 (`accepted_service`)

一个向企业买方完成取得所有权后转售的实际验收货批，具有动物标识、头数、类别状态及约定商业和福利交接记录。活牛是商品审计对象，不是本服务流身份。

- 选定流：已完成的短期周转活牛自营批发货批服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_consignment`

范围证据要求：数量仅定义归一化；实际头数、类别状态、体重基准、停留时长、适运性及商业验收仍为必需限定条件。不设每服务数量对应的典型牛群、车载或活重。

##### 废物流

###### 死亡牛胴体 (`carcasses_atomic_case`)

仅在实际独立记录确认“死亡牛胴体”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`carcasses`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：死亡牛胴体
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际送处置的死亡活牛尸体；cp_animals。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_animals`

范围证据要求：需个体标识死亡证据、实际测量或接收数量、期间及处置路线。头数死亡与尸体 kg 是单独审计视图，不设通用尸体得率或损失因子。

##### 基本流

###### 活牛肠道发酵向空气排放甲烷 (`enteric_methane`)

按实际牛类别及其边界内停留时间量化 CH4，包括隔离、退回及其后死亡动物至离场或死亡时的时间。采用兼容测量或具有自身活动及时间基准的有记录方法，不采用动物全寿命生产清单。

现有实际牛肠道CH4卡对应非化石源甲烷向空气直接排放；保留实际牛类别、日粮、停留时间、相容方法层级及kgCH4基准。不按年度周转头数视为饲养全年，不预设系数或全生命周期牲畜负荷。未细分空气身份不覆盖有证据的更细接收子介质；粪污甲烷另计且不得重复本卡。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属活牛肠道发酵向空气排放甲烷；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`

范围证据要求：需实际类别状态日粮、占栏时间、方法层级、因子活动及时间基准来源和不确定性。年每头因子不能乘年度转售头数并假定每头全年停留；本 PCR 不选定统一因子。

###### 实际有独立证据的向空气排放化石二氧化碳 (`other_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际已识别粪污、燃烧及化学物质释放；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`

范围证据要求：需实际物质介质，以及实测排放或兼容活动量及系统储存时长气候、因子基准、组成去向和分子换算来源。粪污湿质量、活重差额及安全限值不是排放量。


###### 实际有独立证据的向空气排放氧化亚氮 (`other_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际已识别粪污、燃烧及化学物质释放；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`

范围证据要求：需实际物质介质，以及实测排放或兼容活动量及系统储存时长气候、因子基准、组成去向和分子换算来源。粪污湿质量、活重差额及安全限值不是排放量。


###### 实际独立举证的氨向空气排放 (`other_species_ammonia_air`)

仅适用于实际直接排向空气的氨CAS7664-41-7，须有测量或独立支持的物种特定数量、来源及介质。原生质量为kgNH3，不是kgN或铵；不预设挥发率、剂量、粪污系数或整股液体排放。未细分空气身份不替代已知更细子介质；排除上游供应商已计排放及受控转移。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际已识别粪污、燃烧及化学物质释放；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`

范围证据要求：需实际物质介质，以及实测排放或兼容活动量及系统储存时长气候、因子基准、组成去向和分子换算来源。粪污湿质量、活重差额及安全限值不是排放量。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocate_operations | depot_wholesale | 优先归属直接事件或分表资源。其余实际共享照料栏舍公用负担采用有记录的兼容驱动，例如分类型占栏面积时间或观察动物天；装卸可能采用实际头数质量或事件。保留全部实际使用方，包括隔离死亡退回动物、闲置处理与失败货批。按因果选择驱动，不默认价格或平均作业，归属总量仅除以 N 一次。 |  |
| allocate_assets | shared_assets | 列出实际资产使用方和期间，以实际已用驱动 / 全寿命驱动归属完整制造、维护、更换及寿命终结；全寿命驱动来自观察服务，或观察历史加有证据剩余使用和退役。声明来源、不确定性、敏感性及更新。资产当量份额 / N 或全寿命服务商原生服务 / N 二选一，不并用或归一化两次。 |  |
| allocate_supplies | 饲料、垫料、照料用品和燃料 | 每个原生品项状态 S = 可归属期初 + 净外部收货 - 期末。选择保留可用外退输出的总量口径 S / N，或不再次抵扣退回的净消耗口径 (S - 可用外退) / N。期末包括回收后留存库存，废物或泄漏保留供应负担。内部饲料退回是转移，不能增加购入。供应饲料、实际采食与排泄粪污为不同测量。 |  |
| allocate_original_gate | 动物备查台账 | 全部动物生产在本服务外。按实际原交接点动物类别群体，向关联商品模型传递唯一识别的可归属不可恢复死亡或损失头数、其原生产状态数量和已有基线损失覆盖。如按头基线未含相同损失，将实际可归属损失头数需求向已验收动物需求仅加一次；若基线按质量，应保留原交接点实测重量，不用当前尸体质量或通用头重换算。不自动把活淘汰、供方退回、去向未知失窃或未售期末库存当死亡损失。归属或基线覆盖未知时阻止完整链条声明。本服务已有实际处置处理排除在商品仅生产调整外。 |  |
| allocate_residuals | manure_waste 与 usable_manure | 实际粪污废物或真正可用交接及原生数量仅记一次。不自动抵扣替代化肥或处置，不凭标签设无负担联产品。若出现实质预期粪肥或动物联产，最终数据前审核预期输出与分配边界，不默默扩展短期批发。 |  |
| commodity_link_scope | nonexchange commodity interface | 原交接库存及已完成外部集成保留实际记录的原始数量。声明source_assignment_scope_id、实际target_consignment_ids/target_cohort_id及source_assignment_quantity_basis，分为single_consignment_case、target_cohort_total或already_per_reference。仅当正same_target_scope_N准确覆盖已分配目标范围时，目标群原始总量才按source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N形成与1个accepted_service组合且仅用一次的接口，须原生单位状态来源及接收撤销证据。单货批N=1与已每参考量不再除一次。外部实际库存或阶段集成记录不得按服务N缩量，也不得以整个来源群N去除较窄目标已分配量；保留原始量与明确仅一次关联。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | depot_wholesale | accepted_service | 商业所有权与验收台账 | site_id; period_id; campaign_id; consignment_id; contract_id; seller_id; buyer_id; buyer_business_role; animal_id_list; actual_heads; head_unit; class; age; sex; condition; lactation_state; pregnancy_state; liveweight; liveweight_unit; liveweight_method; ownership_start; resale_risk; commercial_gate; welfare_assessment; fitness_record; accepted_at; time_zone; cancellation_id; N | 将实际商业动物集合、所有权和已验收交接与动物移动及适运记录核对，排除发票车辆重复。 | Item(s) | 每个货批及撤销 | 实际接收到交接期间 | 商人周转场及约定企业交接点 | per reference flow | 商业所有权及专业实际验收证据 |
| cp_animals | depot_wholesale | 动物备查台账与 carcasses | 个体标识头数与停留台账 | site_id; period_id; campaign_id; consignment_id; animal_id; original_id; class; origin; destination; pen_id; event_id; event_type; arrival_time; exit_time; time_zone; duration; duration_unit; ownership_boundary; head_count; head_unit; quarantine_state; lactation_state; pregnancy_state; birth_or_milk_event; fitness_state; rejection_reason; return_transfer_id; death_time; death_evidence; carcass_mass; carcass_mass_unit; carcass_receiver; carcass_treatment_coverage; original_gate; original_gate_dataset; original_gate_quantity; original_gate_unit; original_gate_weight_method; baseline_loss_coverage; attribution_owner; unexplained_id_gap; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 用实际头数及移动死亡退回保管记录核对每个动物，划分不重叠停留，并报告实际原交接点商品覆盖；尸体数量使用独立实际接收或称重证据。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 头数、实际时长；实际尸体原生单位 | 每个动物事件及期界 | 全部实际保管，包括隔离拒收死亡 | 一个已识别动物及实际来源去向 | per reference flow | 个体身份、来源移动专业死亡证明、头数核对及接收数量 |
| cp_feed | depot_wholesale | feed 与 bedding | 原生供应投喂与残余台账 | site_id; period_id; campaign_id; consignment_id; pen_id; animal_class; animal_id_group; event_id; event_time; time_zone; feed_or_bedding_SKU; composition; native_unit; opening_quantity; receipt_gross; receipt_tare; receipt_net; closing_quantity; usable_external_return; offered_quantity; refused_quantity; recovered_internal_quantity; measured_intake; intake_method; as_fed_or_dry_basis; moisture_fraction; moisture_method; moisture_source; dry_matter_source; actual_animal_time; animal_time_unit; actual_waste; receiver; uncertainty | 计量实际饲料垫料供应和库存及动物时间归属，分别保留投喂拒食回收和实测采食证据，不由活重推断采食或废物。 | 实际原生单位及声明水分基准 | 每次饲料垫料事件及盘点 | 实际保管及相关库存期间 | 实际饲料垫料品项及栏舍动物群 | per reference flow | 称重水分状态、库存去向及实际动物时间记录 |
| cp_water | depot_wholesale | drinking_water, cleaning_water and environmental_water | 水源与用途台账 | site_id; period_id; consignment_id; event_id; meter_id; water_source; water_role; purchased_or_direct; start_time; end_time; time_zone; quantity; native_unit; trough_supply; leakage; dumped_water; cleaning_quantity; other_use; retained_or_consumed_view; attribution_driver; driver_unit; all_consumer_driver; supplier_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量实际分水源供应，区分饮水提供、实际测得的饮入量、冲洗泄漏等用途；水平衡需实际去向，直接取水与购入供应分开。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | m3 或实际水源原生单位 | 每个事件或计量区间 | 完整实际保管及辅助期间 | 实际水源及用途责任 | per reference flow | 计量校准、水源用途分离及归属记录 |
| cp_supplies | depot_wholesale | care_supplies, fuel_supply and usable_returns | 原生品项库存与照料事件台账 | site_id; period_id; consignment_id; event_id; event_time; time_zone; SKU; formulation; concentration; concentration_unit; composition_basis; composition_source; native_unit; opening_quantity; receipt_gross; receipt_tare; receipt_net; closing_quantity; recovered_closing; usable_external_return; actual_administered; care_record; nonburned_waste; unrecovered_loss; density; density_unit; temperature; temperature_unit; conversion_factor; factor_unit; factor_source; gross_or_consumed_view; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 按原生单位核对扣皮后净外部收货、实际库存与可用退回；保留照料施用及完整化学燃料去向，不规定实际处理操作。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 柴油升转kg须有实际相容密度、温度状态、质量体积比单位及来源，不预设换算。 | 实际品项原生单位 | 每个供应照料事件及盘点 | 全部归属期间 | 实际品项及实际周转场活动 | per reference flow | 对应库存照料退回和状态特定换算证据 |
| cp_energy | depot_wholesale | 电力与实际燃料燃烧 | 计量与燃烧台账 | site_id; period_id; campaign_id; consignment_id; asset_id; event_id; start_time; end_time; time_zone; duration; duration_unit; energy_type; reading_start; reading_end; reading_unit; actual_burn; burn_unit; burn_method; carried_closing; nonburned_return; nonburned_waste; unrecovered_nonburned_loss; attribution_driver; driver_unit; all_consumer_driver; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量实际作业及燃烧；仅在原生去向完整互斥且调查未知损失时重建燃烧。核对直接服务商能源及实际动物装卸时间归属。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际能源或燃料单位 | 每个计量区间及燃烧事件 | 整个实际归属作业 | 全部纳入直接周转场及辅助资产 | per reference flow | 校准、燃烧去向证据及完整覆盖 |
| cp_providers | depot_wholesale | provider_services | 实际完成成果与覆盖台账 | site_id; period_id; consignment_id; provider_id; service_id; event_date; actual_result; physical_quantity; native_unit; duration; duration_unit; completion_proof; upstream_dataset; energy_coverage; feed_water_coverage; material_coverage; asset_lifecycle_coverage; transport_coverage; disposal_treatment_coverage; emission_coverage; attribution_driver; all_consumer_driver; missing_coverage | 核实实际交付兽医检测清洁装卸业务成果、物理单位及完整上游范围，和直接卡及处理运输核对，使每项负担归属唯一。 | 实际服务商原生单位 | 每个实际成果 | 实际服务商期间 | 全部纳入服务商职责 | per reference flow | 含应急的完成、单位及覆盖矩阵 |
| cp_assets | depot_wholesale | shared_assets | 全寿命共享驱动台账 | site_id; period_id; consignment_id; asset_id; configuration; consumer_id; phase_id; event_date; manufacture_dataset; maintenance_record; replacement_record; end_of_life_record; driver_used; driver_unit; driver_lifetime; observed_history; evidenced_remaining_use; remaining_source; termination_assumption; attribution_view; uncertainty; sensitivity; update_trigger | 列出全部资产使用方和期间、实际观察服务及有证据剩余，将完整寿命负担与兼容驱动及一种分配视图匹配。 | Item(s) 或实际寿命服务原生单位 | 每个资产事件及期间复核 | 实际及有证据的剩余资产寿命 | 全部使用方及服务期间 | per reference flow | 寿命完整性及观察和有证据驱动假设 |
| cp_freight | depot_wholesale | freight | 实际旅程与路段台账 | site_id; period_id; consignment_id; animal_id_list; leg_id; event_date; origin; destination; route; mode; provider_id; actual_load; load_unit; load_tare; load_conversion_factor; load_conversion_unit; load_conversion_source; distance; distance_unit; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; provider_native_unit; empty_return_method; welfare_journey_scope; attribution_driver; driver_unit; all_consumer_driver; upstream_coverage; duplicate_leg_check | 采用实际净载和路线距离及明确兼容单位换算，或准确实际服务商原生成果，保留动物旅程、空返、责任及不重叠证据。 | kg*km 或实际服务商原生单位 | 每个实际路段 | 全部纳入进出场退回处置旅程 | 声明运输责任 | per reference flow | 载荷距离旅程文件及完整服务商覆盖 |
| cp_environment | depot_wholesale | manure_waste, usable_manure, other_wastes, contained_wastewater and water_outfalls | 实际收集接收去向与处理台账 | site_id; period_id; consignment_id; event_id; event_date; start_time; end_time; time_zone; duration; duration_unit; material_id; material_state; manure_system; initial_manure_stock; final_manure_stock; actual_collected_mass; mass_unit; actual_collected_volume; received_volume; volume_unit; density; density_unit; temperature; temperature_unit; moisture_basis; solids_fraction; N_quantity; N_unit; N_basis; VS_quantity; VS_unit; VS_basis; composition_source; concentration; concentration_unit; concentration_basis; source; receiver; product_quality; usable_handover; treatment_dataset; treatment_coverage; receiving_medium; outfall_id; uncertainty | 在收集或接收点测量实际原生质量体积及组成，区分粪污液相混合物、可用产品、废弃残余和直接排口；识别处理责任、此前留存粪污及储存区间，不重复混合物或由头数供水推断数量。 | 实际材料原生单位 | 每次收集转移或直接排口 | 实际保管及粪污废物储存区间 | 实际周转场及接收方边界 | per reference flow | 实际质量体积组成及接收处理证据 |
| cp_emissions | depot_wholesale | enteric_methane and other_species | 实际活动与物种方法台账 | site_id; period_id; consignment_id; event_id; animal_class; age_condition; diet_id; animal_id_group; occupancy_start; occupancy_end; time_zone; animal_count; animal_time; animal_time_unit; factor_time_unit; days_per_factor_year; factor_year_basis_source; method_tier; method_version; actual_method_operands; operand_units; operand_basis; operand_sources; factor_category_match; diet_characterization; species; species_or_N_basis; molecular_conversion; molecular_conversion_source; receiving_medium; actual_activity; activity_unit; manure_system; manure_storage_start; manure_storage_end; storage_duration; storage_duration_unit; temperature; temperature_unit; climate_basis; actual_VS; VS_unit; actual_N; N_unit; source_scope; emission_factor; factor_unit; factor_basis; factor_source; measurement; measurement_unit; actual_burn; burn_unit; composition_fraction; composition_basis; composition_source; release_fraction; fate_basis; fate_source; upstream_emission_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采用实际已识别动物时间日粮及实际粪污系统活动以匹配方法，保留全部必需原始操作数、物种氮基准和时间换算；区分肠道、场内粪污、燃料及场外服务商范围，不由未知库存体重变化自动得出因子或物种量。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg 物种及实际兼容活动时间单位 | 每个模型测量区间及系统变化 | 实际边界内动物占栏与粪污储存期间 | 每个实际来源和受纳介质 | per reference flow | 实际占栏活动与方法因子测量来源及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_quantities | 所有清单行 | 用货批、动物、照料、栏舍及期间证据和有记录全部使用方驱动归属实际直接与共享数量，实际可归属总量仅除以 N 一次；未成功货批保留资源但不增加已验收 N。 | cp_consignment; cp_animals; cp_feed; cp_water; cp_supplies; cp_energy; cp_providers; cp_assets; cp_freight; cp_environment; cp_emissions | 每参考流的实际作业交换 |  |
| animal_identity_time | 动物备查台账与 enteric_methane | 按个体标识，期初头数 + 外部进场 + 实际退回进场 - 期末头数 - 实际外部活体离场 - 实际死亡 = 未解释身份或头数缺口。内部换栏抵消，逐项调查缺口，绝不推断死亡或排放。按牛类别累加实际边界内不重叠区间，并将记录时长换为方法活动单位；死亡拒收退回活牛仅贡献实际停留时间。 | cp_animals | 实际头数核对及分类型动物时间 |  |
| original_gate_link | 动物备查台账 | 按原交接点群体向商品系统提供实际可归属不可恢复死亡或损失身份及原交接点数量、已验收原动物需求和基线损失覆盖。缺失原交接点需求仅加一次；基线已有时核对而不是重加。采用原实测头数质量基准，不用活重变化或当前尸体得率；活淘汰退回期末库存属于实际活体离场或库存，不自动为损失头数。本服务已含处置处理排除在商品仅生产调整外。 | cp_animals; cp_consignment | 服务清单外的原交接点商品调整 |  |
| enteric_method | enteric_methane | 采用兼容实际 CH4 测量，或基于实际边界内动物时间、有证据的类别日粮方法。因子单位为每头每年 kg CH4 时，以分类型动物天乘该因子再除以来源定义的因子年天数，再归属于货批且仅除以 N 一次。每日活动因子采用自身兼容单位，不再次年化。保留方法层级、因子来源、不确定性和必需日粮采食操作数。本规则不采用默认因子，也不由周转头数或活重差额推断 CH4。 | cp_animals; cp_feed; cp_emissions | 每参考流向空气排放肠道 CH4 的 kg 数 | ipcc-livestock-2019 |
| manure_species | other_species; other_species_co2_fossil_air; other_species_nitrous_oxide_air; other_species_ammonia_air | 选择实际直接测量，或有证据实际系统粪污方法，按适用性需要兼容实际氮、挥发性固体、系统份额、留存储存区间及温度气候。保留物种氮基准；N2O-N 转 N2O 时仅应用一次有记录分子换算。服务商或完整物种因子已有组成去向时不重复乘分数。不由湿粪污、未知活重或全部购水推断物种。 | cp_environment; cp_emissions | 具备完整方法覆盖的实际已识别物质及介质 | ipcc-livestock-2019 |
| fuel_freight | fuel_supply、freight 与 other_species; fuel_supply_diesel_supply; other_species_co2_fossil_air; other_species_nitrous_oxide_air; other_species_ammonia_air | 燃料供应采用实际库存口径；燃烧为实测或由完整互斥期末留存、可用外退、容装未燃废物、未回收未燃损失和实际燃烧重建。溢洒总量在去向已拆解时仅供审计。每货运路段采用实际 kg 载荷乘 km 距离，保留明确换算及不重叠服务商空返覆盖；物种采用实际兼容活动量和因子。 | cp_supplies; cp_energy; cp_freight; cp_emissions | 不重复的实际供应、燃烧、kg*km 及物种视图 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity_quality | 所有清单行 | 最终交换绑定前核实实际产品服务物质和支持链。语义标签与参考数量属性不验证动物、服务或 CH4 的 UUID。 | 具体流详情和支持证据 |
| trace_time_quality | 动物备查台账 | 每个原始或更改动物标识、实际保管移动适运退回死亡事件及区间均需可追溯证据。未知头数缺口、静态存栏截面或典型体重不能代替实际占栏。 | cp_animals 及专业实际福利身份记录 |
| method_quality | enteric_methane 与 other_species; other_species_co2_fossil_air; other_species_nitrous_oxide_air; other_species_ammonia_air | 采用实际类别日粮粪污系统、活动时间来源覆盖、方法层级和兼容因子物种基准；量化不确定性并声明全部缺失操作数。不设通用短停留排放因子。 | cp_emissions；实际因子或测量来源 |
| coverage_quality | depot_wholesale | 核对服务商品、动物库存与饲料输入、水粪污废水、直接服务商和资产运输处理责任。未知数量覆盖不能变零；独立范围须实际照料与停留可比。 | 完整覆盖矩阵及缺失数据清单 |
| period_quality | shared_assets 与 depot_wholesale | 关联全部期间阶段，包括未完成照料货批、库存结转、更换及退役，保持唯一事件或资产归属。 | cp_assets；cp_animals；阶段期间核对 |

动物头数核对是原动物移动死亡审计，不是增重或材料平衡模型。实际出生或乳输出事件必须在最终数据前追加明确身份输出去向记录并审核边界修订。按质量的上游死亡关联需实际原交接点生产参考重量单位和前序覆盖，不采用末端活重或尸体接收数量。

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| feed | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_feed`识别`feed`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_feed`; 实际来源关联原生记录 |
| drinking_water | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_water`识别`drinking_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_water`; 实际来源关联原生记录 |
| cleaning_water | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_water`识别`cleaning_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_water`; 实际来源关联原生记录 |
| bedding | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_feed`识别`bedding`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_feed`; 实际来源关联原生记录 |
| care_supplies | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`care_supplies`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| electricity | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_energy`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_energy`; 实际来源关联原生记录 |
| fuel_supply | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`fuel_supply`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_services | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_providers`识别`provider_services`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_providers`; 实际来源关联原生记录 |
| shared_assets | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| environmental_water | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_water`识别`environmental_water`内每项实际inputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_water`; 实际来源关联原生记录 |
| usable_returns | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`usable_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| usable_manure | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`usable_manure`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |
| manure_waste | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`manure_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |
| carcasses | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_animals`识别`carcasses`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`carcasses_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_animals`; 实际来源关联原生记录 |
| other_wastes | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`other_wastes`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |
| contained_wastewater | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`contained_wastewater`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |
| water_outfalls | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`water_outfalls`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |
| other_species | depot_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_emissions`识别`other_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_emissions`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### feed

仅计实际周转场饲料，按饲料身份及原样或干物质状态记录；不计转售动物中隐含的全寿命日粮。纳入库存调整后的未采食损耗或废弃饲料，保留去向和唯一上游归属。

- 身份采集要求：临时照料实际供应饲料
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属临时照料实际供应饲料；cp_feed。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_feed`

范围证据要求：需按动物类别和停留区间取得实际投喂、拒食或回收、库存和水分记录。不由活重变化推断采食量，不设典型日粮；经验校验须采用相同实际日粮、类别及停留条件。

#### drinking_water

独立于清洁用水记录实际饮水供应、水源、计量或有证据的分配。计量供应总量可能包括泄漏或倒槽，不把全部供应水标为饮入量。

本卡为独立身份分支`drinking_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：向活牛供应的购入饮水
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属向活牛供应的购入饮水；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据要求：采用实际饮水供应、水槽及清洁分离、泄漏或倒槽和头数时间记录。饮水证据缺失是缺口，不是零或通用每头升数基准。

#### cleaning_water

记录实际围栏及车辆冲洗、卫生和辅助用水。它不等于动物饮入或实测废水及排放量，保留收集和接收范围。

本卡为独立身份分支`cleaning_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：周转场冲洗与场址辅助购入水
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属周转场冲洗与场址辅助购入水；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据要求：需实际计量或领用体积、清洁事件、场地及车辆责任、期间和服务商覆盖。不把废水设为清洁购水量。

#### bedding

按实际秸秆、木质或其他垫料身份、水分及原生数量展开。它属于作业输入，不默认作为新增谷物或饲料；保留废垫料及粪污混合物去向。

- 身份采集要求：实际垫料及动物接触耗材
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际垫料及动物接触耗材；cp_feed。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_feed`

范围证据要求：采集实际垫料品项、期初收货期末、可用退回及污染废弃部分。垫料校验需实际栏舍状态、清洁周期和动物时间，不能采用泛化圈养假设。

#### care_supplies

按实际配方浓度、原生单位及有资质照料记录展开，不规定药品、剂量或消毒配方。记录未用退回及实际废物或释放去向。

- 身份采集要求：实际兽医、消毒与维护用品
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际兽医、消毒与维护用品；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需实际药品、配方或品项数量、浓度基准、照料事件和原生单位换算证据。安全限值或施用产品质量不是基本流排放因子。

#### electricity

计量装卸、照明、水泵、通风、福利辅助及办公电力，纳入隔离和未成功货批且仅计一次，核对直接与服务商覆盖。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际周转场作业供应电力
- 流属性/单位：Energy / kWh
- 数量规则：每参考流的实际可归属实际周转场作业供应电力；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：需实际计量区间、动物占栏或装卸辅助驱动及全部使用方分母。不设固定每头或每货批电耗；通用电能属性支持与身份单独处理。

#### fuel_supply

保留实际燃料牌号、原生供应数量及库存调整量。直接燃烧采用单独实测或完整核对的燃烧量，不采用购油量或总溢洒量。

本卡为独立身份分支`fuel_supply_diesel_supply`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际场内车辆及辅助燃料供应
- 流属性/单位：Volume / L
- 数量规则：每参考流的实际可归属实际场内车辆及辅助燃料供应；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需牌号、期初收货期末、净量皮重和可用退回证据、必要密度温度换算、实际燃烧及互斥未燃去向。不采用通用燃烧比例。

#### provider_services

按服务商原生单位及上游覆盖展开实际专业照料、检测、雇用装卸、清洁和行政成果。仅实际可数的已完成成果使用数量，价格和时数不自动等于 Item(s)。

- 身份采集要求：实际兽医、装卸及业务辅助服务
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流的实际可归属实际兽医、装卸及业务辅助服务；cp_providers。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`

范围证据要求：需成果完成证据、原生数量及能源饲料材料资产运输废物覆盖。即使动物或货批未被验收，实际紧急照料仍纳入。

#### shared_assets

在全部使用方和期间间归属实际场地、围栏、装载设备、供水、车辆、秤和信息设备的寿命服务，不把转售动物假定为服务资产。

- 身份采集要求：按寿命归属的周转场及业务辅助资产
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流的实际可归属按寿命归属的周转场及业务辅助资产；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据要求：需完整制造维护更换及寿命终结覆盖，及观察与有证据的剩余驱动。比较需实际动物类别、占栏与装卸条件，不设通用资产寿命。

#### freight

按服务商原生单位和范围记录实际承担的动物、用品、退回及处置路段；kg*km 采用实际活载质量和距离，不采用头数乘典型体重，保留空返及福利旅程覆盖。

- 身份采集要求：实际不重叠的活牛及用品货运服务
- 流属性/单位：Mass*distance / kg*km
- 数量规则：每参考流的实际可归属实际不重叠的活牛及用品货运服务；cp_freight。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

范围证据要求：需实际路线方式、动物标识及载荷皮重、距离单位与换算、空返处理及驱动覆盖，不重复上游生产交接点运输或服务商燃料。

#### environmental_water

仅在直接取用时展开实际水源、位置及取水角色，区分饮水和冲洗归属及单独购入水产品。

- 身份采集要求：实际直接环境取水
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属实际直接环境取水；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据要求：需实际分水源取水计量及用途期间，不由活牛占栏或购水发票默认直接取水。

#### usable_returns

将实际未用用品外退与品项原生单位状态及总量保留输出或净消耗口径匹配。活牛供方或买方退回保留在逐动物台账，不进入本卡。

- 身份采集要求：实际可用作业用品外退
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际可用作业用品外退；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需实际外部接收方、转移、原生数量及对应输入库存。期末库存、内部饲料退回及废弃用品不是可用外退。

#### usable_manure

仅具有品质、数量及接收方的实际可用产品交接才能确定 Product 状态。此条件残余出口不自动获得替代化肥抵扣，也不把普通暂存变成预期粪肥生产。

- 身份采集要求：实际作为产品交付的可用粪肥
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际作为产品交付的可用粪肥；cp_environment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据要求：需实际品质状态、水分原生数量、接收用途证据及唯一负担归属，不假定可售性或化肥当量因子。若出现实质预期联产，须审核新的分配边界。

#### manure_waste

记录实际收集并送废物管理的粪便尿液或垫料混合物，保留原生质量或独立有证据的体积换算、组成及接收方。容装质量不等于排放 CH4、N2O 或 NH3。

- 身份采集要求：实际容装废弃粪污与废垫料
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际容装废弃粪污与废垫料；cp_environment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据要求：需实际收集区间、质量体积密度及与系统相符的固体、氮和挥发性固体证据、接收方及处理范围。不由头数默认粪污量，区分期初库存与留存。

#### carcasses

记录实际已识别动物死亡或紧急处置事件及实际尸体质量或接收原生数量、接收方和处理负担覆盖。活重差异或隔离状态不能证明死亡。

- 身份采集要求：实际送处置的死亡活牛尸体
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际送处置的死亡活牛尸体；cp_animals。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_animals`

范围证据要求：需个体标识死亡证据、实际测量或接收数量、期间及处置路线。头数死亡与尸体 kg 是单独审计视图，不设通用尸体得率或损失因子。

#### other_wastes

按身份、状态、原生单位和接收方展开不再可用的实际剩料、诊疗锐器或药品残余及其他作业废物。排除已由各自卡归属的粪污及尸体。

- 身份采集要求：实际废弃饲料、诊疗及作业废物
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际废弃饲料、诊疗及作业废物；cp_environment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据要求：需实际废弃饲料、化学或诊疗组分及接收处理覆盖。购入发票、药物剂量或危害标签不能单独确定废物质量或组成。

#### contained_wastewater

记录实际收集废水、水相组成和接收处理系统，按实际系统归属区分液体粪污储存与直接排口，不重复物理数量。

- 身份采集要求：实际容装冲洗及卫生废水
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属实际容装冲洗及卫生废水；cp_environment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据要求：需实际收集接收体积、浓度基准、收集区间及处理覆盖。不假定全部饮水或冲洗水变为本废物流，也不重复计入浆液混合物。

#### water_outfalls

按实际受纳介质和水质展开直接排口。收集后送处理的废水属于 Waste 转移，不是另一个基本流排口。

- 身份采集要求：向声明环境的实际直接排水
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属向声明环境的实际直接排水；cp_environment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据要求：需实际排口计量、水源期间及受纳介质。组成特定污染物质量为单独不可相加视图，不由总购水量推断。

#### other_species

按实际粪污系统、燃料燃烧、制剂使用或泄漏展开每个实际物质及介质。区分 CH4、N2O 与 N2O-N、NH3 与 NH3-N 及来源基准，不重复肠道 CH4，也不计服务商数据集已含场外处理排放。

本卡为独立身份分支`other_species_co2_fossil_air`; `other_species_nitrous_oxide_air`; `other_species_ammonia_air`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际已识别粪污、燃烧及化学物质释放
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际已识别粪污、燃烧及化学物质释放；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`

范围证据要求：需实际物质介质，以及实测排放或兼容活动量及系统储存时长气候、因子基准、组成去向和分子换算来源。粪污湿质量、活重差额及安全限值不是排放量。

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_gate | accepted_service | 核实实际取得所有权后向企业买方转售、验收货批动物集合、头数类别状态时间及专业实际适运商业记录。发票拆分、动物头数或撤销转移均不得增加 N。 |  |
| validate_animals | 动物备查台账 | 逐个核对身份和头数事件，与实测活重尸体质量分开；保留全部实际隔离退回死亡停留，调查未知缺口并关联原交接点商品损失覆盖，不重复处置。 |  |
| validate_care | feed 与 drinking_water; drinking_water_liquid_tap | 按动物类别停留区间采用实际库存调整后的饲料、垫料、水和照料记录，不规定日粮药品，不由增重换算或推定粪污得率。拒收死亡动物保留实际服务照料负担。 |  |
| validate_fates | 所有清单行 | 每个实际原生单位交换均需本节点协议及状态接收证据。分开可用退回、粪污产品或废物、尸体、诊疗废物、容装废水、直接取水及排口。去向覆盖未知阻止最终数据，混合物和服务商处理仅计一次。 |  |
| validate_species | enteric_methane 与 other_species; other_species_co2_fossil_air; other_species_nitrous_oxide_air; other_species_ammonia_air | 核实实际物质受纳介质及时间活动基准、类别日粮粪污方法层级、氮与物种质量及有来源换算。不将年因子乘全年周转头数，不重复肠道粪污排放，不以差额推排放。 |  |
| validate_assets | shared_assets | 检查全部使用方、实际期间、完整寿命制造维护更换及寿命终结、观察与有证据剩余驱动和不确定性，采用唯一视图且不设默认寿命。 |  |
| validate_mode_period | depot_wholesale | 全部批次货批、照料清洁隔离拒收退回事件及实际库存关联真实动物和期间，避免共享作业期重复；失败撤销尝试保留实际资源但不计已验收数量。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 完成具体身份及前景完整性审核后作为 secondary_dataset；background_dataset |
| downstream_use | 与单独匹配原交接点商品生产和损失覆盖组合的临时活牛批发服务附加过程 |
| allowed_use | 实际 Bos 属活牛自营经销周转场货批，具有匹配照料适运时间数量及商业交接限定条件 |
| excluded_use | 单独的动物生产或交付活牛完整足迹；农场育成育肥屠宰；全部活物种平均；代理拍卖收费或货币因子；未关联原交接点损失的完整链条声明 |
| required_metadata | 实际动物货批场址期间、类别状态头数活重基准、来源去向、所有权、实际占栏照料适运验收、饲料粪污方法、运输处理资产覆盖和商品损失归属方状态 |
| required_quality_disclosure | 实际身份时间库存方法不确定性、具体 UUID 缺口、类别日粮系统特定因子覆盖、全部使用方资产驱动、照料或接收数据不完整及独立范围限制 |
| update_trigger | 动物类别路线停留目的、所有权交接照料福利标准、粪污排放方法、饲料水服务商覆盖、资产、原交接点损失覆盖或记录证据变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-live-animal-wholesale | official_guidance | UNSD, CPC Version 3.0 explanatory notes (30 June 2025), division61/subclass61014. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅支持自营活物批发分类及较窄活牛经销周转场路线，不是物理清单配方。 |
| woah-land-transport | official_guidance | WOAH, Terrestrial Animal Health Code, Chapter7.3 Transport of animals by land. https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/current/en_chapitre_aw_land_transpt.htm | 定性支持集结临时保管、照料适运职责及旅程记录，不提供通用最长停留、剂量或法律证书。 |
| govuk-cattle-holding-register | official_guidance | GOV.UK, Keep a holding register for cattle to record births, movements and deaths. https://www.gov.uk/guidance/keep-a-holding-register-for-cattle | 以特定法域一手示例支持个体活牛身份、来源去向移动及死亡记录，不全球套用英格兰和威尔士时限。 |
| ipcc-livestock-2019 | official_guidance | IPCC, 2019 Refinement to the 2006 Guidelines, Volume4 Chapter10, Emissions from Livestock and Manure Management, with applicable corrigenda. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 支持活动存栏时间及肠道粪污方法区分，需实际适用性和操作数；不选择默认排放、排泄或甲烷转化因子。 |
