---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.mixes-and-doughs-for-the-preparation-of-bakers-wares
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 用于制备烘焙制品的预拌料和面团

## 1. 范围与适用性

本 PCR 覆盖工厂生产、供后续制备烘焙制品使用的未烘焙干混料以及已制备的湿面团或面糊。边界包括产品特定的原料接收与配料、干混或湿面团制备、实际发生的发酵与整形、路线特定的冷却或冷冻、包装、到工厂门的储存、清洁，以及可直接归属的公用工程。

每个前景数据包应且只能选择一个 `route_code`：`dry_mix_ambient`、`wet_dough_ambient`、`wet_dough_chilled` 或 `wet_dough_frozen`。应针对该路线记录配方、水分、膨松方式、温度调节、包装、储存时长和损失。严禁把干混料、常温面团、冷藏面团和冷冻面团平均为一个数据集。多路线工厂应发布相互独立的路线数据集；只有真正共用的服务才可采用路线分表计量，或使用已披露的因果分配。

纳入零售、餐饮服务或工业用烘焙干预拌料；以散装、分割或成形状态销售或转移的未烘焙面团或面糊；以及冷藏或冷冻的未烘焙面团。排除作为产品销售的面粉或淀粉、成品或部分烘焙的烘焙制品、已烘焙的面包/蛋糕/饼干/披萨/糕点、预制菜、客户处烘焙，以及超出所声明工厂门的分销。冷冻的部分烘焙产品属于已烘焙制品，不属于本 PCR。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.mixes-and-doughs-for-the-preparation-of-bakers-wares |
| classification_refs | CPC 3.0: 23180, exact |
| covered_products | 未烘焙烘焙干混料；常温、冷藏或冷冻市场状态的未烘焙湿面团或面糊；散装、分割或成形产品形态 |
| excluded_products | 作为产品销售的面粉和淀粉；成品或部分烘焙的烘焙制品；已烘焙的面包、蛋糕、饼干、披萨和糕点；预制菜；客户烘焙；门后分销 |
| representative_product | 制造工厂门处，一个已声明配方且采用一个互斥路线的未烘焙烘焙预拌料或面团 |
| production_route | 必须且只能是 `dry_mix_ambient`、`wet_dough_ambient`、`wet_dough_chilled`、`wet_dough_frozen` 之一 |
| market_state | 常温干混料、常温湿面团或面糊、冷藏湿面团或面糊、冷冻湿面团或面糊，且不得跨状态平均 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 工厂门处一个已声明配方的未烘焙烘焙预拌料、面团或面糊的净质量 |
| How much | 1 kg 净产品，不含包装 |
| How well | 符合已声明的 `route_code`、配方、膨松方式、水分、整形状态、储存温度、保质期和质量规格 |
| How long or cycle | 一个生产活动期；按经路线特定储存后放行的 1 kg 产品归一化至所声明工厂门 |
| reference_flow_link | 0252f353-8398-4eab-9e26-6a13e4b4f06b |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 烘烤细点制品的混合料及面团 `0252f353-8398-4eab-9e26-6a13e4b4f06b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | route_code; formulation_id; leavening_mode; make_up_state; net_mass_basis; moisture_or_water_mass_fraction; storage_temperature_setpoint; storage_duration; packaging_configuration; shelf_life; production_site_and_geography |

该天工记录的 UUID、英文基础名称、CPC 23180 分类叶、`Product flow` 类型和 `Mass` 定量参考已得到一致核验，但其 `common:generalComment` 错写 CPC 232。该注释应作为元数据缺陷处理，不得用作范围、过程选择、数量或任何其他方法学规则的依据。

构建前景数据包时，`必需限定信息` 中的每一项均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告完成路线特定调温和储存后、包装质量之外的产品净质量；包装作为单独清单投入。 |
| `formulation_mass` | 原料和中间产品 | Mass | kg | 把每种实际原料记录为独立具名流，并保留批次配方、领用、退回和返工记录；不得报告汇总的原料或材料流。 |
| `water_and_moisture` | 配方用水和产品水分 | Mass | kg | 添加水应与原料水分分开记录，并报告实测或规格给出的最终水分或水质量分数。 |
| `electricity_energy` | 电力 | Energy | kWh | 按纳入过程记录计量电力；其他电能单位应按披露的精确换算转换为 kWh。 |
| `thermal_energy` | 天然气、LPG、柴油、外购蒸汽和外购热水 | Net calorific energy | MJ | 每种载能体保持为独立流；燃料数量应声明低位热值、来源和换算，不得合并为“热能”。 |
| `cold_storage_time` | 冷却、冷冻和冷库储存 | Energy and time | kWh; tonne-day | 计量允许时，调温电力应与储存电力分开记录；只有无法直接分表计量时，才按产品质量 × 停留时长归一化共用冷库电力。 |
| `refrigerant_mass` | 制冷剂充注、补加、回收和损失 | Mass | kg | 识别实际制冷剂化学品并分别计算每种制冷剂损失；不得报告通用“制冷剂”流，也不得合并不同化学品。 |
| `packaging_mass` | 一级、二级和三级包装 | Mass | kg | 每种包装材料分别计量，报告置于参考产品上的净包装量，并单独报告实测边角料。 |
| `wastewater_and_pollutants` | 废水和直接水排放 | Volume and mass | m3; kg | 废水体积作为废物流记录；直接排放时，每种实测污染物负荷作为独立基本流报告，并避免与外部废水处理数据集中已建模的负荷重复。 |
| `air_emissions` | 直接空气排放 | Mass | kg | 分别报告每种实测或计算物质，包括适用时的燃烧排放、制冷剂释放、原料粉尘、生物源二氧化碳和乙醇。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在制造场址边界接收的、逐项识别的原料、包装、外购能源、水、清洁化学品；声明数量、供应商地域和上游数据集引用 |
| starting_condition_role | 前景门到门生产始于接收；上游生产和入厂运输应作为关联产品系统，而不是被省略的负荷 |
| product_classification_scope | 经评审的 CPC 3.0 23180 语义边界内的未烘焙烘焙预拌料和面团；分类仅是语境，不是规范身份 |
| recursive_input_rule | 本 PCR 类别内的外购预拌料或面团，应作为具有自身上游数据集和已声明路线的独立技术流投入；不得递归展开或静默吸收其生产清单 |
| upstream_dataset_requirement | 为所选路线使用的每种原料、包装材料、载能体、供水、清洁化学品、制冷剂、运输服务和废物处理关联具代表性的上游数据集 |
| disclosure | 声明 route_code、formulation_id、leavening_mode、make_up_state、场址、地域、活动期、产品温度、储存时长、包装、截断、分配、返工以及对本边界的所有偏离 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_route_lock` | 所有前景数据集 | 选择且只能选择一个 route_code 和一个 formulation_id。不得平均干混料、常温湿面团、冷藏湿面团或冷冻湿面团，也不得合并不同膨松或保藏路线。 | `un-cpc-v3-explanatory-notes-2025` |
| `sb_included_operations` | 所选路线 | 纳入所有满足门禁的过程，从原料接收到工厂门储存，并纳入可直接归属的清洁、制冷剂损失、废水、废物和现场公用工程负荷。 | `us-epa-bakery-oven-act-1992`; `eu-emas-food-beverage-2017`; `eu-fdm-bref-2019` |
| `sb_upstream_links` | 外购投入 | 上游生产和入厂运输不纳入前景过程，但应关联具代表性的数据集；披露任何上游覆盖缺口。 | `ghg-protocol-product-standard-2011` |
| `sb_excluded_downstream` | 下游制备 | 排除所声明工厂门后的醒发、解冻、烘焙、零售储存、消费和报废，除非数据集明确扩展边界；绝不把成品烘焙制品的烤炉负荷导入本产品路线。 | `un-cpc-v3-explanatory-notes-2025`; `us-epa-bakery-oven-act-1992` |
| `sb_cold_route` | wet_dough_chilled 和 wet_dough_frozen | 纳入实际调温及冷库电力、温度记录、制冷剂补加与释放、冷链损失和储存时长。只有产品声明为速冻食品时，才适用 Codex 速冻温度规则。 | `codex-cxc-8-1976`; `eu-emas-food-beverage-2017` |
| `sb_shared_services` | 共用公用工程、清洁、仓储和制冷系统 | 优先过程细分和分表计量。若仍有共用服务，应采用有记录的因果驱动因子，并保留未分配场址总量及对账。 | `ghg-protocol-product-standard-2011` |
| `sb_direct_emissions` | 场址排放 | 为每种实际发生的直接排放建立独立基本流；不得把燃烧、制冷剂、粉尘、发酵或直接水体释放隐藏在通用排放卡中。 | `eu-emas-food-beverage-2017`; `eu-fdm-bref-2019` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `ingredient_receiving_and_dosing` | 原料接收、储存与配料 | required | 所有路线；仅实例化实际使用的逐项具名配方流 | 前景材料准备 | 每 1,000 kg 放行参考产品 |
| `dry_sieving_and_blending` | 干式筛分与混合 | conditional | 仅 route_code = dry_mix_ambient 时纳入 | 前景干混料生产 | 每 1,000 kg 放行干混料 |
| `dough_mixing_and_kneading` | 湿式混合与揉制 | conditional | 仅 route_code 为 wet_dough_ambient、wet_dough_chilled 或 wet_dough_frozen 时纳入 | 前景湿面团生产 | 每 1,000 kg 放行湿面团或面糊 |
| `fermentation_resting_and_makeup` | 发酵、静置、分割与成形 | conditional | 仅纳入实际发生的操作；发酵要求 leavening_mode = yeast 或 mixed | 前景产品发育与整形 | 每 1,000 kg 离开该操作的产品 |
| `temperature_conditioning_and_cold_storage` | 冷却或冷冻及冷库储存 | conditional | 仅 route_code = wet_dough_chilled 或 wet_dough_frozen 时纳入；锁定调温方法和储存状态 | 前景保藏 | 每 1,000 kg 放行的冷藏或冷冻产品及已声明储存时长 |
| `packaging` | 一级和二级包装 | required | 所有路线；仅实例化实际使用的具名包装材料 | 前景包装 | 每 1,000 kg 包装净产品 |
| `ambient_finished_storage` | 常温成品储存 | conditional | 仅 route_code = dry_mix_ambient 或 wet_dough_ambient 时纳入 | 前景储存 | 每 1,000 kg 放行产品及已声明储存时长 |
| `cleaning_and_sanitation` | 清洁与卫生处理 | required | 纳入可归属于所含生产的实际干式和湿式清洁 | 前景卫生支持 | 每 1,000 kg 放行参考产品 |
| `onsite_thermal_utility` | 现场蒸汽或热水生产 | conditional | 仅当现场燃料公用工程向纳入过程供能时纳入；否则直接记录外购蒸汽或热水 | 前景公用工程供给 | 每 MJ 向纳入过程提供的有用蒸汽或热水 |

### 过程：原料接收、储存与配料（`ingredient_receiving_and_dosing`）

#### 输入

##### 产品流

###### 小麦粉（`wheat_flour`）

仅在锁定配方中存在小麦粉时记录。

- 选定流：小麦粉
- 流属性/单位：质量 / kg
- 数量规则：批次净领用量减去有记录的退回量，再按放行产品归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_mass`
- 来源：`us-epa-bakery-oven-act-1992`

###### 米粉（`rice_flour`）

使用米粉时单独记录，包括无麸质配方。

- 选定流：米粉
- 流属性/单位：质量 / kg
- 数量规则：批次净领用量减去有记录的退回量，再按放行产品归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_mass`
- 来源：

###### 玉米粉（`maize_flour`）

使用玉米粉时单独记录。

- 选定流：玉米粉
- 流属性/单位：质量 / kg
- 数量规则：批次净领用量减去有记录的退回量，再按放行产品归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_mass`
- 来源：

###### 马铃薯淀粉（`potato_starch`）

作为配方原料使用时单独记录马铃薯淀粉；该投入不改变输出产品类别身份。

- 选定流：马铃薯淀粉
- 流属性/单位：质量 / kg
- 数量规则：批次净领用量减去有记录的退回量，再按放行产品归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_mass`
- 来源：

###### 配方饮用水（`formulation_water`）

添加的配方用水应与清洁用水和原料水分分开记录。

- 选定流：饮用水
- 流属性/单位：质量 / kg
- 数量规则：加入锁定配方的计量或称量水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_mass`
- 来源：`us-epa-bakery-oven-act-1992`

###### 面包酵母（`bakers_yeast`）

仅对酵母或混合膨松方式记录面包酵母。

- 选定流：面包酵母
- 流属性/单位：质量 / kg
- 数量规则：批次净领用量，按收到的产品质量报告
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_mass`
- 来源：`us-epa-bakery-oven-act-1992`

###### 氯化钠（`sodium_chloride`）

使用食品级氯化钠时单独记录。

- 选定流：氯化钠
- 流属性/单位：质量 / kg
- 数量规则：批次净领用量减去有记录的退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_mass`
- 来源：`us-epa-bakery-oven-act-1992`

###### 蔗糖（`sucrose`）

使用蔗糖时，应与其他甜味剂分开记录。

- 选定流：蔗糖
- 流属性/单位：质量 / kg
- 数量规则：批次净领用量减去有记录的退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_mass`
- 来源：`us-epa-bakery-oven-act-1992`

###### 棕榈起酥油（`palm_shortening`）

使用棕榈起酥油时单独记录；其他脂肪或油应由前景数据包建立自身的具名原子流卡。

- 选定流：棕榈起酥油
- 流属性/单位：质量 / kg
- 数量规则：批次净领用量减去有记录的退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_mass`
- 来源：`us-epa-bakery-oven-act-1992`

###### 脱脂奶粉（`skim_milk_powder`）

使用脱脂奶粉时单独记录。

- 选定流：脱脂奶粉
- 流属性/单位：质量 / kg
- 数量规则：批次净领用量减去有记录的退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_mass`
- 来源：`us-epa-bakery-oven-act-1992`

###### 全蛋粉（`whole_egg_powder`）

使用全蛋粉时单独记录；液态蛋应由前景数据包建立自身的具名行。

- 选定流：全蛋粉
- 流属性/单位：质量 / kg
- 数量规则：批次净领用量减去有记录的退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_mass`
- 来源：

###### 碳酸氢钠（`sodium_hydrogen_carbonate`）

化学或混合膨松配方中的碳酸氢钠应单独记录。

- 选定流：碳酸氢钠
- 流属性/单位：质量 / kg
- 数量规则：批次净领用量减去有记录的退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_mass`
- 来源：

###### 磷酸二氢钙（`monocalcium_phosphate`）

磷酸二氢钙是已声明膨松酸时单独记录。

- 选定流：磷酸二氢钙
- 流属性/单位：质量 / kg
- 数量规则：批次净领用量减去有记录的退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_mass`
- 来源：

###### 脂肪酸单甘油酯和双甘油酯（`mono_diglycerides`）

使用已声明的单甘油酯和双甘油酯乳化剂制剂时单独记录。

- 选定流：脂肪酸单甘油酯和双甘油酯
- 流属性/单位：质量 / kg
- 数量规则：批次净领用量减去有记录的退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_mass`
- 来源：`us-epa-bakery-oven-act-1992`

###### α-淀粉酶制剂（`alpha_amylase_preparation`）

使用配制的 α-淀粉酶制剂时单独记录；除非同时报告二者，否则采用外购制剂质量而不是活性酶质量。

- 选定流：α-淀粉酶制剂
- 流属性/单位：质量 / kg
- 数量规则：外购制剂的批次净领用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_mass`
- 来源：`us-epa-bakery-oven-act-1992`

###### 丙酸钙（`calcium_propionate`）

使用丙酸钙作为防腐剂时单独记录。

- 选定流：丙酸钙
- 流属性/单位：质量 / kg
- 数量规则：批次净领用量减去有记录的退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_mass`
- 来源：`us-epa-bakery-oven-act-1992`

###### 接收与配料电力（`receiving_dosing_electricity`）

记录卸料、输送、储存、配料前筛分和称量中可归属于所选配方的电力。

- 选定流：制造场址供电
- 流属性/单位：Energy / kWh
- 数量规则：分表计量电力，或设备功率 × 运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_dosing_energy`
- 来源：`eu-emas-food-beverage-2017`
- 数量范围：暂定接收与配料电力 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：30
  - 单位：kWh
  - 基准：每 1,000 kg 放行参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 已配料配方批次（`dosed_formulation_batch`）

记录转入干混或湿混的质量；原料身份继续保留在底层清单中。

- 选定流：已配料配方批次
- 流属性/单位：质量 / kg
- 数量规则：接收与配料损失后各原料净投料量之和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ingredient_mass`
- 来源：

##### 废物流

###### 废小麦粉（`wheat_flour_waste`）

记录单独称量并送往已声明处理路线的洒落小麦粉和不合格小麦粉。其他每一种废弃原料均应使用其自身具体命名的原子废物流卡。

- 选定流：废小麦粉
- 流属性/单位：质量 / kg
- 数量规则：实测废弃原料质量减去有记录的退回或返工量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_dosing_losses`
- 来源：`eu-emas-food-beverage-2017`
- 数量范围：暂定原料损失 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg
  - 基准：每 1,000 kg 放行参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 空进厂纸袋（`incoming_paper_sack_waste`）

记录原料倾空后废弃的纸袋；可重复使用或退回的包装应另行报告。

- 选定流：废牛皮纸袋
- 流属性/单位：质量 / kg
- 数量规则：称量的废纸袋质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_dosing_losses`
- 来源：

###### 空进厂塑料内衬（`incoming_plastic_liner_waste`）

记录原料倾空后废弃的塑料内衬。

- 选定流：废聚乙烯内衬
- 流属性/单位：质量 / kg
- 数量规则：称量的废内衬质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_dosing_losses`
- 来源：

##### 基本流

###### 排入空气的面粉颗粒物（`flour_particulate_to_air_receiving`）

依据监测或有记录的场址排放计算，记录接收和配料中捕集后释放或直接排放的面粉颗粒物质量。

- 选定流：面粉粉尘颗粒物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：实测排放量，或处理质量 × 控制后的场址特定释放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_dosing_losses`
- 来源：`eu-fdm-bref-2019`

### 过程：干式筛分与混合（`dry_sieving_and_blending`）

#### 输入

##### 产品流

###### 已配料干式配方批次（`dry_dosed_batch_input`）

记录进入干式路线的已配料配方，不得混入湿式路线物料。

- 选定流：已配料干式配方批次
- 流属性/单位：质量 / kg
- 数量规则：实测转移批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 干混料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_blend_records`
- 来源：

###### 干混用电（`dry_blending_electricity`）

记录干式路线筛分、输送、混合和除尘用电。

- 选定流：电力，供应至制造场址
- 流属性/单位：能量 / kWh
- 数量规则：分表电量或设备功率 × 运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干混料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_dry_blend_records`
- 来源：`eu-emas-food-beverage-2017`
- 数量范围：暂定干混用电 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：2
  - 上限：100
  - 单位：kWh
  - 基准：每 1,000 kg 干混料输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 已混合烘焙干预拌料（`blended_dry_premix`）

记录放行至包装的干预拌料。

- 选定流：已混合烘焙干预拌料
- 流属性/单位：质量 / kg
- 数量规则：干混后的实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 干混料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_blend_records`
- 来源：

##### 废物流

###### 干混不合格料（`dry_blending_reject`）

只有当筛上粗料、不合格混合物和未返工线体残留物采用同一已声明废物处理路线时，才将其记录为一项；否则分别拆分。

- 选定流：不合格烘焙干预拌料
- 流属性/单位：质量 / kg
- 数量规则：实测干式不合格料质量减去有记录的同产品返工量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干混料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_blend_records`
- 来源：`eu-emas-food-beverage-2017`
- 数量范围：暂定干式不合格料 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg
  - 基准：每 1,000 kg 干混料输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排入空气的面粉颗粒物（`flour_particulate_to_air_blending`）

记录实际控制系统之后释放的干混颗粒物。

- 选定流：面粉粉尘颗粒物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：实测排放量，或处理质量 × 控制后的场址特定释放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干混料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_dry_blend_records`
- 来源：`eu-fdm-bref-2019`

### 过程：湿式混合与揉制（`dough_mixing_and_kneading`）

#### 输入

##### 产品流

###### 已配料湿式配方批次（`wet_dosed_batch_input`）

记录进入选定湿式路线的已配料配方。

- 选定流：已配料湿式配方批次
- 流属性/单位：质量 / kg
- 数量规则：实测转移批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 混合面团或面糊输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dough_mixing_records`
- 来源：`us-epa-bakery-oven-act-1992`

###### 面团混合用电（`dough_mixing_electricity`）

记录混合机、揉面机、泵和局部输送设备用电。

- 选定流：电力，供应至制造场址
- 流属性/单位：能量 / kWh
- 数量规则：分表电量或设备功率 × 带料运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 混合面团或面糊输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_dough_mixing_records`
- 来源：`us-epa-bakery-oven-act-1992`; `eu-emas-food-beverage-2017`
- 数量范围：暂定湿式混合用电 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5
  - 上限：180
  - 单位：kWh
  - 基准：每 1,000 kg 混合面团或面糊输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 已混合面团或面糊（`mixed_dough_or_batter`）

记录实测混合输出，并在产品元数据中标明面团或面糊状态。

- 选定流：已混合烘焙面团或面糊
- 流属性/单位：质量 / kg
- 数量规则：混合机的实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 混合面团或面糊输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dough_mixing_records`
- 来源：`us-epa-bakery-oven-act-1992`

##### 废物流

###### 湿式混合不合格料（`wet_mixing_reject`）

记录混合和转移期间不合格的面团或面糊，并扣除同产品返工量。

- 选定流：不合格湿式烘焙面团或面糊
- 流属性/单位：质量 / kg
- 数量规则：实测不合格质量减去有记录的同产品返工量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 混合面团或面糊输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dough_mixing_records`
- 来源：`eu-emas-food-beverage-2017`
- 数量范围：暂定湿式混合不合格料 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kg
  - 基准：每 1,000 kg 混合面团或面糊输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：发酵、静置、分割和成形（`fermentation_resting_and_makeup`）

#### 输入

##### 产品流

###### 已混合面团输入（`mixed_dough_input`）

记录仅进入实际实施的发酵、静置、分割或成形步骤的已混合面团。

- 选定流：已混合烘焙面团
- 流属性/单位：质量 / kg
- 数量规则：实测转移面团质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 离开本过程的产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_makeup_records`
- 来源：`us-epa-bakery-oven-act-1992`

###### 发酵与整形用电（`fermentation_makeup_electricity`）

记录实际使用的搅拌、输送、分割、搓圆、成形设备和受控房间用电。

- 选定流：电力，供应至制造场址
- 流属性/单位：能量 / kWh
- 数量规则：分表电量或设备功率 × 运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 离开本过程的产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_fermentation_makeup_records`
- 来源：`us-epa-bakery-oven-act-1992`; `eu-emas-food-beverage-2017`
- 数量范围：暂定发酵与整形用电 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kWh
  - 基准：每 1,000 kg 离开本过程的产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 湿度控制用外购蒸汽（`fermentation_purchased_steam`）

使用外购蒸汽进行受控加湿时单独记录；场内蒸汽由 `onsite_thermal_utility` 供应，不得重复记录为外购蒸汽。

- 选定流：蒸汽，外购
- 流属性/单位：净热值能量 / MJ
- 数量规则：计量蒸汽量按实测或供应商提供的焓差换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 离开本过程的产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_fermentation_makeup_records`
- 来源：

#### 输出

##### 产品流

###### 整形后已制备面团（`prepared_dough_after_makeup`）

按 `make_up_state` 的声明记录散装、分割或成形产品。

- 选定流：已制备未烘焙烘焙面团
- 流属性/单位：质量 / kg
- 数量规则：最后一个纳入操作后的实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 离开本过程的产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_makeup_records`
- 来源：`us-epa-bakery-oven-act-1992`

##### 废物流

###### 发酵或整形不合格料（`fermentation_makeup_reject`）

记录发酵、静置、分割或成形期间的不合格面团，并扣除返工量。

- 选定流：不合格已制备烘焙面团
- 流属性/单位：质量 / kg
- 数量规则：实测不合格质量减去有记录的同产品返工量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 离开本过程的产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_makeup_records`
- 来源：

##### 基本流

###### 面团发酵产生的生物源二氧化碳（`fermentation_biogenic_co2`）

仅在发生酵母发酵，且厂门前释放量有实测或有记录的质量平衡计算时记录生物源二氧化碳。

- 选定流：二氧化碳，生物源，排入空气
- 流属性/单位：质量 / kg
- 数量规则：实测释放量，或针对纳入发酵时间的有记录底物至二氧化碳计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 离开本过程的产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_fermentation_makeup_records`
- 来源：`us-epa-bakery-oven-act-1992`

###### 面团发酵乙醇排入空气（`fermentation_ethanol_to_air`）

仅在发生酵母发酵且具备场址实测或可辩护的烘焙前平衡时，记录烘焙前释放的乙醇；不得将烘焙炉排放因子用于未烘焙面团生产。

- 选定流：乙醇，排入空气
- 流属性/单位：质量 / kg
- 数量规则：仅采用场址实测或有记录的烘焙前发酵平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 离开本过程的产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_fermentation_makeup_records`
- 来源：`us-epa-bakery-oven-act-1992`
### 过程：冷却或冻结与冷藏（`temperature_conditioning_and_cold_storage`）

#### 输入

##### 产品流

###### 未调温湿面团或面糊（`unconditioned_wet_product`）

记录进入已锁定冷藏或冷冻路线的湿式产品。

- 选定流：未调温湿式烘焙面团或面糊
- 流属性/单位：质量 / kg
- 数量规则：进入调温的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行冷藏或冷冻产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_route_records`
- 来源：

###### 调温与冷藏用电（`cold_route_electricity`）

记录所选状态的冷却或冻结用电及冷藏用电；有条件时保留独立电表通道，绝不得平均冷藏和冷冻路线。

- 选定流：电力，供应至制造场址
- 流属性/单位：能量 / kWh
- 数量规则：调温分表 kWh + 按实际吨日停留分配的冷库 kWh
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 放行冷藏或冷冻产品及已声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cold_route_records`
- 来源：`codex-cxc-8-1976`; `eu-emas-food-beverage-2017`
- 数量范围：暂定冷链路线用电敏感性先验
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：10
  - 上限：1200
  - 单位：kWh
  - 基准：每 1,000 kg 放行冷藏或冷冻产品，包括已声明厂内储存
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 氨制冷剂补充量（`ammonia_refrigerant_input`）

安装制冷剂为氨时，记录归属于所选冷链路线的氨净补充量。

- 选定流：氨，制冷剂级
- 流属性/单位：质量 / kg
- 数量规则：期初充注量 + 购入量 - 期末充注量 - 回收量，仅在系统核对后分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行冷藏或冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cold_route_records`
- 来源：`eu-emas-food-beverage-2017`; `codex-cxc-8-1976`

###### R404A 制冷剂补充量（`r404a_refrigerant_input`）

安装制冷剂为 R404A 时，单独记录 R404A 净补充量。

- 选定流：制冷剂 R404A
- 流属性/单位：质量 / kg
- 数量规则：期初充注量 + 购入量 - 期末充注量 - 回收量，仅在系统核对后分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行冷藏或冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cold_route_records`
- 来源：`eu-emas-food-beverage-2017`; `codex-cxc-8-1976`

###### R134a 制冷剂补充量（`r134a_refrigerant_input`）

安装制冷剂为 R134a 时，单独记录 R134a 净补充量。

- 选定流：制冷剂 R134a
- 流属性/单位：质量 / kg
- 数量规则：期初充注量 + 购入量 - 期末充注量 - 回收量，仅在系统核对后分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行冷藏或冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cold_route_records`
- 来源：`eu-emas-food-beverage-2017`; `codex-cxc-8-1976`

###### 二氧化碳制冷剂补充量（`r744_refrigerant_input`）

安装制冷剂为 R744 时，单独记录 R744 二氧化碳净补充量。

- 选定流：二氧化碳，制冷剂级，R744
- 流属性/单位：质量 / kg
- 数量规则：期初充注量 + 购入量 - 期末充注量 - 回收量，仅在系统核对后分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行冷藏或冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cold_route_records`
- 来源：`eu-emas-food-beverage-2017`; `codex-cxc-8-1976`

#### 输出

##### 产品流

###### 厂门处冷藏或冷冻参考产品（`cold_reference_product_output`）

仅记录所选市场状态，以及已声明包装顺序和厂内冷藏后的实际放行温度；速冻声明须具有热中心和冷链记录。

- 选定流：烘烤细点制品的混合料及面团 `0252f353-8398-4eab-9e26-6a13e4b4f06b`
- 流属性/单位：质量 / kg
- 数量规则：用于归一化的 1,000 kg 净放行参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 放行冷藏或冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：`codex-cxc-8-1976`

##### 废物流

###### 冷链路线产品损失（`cold_route_product_loss`）

记录温度失控、冻害或其他原因造成的不合格产品，并扣除返工量。

- 选定流：不合格冷藏或冷冻烘焙面团或面糊
- 流属性/单位：质量 / kg
- 数量规则：实测不合格质量减去有记录的同产品返工量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 放行冷藏或冷冻产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_route_records`
- 来源：`codex-cxc-8-1976`; `eu-emas-food-beverage-2017`

##### 基本流

###### 氨制冷剂排入空气（`ammonia_refrigerant_to_air`）

单独记录核对后的氨空气损失。

- 选定流：氨，排入空气
- 流属性/单位：质量 / kg
- 数量规则：未转移至回收或废物处理的已核对氨损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行冷藏或冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cold_route_records`
- 来源：`eu-emas-food-beverage-2017`; `codex-cxc-8-1976`

###### R404A 制冷剂排入空气（`r404a_refrigerant_to_air`）

单独记录核对后的 R404A 空气损失。

- 选定流：制冷剂 R404A，排入空气
- 流属性/单位：质量 / kg
- 数量规则：未转移至回收或废物处理的已核对 R404A 损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行冷藏或冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cold_route_records`
- 来源：`eu-emas-food-beverage-2017`; `codex-cxc-8-1976`

###### R134a 制冷剂排入空气（`r134a_refrigerant_to_air`）

单独记录核对后的 R134a 空气损失。

- 选定流：制冷剂 R134a，排入空气
- 流属性/单位：质量 / kg
- 数量规则：未转移至回收或废物处理的已核对 R134a 损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行冷藏或冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cold_route_records`
- 来源：`eu-emas-food-beverage-2017`; `codex-cxc-8-1976`

###### R744 二氧化碳制冷剂排入空气（`r744_refrigerant_to_air`）

将核对后的 R744 空气损失与燃烧和生物源二氧化碳分别记录。

- 选定流：二氧化碳，化石源，排入空气，来自制冷剂 R744
- 流属性/单位：质量 / kg
- 数量规则：未转移至回收或废物处理的已核对 R744 损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行冷藏或冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cold_route_records`
- 来源：`eu-emas-food-beverage-2017`; `codex-cxc-8-1976`

### 过程：初级与次级包装（`packaging`）

#### 输入

##### 产品流

###### 未包装路线产品（`unpacked_route_product`）

记录仅来自一条路线并进入包装的合格产品质量。

- 选定流：未包装烘焙预拌料、面团或面糊
- 流属性/单位：质量 / kg
- 数量规则：进入包装的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 包装用电（`packaging_electricity`）

记录灌装、封口、贴标、装箱和托盘缠绕用电。

- 选定流：电力，供应至制造场址
- 流属性/单位：能量 / kWh
- 数量规则：分表电量或设备功率 × 运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-emas-food-beverage-2017`
- 数量范围：暂定包装用电 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：120
  - 单位：kWh
  - 基准：每 1,000 kg 净包装产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 低密度聚乙烯薄膜（`ldpe_packaging_film`）

使用 LDPE 作为内衬、袋或缠绕膜时单独记录。

- 选定流：低密度聚乙烯薄膜
- 流属性/单位：质量 / kg
- 数量规则：领用 LDPE 薄膜 - 退回薄膜 - 实测 LDPE 废料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-emas-food-beverage-2017`

###### 聚丙烯薄膜（`pp_packaging_film`）

使用聚丙烯薄膜时单独记录。

- 选定流：聚丙烯薄膜
- 流属性/单位：质量 / kg
- 数量规则：领用聚丙烯薄膜 - 退回薄膜 - 实测聚丙烯废料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-emas-food-beverage-2017`

###### 牛皮纸袋（`kraft_paper_bag`）

使用牛皮纸袋时单独记录其质量。

- 选定流：牛皮纸袋
- 流属性/单位：质量 / kg
- 数量规则：领用袋数 × 经核实单袋质量 - 退回袋质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-emas-food-beverage-2017`

###### 瓦楞纸箱（`corrugated_board_case`）

使用瓦楞纸箱时单独记录。

- 选定流：瓦楞纸箱
- 流属性/单位：质量 / kg
- 数量规则：领用箱数 × 经核实单箱质量 - 退回箱质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-emas-food-beverage-2017`

###### 聚乙烯拉伸膜（`pe_stretch_film`）

使用托盘拉伸膜时单独记录。

- 选定流：聚乙烯拉伸膜
- 流属性/单位：质量 / kg
- 数量规则：领用拉伸膜卷质量 - 剩余膜卷质量 - 实测废料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-emas-food-beverage-2017`
- 数量范围：暂定 PE 拉伸膜质量 QA 先验
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：50
  - 单位：kg
  - 基准：每 1,000 kg 净包装产品；以实测领用和退回膜卷质量替代
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 已包装路线产品（`packed_route_product`）

记录已包装产品毛重，并分别保留净产品和各包装组成的质量。

- 选定流：已包装烘焙预拌料、面团或面糊
- 流属性/单位：质量 / kg
- 数量规则：实测净产品 + 实测包装质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 废物流

###### LDPE 包装废料（`ldpe_packaging_scrap`）

将 LDPE 废料与其他聚合物和纸类分别记录。

- 选定流：废低密度聚乙烯薄膜
- 流属性/单位：质量 / kg
- 数量规则：实测 LDPE 边角料和不合格薄膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-emas-food-beverage-2017`

###### 聚丙烯包装废料（`pp_packaging_scrap`）

单独记录聚丙烯废料。

- 选定流：废聚丙烯薄膜
- 流属性/单位：质量 / kg
- 数量规则：实测聚丙烯边角料和不合格薄膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-emas-food-beverage-2017`

###### 牛皮纸包装废料（`kraft_paper_packaging_scrap`）

将牛皮纸袋和标签废料与瓦楞纸板及聚合物废料分别记录。

- 选定流：废牛皮纸
- 流属性/单位：质量 / kg
- 数量规则：送往已声明处理路线的实测不合格牛皮纸袋和标签质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-emas-food-beverage-2017`

###### 瓦楞纸板包装废料（`corrugated_board_packaging_scrap`）

将瓦楞纸箱废料与牛皮纸和聚合物废料分别记录。

- 选定流：废瓦楞纸板
- 流属性/单位：质量 / kg
- 数量规则：送往已声明处理路线的实测不合格瓦楞纸箱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-emas-food-beverage-2017`

##### 基本流

### 过程：常温成品储存（`ambient_finished_storage`）

#### 输入

##### 产品流

###### 已包装常温路线产品（`packed_ambient_product`）

记录进入常温储存的已包装干预拌料或常温湿式产品。

- 选定流：已包装常温烘焙预拌料、面团或面糊
- 流属性/单位：质量 / kg
- 数量规则：常温成品库实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ambient_storage_records`
- 来源：

###### 常温储存用电（`ambient_storage_electricity`）

记录可归属的照明、通风和搬运用电；不包括冷库用电。

- 选定流：电力，供应至制造场址
- 流属性/单位：能量 / kWh
- 数量规则：分表 kWh，或按产品质量 × 停留时间分配的仓库 kWh
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品及已声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_ambient_storage_records`
- 来源：`eu-emas-food-beverage-2017`
- 数量范围：暂定常温储存用电 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：80
  - 单位：kWh
  - 基准：每 1,000 kg 放行产品及已声明厂内储存
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 厂门处参考产品（`reference_product_output`）

记录净放行产品质量；包装保持单独记录。

- 选定流：烘烤细点制品的混合料及面团 `0252f353-8398-4eab-9e26-6a13e4b4f06b`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用于归一化的 1,000 kg 净放行参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：

##### 废物流

###### 常温储存产品损失（`ambient_storage_product_loss`）

记录过期、破损或受污染的常温产品，并扣除返工量。

- 选定流：不合格常温烘焙预拌料、面团或面糊
- 流属性/单位：质量 / kg
- 数量规则：实测废弃质量减去有记录的同产品返工量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ambient_storage_records`
- 来源：`eu-emas-food-beverage-2017`

##### 基本流

### 过程：清洗与卫生处理（`cleaning_and_sanitation`）

#### 输入

##### 产品流

###### 清洗用电（`cleaning_electricity`）

记录清洗期间泵、地面清洗机、原位清洗系统和通风用电。

- 选定流：电力，供应至制造场址
- 流属性/单位：能量 / kWh
- 数量规则：清洗分表电量或设备功率 × 清洗时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`
- 数量范围：暂定清洗用电 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kWh
  - 基准：每 1,000 kg 放行参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗用水（`cleaning_water`）

将湿式清洗使用的饮用水或工艺水与配方用水分别记录。

- 选定流：工艺用水
- 流属性/单位：体积 / m3
- 数量规则：计量清洗水量或校准流量 × 持续时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`
- 数量范围：暂定清洗用水 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：12
  - 单位：m3
  - 基准：每 1,000 kg 放行参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购热水（`purchased_hot_water`）

无场内公用工程供应热水时，单独记录外购热水。

- 选定流：热水，外购
- 流属性/单位：净热值能量 / MJ
- 数量规则：计量质量 × 实测或供应商提供的焓差
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`

###### 清洗用外购蒸汽（`cleaning_purchased_steam`）

使用且并非由场内热力公用工程供应时，单独记录外购蒸汽。

- 选定流：蒸汽，外购
- 流属性/单位：净热值能量 / MJ
- 数量规则：计量蒸汽质量 × 实测或供应商提供的焓差
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`

###### 氢氧化钠清洗液（`sodium_hydroxide_cleaner`）

单独记录购入氢氧化钠产品质量，并披露浓度。

- 选定流：氢氧化钠清洗液
- 流属性/单位：质量 / kg
- 数量规则：向纳入清洗操作领用的购入配制产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`

###### 硝酸清洗液（`nitric_acid_cleaner`）

单独记录购入硝酸产品质量，并披露浓度。

- 选定流：硝酸清洗液
- 流属性/单位：质量 / kg
- 数量规则：向纳入清洗操作领用的购入配制产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`

###### 过乙酸消毒剂（`peracetic_acid_sanitizer`）

单独记录购入过乙酸消毒剂质量，并披露浓度。

- 选定流：过乙酸消毒剂
- 流属性/单位：质量 / kg
- 数量规则：向纳入卫生处理领用的购入配制产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`

#### 输出

##### 产品流

##### 废物流

###### 送往处理的废水（`cleaning_wastewater`）

记录送往已声明场内或外部处理路线的废水体积。

- 选定流：烘焙预拌料和面团清洗废水
- 流属性/单位：体积 / m3
- 数量规则：归属于纳入清洗操作的计量排水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent_records`
- 来源：`eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`
- 数量范围：暂定废水体积 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：12
  - 单位：m3
  - 基准：每 1,000 kg 放行参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗回收食品固体（`cleaning_food_solids_waste`）

记录通过干式清扫和筛分回收并送往已声明处理路线的食品固体。

- 选定流：清洗回收的烘焙预拌料和面团固体
- 流属性/单位：质量 / kg
- 数量规则：实测回收固体质量减去有记录的返工量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent_records`
- 来源：`eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`

##### 基本流

###### 化学需氧量排入水体（`cod_to_water`）

仅对场内最终排放记录直接 COD 负荷；当外部处理数据集已包含污染物释放时省略。

- 选定流：化学需氧量，排入水体
- 流属性/单位：质量 / kg
- 数量规则：流量加权 COD 浓度 × 直接排放体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_records`
- 来源：`eu-fdm-bref-2019`

###### 生化需氧量排入水体（`bod5_to_water`）

在监测并直接排放时单独记录 BOD5 负荷。

- 选定流：五日生化需氧量，排入水体
- 流属性/单位：质量 / kg
- 数量规则：流量加权 BOD5 浓度 × 直接排放体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_records`
- 来源：`eu-fdm-bref-2019`

###### 总悬浮固体排入水体（`tss_to_water`）

在监测并直接排放时单独记录悬浮固体负荷。

- 选定流：总悬浮固体，排入水体
- 流属性/单位：质量 / kg
- 数量规则：流量加权悬浮固体浓度 × 直接排放体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_records`
- 来源：`eu-fdm-bref-2019`

###### 总氮排入水体（`total_nitrogen_to_water`）

在监测并直接排放时单独记录总氮负荷。

- 选定流：氮，总量，排入水体
- 流属性/单位：质量 / kg
- 数量规则：流量加权总氮浓度 × 直接排放体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_records`
- 来源：`eu-fdm-bref-2019`

###### 总磷排入水体（`total_phosphorus_to_water`）

在监测并直接排放时单独记录总磷负荷。

- 选定流：磷，总量，排入水体
- 流属性/单位：质量 / kg
- 数量规则：流量加权总磷浓度 × 直接排放体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_records`
- 来源：`eu-fdm-bref-2019`

### 过程：场内蒸汽或热水生产（`onsite_thermal_utility`）

#### 输入

##### 产品流

###### 天然气（`natural_gas_fuel`）

场内燃烧天然气以生产纳入的蒸汽或热水时单独记录。

- 选定流：天然气
- 流属性/单位：净热值能量 / MJ
- 数量规则：计量燃气量 × 场址或供应商净热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 供应至纳入过程的有用蒸汽或热水
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_utility_records`
- 来源：
- 数量范围：暂定天然气效率 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.05
  - 上限：3
  - 单位：MJ
  - 基准：每 MJ 有用蒸汽或热水输出
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 液化石油气（`lpg_fuel`）

场内燃烧 LPG 时单独记录；不得与天然气或柴油合并。

- 选定流：液化石油气
- 流属性/单位：净热值能量 / MJ
- 数量规则：计量 LPG 质量或体积 × 场址或供应商净热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 供应至纳入过程的有用蒸汽或热水
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_utility_records`
- 来源：
- 数量范围：暂定 LPG 效率 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.05
  - 上限：3
  - 单位：MJ
  - 基准：每 MJ 有用蒸汽或热水输出
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 柴油（`diesel_fuel`）

在纳入的锅炉或加热器中燃烧柴油时单独记录。

- 选定流：柴油
- 流属性/单位：净热值能量 / MJ
- 数量规则：计量柴油体积 × 密度 × 场址或供应商净热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 供应至纳入过程的有用蒸汽或热水
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_utility_records`
- 来源：
- 数量范围：暂定柴油效率 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.05
  - 上限：3.5
  - 单位：MJ
  - 基准：每 MJ 有用蒸汽或热水输出
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 热力公用工程用电（`thermal_utility_electricity`）

单独记录锅炉风机、泵、控制系统和水处理用电。

- 选定流：电力，供应至制造场址
- 流属性/单位：能量 / kWh
- 数量规则：公用工程分表电量或设备功率 × 运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 供应至纳入过程的有用蒸汽或热水
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_utility_records`
- 来源：

###### 锅炉给水（`boiler_feedwater`）

将进入场内公用工程的处理给水与清洗用水分别记录。

- 选定流：锅炉给水
- 流属性/单位：体积 / m3
- 数量规则：计量补充给水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 供应至纳入过程的有用蒸汽或热水
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_utility_records`
- 来源：

#### 输出

##### 产品流

###### 供应的场内蒸汽（`onsite_steam_output`）

记录输送至纳入过程的有用蒸汽。

- 选定流：蒸汽，场内
- 流属性/单位：净热值能量 / MJ
- 数量规则：输送蒸汽质量 × 实测焓差
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 供应的有用蒸汽
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_utility_records`
- 来源：

###### 供应的场内热水（`onsite_hot_water_output`）

记录输送至纳入过程的有用热水。

- 选定流：热水，场内
- 流属性/单位：净热值能量 / MJ
- 数量规则：输送水质量 × 热容 × 实测温升
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 供应的有用热水
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_utility_records`
- 来源：

##### 废物流

###### 锅炉排污废水（`boiler_blowdown_wastewater`）

记录送往已声明处理路线的锅炉排污水。

- 选定流：锅炉排污废水
- 流属性/单位：体积 / m3
- 数量规则：计量或计算的排污体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 供应的有用蒸汽或热水
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_utility_records`
- 来源：

##### 基本流

###### 燃料燃烧产生的化石源二氧化碳（`combustion_fossil_co2`）

针对实际燃料清单单独记录化石源二氧化碳。

- 选定流：二氧化碳，化石源，排入空气
- 流属性/单位：质量 / kg
- 数量规则：燃料净热值能量 × 已披露燃料特定排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 MJ 供应的有用蒸汽或热水
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：

###### 燃料燃烧产生的甲烷（`combustion_methane`）

单独记录燃烧甲烷。

- 选定流：甲烷，化石源，排入空气
- 流属性/单位：质量 / kg
- 数量规则：燃料净热值能量 × 已披露燃料和技术特定排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 供应的有用蒸汽或热水
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：

###### 燃料燃烧产生的一氧化二氮（`combustion_nitrous_oxide`）

单独记录燃烧一氧化二氮。

- 选定流：一氧化二氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：燃料净热值能量 × 已披露燃料和技术特定排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 供应的有用蒸汽或热水
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：

###### 燃料燃烧产生的氮氧化物（`combustion_nox`）

按清单约定单独记录氮氧化物。

- 选定流：氮氧化物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：烟道实测，或燃料净热值能量 × 已披露技术特定排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 供应的有用蒸汽或热水
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：

###### 燃料燃烧产生的一氧化碳（`combustion_carbon_monoxide`）

单独记录一氧化碳。

- 选定流：一氧化碳，化石源，排入空气
- 流属性/单位：质量 / kg
- 数量规则：烟道实测，或燃料净热值能量 × 已披露技术特定排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 供应的有用蒸汽或热水
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：

###### 燃料燃烧产生的细颗粒物（`combustion_pm25`）

当适用于所选燃料和设备时，单独记录 PM2.5。

- 选定流：颗粒物，小于 2.5 微米，排入空气
- 流属性/单位：质量 / kg
- 数量规则：烟道实测，或燃料净热值能量 × 已披露技术特定排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 供应的有用蒸汽或热水
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_avoid_allocation` | 所有多输出或共享过程 | 首先通过路线特定数据集、过程细分、独立批次记录和分表计量避免分配。 | `ghg-protocol-product-standard-2011` |
| `al_no_route_average` | 生产多种产品状态的设施 | 绝不得先平均干式、常温、冷藏和冷冻路线再进行分配。应先建立独立路线清单，再处理真正共享的服务。 | `ghg-protocol-product-standard-2011`; `codex-cxc-8-1976` |
| `al_rework` | 同产品返工 | 将同配方返工料作为内部循环返回原路线，并披露总产生量和返回量；不得将返回量计为废物或联产品。 | `ghg-protocol-product-standard-2011` |
| `al_shared_service_physical` | 共享电力、清洗、储存、制冷和公用工程 | 无法细分时使用因果物理驱动量：设备采用计量运行时间，卫生处理采用清洗面积或清洗周期，储存采用吨日和温升，热力公用工程采用输送的有用热量。 | `ghg-protocol-product-standard-2011`; `eu-emas-food-beverage-2017` |
| `al_economic_fallback` | 剩余共享负荷 | 只有不存在可辩护物理关系时才使用经济分配；披露价格、期间、地域、波动性和物理分配对经济分配的敏感性结果。 | `ghg-protocol-product-standard-2011` |
| `al_waste_and_saleable_output` | 残余物和不合格产品 | 将无经济价值且需要处理路线的输出视为废物。如果出售或用作具有功能价值的输出，则归类为联产品并采用分配层级。 | `ghg-protocol-product-standard-2011` |
| `al_recycling` | 包装及其他可回收废物 | 报告所选回收约定，明确保持收集、分选、处理、再生含量抵扣和任何避免负荷声明；同一数据集不得混用约定。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_route_formulation_release` | `ingredient_receiving_and_dosing` | 路线和产品身份 | 生产主数据和放行记录 | route_code; formulation_id; leavening_mode; make_up_state; moisture_or_water_mass_fraction; storage_temperature_setpoint; storage_duration; packaging_configuration; shelf_life; released_net_mass_kg | 将批准的产品规格与放行批次关联 | kg; °C; h | 每个放行批次 | 至少覆盖一年的代表性连续生产，若完整可用生产期更短则覆盖该生产期 | 每个纳入的生产场址和产线 | 路线和配方保持分离；仅汇总所有必需限定符完全相同的放行批次 | 已批准配方；批次谱系；放行证书；校准产品秤；温度记录 |
| `cp_ingredient_mass` | `ingredient_receiving_and_dosing` | 每项具名原料输入 | 称量票和批次领料记录 | ingredient_name; supplier_lot; formulation_id; issued_kg; returned_kg; reworked_kg; ingredient_moisture_fraction; batch_id | 校准称量系统与库存领用及退回记录核对 | kg | 每批 | 与产品输出相同的批次和生产期 | 每条纳入配料线 | net_ingredient_kg = issued_kg - returned_kg; normalize only within one formulation_id and route_code | 秤校准；供应商批号；配方批准；领退料核对 |
| `cp_receiving_dosing_energy` | `ingredient_receiving_and_dosing` | 接收和配料用电 | 电表或设备日志 | meter_start_kwh; meter_end_kwh; equipment_kw; loaded_runtime_h; batch_id | 优先专用电表；否则采用核实功率 × 带料运行时间 | kWh | 每个生产期或计量间隔 | 至少一个代表性年度或完整生产期 | 每套纳入的接收和配料系统 | 扣除有记录的空载或无关用电；除以同一路线放行净质量 | 电表标识和校准；运行日志；与设施账单核对 |
| `cp_receiving_dosing_losses` | `ingredient_receiving_and_dosing` | 原料废物、进厂包装废物和粉尘 | 废物票据、质量平衡和排放记录 | waste_name; treatment_route; gross_kg; reworked_kg; captured_dust_kg; released_dust_kg; batch_id | 称量每项废物流；采用监测或场址批准的粉尘计算 | kg | 每批或每次废物清运 | 与产品输出相同的生产期 | 每套纳入的接收和配料系统 | 将纸、塑料、食品废物、捕集粉尘和释放粉尘分别记录 | 废物秤校准；处理凭证；过滤器日志；排放计算 |
| `cp_dry_blend_records` | `dry_sieving_and_blending` | 干式路线质量、电力、不合格料和粉尘 | 批次、电表和废物记录 | route_code; batch_input_kg; good_output_kg; reject_kg; rework_kg; meter_kwh; runtime_h; released_dust_kg | 校准质量记录加专用电表或核实功率 × 运行时间 | kg; kWh | 每个干式批次 | 代表性连续干式路线生产期 | 每条干式产线 | 仅归一化 dry_mix_ambient 批次；核对 input = good output + reject + dust + stock change | 秤和电表校准；批次谱系；粉尘控制日志 |
| `cp_dough_mixing_records` | `dough_mixing_and_kneading` | 湿式路线质量、电力和不合格料 | 批次、混合机和废物记录 | route_code; batch_input_kg; good_output_kg; reject_kg; rework_kg; meter_kwh; mixer_kw; loaded_runtime_h | 校准质量记录和专用电表或核实功率 × 带料运行时间 | kg; kWh | 每个湿式批次 | 代表性连续湿式路线生产期 | 每台混合机和湿式产线 | 保持 ambient、chilled 和 frozen route_code 值分离；按批次核对质量 | 秤和电表校准；混合机日志；批次谱系 |
| `cp_fermentation_makeup_records` | `fermentation_resting_and_makeup` | 纳入操作、能源、蒸汽、质量和直接发酵释放 | 过程历史、批次和排放记录 | operation_codes; leavening_mode; input_kg; output_kg; reject_kg; rework_kg; meter_kwh; steam_kg; steam_enthalpy_mj_per_kg; fermentation_time_h; released_co2_kg; released_ethanol_kg | 仅记录实际实施的操作；计量公用工程，释放采用场址实测或有记录的烘焙前平衡 | kg; kWh; MJ; h | 每批或每个生产期 | 各所选操作组合的代表性连续生产期 | 每条纳入的发酵和整形线 | 仅汇总 operation_codes 和 leavening_mode 完全相同的记录；不得转用烘焙炉因子 | 历史数据导出；公用工程计量；批次谱系；排放方法记录 |
| `cp_cold_route_records` | `temperature_conditioning_and_cold_storage` | 调温、储存、制冷剂、温度和损失 | 能源计量、温度记录仪、制冷剂台账和库存记录 | route_code; conditioning_method; input_kg; released_kg; reject_kg; conditioning_kwh; storage_kwh; storage_duration_h; product_temperature_c; refrigerant_name; opening_charge_kg; purchased_kg; recovered_kg; closing_charge_kg | 有条件时将调温和储存分表；采用校准连续温度记录；按具名化学品进行年度制冷剂质量平衡 | kg; kWh; h; °C | 每批，另加连续温度记录和年度制冷剂核对 | 路线全年运行时至少覆盖完整季节年度 | 每套冷却系统和路线 | 保持 chilled 和 frozen route_code 值分离；共享储存仅按吨日并结合有记录温升进行分配 | 电表和记录仪校准；制冷剂发票和回收记录；库存核对；报警日志 |
| `cp_packaging_records` | `packaging` | 每项具名包装输入、废料和电力 | 物料清单、领用记录、秤和电表 | material_name; package_count; verified_mass_per_item_kg; issued_kg; returned_kg; scrap_kg; packed_net_product_kg; meter_kwh | 件数 × 核实单件质量或直接称量；专用电表或核实功率 × 运行时间 | kg; kWh | 每个包装生产期 | 与参考产品相同的放行批次 | 每条包装线和包装配置 | 将 LDPE、PP、牛皮纸、瓦楞纸板和拉伸膜分别记录；核对 issued = packed + scrap + returned | 包装规格；秤和电表校准；领退料核对 |
| `cp_ambient_storage_records` | `ambient_finished_storage` | 常温储存能源、停留、放行和损失 | 仓库电表和库存移动记录 | route_code; lot_id; mass_in_kg; mass_out_kg; discarded_kg; meter_kwh; entry_time; release_time | 优先专用电表；否则按质量 × 停留时间分配完整仓库电量 | kg; kWh; h | 每次库存移动和计量间隔 | 至少一个代表性年度或完整生产期 | 每个常温仓库 | 仅纳入 dry_mix_ambient 和 wet_dough_ambient；核对库存变化和损失 | 电表校准；仓库库存台账；放行记录 |
| `cp_cleaning_records` | `cleaning_and_sanitation` | 清洗电力、水、热量和每项具名化学品 | 清洗日志、领用记录和公用工程计量 | cleaning_cycle_id; area_or_equipment; route_code; water_m3; electricity_kwh; hot_water_kg; inlet_temperature_c; outlet_temperature_c; steam_kg; sodium_hydroxide_solution_kg; nitric_acid_solution_kg; peracetic_acid_solution_kg; product_concentration | 计量公用工程，并称量或核对每项配制化学品领用量 | m3; kWh; kg; °C | 每个清洗周期 | 报告期内代表性生产和换产清洗周期 | 每条纳入产线和共享卫生处理系统 | 直接周期归属于路线；共享周期按有记录因果驱动量分配并与场址总量核对 | 清洗计划；计量校准；化学品领用记录；浓度证书 |
| `cp_effluent_records` | `cleaning_and_sanitation` | 废水、回收固体和直接污染物负荷 | 流量计、实验室样品和废物票据 | discharge_destination; wastewater_m3; solids_kg; cod_mg_per_l; bod5_mg_per_l; tss_mg_per_l; total_n_mg_per_l; total_p_mg_per_l; sample_time; flow_period | 流量比例混合采样及认可或受控实验室方法；称量筛出固体 | m3; kg; mg/L | 每个排放期间，采样频率按变异性论证 | 与生产相同报告期 | 各排放点 | concentration_kg_per_m3 × matching discharge_m3; report direct releases only at the final onsite discharge point | 流量计校准；样品交接链；方法和检出限；处理凭证 |
| `cp_thermal_utility_records` | `onsite_thermal_utility` | 每项燃料、电力、给水、有用热量和排污水 | 燃料计量、公用工程计量、水表和运行日志 | fuel_name; fuel_quantity; density_kg_per_l; ncv_mj_per_unit; electricity_kwh; feedwater_m3; steam_kg; steam_enthalpy_mj_per_kg; hot_water_kg; temperature_rise_c; blowdown_m3 | 分别计量每种载能体，并根据实测热力状态计算有用输出 | MJ; kWh; m3; kg; °C | 每个计量间隔 | 至少一个代表性年度或完整生产期 | 每台纳入的锅炉或加热器 | 不得平均载能体；核对燃料能量与有用热量、损失和库存变化 | 计量校准；燃料发票；供应商 NCV；蒸汽或热水状态记录 |
| `cp_combustion_emissions` | `onsite_thermal_utility` | 每项燃烧排放 | 烟气测试、连续监测或燃料因子计算 | fuel_name; fuel_energy_mj; pollutant_name; measured_concentration; exhaust_flow; emission_factor; factor_unit; factor_source | 优先采用烟气或连续监测；否则将各燃料能量分别乘以现行、已披露、燃料和技术特定因子 | kg; MJ | 每个测试或因子期间 | 与燃料清单相同期间 | 每个燃烧单元 | 分别计算每种物质和燃料；仅在计算后汇总 | 测试报告或监测 QA；因子引文；燃料能量核对 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_ingredient_mass` | 每项原料 | net_ingredient_kg = issued_kg - returned_kg; same-product rework is disclosed separately and not subtracted from virgin ingredient identity | issued_kg; returned_kg; reworked_kg; released_net_mass_kg | kg ingredient per 1,000 kg released product | `ghg-protocol-product-standard-2011` |
| `calc_process_energy` | 每个电力行 | normalized_kwh = attributable_meter_kwh × 1000 / released_or_process_output_kg | meter_start_kwh; meter_end_kwh; attributable_fraction; output_kg | kWh per 1,000 kg output | `eu-emas-food-beverage-2017` |
| `calc_storage_energy` | 共享常温或冷藏储存 | allocated_kwh = complete_storage_kwh × product_tonne_days / sum_all_product_tonne_days; apply a documented temperature-lift refinement when products use materially different setpoints | complete_storage_kwh; product_mass_t; residence_days; storage_setpoint_c | kWh per 1,000 kg released product | `eu-emas-food-beverage-2017`; `ghg-protocol-product-standard-2011` |
| `calc_refrigerant_loss` | 每项具名制冷剂 | loss_kg = opening_charge_kg + purchased_kg - closing_charge_kg - recovered_kg - documented_transfer_kg; negative or unreconciled results are invalid | opening_charge_kg; purchased_kg; closing_charge_kg; recovered_kg; documented_transfer_kg | kg named refrigerant to air before causal allocation | `eu-emas-food-beverage-2017`; `codex-cxc-8-1976` |
| `calc_packaging_mass` | 每项包装材料 | packaging_to_product_kg = issued_kg - returned_kg - scrap_kg; reconcile with package_count × verified_mass_per_item_kg | issued_kg; returned_kg; scrap_kg; package_count; verified_mass_per_item_kg | kg named packaging per 1,000 kg net product | `eu-emas-food-beverage-2017` |
| `calc_cleaning_heat` | 热水和蒸汽 | hot_water_mj = water_kg × 4.186 kJ_per_kg_K × temperature_rise_K / 1000; steam_mj = steam_kg × measured_enthalpy_difference_mj_per_kg | water_kg; temperature_rise_K; steam_kg; measured_enthalpy_difference_mj_per_kg | MJ useful cleaning heat | `eu-fdm-bref-2019` |
| `calc_fuel_energy` | 天然气、LPG 和柴油 | fuel_energy_mj = metered_quantity × documented_density_if_needed × supplier_or_site_ncv | fuel_quantity; density; ncv | MJ per named fuel |  |
| `calc_combustion_emission` | 每项燃料和污染物 | pollutant_kg = fuel_energy_mj × disclosed_emission_factor_kg_per_mj; do not calculate until factor source, fuel, technology, and oxidation basis are declared | fuel_energy_mj; emission_factor_kg_per_mj | kg individual pollutant |  |
| `calc_effluent_load` | 每项直接水污染物 | pollutant_kg = flow_weighted_concentration_mg_per_l × matching_discharge_m3 / 1000 | concentration_mg_per_l; discharge_m3 | kg individual pollutant to water | `eu-fdm-bref-2019` |
| `calc_mass_balance` | 每个过程和整个前景系统 | mass_balance_gap_kg = total_mass_inputs_kg - total_mass_outputs_kg - measured_direct_mass_emissions_kg - stock_change_kg; report gap and investigate against the route-specific threshold | all mass inputs; all product and waste outputs; direct mass emissions; stock change | kg and percent mass-balance gap | `ghg-protocol-product-standard-2011` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_route_identity` | 数据集身份 | 声明且仅声明一个 route_code 和一个 formulation_id，并保留从原料领用到产品放行的批次谱系。 | 已批准规格、批次谱系和放行记录 |
| `dq_temporal` | 前景测量 | 使用时间匹配的输入和输出；通常至少覆盖一个代表性年度，或披露更短生产期、季节性、停机和启动损失。 | 带日期的计量、批次、库存和废物记录 |
| `dq_technology_geography` | 前景及上游数据 | 描述实际混合机、调温设备、冷却系统、包装线、热力公用工程、场址和地域；评估上游数据集的技术、时间和地域代表性。 | 设备台账、场址元数据、供应商和数据集元数据 |
| `dq_completeness` | 原子流清单 | 核对物料、能源、制冷剂、水、包装、废物和排放记录。实际存在而所列卡片缺少的任何原料、燃料、制冷剂、清洗化学品、包装材料、废物或排放物质，均应在发布前添加为其自身具名原子行。 | 核对工作表和完整性签核 |
| `dq_meter_quality` | 测量 | 保留计量设备身份、校准或核实状态、分辨率、缺失数据处理和覆盖产量比例。 | 校准证书、计量设备台账和缺失数据日志 |
| `dq_cold_chain` | 冷藏和冷冻路线 | 保留产品与储存温度时间序列、调温终点、储存时长、报警偏离和仪器检查。速冻产品应记录热中心达到 -18 °C 或更低及其后 -18 °C 冷链控制。 | 校准记录仪记录和放行复核；`codex-cxc-8-1976` |
| `dq_refrigerant` | 冷却系统 | 分别核对每项具名制冷剂的期初充注、采购、补充、回收、转移和期末充注量；披露未核对差额和分配。 | 制冷剂台账、发票、维修和回收记录 |
| `dq_reasoned_estimates` | 暂定范围 | 每个 reasoned_estimate 范围都是宽泛的编制 QA 或敏感性先验，不是默认前景值。当该流具有重要性时测试上下界，并在成为发布关键值前用已评审路线或场址证据替代。 | 敏感性结果和评审处置 |
| `dq_tiangong_comment_defect` | 参考流身份 | 参考流 UUID、名称、CPC 23180 分类、Product 流类型和 Mass 引用一致，但其 generalComment 写为 CPC 232。披露该缺陷且绝不得将该注释用作方法或范围证据。 | UUID 0252f353-8398-4eab-9e26-6a13e4b4f06b 的 Tiangong 身份字段 |
| `dq_source_limits` | 外部证据 | EPA 烘焙资料主要限于酵母发酵面包操作且早于当前设备；仅用于原料和单元操作候选。Codex 速冻规则仅适用于声明的速冻产品。欧盟食品行业资料属于环境指南，不是产品特定数量默认值。 | 来源适用性矩阵和评审签核 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 要求 UUID 0252f353-8398-4eab-9e26-6a13e4b4f06b、精确产品名称、CPC 23180 分类叶、Product 流类型和 Mass 属性；标记 CPC 232 generalComment 缺陷但不得将其用作证据。 |  |
| `val_route_exclusive` | 数据集路线 | route_code 缺失、超出四个允许值或平均多个 route_code 的记录时失败。 | `un-cpc-v3-explanatory-notes-2025` |
| `val_process_gates` | 过程图 | 条件为真时要求相应过程；拒绝湿式路线使用干混、干式路线使用湿混、常温路线使用冷调温，以及未实施操作却使用发酵过程。 | `us-epa-bakery-oven-act-1992`; `codex-cxc-8-1976` |
| `val_atomic_inputs` | 产品输入 | 聚合的材料、原料、化学品、清洗剂、包装、载能体、燃料、热能或制冷剂行均应失败；每种实际物质或产品要求一个具名流。 | `eu-emas-food-beverage-2017`; `eu-fdm-bref-2019` |
| `val_atomic_outputs` | 废物和基本输出 | 聚合废物或排放行均应失败；处理流应分别记录，空气和水体释放按物质分别记录。 | `eu-fdm-bref-2019` |
| `val_uuid_scope` | 带 UUID 的清单 | 仅允许在参考产品及其 Mass 参考属性使用已核验 UUID；所有其他流 UUID 保持空白，直至前景作者逐项映射。 |  |
| `val_mass_balance` | 各过程和整个系统 | 要求报告质量平衡差额并调查无法解释的差异；绝不得用未命名的其他材料、废物或排放闭合平衡。 | `ghg-protocol-product-standard-2011` |
| `val_cold_records` | 冷藏和冷冻路线 | 要求调温方法、产品温度、储存设定点、时长、电力、具名制冷剂核对和产品损失。 | `codex-cxc-8-1976`; `eu-emas-food-beverage-2017` |
| `val_quick_frozen_claim` | 速冻产品 | 当 freezing_claim = quick_frozen 时，要求证据证明稳定后热中心达到 -18 °C 或更低，且后续储存保持 -18 °C 或更低，同时声明允许偏差。 | `codex-cxc-8-1976` |
| `val_energy_carriers` | 热力公用工程 | 合并燃料或热能输入应失败；天然气、LPG、柴油、外购蒸汽和外购热水应保持分离并与有用热量核对。 | `eu-emas-food-beverage-2017`; `eu-fdm-bref-2019` |
| `val_refrigerants` | 冷却系统 | 通用制冷剂条目或合并制冷剂损失应失败；要求实际化学品身份和非负的已核对质量平衡。 | `eu-emas-food-beverage-2017`; `codex-cxc-8-1976` |
| `val_effluent_double_count` | 废水和水排放 | 废水送外部处理时，不得将处理厂释放同时报告为场址直接排放；场内最终排放时要求实测的各项负荷和排放去向。 | `eu-fdm-bref-2019` |
| `val_allocation` | 共享过程 | 要求记录细分尝试、因果驱动量、分配前总量、分配后总量和核对；采用经济分配时要求敏感性分析。 | `ghg-protocol-product-standard-2011` |
| `val_reasoned_estimates` | 数量范围 | 禁止 reasoned_estimate 静默成为前景数量。要求采集协议值，并披露暂定界限的任何敏感性用途。 | `ghg-protocol-product-standard-2011` |
| `val_source_applicability` | 方法证据 | 本未烘焙产品边界拒绝烘焙炉排放因子，并拒绝将错误 Tiangong generalComment 用作来源。 | `us-epa-bakery-oven-act-1992` |
| `val_bilingual_machine_semantics` | 双语 PCR | 要求 en-US 和 zh-CN 的有序 process_id、row_id、rule_id、protocol_id、受控 token、公式、数值、UUID、source_id 和来源 URL 完全相同。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 用于未烘焙烘焙预拌料、面团或面糊的路线和配方特定前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset`，需通过方法、翻译、身份和数据质量评审 |
| allowed_use | 所有必需限定符、储存状态、地域、时间期和上游链接均相容时，用于已声明未烘焙预拌料或面团路线的上游建模 |
| excluded_use | 不得代理已烘焙或部分烘焙产品；不得跨路线平均；未经敏感性评审不得替代另一配方；不得用于消费者烘焙声明；不得将错误 CPC 232 generalComment 用作证据 |
| required_metadata | pcr_id; route_code; formulation_id; leavening_mode; make_up_state; moisture_or_water_mass_fraction; net_mass_basis; site; geography; campaign_period; conditioning_method; storage_temperature_setpoint; storage_duration; packaging_configuration; shelf_life; allocation_method; cut_offs; rework; upstream_dataset_refs |
| required_quality_disclosure | 计量覆盖和校准；质量平衡差额；数据代表性；来源适用性；具名制冷剂核对；废水去向；暂定推理估算和敏感性；Tiangong generalComment 缺陷；未解决的单位组 UUID |
| update_trigger | 配方、供应商、路线、混合机、调温设备、制冷剂、储存温度或时长、包装、公用工程、废物处理、分配、法规、参考流身份或实质产量变化 |

## 11. 数据源

| Source id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| `un-cpc-v3-explanatory-notes-2025` | official_guidance | 联合国统计司，CPC 3.0 版说明，代码 23180，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-13） | 官方分类身份，以及与 CPC 232 和烘焙成品的区分 |
| `us-epa-bakery-oven-act-1992` | official_guidance | 美国 EPA，Alternative Control Technology Document for Bakery Oven Emissions，EPA-453/R-92-017，https://www.epa.gov/sites/default/files/2020-08/documents/bakery92.pdf（检索于 2026-08-13） | 面团过程拆分、常见原料候选、混合、发酵、分割、成形，以及明确限制转用烘焙炉因子 |
| `eu-emas-food-beverage-2017` | official_guidance | 欧盟委员会决定 (EU) 2017/1508，食品和饮料制造业行业参考文件，https://eur-lex.europa.eu/eli/dec/2017/1508/oj/eng（检索于 2026-08-13） | 过程能源指标、包装、清洗水/能源/化学品、制冷效率、具名制冷剂泄漏和食品废物记录 |
| `eu-fdm-bref-2019` | official_guidance | 欧盟委员会 JRC，食品、饮料和乳品行业最佳可行技术参考文件，JRC118627，https://publications.jrc.ec.europa.eu/repository/handle/JRC118627（检索于 2026-08-13） | 食品制造环境因素、清洗、水、废水、能源、粉尘、直接排放、监测和处理情境 |
| `codex-cxc-8-1976` | standard | Codex Alimentarius，速冻食品加工和处理操作规范，CXC 8-1976，2008 年修订，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/fr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B8-1976%252FCXC_008e.pdf（检索于 2026-08-13） | 速冻定义、完成和冷链 -18 °C 规则、温度监测、包装、储存和制冷剂防泄漏 |
| `ghg-protocol-product-standard-2011` | standard | WRI 和 WBCSD，Product Life Cycle Accounting and Reporting Standard，2011，https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf（检索于 2026-08-13） | 过程图、初级数据、数据质量评估、分配层级、细分、披露和敏感性要求 |
