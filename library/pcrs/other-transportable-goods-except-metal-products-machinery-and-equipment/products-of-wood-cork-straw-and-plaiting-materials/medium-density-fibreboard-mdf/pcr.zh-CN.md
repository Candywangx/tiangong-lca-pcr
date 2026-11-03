---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.medium-density-fibreboard-mdf
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 干法木质中密度纤维板制造

## 1. 范围与适用性

适用于以木质纤维和实际胶黏体系干法铺装、热压固化，随后冷却、砂光及裁边的常规未饰面MDF。原料可为有来源记录的针叶或阔叶木残余物及整原木；干法指铺装介质及成型路线，不表示无需蒸汽或水。湿法硬板以水悬浮铺装并脱水，部分依赖木质素自粘结，属于不同方法边界；本方法还排除其他高密度硬板、湿法低密度纤维板、刨花板、OSB、非木纤维板、贴面/涂装板和需专门阻燃或防腐化学品的配方。来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`。

木材来源、树种混合、密度、厚度、含水、甲醛声明级别、胶黏剂组成及市场要求均需本数据包证据。本文不设通用配方、密度门槛、甲醛法定限值或服役寿命，不以产品认证替代生产烟道排放数据。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.medium-density-fibreboard-mdf |
| classification_refs | CPC 3.0 31441; narrower |
| covered_products | 常规干法木质未饰面MDF |
| excluded_products | 湿法硬板；其他纤维板；非木纤维板；刨花板；OSB；饰面板；特种阻燃/防腐配方 |
| representative_product | 中密度纤维板 `57c184ac-a2d3-4500-af7b-80609ed89d2f` |
| production_route | 蒸煮/热磨；实际位置施胶；纤维干燥；干法铺装/预压；热压；冷却；砂光/裁边/包装 |
| market_state | 工厂门处未饰面、已冷却、验收的MDF，包装不计入参考质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 工厂门处验收的干法木质MDF |
| How much | 1 kg 成品净质量，含声明交付含水率对应的水 |
| How well | 声明实际密度、厚度、力学等级与甲醛检测方法/级别及适用证据 |
| How long or cycle | 一次制造交付；不预设使用寿命 |
| reference_flow_link | `mdf_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 中密度纤维板 `57c184ac-a2d3-4500-af7b-80609ed89d2f` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 木材来源及树种混合; 干法路线; 胶黏剂类型/固含与添加位置; 交付含水率及干/湿基; 实测密度及体积状态; 厚度及容差; 未饰面状态; 甲醛声明及测试方法/日期/等级依据; 供应地点与年份; 蒸汽/间接热计量边界; 包装排除; 合格成品与回用/废物去向 |

必需限定信息应在元数据、过程说明、参考流备注或等效字段中声明；缺失时参考定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按cp_output称量同状态合格MDF净质量，排除包装；所有行按每1 kg参考流归一化，不以湿原料、干木质量或未砂光毛板作分母。 |
| `moisture_basis` | furnish_chips, furnish_sawdust, furnish_shavings, mdf_output | 质量 | kg | 按cp_furnish及cp_output分别记录湿质量、绝干固体与水；干基含水率u为水质量除绝干质量，湿基含水率w为水质量除湿质量，均按小数计算。  这些是同状态组分测量，不是不变阶段数量；区分专测水的方法与挥发损失或测试诱发固化，保留不确定性。 |
| `volume_basis` | furnish_chips, dryer_gas, control_gas, boiler_gas | Volume | m3 | 木片和气体流的Volume/m3身份不定义实木/堆积或气体状态；按cp_furnish取得供方实际参考量A、体积定义、同批同含水Vs/Vb与实测k及损耗门点换算，按cp_energy及cp_energy_utilities取得气体T/P、干湿组成、Z与背景m3参考条件。任一对应关系未证实时quantity compatibility pending。 |
| `electricity_conversion` | line_electricity, boiler_electricity | Energy | MJ | 电表kWh乘3.6转换为MJ；电流的数据库净热值属性仅为电能记账，不证明蒸汽或工艺热净热基准。 |
| `thermal_basis` | line_steam, line_heat, boiler_steam, boiler_heat, condensate_return, boiler_condensate | Steam mass; delivered heat | kg; MJ | cp_thermal及cp_thermal_utilities保留蒸汽质量、凝结/回流质量、温压/干度和焓边界。仅在供应方/背景定义与现场供回流焓平衡相符时填热量MJ；属性或产品名称本身不足，未知时未决。 |
| `reaction_accounting` | mdf-line; utilities | 质量 | kg | 按实测阶段及公用能源边界守恒总质量和各实际元素，包括C/H/O/N/S及有关无机元素，纳入燃烧空气和库存。分子H2O及木材/树脂材料是反应物种，不能分别按不变固体守恒；其组分账须按cp_recipe、cp_fuel、cp_energy、cp_energy_utilities、cp_air、cp_air_utilities、cp_water、cp_water_utilities、cp_vapour及cp_vapour_utilities记录实际反应程度所支持的生成和消耗；未知项保留不确定性，不设为零。UF/MUF缩合可产H2O；pMDI与水固化消耗H2O并产CO2；燃料及治理反应可产H2O。不推定完全固化、完全燃烧或通用产率。来源：`usda-wood-joining-2023`; `doe-condensing-economizer-2012`; `epa-wood-boiler-2022`。 |
| `nox_mass_basis` | dryer_nox, handling_nox, boiler_nox | Mass | kg | NOx的kg须证明监测、LCI定义及LCIA映射同一质量基准和NO/NO2边界，排除N2O且不与分种重复；未证实为quantity compatibility pending。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原料/化学品/能源到厂；在场制造线至验收未饰面MDF工厂门；另链接上游生产/入厂运输及实际废物处理 |
| starting_condition_role | foreground production |
| product_classification_scope | CPC 3.0 31441的常规干法木质未饰面子集 |
| recursive_input_rule | 回用MDF应记录状态、树脂组成、来源与实际质量，不再次计为成品；厂内循环保留等量实物链接，外购回用板带入供应方上游边界 |
| upstream_dataset_requirement | 每种实际原料、树脂、能源、运输和处理绑定地点/年份/路线兼容背景数据；残余物不默认零负荷 |
| disclosure | 声明调查期、工厂与生产量、覆盖阶段、厂内/外供能源、污染治理、库存变化、遗漏、假设及实际利用/处置 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_stages | mdf-line | 纳入接收、尺寸制备、蒸煮/热磨、实际施胶、干燥、铺装/预压、热压、冷却、砂光/裁边及包装；聚合过程内仍逐阶段计量。 | `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021` |
| boundary_energy | mdf-line; utilities | 按每份供应选择厂内产能或外购载体。内部两端链接等量载体并在聚合时抵消内部交换；不得给同一厂内燃料重复叠加外购热负荷。干燥器/氧化器/移动设备直接燃烧与锅炉烟道分开。 | `corrim-mdf-2024`; `epa-mdf-2002`; `epa-wood-boiler-2022` |
| boundary_upstream | all inventory rows | 纳入真实上游制造与入厂运输，声明残余物分配/回收边界。止于未饰面工厂门；下游使用、寿命和处置独立建情景，不复制CORRIM全生命周期平均情景。 | `corrim-mdf-2024` |
| boundary_coverage | all inventory rows | 仅以实际活动/组成证据启用条件行。缺失UUID或数量不等于零，并阻止受影响路线的完整使用。每种额外真实化学品、燃料、包装或处理交换各设原子行，不以集合标签隐去。 | `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `mdf-line` | MDF聚合制造线 | required | 范围内生产 | foreground production | 1 kg accepted net MDF |
| `utilities` | 厂内公用能源 | conditional | 厂内锅炉向MDF供汽/供热；外购份额不纳入相同产能负荷 | utility generation | per 1 kg reference flow |

制造阶段账保留在同一前景制造线内，锅炉阶段账属于独立申报的utilities过程；均不构成重复成品交易。未分配的总质量/元素守恒账及含反应项的物种账与分配后环境负荷分开；内部转移和回用两端同量。采用reaction_accounting及physical_reconciliation，不得在缺少化学项时强制水或木材/树脂固体闭合。来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-joining-2023`; `doe-condensing-economizer-2012`。

| stage_id | 进入状态 | 离开状态 | 独立采集 |
| --- | --- | --- | --- |
| receipt | 湿木片、锯屑、干刨花或原木，各自树种/含水/树皮状态 | 筛分/削片后的木质原料；树皮另去向 | 批量净质量、体积、含水、库存 |
| refining | 蒸汽软化的湿木质原料 | 未施胶湿木纤维及纤维束；若在热磨施胶则记录准确位置 | 电力、蒸汽质量、凝结水、纤维固体与水 |
| blend-dry | 湿纤维；施胶状态按真实投加路线 | 实测干纤维状态；按来源分解的治理后H2O及其他气体 | 各配方/载体水、燃料及含水、入口空气湿度、本阶段实际固化/反应程度（如发生）、纤维水/固体、烟道H2O、治理凝结及库存 |
| form-press | 施胶松散纤维；未固化铺装毯 | 热且已固化毛板；实际压制/冷却排气及回收凝结水 | 真实配方、固化时间/温度及实测反应程度、纤维毯/毛板质量/含水/元素组成、热量、回用、治理后H2O及其他物种、凝结水和库存 |
| finish-pack | 冷却后的固化毛板 | 砂光裁边验收MDF；含胶尘/边料；包装独立 | 验收净质量、厚度/密度/含水、捕集尘与未捕集PM、包装 |
| boiler | 实际气体/木质/含树脂燃料、燃料水分、燃烧空气及湿度、公用补水和回流凝结水 | 交付蒸汽/热、含锅炉H2O蒸气的湿烟气、收集残余物和实际凝结/排污水 | 蒸汽/凝结水回路与反应燃料/空气/烟气分开；逐项实测数量、组成、治理加水、凝结、按来源支持的H2O生成/消耗及库存 |

回用纤维、纤维毯边料和固化砂光尘不是相同物态；记录每项来源/目的地、干固体、水及树脂，分别进入回磨、回铺装、燃烧或处置。热磨发生在纤维尺度，不以OSB刨片或刨花板颗粒当作纤维中间物。

### 过程：MDF制造线（`mdf-line`）

#### 输入

##### 产品流

###### 外购木片（`furnish_chips`）

记录送入纤维制备的未处理木片；同批测定体积、湿质量、树种及含水率。 保留身份，数量兼容性待审。取得供应方/背景过程实际参考量A（m3）、实木体积或松散/压实体积定义及计量门点。同一代表性批次、同含水及物料状态下实测实木体积Vs与堆积体积Vb，实测填充率k = Vs/Vb并记录取样/排水法/几何测量方法。核对交付门点、库存变化及实测损耗；流名称或Volume/m3均不定义所需体积基准。A、体积定义、k或状态/门点换算未知时，上游链接未完成。

- 选定流：木片 `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：按cp_furnish采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_furnish`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 外购湿锯屑（`furnish_sawdust`）

仅为送入热磨的未处理锯屑；记录含水率及供应方共产品边界。

- 选定流：供MDF热磨的未处理湿木锯屑
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_furnish采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_furnish`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 外购干刨花（`furnish_shavings`）

将未处理干刨花作为独立原料；不得以OSB刨片或刨花板铺装料替代。

- 选定流：供MDF热磨的未处理干木刨花
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_furnish采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_furnish`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 针叶纸浆材原木（`furnish_conifer`）

仅在实际投入整原木时适用；制造线包含剥皮、削片及树皮去向，声明林道至工厂运输。

- 选定流：针叶纸浆材原木
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_furnish采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_furnish`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 阔叶纸浆材原木（`furnish_hardwood`）

仅在实际投入整原木时适用；制造线包含剥皮、削片及树皮去向，声明林道至工厂运输。

- 选定流：阔叶纸浆材原木
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_furnish采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_furnish`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 脲醛胶黏剂（`binder_uf`）

仅纳入实际使用的树脂。记录配方交付质量、实测固体/载体水及元素组成、供方配方、投加点和库存；交付树脂固体与固化产物分开。按真实配方及实测固化程度确定分子生成/消耗：UF/MUF缩合可产水，pMDI与水反应消耗水并产CO2。不假设完全固化，不规定反应产率，不将配方水重复计为外购工艺水，不把上游树脂合成水重复放入工厂前景。

仅纳入实际使用的树脂。记录配方交付质量、实测固体/载体水及元素组成、供方配方、投加点和库存；交付树脂固体与固化产物分开。按真实配方及实测固化程度确定分子生成/消耗：UF/MUF缩合可产水，pMDI与水反应消耗水并产CO2。不假设完全固化，不规定反应产率，不将配方水重复计为外购工艺水，不把上游树脂合成水重复放入工厂前景。

- 选定流：脲醛树脂 `23e41b7b-0991-4cf7-8625-7a30d23bbb27`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_recipe采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_recipe`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`; `usda-wood-joining-2023`

###### 三聚氰胺脲醛胶黏剂（`binder_muf`）

仅纳入实际使用的树脂。记录配方交付质量、实测固体/载体水及元素组成、供方配方、投加点和库存；交付树脂固体与固化产物分开。按真实配方及实测固化程度确定分子生成/消耗：UF/MUF缩合可产水，pMDI与水反应消耗水并产CO2。不假设完全固化，不规定反应产率，不将配方水重复计为外购工艺水，不把上游树脂合成水重复放入工厂前景。

- 选定流：MDF用三聚氰胺脲醛胶黏剂树脂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_recipe采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_recipe`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`; `usda-wood-joining-2023`

###### 聚合MDI胶黏剂（`binder_pmdi`）

仅纳入实际使用的树脂。记录配方交付质量、实测固体/载体水及元素组成、供方配方、投加点和库存；交付树脂固体与固化产物分开。按真实配方及实测固化程度确定分子生成/消耗：UF/MUF缩合可产水，pMDI与水反应消耗水并产CO2。不假设完全固化，不规定反应产率，不将配方水重复计为外购工艺水，不把上游树脂合成水重复放入工厂前景。

- 选定流：MDF用聚合二苯基甲烷二异氰酸酯胶黏剂树脂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_recipe采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_recipe`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`; `usda-wood-joining-2023`

###### 独立尿素添加（`additive_urea`）

仅在实际配方证明独立尿素投加时适用；按产品质量而非氮质量计量。已包含在外购树脂中的尿素不再另计。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_recipe采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_recipe`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 石蜡添加（`additive_wax`）

仅在供应方证实使用石油馏分石蜡时适用。测定蜡质量及乳液载体水；不规定蜡用量。

- 选定流：石蜡 `17bff97f-179d-49d4-9e97-5128bd6020a6`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_recipe采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_recipe`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 硫酸铵硬化剂（`additive_hardener`）

仅在供应方配方明确硫酸铵时适用；不得从调查的泛称催化剂推断物种。记录配方浓度和载体水；其他硬化剂应另设原子行。

- 选定流：硫酸铵 `7f128b59-9df7-4b5d-ad0f-00103b916cf7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_recipe采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_recipe`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 低压外购电力（`line_electricity`）

此身份仅用于用户端低于1 kV的电网平均供电。分别计量热磨、干燥风机、铺装、压机液压、后加工及排放治理；其他电压应匹配其他身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按cp_energy采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_energy`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 补充工艺水（`line_water`）

计量用于洗料和制造的新供处理工艺水；循环水、凝结水及配方水保留独立实物账。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_water采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_water`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 蒸煮蒸汽（`line_steam`）

在MDF蒸煮器边界测定蒸汽质量并记录绝对压力、温度和干度；声明进入原料的凝结量，不设压力或饱和状态默认值。

- 选定流：交付MDF蒸煮器的工艺蒸汽
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_thermal采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_thermal`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 间接工艺热（`line_heat`）

仅在向干燥或压制间接供热时适用。MJ须有供应方或背景能量定义，并与供回流实测焓或经校准热表对应；此前保持计量基准未决。

- 选定流：交付MDF制造的间接工艺热
- 流属性/单位：交付热计量基准未决；MJ；流属性及单位组UUID未决 / MJ
- 数量规则：按cp_thermal采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_thermal`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 干燥器直接燃用天然气（`dryer_gas`）

仅在直接燃烧干燥时适用；测定交付条件已声明的气体体积和燃料组成，本行不含锅炉及氧化器燃料。 保留身份，但与背景m3的数量兼容性待审。记录供应方/背景参考量A、参考温度T、绝对压力P、干/湿组成与压缩因子Z，以及同基准表计条件和组分。核对真实交付/损耗门点，仅以实测/声明条件换算；Volume/m3属性不证明Nm3或标准条件。供应方或背景体积定义未知时链接未完成。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：按cp_energy采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_energy`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 氧化器天然气（`control_gas`）

仅在使用燃料燃烧排放治理氧化器时适用；独立计量并绑定末端烟道测试，包括进口有机物的破坏。 保留身份，但与背景m3的数量兼容性待审。记录供应方/背景参考量A、参考温度T、绝对压力P、干/湿组成与压缩因子Z，以及同基准表计条件和组分。核对真实交付/损耗门点，仅以实测/声明条件换算；Volume/m3属性不证明Nm3或标准条件。供应方或背景体积定义未知时链接未完成。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：按cp_energy采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_energy`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 厂内搬运柴油（`handling_diesel`）

仅在柴油装载机或叉车运行时适用；采集外购燃料并另建实际燃烧尾气，本行不含入厂道路运输数据集。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_energy采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_energy`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 石油润滑油（`line_oil`）

仅在使用匹配的石油馏分润滑油时适用；保留设备用途及更换记录，与循环导热油区别。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_recipe采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_recipe`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 聚乙烯运输薄膜（`pack_film`）

仅在聚乙烯包装适用时纳入；测定对应薄膜消耗，排除于MDF参考净质量。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_pack采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_pack`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 钢包装带（`pack_strap`）

仅在实际使用钢带时纳入；取得供应方牌号及生产路线，不以未经确认的再生99%铁/1%碳打包带替代。

- 选定流：MDF运输包装用钢打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_pack采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_pack`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未饰面MDF成品（`mdf_output`）

工厂门处验收的冷却、砂光及裁边板材仅一个成品输出，不含运输包装；聚合制造线不另设加工与包装之间的第二个MDF成品交接输出。

- 选定流：中密度纤维板 `57c184ac-a2d3-4500-af7b-80609ed89d2f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定数量 (`fixed_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：方法公式 (`method_formula`)
- 采集协议：`cp_output`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 加热凝结水回流（`condensate_return`）

仅在凝结水从制造线返回公用工程时纳入；核对链接两端质量及焓。留在纤维中的蒸煮器直接凝结水不属于此回流。

- 选定流：MDF间接加热回流蒸汽凝结水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_thermal采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_thermal`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

##### 废物流

###### 送处置的剥皮树皮（`bark_disposal`）

仅在此项具体废物外运时纳入。称量或计量该流，记录组成、实际接收方及处理边界；内部循环不属于厂外处置。

- 选定流：树皮 `a2536c07-fbe1-4a12-90fb-21bd2e99b74e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_residues采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_residues`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 含树脂废板（`mdf_offcuts`）

仅在此项具体废物外运时纳入。称量或计量该流，记录组成、实际接收方及处理边界；内部循环不属于厂外处置。

- 选定流：送厂外处理的含树脂MDF边角废板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_residues采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_residues`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 含树脂捕集砂光尘（`mdf_dust`）

仅在此项具体废物外运时纳入。称量或计量该流，记录组成、实际接收方及处理边界；内部循环不属于厂外处置。

- 选定流：送厂外处理的MDF捕集砂光尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_residues采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_residues`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 送处理的制造废水（`line_effluent`）

仅在此项具体废物外运时纳入。称量或计量该流，记录组成、实际接收方及处理边界；内部循环不属于厂外处置。

- 选定流：送处理的未处理MDF工艺废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_residues采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_residues`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 废润滑油（`spent_oil`）

仅在此项具体废物外运时纳入。称量或计量该流，记录组成、实际接收方及处理边界；内部循环不属于厂外处置。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_residues采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_residues`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

##### 基本流

###### 纤维干燥空气排放：甲醛（`dryer_formaldehyde`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 纤维干燥空气排放：甲醇（`dryer_methanol`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 纤维干燥空气排放：苯酚（`dryer_phenol`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：苯酚 `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 纤维干燥空气排放：乙醛（`dryer_acetaldehyde`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：乙醛 `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 纤维干燥空气排放：丙烯醛（`dryer_acrolein`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：丙烯醛 `08a91e70-3ddc-11dd-91a4-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 纤维干燥空气排放：丙醛（`dryer_propionaldehyde`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：丙醛 `fe0acd60-3ddc-11dd-9f05-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 纤维干燥空气排放：水蒸气（`dryer_water-vapour`）

在实际干燥来源治理后测定H2O蒸气。按cp_vapour采用一致湿烟气量/H2O浓度及时间；有依据地分解原料含水、配方载体水、蒸汽凝结、入口空气湿度、燃料含水及本来源实际固化/燃烧/治理的生成或消耗（如存在）。按真实去向记录凝结水及产品剩余含水。实测烟道H2O已包含的反应水不得增列为额外排放。本行不覆盖独立锅炉；共用末端烟道只计一次并有依据归属来源，未知归属或反应程度保留不确定性，不设为零。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_vapour采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_vapour`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`; `usda-wood-joining-2023`; `doe-condensing-economizer-2012`; `epa-stack-moisture-method4`

###### 纤维干燥空气排放：颗粒物 (PM2.5)（`dryer_pm25`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 纤维干燥空气排放：颗粒物 (PM2.5 - PM10)（`dryer_pmcoarse`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 纤维干燥空气排放：颗粒物（> PM10）（`dryer_pmover10`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 纤维干燥空气排放：二氧化碳（生物源）（`dryer_co2bio`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 纤维干燥空气排放：二氧化碳（化石源）（`dryer_co2fossil`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 纤维干燥空气排放：一氧化碳（生物源）（`dryer_cobio`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：一氧化碳（生物源） `8a313a02-e251-11e6-bf01-fe55135034f3`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 纤维干燥空气排放：一氧化碳（化石源）（`dryer_cofossil`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 纤维干燥空气排放：甲烷 (生物源)（`dryer_ch4bio`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 纤维干燥空气排放：甲烷 (化石源)（`dryer_ch4fossil`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 纤维干燥空气排放：一氧化二氮（`dryer_n2o`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 纤维干燥空气排放：氮氧化物（`dryer_nox`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。 此记录是单个真实ILCD NOx总参数；Mass/kg不定义其报告质量。数量兼容性待审，直至监测报告、LCI流定义和所选LCIA映射证明同一基准：按NO2等效质量或NO与NO2实际质量之和，并明确物种覆盖。NOx排除N2O。不得默认NOx等于NO2质量、虚构NO/NO2比例，或对同一排放再叠加分种NO/NO2。不能证明同基准时保留数量未决；未来分种路线须有独立核实的NO及NO2身份和实际分种证据。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 纤维干燥空气排放：二氧化硫（`dryer_so2`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 压制与冷却空气排放：甲醛（`press_formaldehyde`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 压制与冷却空气排放：甲醇（`press_methanol`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 压制与冷却空气排放：苯酚（`press_phenol`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：苯酚 `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 压制与冷却空气排放：乙醛（`press_acetaldehyde`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：乙醛 `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 压制与冷却空气排放：丙烯醛（`press_acrolein`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：丙烯醛 `08a91e70-3ddc-11dd-91a4-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 压制与冷却空气排放：丙醛（`press_propionaldehyde`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：丙醛 `fe0acd60-3ddc-11dd-9f05-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 压制与冷却空气排放：水蒸气（`press_water-vapour`）

在实际压制/冷却来源治理后测定H2O蒸气。按cp_vapour采用一致湿烟气量/H2O浓度及时间；有依据地分解原料含水、配方载体水、蒸汽凝结、入口空气湿度、燃料含水及本来源实际固化/燃烧/治理的生成或消耗（如存在）。按真实去向记录凝结水及产品剩余含水。实测烟道H2O已包含的反应水不得增列为额外排放。本行不覆盖独立锅炉；共用末端烟道只计一次并有依据归属来源，未知归属或反应程度保留不确定性，不设为零。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_vapour采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议： `cp_vapour`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`; `usda-wood-joining-2023`; `doe-condensing-economizer-2012`; `epa-stack-moisture-method4`

###### 压制与冷却空气排放：颗粒物 (PM2.5)（`press_pm25`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 压制与冷却空气排放：颗粒物 (PM2.5 - PM10)（`press_pmcoarse`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 压制与冷却空气排放：颗粒物（> PM10）（`press_pmover10`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 砂光与裁边空气排放：颗粒物 (PM2.5)（`finish_pm25`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 砂光与裁边空气排放：颗粒物 (PM2.5 - PM10)（`finish_pmcoarse`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 砂光与裁边空气排放：颗粒物（> PM10）（`finish_pmover10`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 原料搬运及移动设备空气排放：颗粒物 (PM2.5)（`handling_pm25`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 原料搬运及移动设备空气排放：颗粒物 (PM2.5 - PM10)（`handling_pmcoarse`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 原料搬运及移动设备空气排放：颗粒物（> PM10）（`handling_pmover10`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 原料搬运及移动设备空气排放：二氧化碳（化石源）（`handling_co2fossil`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 原料搬运及移动设备空气排放：一氧化碳（化石源）（`handling_cofossil`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 原料搬运及移动设备空气排放：甲烷 (化石源)（`handling_ch4fossil`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 原料搬运及移动设备空气排放：一氧化二氮（`handling_n2o`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 原料搬运及移动设备空气排放：氮氧化物（`handling_nox`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。 此记录是单个真实ILCD NOx总参数；Mass/kg不定义其报告质量。数量兼容性待审，直至监测报告、LCI流定义和所选LCIA映射证明同一基准：按NO2等效质量或NO与NO2实际质量之和，并明确物种覆盖。NOx排除N2O。不得默认NOx等于NO2质量、虚构NO/NO2比例，或对同一排放再叠加分种NO/NO2。不能证明同基准时保留数量未决；未来分种路线须有独立核实的NO及NO2身份和实际分种证据。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

###### 原料搬运及移动设备空气排放：二氧化硫（`handling_so2`）

在所述来源治理后采集此物种；记录烟道或无组织捕集覆盖，标明物种要求的碳来源。燃烧物种需有实际燃烧或移动设备活动依据；未测试或低于检出限不等于零。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021`

### 过程：厂内公用能源（`utilities`）

#### 输入

##### 产品流

###### 锅炉天然气（`boiler_gas`）

将辅助天然气与干燥器及氧化器燃料分别计量。 保留身份，但与背景m3的数量兼容性待审。记录供应方/背景参考量A、参考温度T、绝对压力P、干/湿组成与压缩因子Z，以及同基准表计条件和组分。核对真实交付/损耗门点，仅以实测/声明条件换算；Volume/m3属性不证明Nm3或标准条件。供应方或背景体积定义未知时链接未完成。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：按cp_energy采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_energy`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 锅炉树皮燃料（`boiler_bark`）

仅在实际燃烧树皮时纳入；保留含水、灰分和来源，不以混合木料燃料替代。

- 选定流：交付MDF木料锅炉的树皮燃料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_fuel采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_fuel`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 锅炉MDF砂光尘燃料（`boiler_dust`）

仅在燃烧含树脂MDF尘时纳入；按真实组成证据分离木材生物碳和胶黏剂化石碳。洁净木材因子不自动适用。

- 选定流：用作锅炉燃料的含树脂MDF砂光尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_fuel采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_fuel`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 锅炉低压电力（`boiler_electricity`）

计量锅炉辅助设备及治理；仅当实际供电匹配时采用低于1kV身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按cp_energy采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_energy`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 锅炉补水（`boiler_water`）

计量新供处理补水，本输入不含回收凝结水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_water采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_water`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 接收回流凝结水（`boiler_condensate`）

与condensate_return为同一实物流、同一数量；链接两端均不乘分配份额。

- 选定流：MDF间接加热回流蒸汽凝结水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_thermal采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_thermal`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交付蒸煮器蒸汽（`boiler_steam`）

仅在厂内生产此载体时纳入。相同边界内输出等于链接制造线输入；赋予MJ前记录外供、损失及供应方兼容的计量基准。

- 选定流：交付MDF蒸煮器的工艺蒸汽
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_thermal采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_thermal`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 交付间接工艺热（`boiler_heat`）

仅在厂内生产此载体时纳入。相同边界内输出等于链接制造线输入；赋予MJ前记录外供、损失及供应方兼容的计量基准。

- 选定流：交付MDF制造的间接工艺热
- 流属性/单位：交付热计量基准未决；MJ；流属性及单位组UUID未决 / MJ
- 数量规则：按cp_thermal采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_thermal`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

##### 废物流

###### 木料锅炉底灰（`boiler_bottom_ash`）

仅在产生此项锅炉收集废物时纳入；独立计量并明确燃料混合物和实际处理，区分残留灰与排放颗粒物。

- 选定流：木料锅炉底灰
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_residues采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_residues`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 木料锅炉捕集飞灰（`boiler_fly_ash`）

仅在产生此项锅炉收集废物时纳入；独立计量并明确燃料混合物和实际处理，区分残留灰与排放颗粒物。

- 选定流：木料锅炉捕集飞灰
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_residues采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_residues`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 送处理的木料锅炉排污水（`boiler_blowdown`）

仅在产生此项锅炉收集废物时纳入；独立计量并明确燃料混合物和实际处理，区分残留灰与排放颗粒物。

- 选定流：送处理的木料锅炉排污水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_residues采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_residues`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

##### 基本流

###### 锅炉空气排放：水蒸气（`boiler_water-vapour`）

按cp_vapour_utilities测定实际锅炉治理后出口向室外空气释放的气态H2O；它与交付公用蒸汽、凝结水回流及干燥/压制排放分开。保留实测湿烟气量、H2O浓度、温压、运行时间、燃料/空气组成和库存。有依据地分解燃料含水、环境入口空气湿度、配方/含树脂燃料贡献、实际化学H2O生成/消耗及治理加水。捕集/凝结水按真实液体/回收去向记录，不计为排出蒸气。化学来源归属须有实际反应程度证据，不推定完全燃烧或锅炉产率。烟道实测总H2O已含反应水，不再叠加其生成量。共同烟道按有依据的来源记录归属且只计一次；未知项保留不确定性，不设为零。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_vapour_utilities采集此项实际治理后气态H2O交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不设默认因子或产率。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_vapour_utilities`
- 来源：`epa-wood-boiler-2022`; `doe-condensing-economizer-2012`; `epa-stack-moisture-method4`

###### 锅炉空气排放：二氧化碳（生物源）（`boiler_co2bio`）

在治理后采集锅炉烟道物种；绑定燃料混合物、运行模式及测试方法。LCI保留生物CO2，树脂或辅助气体的化石碳单列。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 锅炉空气排放：二氧化碳（化石源）（`boiler_co2fossil`）

在治理后采集锅炉烟道物种；绑定燃料混合物、运行模式及测试方法。LCI保留生物CO2，树脂或辅助气体的化石碳单列。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 锅炉空气排放：一氧化碳（生物源）（`boiler_cobio`）

在治理后采集锅炉烟道物种；绑定燃料混合物、运行模式及测试方法。LCI保留生物CO2，树脂或辅助气体的化石碳单列。

- 选定流：一氧化碳（生物源） `8a313a02-e251-11e6-bf01-fe55135034f3`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 锅炉空气排放：一氧化碳（化石源）（`boiler_cofossil`）

在治理后采集锅炉烟道物种；绑定燃料混合物、运行模式及测试方法。LCI保留生物CO2，树脂或辅助气体的化石碳单列。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 锅炉空气排放：甲烷 (生物源)（`boiler_ch4bio`）

在治理后采集锅炉烟道物种；绑定燃料混合物、运行模式及测试方法。LCI保留生物CO2，树脂或辅助气体的化石碳单列。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 锅炉空气排放：甲烷 (化石源)（`boiler_ch4fossil`）

在治理后采集锅炉烟道物种；绑定燃料混合物、运行模式及测试方法。LCI保留生物CO2，树脂或辅助气体的化石碳单列。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 锅炉空气排放：一氧化二氮（`boiler_n2o`）

在治理后采集锅炉烟道物种；绑定燃料混合物、运行模式及测试方法。LCI保留生物CO2，树脂或辅助气体的化石碳单列。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 锅炉空气排放：氮氧化物（`boiler_nox`）

在治理后采集锅炉烟道物种；绑定燃料混合物、运行模式及测试方法。LCI保留生物CO2，树脂或辅助气体的化石碳单列。 此记录是单个真实ILCD NOx总参数；Mass/kg不定义其报告质量。数量兼容性待审，直至监测报告、LCI流定义和所选LCIA映射证明同一基准：按NO2等效质量或NO与NO2实际质量之和，并明确物种覆盖。NOx排除N2O。不得默认NOx等于NO2质量、虚构NO/NO2比例，或对同一排放再叠加分种NO/NO2。不能证明同基准时保留数量未决；未来分种路线须有独立核实的NO及NO2身份和实际分种证据。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 锅炉空气排放：二氧化硫（`boiler_so2`）

在治理后采集锅炉烟道物种；绑定燃料混合物、运行模式及测试方法。LCI保留生物CO2，树脂或辅助气体的化石碳单列。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 锅炉空气排放：颗粒物 (PM2.5)（`boiler_pm25`）

在治理后采集锅炉烟道物种；绑定燃料混合物、运行模式及测试方法。LCI保留生物CO2，树脂或辅助气体的化石碳单列。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 锅炉空气排放：颗粒物 (PM2.5 - PM10)（`boiler_pmcoarse`）

在治理后采集锅炉烟道物种；绑定燃料混合物、运行模式及测试方法。LCI保留生物CO2，树脂或辅助气体的化石碳单列。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

###### 锅炉空气排放：颗粒物（> PM10）（`boiler_pmover10`）

在治理后采集锅炉烟道物种；绑定燃料混合物、运行模式及测试方法。LCI保留生物CO2，树脂或辅助气体的化石碳单列。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按cp_air采集此项实际交换并除以同期间合格MDF净质量；采用对应计算规则；缺失值未决，不采用文献默认。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`epa-wood-boiler-2022`; `corrim-mdf-2024`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_physical | all inventory rows | 保留未分配实物流量与总质量/元素守恒及含反应项的物种账；不得将MDF、残余物或内部链接的实际数量乘环境负荷分配份额。内部回用尘不是第二个可售输出。 | `corrim-mdf-2024` |
| allocation_single_product | mdf-line | 合格MDF为唯一有价值产品时，制造线对应负荷归属MDF，实际废物及能量回收单列。按合同及实际用途判定废物或可售共产品，不由“残余物”一词判定。 | `corrim-mdf-2024` |
| allocation_shared | mdf-line; utilities | 先用分表与来源活动拆分可归属阶段/用户负荷。仍有不可分共产品共享负荷时，记录所选物理关系及一致含水/能量基准；经济替代需当前交易证据、敏感性及审查。不默认CORRIM上游残余物质量分配或单产品A3条件适用于所有工厂。 | `corrim-mdf-2024` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | mdf-line | accepted MDF | weighing | 时间、批号、板型、合格板净质量、面积、厚度、体积、含水/测试基准、密度、包装皮重、期初期末库存；专测水的方法、挥发物/测试固化干扰、真实验收板元素组成及不确定性 | 用经校准的秤及同批尺寸/含水测试测定净板质量；排除包装和不合格板，核对数量及库存。 汇总计算：同期间合格净板质量作为每1 kg参考流分母 | kg | batch | 同一申报调查期全覆盖 | 所述工厂和板型 | 每 1 kg 参考流 | 校准证书、验收和含水测试 |
| cp_furnish | mdf-line | furnish | receipt and sampling | 各原料批次、供应方/树种、湿质量、绝干质量、含水基准、散装体积及密度、运输、分配、库存和阶段转移；供方/背景实际参考量A及实木/堆积体积定义、Vs、Vb、k、同含水/状态、损耗门点 | 称量各原料并采用同批代表性烘干/水分法；直接量体积或经同批密度换算；记录树皮及木纤维阶段账。 汇总计算：各原料对应数量之和/合格MDF净质量，按每1 kg参考流 供方A与背景量定义必须核对；Vs与Vb采用同批同含水代表性实测且注明堆积/压实状态，k = Vs/Vb。保留收货门点、损耗和库存换算，未知时链接未完成。 | kg; m3 | lot and shift | 同一申报调查期全覆盖 | 供应方与本工厂 | 每 1 kg 参考流 | 过磅、取样、含水与上游边界记录 |
| cp_recipe | mdf-line | each chemical | supplier and dosing | 独立树脂/蜡/硬化剂/尿素/润滑油身份、交付质量、固含、载体水、碳来源、投加位置、批号、库存和回用; 真实树脂组分/官能团及实测C/H/O/N/S和其他有关元素；固化阶段、温度/时间、实测反应程度及残留固化/组成和不确定性 | 核对供货规格与实际配方、校准投加秤/计量泵及采购库存；不推断通用浓度或尿素氮含量。 汇总计算：各独立产品对应消耗/合格MDF净质量，按每1 kg参考流；固体和载体水另列实物账 交付固体/载体水描述进厂配方，不能按独立守恒的固化质量处理；仅以有依据的真实配方/固化记录确定生成/消耗，排除上游合成。. 区分每项实际独立化学品供货与外购完整树脂/乳液/硬化剂制剂。完整外购制剂须有具体兼容完整产品身份/供方，供应制造/配制/交付保留一次；已含组分和载水仅作分析。真实独立购入添加物及现场混合/乳化用水、公用工程和损失另留前景记录。 | kg | batch | 同一申报调查期全覆盖 | 本工厂配方与供应方 | 每 1 kg 参考流 | 供货证明、配方、投加校准 |
| cp_energy | mdf-line | electricity and each fuel；归属mdf-line | meter and invoice | 阶段、表号、电压、kWh、各燃料质量/体积、温压/组分/热值基准、运行时数、治理用量、生产量和库存；各气体供方/背景实际参考量A、T、绝对P、干湿组成、Z、背景m3与现场表计参考条件及门点；制造线实际燃料C/H/O/N/S及其他有关元素组成、进炉水分与化学结合氢、树脂/碳来源、燃料/空气数量、不完全燃烧残余物、有证据的反应程度及不确定性 | 分表记录热磨、干燥、压制、后加工、治理和锅炉；核对燃料采购库存及外购/自产份额。 汇总计算：各载体阶段对应数量之和/合格MDF净质量，按每1 kg参考流；电力转MJ 将供方和背景m3量定义与现场表计对应，未知T/P、干湿组成、Z或损耗门点不得默认换算。 本协议仅归集实际mdf-line行/来源，保留完整阶段、组分、库存和门点原始记录；共享总表或末端出口的外部交换仅在一个明确对应行中计一次，来源分解不生成第二个交换，内部转移两端保持等量。 制造线实际燃料分析须在本协议气体/能源计量及制造线cp_air/cp_vapour来源记录中保留组成、含水和反应程度证据，不默认完全转化；cp_fuel保留为独立公用能源燃料分析账。 | kWh; MJ; kg; m3 | shift and billing period | 同一申报调查期全覆盖 | 本工厂及能源供应边界；实际归属过程：mdf-line | 每 1 kg 参考流 | 仪表校准、账单、燃料证书、边界核对 |
| cp_energy_utilities | utilities | electricity and each fuel；归属utilities | meter and invoice | 阶段、表号、电压、kWh、各燃料质量/体积、温压/组分/热值基准、运行时数、治理用量、生产量和库存；各气体供方/背景实际参考量A、T、绝对P、干湿组成、Z、背景m3与现场表计参考条件及门点 | 分表记录热磨、干燥、压制、后加工、治理和锅炉；核对燃料采购库存及外购/自产份额。 汇总计算：各载体阶段对应数量之和/合格MDF净质量，按每1 kg参考流；电力转MJ 将供方和背景m3量定义与现场表计对应，未知T/P、干湿组成、Z或损耗门点不得默认换算。 本协议仅归集实际utilities行/来源，保留完整阶段、组分、库存和门点原始记录；共享总表或末端出口的外部交换仅在一个明确对应行中计一次，来源分解不生成第二个交换，内部转移两端保持等量。 | kWh; MJ; kg; m3 | shift and billing period | 同一申报调查期全覆盖 | 本工厂及能源供应边界；实际归属过程：utilities | 每 1 kg 参考流 | 仪表校准、账单、燃料证书、边界核对 |
| cp_thermal | mdf-line | steam, indirect heat, condensate；归属mdf-line | mass and enthalpy metering | 供应/回流位置、质量、温度、绝对压力、干度、焓定义、凝结入纤维量、回收量、损失、外供、仪表及供应方/背景能量定义 | 用校准质量/热量表与温压测量核对同一焓基准下供回流；取得供应方定义并证明与背景交换相符；未知热基准保持未决。 汇总计算：各载体实际交付数量/合格MDF净质量，按每1 kg参考流；内部链接两端同量，汽质量和净热量独立 本协议仅归集实际mdf-line行/来源，保留完整阶段、组分、库存和门点原始记录；共享总表或末端出口的外部交换仅在一个明确对应行中计一次，来源分解不生成第二个交换，内部转移两端保持等量。 | kg; MJ | shift | 同一申报调查期全覆盖 | 本工厂蒸汽/热载体链接；实际归属过程：mdf-line | 每 1 kg 参考流 | 热表校准、供回流焓平衡、供应方/背景定义 |
| cp_thermal_utilities | utilities | steam, indirect heat, condensate；归属utilities | mass and enthalpy metering | 供应/回流位置、质量、温度、绝对压力、干度、焓定义、凝结入纤维量、回收量、损失、外供、仪表及供应方/背景能量定义 | 用校准质量/热量表与温压测量核对同一焓基准下供回流；取得供应方定义并证明与背景交换相符；未知热基准保持未决。 汇总计算：各载体实际交付数量/合格MDF净质量，按每1 kg参考流；内部链接两端同量，汽质量和净热量独立 本协议仅归集实际utilities行/来源，保留完整阶段、组分、库存和门点原始记录；共享总表或末端出口的外部交换仅在一个明确对应行中计一次，来源分解不生成第二个交换，内部转移两端保持等量。 | kg; MJ | shift | 同一申报调查期全覆盖 | 本工厂蒸汽/热载体链接；实际归属过程：utilities | 每 1 kg 参考流 | 热表校准、供回流焓平衡、供应方/背景定义 |
| cp_water | mdf-line | water；归属mdf-line | water meter | 新补水、循环量、配方水、蒸汽凝结、纤维/板含水、排水、期初期末蓄水及表号; 阶段H2O进出、实际蒸汽/凝结水和烟气捕集凝结水去向、湿烟道H2O、入口湿度、配方/燃料含水、有证据的反应生成/消耗和不确定性 | 各边界校准计量，称量/取样纤维与板材水分；避免新水、回用水、蒸汽重复计量。 汇总计算：各新水对应量/合格MDF净质量，按每1 kg参考流；内部水另保留平衡 分子H2O账包含生成/消耗，区别于总质量/元素守恒；不能只以进料水减板材水推定蒸发。烟气凝结水不自动归为供热回路凝结水。 本协议仅归集实际mdf-line行/来源，保留完整阶段、组分、库存和门点原始记录；共享总表或末端出口的外部交换仅在一个明确对应行中计一次，来源分解不生成第二个交换，内部转移两端保持等量。 | kg | shift | 同一申报调查期全覆盖 | 本工厂制造/锅炉边界；实际归属过程：mdf-line | 每 1 kg 参考流 | 表计与水平衡 |
| cp_water_utilities | utilities | water；归属utilities | water meter | 新补水、循环量、配方水、蒸汽凝结、纤维/板含水、排水、期初期末蓄水及表号; 阶段H2O进出、实际蒸汽/凝结水和烟气捕集凝结水去向、湿烟道H2O、入口湿度、配方/燃料含水、有证据的反应生成/消耗和不确定性 | 各边界校准计量，称量/取样纤维与板材水分；避免新水、回用水、蒸汽重复计量。 汇总计算：各新水对应量/合格MDF净质量，按每1 kg参考流；内部水另保留平衡 分子H2O账包含生成/消耗，区别于总质量/元素守恒；不能只以进料水减板材水推定蒸发。烟气凝结水不自动归为供热回路凝结水。 本协议仅归集实际utilities行/来源，保留完整阶段、组分、库存和门点原始记录；共享总表或末端出口的外部交换仅在一个明确对应行中计一次，来源分解不生成第二个交换，内部转移两端保持等量。 | kg | shift | 同一申报调查期全覆盖 | 本工厂制造/锅炉边界；实际归属过程：utilities | 每 1 kg 参考流 | 表计与水平衡 |
| cp_pack | mdf-line | each packaging component | mass and count | 材料、供应路线、件数、单件净质量、损耗、库存、对应合格板质量 | 按实际包装材料逐项称量或件数乘实测质量，不把包装质量放入MDF净重。 汇总计算：各包装消耗/合格MDF净质量，按每1 kg参考流 | kg | batch | 同一申报调查期全覆盖 | 本工厂包装 | 每 1 kg 参考流 | 称重、供货路线与包装单 |
| cp_residues | mdf-line | each waste；归属mdf-line | transfer and composition | 独立尘/边料/树皮/灰/排水/油、含水及树脂/灰组分、来源、回用目的地、质量、接收方及处理 | 逐项称量/计量并核对转移单；收集灰与空气PM分开，固化残料与未固化纤维分开。 汇总计算：各实际外送废物流量/合格MDF净质量，按每1 kg参考流；内部回用只保留等量链接 本协议仅归集实际mdf-line行/来源，保留完整阶段、组分、库存和门点原始记录；共享总表或末端出口的外部交换仅在一个明确对应行中计一次，来源分解不生成第二个交换，内部转移两端保持等量。 | kg | shift and transfer | 同一申报调查期全覆盖 | 本工厂及接收方；实际归属过程：mdf-line | 每 1 kg 参考流 | 转移单、成分、去向、库存 |
| cp_residues_utilities | utilities | each waste；归属utilities | transfer and composition | 独立尘/边料/树皮/灰/排水/油、含水及树脂/灰组分、来源、回用目的地、质量、接收方及处理 | 逐项称量/计量并核对转移单；收集灰与空气PM分开，固化残料与未固化纤维分开。 汇总计算：各实际外送废物流量/合格MDF净质量，按每1 kg参考流；内部回用只保留等量链接 本协议仅归集实际utilities行/来源，保留完整阶段、组分、库存和门点原始记录；共享总表或末端出口的外部交换仅在一个明确对应行中计一次，来源分解不生成第二个交换，内部转移两端保持等量。 | kg | shift and transfer | 同一申报调查期全覆盖 | 本工厂及接收方；实际归属过程：utilities | 每 1 kg 参考流 | 转移单、成分、去向、库存 |
| cp_fuel | utilities | each actual fuel；归属utilities | weighing and analysis | 每种燃料质量、含水、热值及其高/低位基准、树脂/碳来源、灰分、来源/内部链接及燃烧条件; 各实际气体/木质/含树脂燃料组成及C/H/O/N/S和其他实际元素、干湿质量及树脂含量、实测消耗/库存、燃烧空气及不完全燃烧残余物和不确定性 | 称量各固体/液体燃料或按cp_energy_utilities在相符数量/状态条件下计量气体，代表性取样实际含水及元素组成；仅在证实相同燃料及设备条件时采用外部因子。 汇总计算：每种燃料实际用量/合格MDF净质量，按每1 kg参考流 气体组成/数量与cp_energy_utilities核对；水分与化学结合氢分开，表征含树脂燃料，以证据确定实际反应程度，不默认燃料完全转化。 本协议仅归集实际utilities行/来源，保留完整阶段、组分、库存和门点原始记录；共享总表或末端出口的外部交换仅在一个明确对应行中计一次，来源分解不生成第二个交换，内部转移两端保持等量。 | kg; m3 | fuel lot and shift | 同一申报调查期全覆盖 | 本工厂锅炉；实际归属过程：utilities | 每 1 kg 参考流 | 称重、组分、热值、设备证据 |
| cp_air | mdf-line | each emission species and source；归属mdf-line | stack and fugitive tests | 来源/烟道/阶段、物种、介质、碳源、浓度、烟气量、时数、含氧干湿/温压、治理状态、检出限、粒径及可凝结组分、因子适用性；NOx按NO2等效或NO+NO2实际质量定义、NO/NO2覆盖、N2O排除及所选LCIA映射质量定义; 入口燃烧/通风空气质量或相符状态体积、组成、湿度和温压；按来源记录的湿烟气H2O及治理凝结、剩余气体/灰组成及不确定性 | 对干燥、压制/冷却、砂光/搬运及锅炉分别测试或使用经适用性核验的因子乘实测活动；共同末端烟道仅计一次并保留来源分解。 汇总计算：各物种治理后对应排放质量/合格MDF净质量，按每1 kg参考流；粒径区间不重复 NOx总参数的监测、LCI及LCIA映射必须证明同一质量定义；不默认NO2等效，不与分种重复，无法证明时数量兼容性待审。 气态H2O采用cp_vapour。实物守恒纳入氧/氮和其他实际空气/燃料元素，明确空气湿度总量及来源贡献；未测反应项不是零。 本协议仅归集实际mdf-line行/来源，保留完整阶段、组分、库存和门点原始记录；共享总表或末端出口的外部交换仅在一个明确对应行中计一次，来源分解不生成第二个交换，内部转移两端保持等量。 | kg | representative operating modes plus activity logs | 同一申报调查期含异常/启停 | 本工厂各排放来源；实际归属过程：mdf-line | 每 1 kg 参考流 | 测试方法、检出限、烟道图、控制记录、因子边界 |
| cp_air_utilities | utilities | each emission species and source；归属utilities | stack and fugitive tests | 来源/烟道/阶段、物种、介质、碳源、浓度、烟气量、时数、含氧干湿/温压、治理状态、检出限、粒径及可凝结组分、因子适用性；NOx按NO2等效或NO+NO2实际质量定义、NO/NO2覆盖、N2O排除及所选LCIA映射质量定义; 入口燃烧/通风空气质量或相符状态体积、组成、湿度和温压；按来源记录的湿烟气H2O及治理凝结、剩余气体/灰组成及不确定性 | 对干燥、压制/冷却、砂光/搬运及锅炉分别测试或使用经适用性核验的因子乘实测活动；共同末端烟道仅计一次并保留来源分解。 汇总计算：各物种治理后对应排放质量/合格MDF净质量，按每1 kg参考流；粒径区间不重复 NOx总参数的监测、LCI及LCIA映射必须证明同一质量定义；不默认NO2等效，不与分种重复，无法证明时数量兼容性待审。 气态H2O采用cp_vapour_utilities。实物守恒纳入氧/氮和其他实际空气/燃料元素，明确空气湿度总量及来源贡献；未测反应项不是零。 本协议仅归集实际utilities行/来源，保留完整阶段、组分、库存和门点原始记录；共享总表或末端出口的外部交换仅在一个明确对应行中计一次，来源分解不生成第二个交换，内部转移两端保持等量。 | kg | representative operating modes plus activity logs | 同一申报调查期含异常/启停 | 本工厂各排放来源；实际归属过程：utilities | 每 1 kg 参考流 | 测试方法、检出限、烟道图、控制记录、因子边界 |
| cp_vapour | mdf-line | H2O vapour by actual source；归属mdf-line | wet-stack moisture and flow measurement | 来源/烟道图和独立干燥/压制/锅炉份额、同步治理后H2O浓度及湿烟气量和单位/状态、温压、时间/工况、液滴/饱和干扰、检出/不确定性、实测入口空气湿度/数量、配方载体水/固化程度、各燃料质量/组成/含水/反应程度、蒸汽/凝结、治理水/凝结及库存 | 采用经校准且适合来源的方法（如Method 4参考程序或证实等效方法）实测气态H2O及相符湿烟气量；保留方法前提及液滴/饱和干扰评估。以实际固化/燃料/空气/蒸汽/治理记录核对有依据的来源贡献；不得以通用化学或效率因子提供现场数量。汇总计算：可归属的实际治理后气态H2O质量/合格MDF净质量，按每1 kg参考流；共同烟道只计一次，H2O总量与有证据的环境湿度扣除分别保留。 本协议仅归集实际mdf-line行/来源，保留完整阶段、组分、库存和门点原始记录；共享总表或末端出口的外部交换仅在一个明确对应行中计一次，来源分解不生成第二个交换，内部转移两端保持等量。 | kg | representative modes and concurrent activity records | 同一申报调查期全覆盖 | 制造线实际干燥/压制出口；实际归属过程：mdf-line | 每 1 kg 参考流 | 校准、完整烟道测试、来源图、配方/固化及燃料/空气证据、凝结水/库存及不确定性 |
| cp_vapour_utilities | utilities | H2O vapour by actual source；归属utilities | wet-stack moisture and flow measurement | 来源/烟道图和独立干燥/压制/锅炉份额、同步治理后H2O浓度及湿烟气量和单位/状态、温压、时间/工况、液滴/饱和干扰、检出/不确定性、实测入口空气湿度/数量、配方载体水/固化程度、各燃料质量/组成/含水/反应程度、蒸汽/凝结、治理水/凝结及库存 | 采用经校准且适合来源的方法（如Method 4参考程序或证实等效方法）实测气态H2O及相符湿烟气量；保留方法前提及液滴/饱和干扰评估。以实际固化/燃料/空气/蒸汽/治理记录核对有依据的来源贡献；不得以通用化学或效率因子提供现场数量。汇总计算：可归属的实际治理后气态H2O质量/合格MDF净质量，按每1 kg参考流；共同烟道只计一次，H2O总量与有证据的环境湿度扣除分别保留。 本协议仅归集实际utilities行/来源，保留完整阶段、组分、库存和门点原始记录；共享总表或末端出口的外部交换仅在一个明确对应行中计一次，来源分解不生成第二个交换，内部转移两端保持等量。 | kg | representative modes and concurrent activity records | 同一申报调查期全覆盖 | 实际锅炉治理后出口；实际归属过程：utilities | 每 1 kg 参考流 | 校准、完整烟道测试、来源图、配方/固化及燃料/空气证据、凝结水/库存及不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_output` | all inventory rows | 每行归一化交换=同期间归属该行的实际总交换量/合格MDF净质量；分子单位保留kg、m3或MJ，分母为cp_output的kg；mdf_output固定为每参考流1千克。 | actual row amount; accepted net mass; cp_output | per 1 kg reference flow | `corrim-mdf-2024` |
| `moisture_conversion` | furnish_chips, furnish_sawdust, furnish_shavings, mdf_output | 绝干质量=湿质量/(1+u)；水=湿质量-绝干质量；w=u/(1+u)。u为干基、w为湿基小数；树脂和无机添加物不得冒充干木材。  仅适用于同状态实测组成；存在挥发物或固化干扰时，湿干测试失重不自动等于纯H2O，本公式不表示反应阶段守恒。 | wet mass; dry-basis moisture; cp_furnish; cp_output | dry solids and water | `usda-wood-handbook-2021` |
| `recipe_split` | binder_uf, binder_muf, binder_pmdi, additive_wax, additive_hardener | 配方固体质量=配方交付质量×实测固体份额；载体水采用配方水份额，不默认全部非固体是水；仅按各真实供货已核完整产品或独立化学品参考基准作此分析拆分，不把完整已配制剂赋给组分UUID；这些为实物组分账，不增列重复外购交换。供应方制造/配制/交付保留一次，真实现场采购、混合用水/公用工程和损失另列。 进料配方拆分不证明固化固体守恒；按physical_reconciliation采用实际反应程度并排除上游合成。 | delivered formulation; solids fraction; water fraction; cp_recipe | component ledger | `corrim-mdf-2024`; `usda-wood-joining-2023` |
| `volume_conversion` | furnish_chips, mdf_output, dryer_gas, control_gas, boiler_gas | 板材体积=实测面积×厚度。木片同批同含水/状态实测填充率k = Vs/Vb；供方/背景若定义实木体积则采用Vs，若定义堆积体积则采用相同压实状态Vb，跨门点按实测库存与损耗换算。链接背景过程的倍数=相符体积/其实际参考量A；实际清单交换再按合格MDF净质量归一化。A或定义未证实则链接未完成，不用未知密度/填充率顶替。气体数量用实测表计T/P、干湿组成、Z与背景m3状态对应后换算，不假定标准体积。 | Vs; Vb; k; A; measured stocks/losses; gas T/P/composition/Z; cp_furnish; cp_energy; cp_output; cp_energy_utilities | consistent volume or mass | `usda-wood-handbook-2021`; `corrim-mdf-2024` |
| `thermal_reconciliation` | line_steam, line_heat, boiler_steam, boiler_heat, condensate_return, boiler_condensate | 间接净交付热=Σ供流质量×供流比焓-Σ回流质量×回流比焓，同一焓基准和同一期间。供应方/背景定义须对应此边界；无回流及直接蒸煮应声明凝结去向及参考基准，不以燃料热值或属性名直接替代。未证实时热量未决。 | mass; supply/return states; enthalpy definition; cp_thermal; cp_thermal_utilities | carrier mass and verified delivered heat | `epa-mdf-2002`; `corrim-mdf-2024` |
| `emission_mass` | all elementary outputs | 排放质量=经一致干湿/温压/含氧基准换算的物种浓度×同期烟气量×对应运行时间；或经适用性核验因子×同基准实测活动。共同烟道不可按上游与末端各计一次。 | concentration; gas flow; operating time; activity; cp_air; cp_air_utilities; cp_vapour; cp_vapour_utilities | species emission mass | `epa-mdf-2002`; `epa-wood-boiler-2022` |
| `pm_partition` | all particulate outputs | 相同烟道/测试覆盖且粒径累计相容时：PM2.5行=累计PM2.5；PM2.5–10行=累计PM10-累计PM2.5；>PM10行=总PM-累计PM10。检验非负性；可凝结与可过滤口径不同或分级不足时不可硬拆，保留未决。 | same-basis total PM; cumulative PM10; cumulative PM2.5; cp_air; cp_air_utilities | nonoverlapping particulate masses | `epa-mdf-2002`; `epa-wood-boiler-2022` |
| `physical_reconciliation` | mdf-line; utilities | 对各阶段及公用能源，总质量和各实际元素采用期初库存+输入=期末库存+输出，包括C/H/O/N/S及有关无机元素。纳入实测燃烧/通风空气、氧/氮、真实燃料/配方组成、产品、残余物、全部气体物种、凝结水及库存。分子H2O及木材/树脂材料组分账则采用期初+输入+有证据的生成=期末+输出+有证据的消耗。化学项按真实配方、固化/燃烧条件及实测反应程度确定；UF/MUF产水、pMDI耗水/产CO2和燃烧/治理转化不是默认产率。交付与固化固体分开，排除上游合成，保留等量内部链接及生物源/化石源碳。未知组成/反应程度保留不确定性；声明残差及测量不确定性，不强制闭合或默认完全固化/燃烧。 | stage flows; stocks; actual elemental/species composition; reaction extents; cp_furnish; cp_recipe; cp_water; cp_thermal; cp_air; cp_fuel; cp_energy; cp_vapour; cp_water_utilities; cp_thermal_utilities; cp_air_utilities; cp_energy_utilities; cp_vapour_utilities | whole-mass/elemental conservation and reaction-aware species ledgers | `corrim-mdf-2024`; `epa-wood-boiler-2022`; `usda-wood-joining-2023`; `doe-condensing-economizer-2012` |
| `vapour_source_reconciliation` | dryer_water-vapour, press_water-vapour, boiler_water-vapour | 采用emission_mass，以同步且状态相符的H2O浓度、湿烟气量及运行时间确定实际排出气态H2O。以实测原料/配方水、燃料水分、入口空气湿度/数量、蒸汽/凝结水、治理水、库存及实际固化/燃烧程度支持的来源生成/消耗核对。实测H2O总量已含化学反应水；来源分解仅为组分账，不增列排放。环境湿度透过量如需扣除，须有实测进出口覆盖及声明的核算约定，并保留总量。捕集烟气凝结水按真实去向记录，公用蒸汽/回流质量另列。共同烟道只计一次且有依据归属。未知来源份额或反应程度保留不确定性，不设为零或虚构产率补平。 | wet-stack H2O/flow/time; source records and reaction extents; cp_vapour; cp_recipe; cp_water; cp_fuel; cp_air; cp_thermal; cp_output; cp_vapour_utilities; cp_water_utilities; cp_air_utilities; cp_thermal_utilities; cp_energy; cp_energy_utilities | actual emitted H2O and supported source ledger | `usda-wood-joining-2023`; `doe-condensing-economizer-2012`; `epa-stack-moisture-method4`; `epa-wood-boiler-2022` |
| `nox_compatibility` | dryer_nox, handling_nox, boiler_nox | 核对监测、LCI和所选LCIA映射对NOx的质量定义及NO/NO2覆盖。只有三者同基准才按cp_air生成总参数数量；不假定NO2等效或NO/NO2比例，排除N2O，不叠加分种；未证实则数量未决。 | monitoring mass definition; flow mass definition; LCIA mapping; cp_air; cp_air_utilities | compatible NOx quantity or explicit pending result | `epa-mdf-2002`; `epa-wood-boiler-2022` |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_primary | all inventory rows | 保留同调查期实际生产、计量、库存及代表性运行模式；不得将CORRIM区域配方/能耗或针叶锯木调查推广为本类参数。 | 采集原件及适用性审查 |
| quality_missing | all inventory rows | 未知、未测、BDL与真实零值分开；数量范围需独立兼容证据，本候选没有经综合审查的通用范围。 | 缺失值、检出限、范围证据缺口 |
| quality_reactions | mdf-line; utilities | 保留反应程度、真实组成、方法/库存不确定性及H2O总量与来源归属量。结合测量不确定性评估残差；不强制分子水或木材/树脂固体守恒，不将缺失项置零，不以假定锅炉/固化产率替代实测出口H2O。 | 真实配方/固化、燃料/空气、湿烟道、蒸汽/凝结水和库存记录 |
| quality_claims | mdf_output | 密度、厚度、含水与甲醛级别有测试状态、方法、日期及适用版本；不以报告标题或分类标签证明性能/法规符合性。 | 产品测试与供应声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | mdf_output | 要求唯一最终参考输出、匹配质量属性/单位及全部限定信息；同期合格净质量排除包装。其他阶段物态属于制造线实物账，不是重复MDF输出。 | `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021` |
| validation_quantity_compatibility | furnish_chips; dryer_gas; control_gas; boiler_gas; dryer_nox; handling_nox; boiler_nox | 已确认UUID/属性单位不证明数量兼容。木片须供方A、体积定义、同含水/状态Vs/Vb/k及损耗门点对应；气体须T/P、干湿组成、Z及背景m3对应；NOx须监测/LCI/LCIA同一质量定义、NO/NO2覆盖、N2O排除及无分种重复。任何未知均保留quantity compatibility pending，受影响链接/结果未完成。 | `corrim-mdf-2024`; `epa-mdf-2002`; `epa-wood-boiler-2022` |
| validation_inventory | all inventory rows | 每项真实交换具有一个原子身份、状态、方向、类型、属性/单位、协议及分母。受影响路线完整使用前解决空UUID和路线/牌号不符；不得选择邻近板材或校正流。 | `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021` |
| validation_balances | mdf-line; utilities | 分别核验总质量及实际C/H/O/N/S和有关无机元素守恒，以及具有生成/消耗证据和实际反应程度的反应H2O/木材/树脂账。要求真实配方/固化、燃料/空气、湿烟气、蒸汽/凝结水、残余物和库存记录；未知项及未解释残差保留不确定性，不置零或强制闭合。内部链接等量、真实回用去向及未缩放实物输出与负荷分配独立，不默认完全固化或燃烧。 | `corrim-mdf-2024`; `usda-wood-joining-2023`; `doe-condensing-economizer-2012`; `epa-wood-boiler-2022` |
| validation_vapour | dryer_water-vapour; press_water-vapour; boiler_water-vapour | 纳入锅炉运行时须有独立锅炉H2O输出，不能以干燥/压制行覆盖。核验气态空气身份及实测治理后湿烟道数量/协议，有依据地分解配方/固化、燃料/含水、环境湿度、蒸汽/治理水及反应来源。捕集凝结水与公用载体/回流分开，核验液滴偏差或未证实状态换算。各末端烟道只计一次，不将生成水叠加到已实测H2O总量。即使总H2O已测，未知来源归属/反应程度仍有不确定性，受影响来源核对未完成。 | `doe-condensing-economizer-2012`; `epa-stack-moisture-method4`; `usda-wood-joining-2023`; `epa-wood-boiler-2022` |
| validation_thermal | line_steam; line_heat; boiler_steam; boiler_heat | 蒸汽/热MJ属性不足以证明净交付热。须有供应方/背景定义、计量边界及相符状态/焓平衡；未知基准属未决。不得重复计入公用燃料与外购热。 | `epa-mdf-2002`; `corrim-mdf-2024` |
| validation_air | all elementary outputs | 核验物种、室外空气介质、实际来源及生物/化石源；无论影响统计口径，LCI均保留生物CO2。使用相容、不重叠PM区间并声明检出限/可凝结组分。制造因子不是锅炉因子；含树脂尘采用洁净木材因子须审查。 | `epa-mdf-2002`; `epa-wood-boiler-2022` |
| validation_readiness | all inventory rows | 方法为需独立科学审查的已编写候选指导。结构/计量检查通过不证明法规符合性或现场LCI完成；未决身份、热定义和范围证据保持明确。 | `corrim-mdf-2024`; `epa-mdf-2002`; `usda-wood-handbook-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 未饰面干法木质MDF投入的上游制造数据 |
| allowed_use | 在路线/配方/交付状态/地域年份匹配且未决项解决后使用，声明质量与边界 |
| excluded_use | 湿法硬板、其他纤维板、非木纤维、特种/饰面配方、默认寿命/终端情景、甲醛法规证明 |
| required_metadata | PCR身份/版本；调查期/地点/产量；完整参考限定信息；能源和上游边界；原子流/协议；分配/实物账 |
| required_quality_disclosure | 未决UUID、计量基准、遗漏/检出限、范围证据、地点/年份/路线代理与审核状态 |
| update_trigger | 原料树种/来源、配方/含水、干燥施胶顺序、压机、燃料/热定义、治理、供电、产品级别或背景边界改变 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `corrim-mdf-2024` | literature | [Cradle-to-grave Life Cycle Assessment of North American Medium Density Fiberboard](https://corrim.org/wp-content/uploads/2024/07/MDF-Cradle-to-grave-LCA-Final.pdf); pp. 1, 13, 18–19, 24–30, 32; Tables 4, 7, 9, 11 | 2023-12-22报告，2024-04-03最后修订；2021/2022北美CPA成员调查。用于路线、组分、采集和分配条件；不移植配方、密度/含水、能耗、法规结论或全生命周期情景。§3.2.4称12设施供数据又称13制造者，后文加权13；保留此差异，不捏造统一样本数。 |
| `usda-wood-handbook-2021` | handbook | [Wood handbook—wood as an engineering material, FPL-GTR-282](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf); Chapters 4 and 11, pp. 4–1 to 4–3, 11–13 to 11–15 | 2021技术手册：木材含水定义、纤维化、干法MDF及湿法硬板区别；其其他纤维板、胶黏剂和历史认证示例不是本PCR通用配方或限值。 |
| `epa-mdf-2002` | official_guidance | [AP-42 Section 10.6.3 Medium Density Fiberboard Manufacturing](https://www.epa.gov/sites/default/files/2020-10/documents/c10s0603.pdf); August 2002; §§10.6.3.1–3; Figure 10.6.3 process diagram; Tables 10.6.3-1 onward with footnotes | 用于吹管施胶/后施胶路线、压制、后加工、来源分解和测试口径；旧因子仅在设备、燃料、木种、树脂、治理及单位相容时评估，不作默认数量或现行法规限值，不代替锅炉来源。 |
| `epa-wood-boiler-2022` | official_guidance | [AP-42 Section 1.6 Wood Residue Combustion in Boilers](https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf); March 2022; §§1.6.1–3; Tables 1.6-1 onward and PM/factor footnotes | 用于独立锅炉边界、燃料/含水/治理影响、GHG及PM口径；含树脂燃料需另证适用性。温室气体核算对生物CO2的处理不构成从LCI删除的依据。 |
| `usda-wood-joining-2023` | literature | [Joining and Reassembling of Wood, Chapter 14](https://research.fs.usda.gov/download/treesearch/66341.pdf); Springer Handbook of Wood Science and Technology (2023); DOI 10.1007/978-3-030-81315-4_14; printed pp. 720–724, 730–733; Figures 14.13, 14.14, 14.19 | UF/MUF配方与固化缩合、pMDI耗水固化/产CO2和配方相关反应条件；上游合成与木材上固化分开。仅定性原理，不提供现场配方、固化程度或反应水产率。 |
| `doe-condensing-economizer-2012` | official_guidance | [Considerations When Selecting a Condensing Economizer, Steam Tip Sheet 26B](https://www.energy.gov/sites/default/files/2014/05/f16/steam26b_condensing.pdf); DOE/GO-102012-3397, January 2012; pp. 1–2 | 烃燃烧产生烟气水蒸气，凝结回收取决于实际换热/治理条件；支持烟气水与公用水回路分开。不提供通用燃料组成、锅炉效率、排放量或产率；木质/含树脂燃料须真实组成及反应程度证据。 |
| `epa-stack-moisture-method4` | official_guidance | [Method 4—Determination of Moisture Content in Stack Gases](https://www.epa.gov/sites/default/files/2020-12/documents/method_4.pdf); EPA-hosted Internet copy, §§1–2, 4, 6; retained 2026-10-14 | 烟道气态H2O测量、参考与近似程序区别、引用方法前提及饱和/液滴干扰。须采用实际适用测量方法及相符湿烟气量，不提供来源份额或排放量，不证明法规符合性。 |
