---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.raw-silk-not-thrown
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 生丝（未加捻）

## 1. 范围与适用性

本 PCR 覆盖将多根蚕茧长丝合并缫制为连续生丝、且不进行并捻/加捻的前景生产。参考产品保留其声明的丝胶状态，以可销售的绞、束或筒子形态交付。前景报告单元从缫丝厂接收可交易鲜茧或干燥/杀蛹蚕茧开始，到调湿、检验并包装的生丝在缫丝厂门口交付为止。

本 PCR 仅在声明蚕种或商业纤维类型时适用于桑蚕和非桑蚕路线。手工、坐缫、多绪、半自动和自动缫丝必须分别建模；鲜茧/干茧、直接/间接缫丝、是否复摇以及化学处理同样必须声明并保持分开。只有在先分别算完每条路线后，才可按有记录的产量份额加权。

范围不含养蚕和桑树种植（仅通过上游蚕茧数据集连接）、并捻/加捻丝、绢纺丝与丝废料纱、脱胶、染色、织造、后整理、服装制造、使用和报废。双宫丝等特种缫丝仅在仍属未加捻生丝且单独声明蚕茧类型、线密度、缫制条件和市场规格时适用；由穿孔茧纺制的产品不在范围内。

天工产品流 `343df125-d682-4ffa-8829-5fbc785bdbc9` 经直接读取核验为版本 `01.01.001`、`state_code=100`、Product flow、CPC 26110，参考流属性为 Mass。它仅支持 “Raw Silk” 的精确产品身份，不支持蚕种、蚕茧状态、路线、等级、含水基准、地域、技术或任何清单数量；这些均须由前景数据声明。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.raw-silk-not-thrown` |
| classification_refs | CPC 3.0 `26110` Raw silk (not thrown)，语义 exact；分类不构成规范 PCR 身份 |
| covered_products | 由声明的桑蚕或非桑蚕茧缫制的连续生丝；未加捻；声明丝胶状态；以声明的绞、束或筒子形态供应 |
| excluded_products | 并捻/加捻丝；绢纺丝和丝废料纱；未作为下游过程单独建模的脱胶丝；染色或织造丝；穿孔茧纺制品；合成或再生纤维 |
| representative_product | 单一声明蚕种和单一声明缫丝路线生产的调湿可销售生丝（未加捻） |
| production_route | 接收鲜茧或干燥/杀蛹蚕茧；条件性杀蛹/干燥与储存；分选；煮茧与索绪；路线特定缫丝；条件性复摇；调湿、检验、包装；残余物管理 |
| market_state | 缫丝厂门口未加捻生丝，声明包装形态、名义线密度、质量等级/检验方法、丝胶或煮练减量状态及商业含水基准 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应由残余丝胶黏合且未经并捻/加捻的生丝长丝 |
| How much | 1 kg 调湿净生丝，不含包装 |
| How well | 满足声明合同或标准中的蚕种/纤维类型、名义线密度、包装形态、质量等级和检验方法、适用的疵点/匀度类别以及丝胶或煮练减量状态 |
| How long or cycle | 缫丝厂门口的一个生产批次；该中间产品不赋予使用寿命 |
| reference_flow_link | 功能单位由按声明商业含水基准计的恰好 1 kg 天工 Raw Silk 产品流实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 调湿净生丝（未加捻） |
| 参考产品流 | Raw Silk `343df125-d682-4ffa-8829-5fbc785bdbc9` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 蚕种或商业纤维类型；桑蚕或非桑蚕路线；鲜茧或干燥/杀蛹蚕茧起始状态；手工、坐缫、多绪、半自动或自动缫丝技术；直接或间接缫丝；是否复摇；包装形态；名义线密度及单位；质量等级和检验方法；丝胶/煮练减量状态；约定商业回潮率或干质量换算；地域；参考年份；分配方法 |

构建前景数据包时，所有必需限定信息均须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。天工身份不得被解释为补足任何缺失限定信息。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_conditioned_mass` | 参考生丝 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明的商业回潮率报告 1 kg 净生丝，保留毛重、皮重、烘干质量或实测含水率、调湿条件及计算。仅在适用合同或检验规范明确采用 FAO 手册基准时才可使用 11% 回潮率，不能无条件默认。 |
| `cocoon_condition_mass` | 鲜茧和干燥/杀蛹蚕茧 | Mass | kg | 鲜茧和干茧质量必须分字段记录；记录实测含水率或供应商声明状态，未经有记录的干物质换算不得合并。 |
| `linear_density_declaration` | 参考生丝质量 | Linear density | dtex 或 denier | 声明方法与结果。可采用 ISO 21046:2018；换算时使用 `1 denier = 1.111... dtex` 并保留原始单位。 |
| `utility_energy_preservation` | 电力、蒸汽、热水和各种燃料 | Energy 或载体特定属性 | 实测 kWh、MJ、kg、m3 或 Nm3 | 每种载体单独保留；仅用有记录因子换算，电力、蒸汽、热水、天然气、LPG、柴油和压缩空气不得合并。 |
| `water_balance_basis` | 煮茧、缫丝、复摇及处理水 | Mass 或带密度的 Volume | kg 或 m3 | 分别记录取水、内部循环水、排水、蒸发、进入产品/废物的水和其他损失；循环水不得重复计为新增取水。 |
| `net_packaging_exclusion` | 参考产品与包装 | Mass | kg | 参考数量不含包装；纸箱、PE 膜/袋、木托盘等逐一按材料记录。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 缫丝厂门口接收的可交易鲜茧或干燥/杀蛹蚕茧，声明蚕种/纤维类型、含水率或状态、供应商、产地、运输纳入情况和杀蛹/干燥位置 |
| starting_condition_role | 生丝缫制前景系统的上游蚕茧产品投入 |
| product_classification_scope | 生丝（未加捻）；不含并捻/加捻、绢纺、脱胶、染色、织造、针织和后整理产品 |
| recursive_input_rule | 外购同类别生丝用于混合或整理时，作为带上游数据集的单独投入记录，不得递归地视为本前景系统内部生产 |
| upstream_dataset_requirement | 每种蚕茧投入须连接在地域、时间、蚕种、饲养与起始状态上有代表性的上游数据集；供应商杀蛹/干燥和入厂运输须在上游或本系统中明确纳入，不得遗漏或重复 |
| disclosure | 声明蚕种/类型、鲜/干茧基准、缫丝技术、直接/间接路线、复摇、包装、等级/检验方法、含水基准、地域、期间、产能利用率、处理路线和分配选择 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_route_separation` | 全部前景建模 | 分别计算蚕种/纤维类型、蚕茧起始状态和缫丝技术；路线清单完成后方可按有记录份额合并，禁止无条件类别平均。 | `fao-silk-reeling-testing-1999` |
| `sb_cocoon_upstream` | 蚕茧供应 | 前景边界止于声明的缫丝厂门口蚕茧投入，并要求上游蚕茧数据集覆盖饲养及供应商杀蛹/干燥；上游未含的入厂运输须显式增加。 | `eu-pef-2021-2279` |
| `sb_filature_operations` | 缫丝厂 | 纳入分选、场内杀蛹/干燥/储存、煮茧、索绪、缫丝、适用的复摇/整理、调湿/检验/包装，以及可归属的原子化能源、水、废水、直接排放、废物和副产品。 | `fao-silk-reeling-testing-1999`; `eu-txt-bref-2023` |
| `sb_downstream_exclusions` | 参考产品 | 排除并捻/加捻、脱胶、染色、织造、后整理、服装、使用和报废；任何偏离须作为独立下游模块披露。 | `un-cpc-3-0-26110`; `fao-silk-reeling-testing-1999` |
| `sb_capital_goods` | 基础设施与设备 | 默认不纳入资本品；若下游方法要求纳入，披露寿命、利用率和分配并使结果可区分。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

以下每个 flow card 仅表示一种具名物质、能源载体、产品、副产品、废物、废水或排放。互斥路线按适用条件选择，禁止合并为类别流。实际设施使用未列出的能源、化学品、制冷剂或包装时，须新增一个具名原子流并进行前景映射。

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 作用 | 定量基准 |
| --- | --- | --- | --- | --- | --- |
| `cocoon_receipt_preparation` | 蚕茧接收、称量与分选 | `required` | 始终 | 前景过程 | 每 1 kg 调湿净生丝 |
| `cocoon_stifling_drying` | 蚕茧杀蛹、干燥与储存 | `conditional` | 鲜茧在场内处理 | 前景过程 | 每 1 kg 调湿净生丝 |
| `cocoon_cooking_reeling` | 煮茧、索绪与生丝缫制 | `required` | 始终；每次仅一条声明路线 | 前景过程 | 每 1 kg 调湿净生丝 |
| `raw_silk_rereeling_finishing` | 生丝复摇与绞装整理 | `conditional` | 间接路线或包装要求时 | 前景过程 | 每 1 kg 调湿净生丝 |
| `conditioning_testing_packing` | 调湿、检验、称量与包装 | `required` | 始终 | 前景过程 | 每 1 kg 调湿净生丝 |
| `onsite_wastewater_treatment` | 场内生丝废水处理 | `conditional` | 废水在场内处理 | 前景过程 | 每 1 kg 调湿净生丝 |

### 过程：蚕茧接收、称量与分选（`cocoon_receipt_preparation`）

#### 输入

##### 产品流

###### 鲜桑蚕茧（`fresh_mulberry_cocoons`）

适用条件：鲜桑蚕路线。

- 流名称：鲜桑蚕茧
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：鲜桑蚕茧
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoon_receipt`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_receipt`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：证据筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5.0
  - 上限：8.34
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-silk-reeling-testing-1999`

###### 干桑蚕茧（`dried_mulberry_cocoons`）

适用条件：干桑蚕路线。

- 流名称：干桑蚕茧
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：干桑蚕茧
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cocoon_receipt`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_receipt`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：证据筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：2.1
  - 上限：4.4
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`method_formula`）
  - 来源：`fao-silk-reeling-testing-1999`

###### 干柞蚕茧（`dried_tasar_cocoons`）

适用条件：柞蚕连续长丝路线。

- 流名称：干柞蚕茧
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：干柞蚕茧
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cocoon_receipt`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_receipt`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`

###### 干穆加蚕茧（`dried_muga_cocoons`）

适用条件：穆加蚕连续长丝路线。

- 流名称：干穆加蚕茧
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：干穆加蚕茧
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cocoon_receipt`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_receipt`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`

###### 接收与分选用电网电力（`receipt_electricity`）

适用条件：使用计量的分选设备。

- 流名称：接收与分选用电网电力
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Net calorific value / kWh、版本 22.00.000
- 流属性/单位：Energy / kWh
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoon_receipt`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_receipt`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：50
  - 单位：kWh/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

本 PCR 不预设该类原子流；如实际存在，须按具名原子流记录。

##### 基本流

本 PCR 不预设该类原子流；如实际存在，须按具名原子流记录。

#### 输出

##### 产品流

###### 可销售双宫茧（`double_cocoons_product`）

适用条件：销售或转移用于双宫丝生产。

- 流名称：可销售双宫茧
- 方向：输出（`outputs`）
- 流类型：产品流（`product`）
- 选定流：可销售双宫茧
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoon_receipt`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_receipt`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`

##### 废物流

###### 穿孔茧废物（`pierced_cocoon_waste`）

适用条件：无产品去向。

- 流名称：穿孔茧废物
- 方向：输出（`outputs`）
- 流类型：废物流（`waste`）
- 选定流：穿孔茧废物
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoon_receipt`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_receipt`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 霉损蚕茧废物（`mould_damaged_cocoon_waste`）

适用条件：无产品去向。

- 流名称：霉损蚕茧废物
- 方向：输出（`outputs`）
- 流类型：废物流（`waste`）
- 选定流：霉损蚕茧废物
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoon_receipt`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_receipt`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

本 PCR 不预设该类原子流；如实际存在，须按具名原子流记录。

### 过程：蚕茧杀蛹、干燥与储存（`cocoon_stifling_drying`）

#### 输入

##### 产品流

###### 鲜桑蚕茧（`fresh_mulberry_cocoons_to_dryer`）

适用条件：具名鲜茧路线在场内干燥。

- 流名称：鲜桑蚕茧
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：鲜桑蚕茧
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`

###### 鲜柞蚕茧（`fresh_tasar_cocoons_to_dryer`）

适用条件：具名鲜茧路线在场内干燥。

- 流名称：鲜柞蚕茧
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：鲜柞蚕茧
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`

###### 鲜穆加蚕茧（`fresh_muga_cocoons_to_dryer`）

适用条件：具名鲜茧路线在场内干燥。

- 流名称：鲜穆加蚕茧
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：鲜穆加蚕茧
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`

###### 蚕茧干燥机用天然气（`dryer_natural_gas`）

适用条件：实际消耗该具名载体。

- 流名称：蚕茧干燥机用天然气
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Volume / m3、版本 01.01.001
- 流属性/单位：Volume / m3
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：m3/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 蚕茧干燥机用液化石油气（`dryer_lpg`）

适用条件：实际消耗该具名载体。

- 流名称：蚕茧干燥机用液化石油气
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：液化石油气 `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Mass / kg、版本 01.01.000
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 蚕茧干燥机用柴油（`dryer_diesel`）

适用条件：实际消耗该具名载体。

- 流名称：蚕茧干燥机用柴油
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Mass / kg、版本 01.01.002
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 蚕茧干燥机用电网电力（`dryer_electricity`）

适用条件：实际消耗该具名载体。

- 流名称：蚕茧干燥机用电网电力
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Net calorific value / kWh、版本 22.00.000
- 流属性/单位：Energy / kWh
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：50
  - 单位：kWh/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

本 PCR 不预设该类原子流；如实际存在，须按具名原子流记录。

##### 基本流

本 PCR 不预设该类原子流；如实际存在，须按具名原子流记录。

#### 输出

##### 产品流

###### 干桑蚕茧（`dried_mulberry_cocoons_output`）

适用条件：具名蚕种在场内干燥。

- 流名称：干桑蚕茧
- 方向：输出（`outputs`）
- 流类型：产品流（`product`）
- 选定流：干桑蚕茧
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`

###### 干柞蚕茧（`dried_tasar_cocoons_output`）

适用条件：具名蚕种在场内干燥。

- 流名称：干柞蚕茧
- 方向：输出（`outputs`）
- 流类型：产品流（`product`）
- 选定流：干柞蚕茧
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`

###### 干穆加蚕茧（`dried_muga_cocoons_output`）

适用条件：具名蚕种在场内干燥。

- 流名称：干穆加蚕茧
- 方向：输出（`outputs`）
- 流类型：产品流（`product`）
- 选定流：干穆加蚕茧
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`

##### 废物流

###### 过热损伤蚕茧废物（`overheated_cocoon_waste`）

适用条件：过热产生不可回收蚕茧。

- 流名称：过热损伤蚕茧废物
- 方向：输出（`outputs`）
- 流类型：废物流（`waste`）
- 选定流：过热损伤蚕茧废物
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 储存霉变蚕茧废物（`storage_mould_cocoon_waste`）

适用条件：发生储存损伤。

- 流名称：储存霉变蚕茧废物
- 方向：输出（`outputs`）
- 流类型：废物流（`waste`）
- 选定流：储存霉变蚕茧废物
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

###### 化石二氧化碳排放至空气（`dryer_carbon_dioxide_fossil`）

适用条件：场内干燥燃烧产生该污染物。

- 流名称：化石二氧化碳排放至空气
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 选定流：二氧化碳，化石 `08a91e70-3ddc-11dd-923d-0050c2490048`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Elementary flow、Mass / kg；air unspecified、版本 03.00.004
- 流属性/单位：Mass / kg
- 数量规则：实测值，或原子活动量乘以单独识别的现行因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：requires foreground factor selection
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 甲烷排放至空气（`dryer_methane`）

适用条件：场内干燥燃烧产生该污染物。

- 流名称：甲烷排放至空气
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 选定流：甲烷，化石 `08a91e70-3ddc-11dd-9610-0050c2490048`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Elementary flow、Mass / kg；air unspecified、版本 03.00.004
- 流属性/单位：Mass / kg
- 数量规则：实测值，或原子活动量乘以单独识别的现行因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：requires foreground factor selection
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 一氧化二氮排放至空气（`dryer_dinitrogen_monoxide`）

适用条件：场内干燥燃烧产生该污染物。

- 流名称：一氧化二氮排放至空气
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 选定流：氧化亚氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Elementary flow、Mass / kg；air unspecified、版本 03.00.004
- 流属性/单位：Mass / kg
- 数量规则：实测值，或原子活动量乘以单独识别的现行因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：requires foreground factor selection
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 二氧化氮排放至空气（`dryer_nitrogen_dioxide`）

适用条件：场内干燥燃烧产生该污染物。

- 流名称：二氧化氮排放至空气
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Elementary flow、Mass / kg；air unspecified、版本 03.00.004
- 流属性/单位：Mass / kg
- 数量规则：二氧化氮质量实测值、以二氧化氮当量表示的氮氧化物实测值，或原子活动量乘以单独识别的现行二氧化氮当量因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：requires foreground factor selection
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 二氧化硫排放至空气（`dryer_sulfur_dioxide`）

适用条件：场内干燥燃烧产生该污染物。

- 流名称：二氧化硫排放至空气
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 选定流：二氧化硫排放至空气
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；已审查的二氧化硫候选缺少所需的未指明空气子区室；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：实测值，或原子活动量乘以单独识别的现行因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：requires foreground factor selection
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 粒径不大于 10 µm 的颗粒物排放至空气（`dryer_pm10`）

适用条件：场内干燥燃烧产生该污染物。

- 流名称：粒径不大于 10 µm 的颗粒物排放至空气
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 选定流：粒径不大于 10 µm 的颗粒物排放至空气
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；已审查的 PM10 候选要求尚未声明的烟囱/空气子区室；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：实测值，或原子活动量乘以单独识别的现行因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cocoon_drying`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cocoon_drying`
- 来源 ID 或状态：requires foreground factor selection
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

### 过程：煮茧、索绪与生丝缫制（`cocoon_cooking_reeling`）

#### 输入

##### 产品流

###### 鲜桑蚕茧（`fresh_mulberry_cocoons_to_reeling`）

适用条件：仅具名互斥路线。

- 流名称：鲜桑蚕茧
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：鲜桑蚕茧
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：证据筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5.0
  - 上限：8.34
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-silk-reeling-testing-1999`

###### 干桑蚕茧（`dried_mulberry_cocoons_to_reeling`）

适用条件：仅具名互斥路线。

- 流名称：干桑蚕茧
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：干桑蚕茧
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：证据筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：2.1
  - 上限：4.4
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`method_formula`）
  - 来源：`fao-silk-reeling-testing-1999`

###### 干柞蚕茧（`dried_tasar_cocoons_to_reeling`）

适用条件：仅具名互斥路线。

- 流名称：干柞蚕茧
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：干柞蚕茧
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`

###### 干穆加蚕茧（`dried_muga_cocoons_to_reeling`）

适用条件：仅具名互斥路线。

- 流名称：干穆加蚕茧
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：干穆加蚕茧
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`

###### 煮茧与缫丝用淡水（`reeling_freshwater`）

适用条件：实际消耗并单独计量该具名载体。

- 流名称：煮茧与缫丝用淡水
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：煮茧与缫丝用淡水
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；拒绝自来水和通用工艺水候选，因为前景水源与水质等级未声明；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：2000
  - 单位：kg/kg reeled raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 煮茧与缫丝用电网电力（`reeling_electricity`）

适用条件：实际消耗并单独计量该具名载体。

- 流名称：煮茧与缫丝用电网电力
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Net calorific value / kWh、版本 22.00.000
- 流属性/单位：Energy / kWh
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：50
  - 单位：kWh/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 煮茧与缫丝用外购蒸汽（`reeling_purchased_steam`）

适用条件：实际消耗并单独计量该具名载体。

- 流名称：煮茧与缫丝用外购蒸汽
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：蒸汽工艺热 `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Gross calorific value / MJ、版本 01.01.000
- 流属性/单位：Energy / MJ
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：200
  - 单位：MJ/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 煮茧用外购热水（`reeling_purchased_hot_water`）

适用条件：实际消耗并单独计量该具名载体。

- 流名称：煮茧用外购热水
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：煮茧用外购热水
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；拒绝蒸汽或热水集合流及通用热流，因为没有匹配的原子热水流；需要前景映射
- 流属性/单位：Energy / MJ
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：200
  - 单位：MJ/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 场内煮茧供热用天然气（`reeling_natural_gas`）

适用条件：实际消耗并单独计量该具名载体。

- 流名称：场内煮茧供热用天然气
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Volume / m3、版本 01.01.001
- 流属性/单位：Volume / m3
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：m3/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 场内煮茧供热用液化石油气（`reeling_lpg`）

适用条件：实际消耗并单独计量该具名载体。

- 流名称：场内煮茧供热用液化石油气
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：液化石油气 `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Mass / kg、版本 01.01.000
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 场内煮茧供热用柴油（`reeling_diesel`）

适用条件：实际消耗并单独计量该具名载体。

- 流名称：场内煮茧供热用柴油
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Mass / kg、版本 01.01.002
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 自动缫控制用压缩空气（`reeling_compressed_air`）

适用条件：实际消耗并单独计量该具名载体。

- 流名称：自动缫控制用压缩空气
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：自动缫丝控制用压缩空气
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；拒绝同名压缩空气候选，因为其平台分类指向环境保护服务而非压缩空气；需要前景映射
- 流属性/单位：Volume / Nm3
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：Nm3/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 柞蚕煮茧用硫酸铝（明矾）（`tasar_aluminium_sulfate`）

适用条件：声明柞蚕路线实际投加该具名化学品。

- 流名称：柞蚕煮茧用硫酸铝（明矾）
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：明矾 `194dc448-c455-4836-8b6e-8dd603daa294`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Mass / kg、版本 01.01.002
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 柞蚕煮茧用甲醛溶液（`tasar_formaldehyde_solution`）

适用条件：声明柞蚕路线实际投加该具名化学品。

- 流名称：柞蚕煮茧用甲醛溶液
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：柞蚕煮茧用甲醛溶液
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；拒绝福尔马林候选，因为溶液浓度未声明，且其平台分类指向烃类而非含氧化合物；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 柞蚕煮茧用非离子表面活性剂（`tasar_nonionic_surfactant`）

适用条件：声明柞蚕路线实际投加该具名化学品。

- 流名称：柞蚕煮茧用非离子表面活性剂
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：柞蚕煮茧用非离子表面活性剂
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；拒绝 95% 聚氧乙烯非离子表面活性剂候选，因为配方与有效成分未声明；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

本 PCR 不预设该类原子流；如实际存在，须按具名原子流记录。

##### 基本流

本 PCR 不预设该类原子流；如实际存在，须按具名原子流记录。

#### 输出

##### 产品流

###### 缫制生丝（未加捻）（`reeled_raw_silk`）

适用条件：所有路线；路线结果保持分开。

- 流名称：缫制生丝（未加捻）
- 方向：输出（`outputs`）
- 流类型：产品流（`product`）
- 选定流：生丝 `343df125-d682-4ffa-8829-5fbc785bdbc9`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Mass / kg、版本 01.01.001
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：Tiangong UUID confirmed

###### 桑蚕蛹副产品（`mulberry_pupae_product`）

适用条件：有记录的销售或有益产品去向。

- 流名称：桑蚕蛹副产品
- 方向：输出（`outputs`）
- 流类型：产品流（`product`）
- 选定流：桑蚕蛹副产品
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`

###### 柞蚕蛹副产品（`tasar_pupae_product`）

适用条件：有记录的销售或有益产品去向。

- 流名称：柞蚕蛹副产品
- 方向：输出（`outputs`）
- 流类型：产品流（`product`）
- 选定流：柞蚕蛹副产品
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 穆加蚕蛹副产品（`muga_pupae_product`）

适用条件：有记录的销售或有益产品去向。

- 流名称：穆加蚕蛹副产品
- 方向：输出（`outputs`）
- 流类型：产品流（`product`）
- 选定流：穆加蚕蛹副产品
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`

###### 可回收索绪丝（`brushing_silk_product`）

适用条件：有记录的销售或有益产品去向。

- 流名称：可回收索绪丝
- 方向：输出（`outputs`）
- 流类型：产品流（`product`）
- 选定流：可回收索绪丝
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`

###### 可回收无绪茧（`end_missing_cocoons_product`）

适用条件：有记录的销售或有益产品去向。

- 流名称：可回收无绪茧
- 方向：输出（`outputs`）
- 流类型：产品流（`product`）
- 选定流：可回收无绪茧
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`

##### 废物流

###### 生丝缫制废水（`reeling_wastewater`）

适用条件：废水转入处理。

- 流名称：生丝缫制废水
- 方向：输出（`outputs`）
- 流类型：废物流（`waste`）
- 选定流：生丝缫制废水
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；通用/纺织废水候选未保留生丝路线与转移语义；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：`eu-txt-bref-2023`
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2000
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 缫后茧层废物（`reeled_cocoon_shell_waste`）

适用条件：无产品去向。

- 流名称：缫后茧层废物
- 方向：输出（`outputs`）
- 流类型：废物流（`waste`）
- 选定流：缫后茧层废物
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 不可回收丝纤维废物（`nonrecoverable_silk_fibre_waste`）

适用条件：无产品去向。

- 流名称：不可回收丝纤维废物
- 方向：输出（`outputs`）
- 流类型：废物流（`waste`）
- 选定流：丝绸废料 `690d2d6b-d573-4ab5-9e50-742a2ee12275`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Waste flow、Mass / kg、版本 01.01.000
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

###### 化石二氧化碳排放至空气（`reeling_carbon_dioxide_fossil`）

适用条件：场内缫丝供热燃烧产生该污染物。

- 流名称：化石二氧化碳排放至空气
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 选定流：二氧化碳，化石 `08a91e70-3ddc-11dd-923d-0050c2490048`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Elementary flow、Mass / kg；air unspecified、版本 03.00.004
- 流属性/单位：Mass / kg
- 数量规则：实测值，或原子活动量乘以单独识别的现行因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：requires foreground factor selection
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 甲烷排放至空气（`reeling_methane`）

适用条件：场内缫丝供热燃烧产生该污染物。

- 流名称：甲烷排放至空气
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 选定流：甲烷，化石 `08a91e70-3ddc-11dd-9610-0050c2490048`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Elementary flow、Mass / kg；air unspecified、版本 03.00.004
- 流属性/单位：Mass / kg
- 数量规则：实测值，或原子活动量乘以单独识别的现行因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：requires foreground factor selection
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 一氧化二氮排放至空气（`reeling_dinitrogen_monoxide`）

适用条件：场内缫丝供热燃烧产生该污染物。

- 流名称：一氧化二氮排放至空气
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 选定流：氧化亚氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Elementary flow、Mass / kg；air unspecified、版本 03.00.004
- 流属性/单位：Mass / kg
- 数量规则：实测值，或原子活动量乘以单独识别的现行因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：requires foreground factor selection
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 二氧化氮排放至空气（`reeling_nitrogen_dioxide`）

适用条件：场内缫丝供热燃烧产生该污染物。

- 流名称：二氧化氮排放至空气
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Elementary flow、Mass / kg；air unspecified、版本 03.00.004
- 流属性/单位：Mass / kg
- 数量规则：二氧化氮质量实测值、以二氧化氮当量表示的氮氧化物实测值，或原子活动量乘以单独识别的现行二氧化氮当量因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：requires foreground factor selection
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 二氧化硫排放至空气（`reeling_sulfur_dioxide`）

适用条件：场内缫丝供热燃烧产生该污染物。

- 流名称：二氧化硫排放至空气
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 选定流：二氧化硫排放至空气
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；已审查的二氧化硫候选缺少所需的未指明空气子区室；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：实测值，或原子活动量乘以单独识别的现行因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：requires foreground factor selection
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 粒径不大于 10 µm 的颗粒物排放至空气（`reeling_pm10`）

适用条件：场内缫丝供热燃烧产生该污染物。

- 流名称：粒径不大于 10 µm 的颗粒物排放至空气
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 选定流：粒径不大于 10 µm 的颗粒物排放至空气
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；已审查的 PM10 候选要求尚未声明的烟囱/空气子区室；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：实测值，或原子活动量乘以单独识别的现行因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_reeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_cooking_reeling`
- 来源 ID 或状态：requires foreground factor selection
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

### 过程：生丝复摇与绞装整理（`raw_silk_rereeling_finishing`）

#### 输入

##### 产品流

###### 小卷生丝（`small_reel_raw_silk`）

适用条件：仅在具名流适用于声明复摇路线时。

- 流名称：小卷生丝
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：生丝 `343df125-d682-4ffa-8829-5fbc785bdbc9`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Mass / kg、版本 01.01.001
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rereeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_rereeling`
- 来源 ID 或状态：Tiangong UUID confirmed

###### 复摇润湿用淡水（`rereeling_freshwater`）

适用条件：仅在具名流适用于声明复摇路线时。

- 流名称：复摇润湿用淡水
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：复摇润湿用淡水
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；拒绝自来水和通用工艺水候选，因为前景水源与水质等级未声明；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rereeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_rereeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`

###### 复摇用乳化油（`rereeling_emulsified_oil`）

适用条件：仅在具名流适用于声明复摇路线时。

- 流名称：复摇用乳化油
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：复摇用乳化油
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；经 flow get 直读核验后，没有候选同时满足物质/状态、流类型、参考属性/单位及路线或受纳介质限定；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rereeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_rereeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 复摇用电网电力（`rereeling_electricity`）

适用条件：仅在具名流适用于声明复摇路线时。

- 流名称：复摇用电网电力
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Net calorific value / kWh、版本 22.00.000
- 流属性/单位：Energy / kWh
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rereeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_rereeling`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：50
  - 单位：kWh/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 复摇调理用外购蒸汽（`rereeling_purchased_steam`）

适用条件：仅在具名流适用于声明复摇路线时。

- 流名称：复摇调理用外购蒸汽
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：蒸汽工艺热 `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Gross calorific value / MJ、版本 01.01.000
- 流属性/单位：Energy / MJ
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rereeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_rereeling`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：200
  - 单位：MJ/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

本 PCR 不预设该类原子流；如实际存在，须按具名原子流记录。

##### 基本流

本 PCR 不预设该类原子流；如实际存在，须按具名原子流记录。

#### 输出

##### 产品流

###### 复摇生丝（未加捻）（`rereeled_raw_silk`）

适用条件：仅在具名流适用于声明复摇路线时。

- 流名称：复摇生丝（未加捻）
- 方向：输出（`outputs`）
- 流类型：产品流（`product`）
- 选定流：生丝 `343df125-d682-4ffa-8829-5fbc785bdbc9`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Mass / kg、版本 01.01.001
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_rereeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_rereeling`
- 来源 ID 或状态：Tiangong UUID confirmed

##### 废物流

###### 生丝复摇废水（`rereeling_wastewater`）

适用条件：仅在具名流适用于声明复摇路线时。

- 流名称：生丝复摇废水
- 方向：输出（`outputs`）
- 流类型：废物流（`waste`）
- 选定流：生丝复摇废水
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；通用/纺织废水候选未保留生丝路线与转移语义；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_rereeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_rereeling`
- 来源 ID 或状态：`eu-txt-bref-2023`
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2000
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 复摇不合格生丝（`rereeling_rejected_raw_silk`）

适用条件：仅在具名流适用于声明复摇路线时。

- 流名称：复摇不合格生丝
- 方向：输出（`outputs`）
- 流类型：废物流（`waste`）
- 选定流：丝绸废料 `690d2d6b-d573-4ab5-9e50-742a2ee12275`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Waste flow、Mass / kg、版本 01.01.000
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rereeling`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_rereeling`
- 来源 ID 或状态：`fao-silk-reeling-testing-1999`
- 来源：`fao-silk-reeling-testing-1999`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

本 PCR 不预设该类原子流；如实际存在，须按具名原子流记录。

### 过程：调湿、检验、称量与包装（`conditioning_testing_packing`）

#### 输入

##### 产品流

###### 最终放行前生丝（`raw_silk_for_release`）

适用条件：仅在该具名材料或操作适用时。

- 流名称：最终放行前生丝
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：生丝 `343df125-d682-4ffa-8829-5fbc785bdbc9`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Mass / kg、版本 01.01.001
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_testing`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_release_testing`
- 来源 ID 或状态：Tiangong UUID confirmed

###### 调湿与检验用电网电力（`release_electricity`）

适用条件：仅在该具名材料或操作适用时。

- 流名称：调湿与检验用电网电力
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Net calorific value / kWh、版本 22.00.000
- 流属性/单位：Energy / kWh
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_testing`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_release_testing`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：50
  - 单位：kWh/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 瓦楞纸箱（`corrugated_carton`）

适用条件：仅在该具名材料或操作适用时。

- 流名称：瓦楞纸箱
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：瓦楞纸板箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Mass / kg、版本 03.00.002
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_testing`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_release_testing`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 聚乙烯包装膜（`pe_packaging_film`）

适用条件：仅在该具名材料或操作适用时。

- 流名称：聚乙烯包装膜
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：聚乙烯包装膜
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；拒绝同名聚乙烯薄膜候选，因为其平台分类指向箱包而非包装薄膜；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_testing`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_release_testing`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 木托盘（`wooden_pallet`）

适用条件：仅在该具名材料或操作适用时。

- 流名称：木托盘
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：木托盘
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；拒绝木托盘候选，因为平台分类与流身份冲突；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_testing`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_release_testing`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

本 PCR 不预设该类原子流；如实际存在，须按具名原子流记录。

##### 基本流

本 PCR 不预设该类原子流；如实际存在，须按具名原子流记录。

#### 输出

##### 产品流

###### 调湿生丝（未加捻）（`reference_raw_silk`）

适用条件：仅在该具名材料或操作适用时。

- 流名称：调湿生丝（未加捻）
- 方向：输出（`outputs`）
- 流类型：产品流（`product`）
- 选定流：生丝 `343df125-d682-4ffa-8829-5fbc785bdbc9`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Mass / kg、版本 01.01.001
- 流属性/单位：Mass / kg
- 数量规则：按声明含水基准恰好 1 kg 调湿净生丝
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_release_testing`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_release_testing`
- 来源 ID 或状态：Tiangong UUID confirmed

##### 废物流

###### 废弃生丝检验样（`discarded_raw_silk_test_sample`）

适用条件：仅在该具名材料或操作适用时。

- 流名称：废弃生丝检验样
- 方向：输出（`outputs`）
- 流类型：废物流（`waste`）
- 选定流：丝绸废料 `690d2d6b-d573-4ab5-9e50-742a2ee12275`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Waste flow、Mass / kg、版本 01.01.000
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_testing`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_release_testing`
- 来源 ID 或状态：`iso-15625-2014`; `iso-21046-2018`
- 来源：`iso-15625-2014`; `iso-21046-2018`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 废瓦楞纸板（`waste_corrugated_cardboard`）

适用条件：仅在该具名材料或操作适用时。

- 流名称：废瓦楞纸板
- 方向：输出（`outputs`）
- 流类型：废物流（`waste`）
- 选定流：包装废纸板 `72270223-04b1-4986-a546-94e5a0821317`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Waste flow、Mass / kg、版本 01.01.000
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_testing`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_release_testing`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 废聚乙烯薄膜（`waste_pe_film`）

适用条件：仅在该具名材料或操作适用时。

- 流名称：废聚乙烯薄膜
- 方向：输出（`outputs`）
- 流类型：废物流（`waste`）
- 选定流：废聚乙烯 `7e78f0a8-c042-47ca-a742-3bac92be1477`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Waste flow、Mass / kg、版本 01.01.001
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_testing`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_release_testing`
- 来源 ID 或状态：foreground protocol; UUID unresolved
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

本 PCR 不预设该类原子流；如实际存在，须按具名原子流记录。

### 过程：场内生丝废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理用电网电力（`wwt_electricity`）

适用条件：实际使用该具名投入。

- 流名称：废水处理用电网电力
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Product flow、Net calorific value / kWh、版本 22.00.000
- 流属性/单位：Energy / kWh
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual_management`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_residual_management`
- 来源 ID 或状态：`eu-txt-bref-2023`
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：50
  - 单位：kWh/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 废水处理用氢氧化钠（`wwt_sodium_hydroxide`）

适用条件：实际使用该具名投入。

- 流名称：废水处理用氢氧化钠
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：废水处理用氢氧化钠
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；拒绝 95–98% 氢氧化钠候选，因为供货形态与浓度未声明；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual_management`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_residual_management`
- 来源 ID 或状态：`eu-txt-bref-2023`
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 废水处理用氯化铁（`wwt_ferric_chloride`）

适用条件：实际使用该具名投入。

- 流名称：废水处理用氯化铁
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：废水处理用氯化铁
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；拒绝氯化铁候选，因为供货形态/浓度未声明且候选元数据不一致；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual_management`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_residual_management`
- 来源 ID 或状态：`eu-txt-bref-2023`
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 废水处理用聚丙烯酰胺絮凝剂（`wwt_polyacrylamide`）

适用条件：实际使用该具名投入。

- 流名称：废水处理用聚丙烯酰胺絮凝剂
- 方向：输入（`inputs`）
- 流类型：产品流（`product`）
- 选定流：废水处理用聚丙烯酰胺絮凝剂
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；拒绝聚丙烯酰胺候选，因为离子型、分子规格、供货形态与有效成分未声明；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual_management`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_residual_management`
- 来源 ID 或状态：`eu-txt-bref-2023`
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg relevant output
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

###### 进入处理的生丝缫制废水（`reeling_wastewater_to_treatment`）

适用条件：与产生过程对账。

- 流名称：进入处理的生丝缫制废水
- 方向：输入（`inputs`）
- 流类型：废物流（`waste`）
- 选定流：进入处理的生丝缫制废水
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；通用/纺织废水候选未保留生丝路线与送处理语义；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residual_management`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_residual_management`
- 来源 ID 或状态：`eu-txt-bref-2023`
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2000
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 进入处理的生丝复摇废水（`rereeling_wastewater_to_treatment`）

适用条件：与产生过程对账。

- 流名称：进入处理的生丝复摇废水
- 方向：输入（`inputs`）
- 流类型：废物流（`waste`）
- 选定流：进入处理的生丝复摇废水
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；通用/纺织废水候选未保留生丝路线与送处理语义；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residual_management`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_residual_management`
- 来源 ID 或状态：`eu-txt-bref-2023`
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2000
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

本 PCR 不预设该类原子流；如实际存在，须按具名原子流记录。

#### 输出

##### 产品流

###### 回用工艺水（`reclaimed_process_water`）

适用条件：处理水满足有记录的回用功能。

- 流名称：回用工艺水
- 方向：输出（`outputs`）
- 流类型：产品流（`product`）
- 选定流：回用工艺水
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；通用工艺水候选并非回用水；回用水候选使用不兼容的体积参考属性；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual_management`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_residual_management`
- 来源 ID 或状态：`eu-txt-bref-2023`
- 来源：`eu-txt-bref-2023`

##### 废物流

###### 生丝废水处理污泥（`wastewater_treatment_sludge`）

适用条件：污泥离开并进入处理或处置。

- 流名称：生丝废水处理污泥
- 方向：输出（`outputs`）
- 流类型：废物流（`waste`）
- 选定流：生丝废水处理污泥
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；通用污泥候选未识别为生丝废水处理污泥；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：按同质路线和批次计量；不得与其他行合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residual_management`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_residual_management`
- 来源 ID 或状态：`eu-txt-bref-2023`
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2000
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

###### 排入地表水的处理水（`treated_water_to_surface_water`）

适用条件：有实测排水和污染物特定结果。

- 流名称：排入地表水的处理水
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 选定流：排入地表水的处理水
- UUID 状态：unresolved — 2026-08-12 已完成 flow-hybrid-search；没有精确的处理后水元素流保留所声明的地表水受纳体；需要前景映射
- 流属性/单位：Mass / kg
- 数量规则：实测值，或原子活动量乘以单独识别的现行因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residual_management`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_residual_management`
- 来源 ID 或状态：`eu-txt-bref-2023`
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2000
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 排入水体的化学需氧量（`chemical_oxygen_demand_to_water`）

适用条件：有实测排水和污染物特定结果。

- 流名称：排入水体的化学需氧量
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 选定流：化学需氧量 `e57fc631-2c77-457a-aa30-be79e357792b`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Elementary flow、Mass / kg；water unspecified、版本 01.01.000
- 流属性/单位：Mass / kg
- 数量规则：实测值，或原子活动量乘以单独识别的现行因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residual_management`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_residual_management`
- 来源 ID 或状态：`eu-txt-bref-2023`
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 排入水体的总氮（`total_nitrogen_to_water`）

适用条件：有实测排水和污染物特定结果。

- 流名称：排入水体的总氮
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 选定流：总氮（不含 N2） `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Elementary flow、Mass / kg；fresh water、版本 03.00.004
- 流属性/单位：Mass / kg
- 数量规则：实测值，或原子活动量乘以单独识别的现行因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residual_management`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_residual_management`
- 来源 ID 或状态：`eu-txt-bref-2023`
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 排入水体的总磷（`total_phosphorus_to_water`）

适用条件：有实测排水和污染物特定结果。

- 流名称：排入水体的总磷
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 选定流：总磷 `f9df3107-6b59-4067-b920-3c61cf3630c7`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Elementary flow、Mass / kg；fresh water、版本 03.00.004
- 流属性/单位：Mass / kg
- 数量规则：实测值，或原子活动量乘以单独识别的现行因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residual_management`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_residual_management`
- 来源 ID 或状态：`eu-txt-bref-2023`
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 排入水体的悬浮物（`suspended_solids_to_water`）

适用条件：有实测排水和污染物特定结果。

- 流名称：排入水体的悬浮物
- 方向：输出（`outputs`）
- 流类型：基本流（`elementary`）
- 选定流：悬浮固体，未指明 `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- UUID 状态：confirmed — 2026-08-12 经 flow-hybrid-search 命中并由天工 flow get 直读核验：state_code=100、Elementary flow、Mass / kg；water unspecified、版本 01.00.004
- 流属性/单位：Mass / kg
- 数量规则：实测值，或原子活动量乘以单独识别的现行因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同一路线调湿净生丝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residual_management`
- 数量范围或不确定性：无通用默认值；报告测量、采样或因子不确定性。
- 数据源 ID：`cp_residual_management`
- 来源 ID 或状态：`eu-txt-bref-2023`
- 来源：`eu-txt-bref-2023`
- 数量范围：暂定筛查估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg conditioned raw silk
  - 基准：仅用于筛查；由路线特定实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_routes` | 蚕种、蚕茧状态和缫丝技术 | 在分配或汇总前细分并计算路线特定过程；不得对桑蚕/非桑蚕、鲜茧/干茧或手工/机器路线无条件平均。 | `iso-14044-2006`; `fao-silk-reeling-testing-1999` |
| `al_classify_outputs` | 蚕蛹、可回收蚕茧/丝材料和残余物 | 根据实际功能和去向判定产品或废物。FAO 表明蚕蛹及多种丝残余物可能有商业价值；可销售材料不得默认为无负担废物。 | `fao-silk-reeling-testing-1999` |
| `al_avoid_where_possible` | 多输出过程 | 优先通过单独计量或过程细分避免分配；只有下游方法允许且替代产品和证据明确时才采用系统扩展。 | `iso-14044-2006` |
| `al_physical_then_economic` | 不可避免的共享负担 | 无法细分时，优先使用可辩护的物理因果关系；若不存在，则按同一期间和地域的净出厂数量与价格进行经济分配，并报告敏感性。 | `iso-14044-2006` |
| `al_internal_recycling` | 内部回用的丝、蚕茧、水或热 | 作为内部循环处理，只计穿越报告边界的补充投入和最终输出；披露循环率且不得重复计量。 | `iso-14044-2006`; `eu-txt-bref-2023` |
| `al_residual_treatment` | 废水和最终废物 | 按实测残余物量，将场内处理负担归于产生路线；处理需求差异显著时使用污染负荷或其他有记录的因果驱动。 | `iso-14044-2006`; `eu-txt-bref-2023` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cocoon_receipt` | `cocoon_receipt_preparation` | 各具名蚕茧、接收副产品/废物、电力 | 秤单、供应商批次、检验、表计 | gross_mass; tare; net_mass; fresh_or_dried; moisture; species; supplier; origin; accepted_mass; each_named_reject; electricity | 逐批校准称量、检验与计量 | kg; percent; kWh | 每批；电力至少每月 | 连续生产至少 12 个代表月，季节生产覆盖全部代表批次 | 各缫丝厂及供应商-产地组分开 | 仅在同质路线内求和并归一化 | 秤校准、供应商记录、含水率方法、批次对账、表计证据 |
| `cp_cocoon_drying` | `cocoon_stifling_drying` | 各具名鲜/干茧、各原子能源载体、每种废物和每种排放 | 批次表、表计、燃料领用、含水率试验 | species; fresh_mass; dried_mass; moisture; dryer_type; runtime; each_fuel; electricity; each_waste; each_pollutant | 批次称量、含水率试验、表计或燃料平衡 | kg; percent; m3; kWh | 每批；能源至少每日 | 完整干燥季 | 每台干燥机与场址分开 | 逐载体、逐蚕种归一化 | 校准、发票、批次日志、排放因子来源 |
| `cp_cooking_reeling` | `cocoon_cooking_reeling` | 各具名蚕茧、水、每种能源/助剂、生丝、各副产品/废物/污染物 | 批次/机台表、表计、投料、称量、实验室与排水记录 | cocoon_species_and_condition; machine; water; each_energy_carrier; each_chemical; raw_silk; each_pupae; each_byproduct; each_waste; each_pollutant | 每批或班次计量，保留路线身份 | kg; m3; MJ; kWh; Nm3; concentration | 每批/班次；按许可或控制频率监测排水 | 至少 12 个代表月或完整季节 | 场址、水系统、缫丝技术分开 | 路线内闭合水和质量平衡后归一化 | 校准、生产日志、实验室 QA、发票、样品监管链 |
| `cp_rereeling` | `raw_silk_rereeling_finishing` | 生丝、水、乳化油、电力、蒸汽、废水和不合格丝 | 批次表、秤、表计、投料和废品记录 | input_mass; package_in; water; emulsified_oil; electricity; steam; output_mass; package_out; wastewater; reject_mass | 批次称量与计量 | kg; kWh; MJ | 每批 | 报告期全部复摇批次 | 各产线和路线分开 | 按同一含水基准归一化 | 校准、批次追溯、投料记录 |
| `cp_release_testing` | `conditioning_testing_packing` | 调湿质量、线密度、疵点/匀度、每种包装、每种废物、电力 | 检验证书、调湿日志、秤、烘箱、包装 BOM、表计 | lot; gross; tare; dry_mass_or_moisture; regain; conditioning; linear_density; quality_result; carton; pe_film; pallet; electricity; each_waste | 按声明合同或标准，校准设备 | kg; percent; dtex or denier; kWh | 每个放行批次 | 报告期全部放行批次 | 规格与路线分开 | 计算调湿净质量，仅汇总同质合格批次 | 方法版本、证书、校准、原始观测、抽样记录 |
| `cp_residual_management` | `onsite_wastewater_treatment` | 两种具名废水、各处理化学品、电力、回用水、污泥和各水污染物 | 处理日志、表计、秤、实验室数据 | each_wastewater; flow; each_chemical; electricity; reclaimed_water; sludge; discharge; COD; TN; TP; suspended_solids | 产生过程与处理记录对账，按许可和工艺需求监测 | kg; m3; kWh; concentration | 流量连续/每日；化学指标按许可 | 含峰值季节的完整报告年 | 各处理线分开 | 按实测量和因果处理驱动分配 | 实验室 QA、表计校准、转移单、处理与排放记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_conditioned_mass` | 生丝参考质量 | `conditioned_mass = oven_dry_mass × (1 + declared_regain_fraction)`；仅在适用规范采用时取 0.11。 | oven_dry_mass; declared_regain_fraction; specification | 调湿净生丝质量 | `fao-silk-reeling-testing-1999` |
| `cr_linear_density` | 生丝线密度 | 保留实测 dtex 或 denier；换算时 `dtex = denier × 10/9`。 | measured_size; original_unit; method | 声明线密度 | `iso-21046-2018` |
| `cr_fresh_cocoon_screen` | 鲜茧产率 QA | `fresh_cocoon_input_per_kg_raw_silk = 1 / measured_raw_silk_fraction`；12-20% 仅作相似路线筛查。 | fresh_cocoon_mass; raw_silk_mass | kg 鲜茧/kg 生丝 | `fao-silk-reeling-testing-1999` |
| `cr_dried_cocoon_screen` | 干茧产率 QA | 优先用实测含水率换算；2.1-4.4 kg/kg 仅为由 FAO 鲜茧产率和含水区间保守推导的筛查值。 | cocoon_mass; moisture; raw_silk_mass | 干物质一致的蚕茧比 | `fao-silk-reeling-testing-1999` |
| `cr_route_normalization` | 全部原子前景行 | `normalized_amount = route_period_amount / route_period_conditioned_raw_silk_mass`；内部转移不计作边界穿越。 | route records; conditioned output | 每 kg 参考流数量 | `eu-pef-2021-2279` |
| `cr_water_balance` | 煮茧、缫丝、复摇、处理 | `withdrawal + water_in_inputs = discharge + evaporation + water_in_outputs + inventory_change`，循环水单列。 | water terms | 水量平衡 | `mass-balance-identity`; `eu-txt-bref-2023` |
| `cr_process_mass_balance` | 每过程与路线 | 在含水基准一致后核对投入与产品、副产品、废物、排放及库存变化；调查而非强行闭合差异。 | atomic input/output masses | 质量平衡与差异 | `mass-balance-identity` |
| `cr_economic_allocation` | 不可避免的多输出分配 | `share_i = quantity_i × net_gate_price_i / Σ(quantity_j × net_gate_price_j)`，使用一致期间和地域并做敏感性。 | quantities; prices | 分配份额 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 参考产品与蚕茧 | 每个放行批次追溯到蚕种、具名蚕茧流、起始状态、缫丝路线、复摇、包装、等级/方法和含水基准。 | 批次谱系与放行证书 |
| `dq_route_representativeness` | 技术与地域 | 保持路线记录分开并报告产量份额、覆盖、停机、季节缺口和排除场址。 | 路线登记与覆盖计算 |
| `dq_temporal_coverage` | 年度前景数据集 | 连续生产至少覆盖 12 个代表月；季节生产覆盖全部代表批次并披露偏差。 | 有日期原始记录 |
| `dq_mass_and_water_closure` | 每个过程 | 报告质量和水量闭合，调查差异，不虚构平衡流。 | 计算表与校准记录 |
| `dq_meter_and_lab_quality` | 能源、水、含水率、质量、排放 | 保留校准、抽样、方法版本、实验室 QA、检出限和缺口处理。 | 证书与实验室报告 |
| `dq_upstream_completeness` | 蚕茧、能源、化学品、包装、运输、处理 | 逐一链接代表性上游数据集并披露年龄、地域、技术及缺口。 | 数据集引用和代表性评价 |
| `dq_estimate_replacement` | reasoned_estimate 范围 | 所有推理估计均为临时且不能替代发布关键数据；获得审计前景或评审证据时必须替换。 | 替换日志 |
| `dq_source_limitations` | 外部证据 | FAO 1999 以温带二化性蚕茧技术为主；ISO 摘要仅支持适用性；EU BREF 适用性取决于设施范围。 | 来源用途与限制披露 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 要求产品流 UUID `343df125-d682-4ffa-8829-5fbc785bdbc9`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、kg 及恰好 1 kg 调湿净输出。 | `un-cpc-3-0-26110` |
| `val_required_qualifiers` | 数据集元数据 | 缺失任何必需限定信息即完整性失败。 | `fao-silk-reeling-testing-1999`; `iso-15625-2014`; `iso-21046-2018` |
| `val_not_thrown_scope` | 产品边界 | 若不可分离地包含并捻/加捻、绢纺、脱胶、染色、织造或后整理，则拒绝使用本 PCR。 | `un-cpc-3-0-26110`; `fao-silk-reeling-testing-1999` |
| `val_route_conditioning` | 路线汇总 | 加权前须有独立路线结果和有记录的份额；拒绝跨蚕种、蚕茧状态或技术的无条件平均。 | `fao-silk-reeling-testing-1999` |
| `val_reference_mass` | 调湿质量 | 要求毛重、皮重、净重、含水率或烘干结果、声明回潮率及计算；未由规范采用的 11% 假设须报错。 | `fao-silk-reeling-testing-1999` |
| `val_process_completeness` | 前景清单 | 要求必需和触发的条件过程，并要求每种能源、水、化学品、产品、副产品、废物、废水、直接排放和包装以原子行记录或明确为零/不适用。 | `fao-silk-reeling-testing-1999`; `eu-txt-bref-2023` |
| `val_mass_water_balance` | 每条路线 | 要求质量和水量闭合；对负流、输出超投入、循环水重复计取水或未解释差异报错。 | `mass-balance-identity`; `eu-txt-bref-2023` |
| `val_coproduct_destination` | 蚕蛹和丝/茧副产品 | 要求每个具名输出有质量、产品/废物状态、去向及一致分配；可销售材料不得作无负担废物。 | `fao-silk-reeling-testing-1999`; `iso-14044-2006` |
| `val_data_coverage` | 发布候选数据集 | 要求时间/场址覆盖、校准、实验室证据、上游数据集、来源限制及临时估计清单；不确定检查不视为通过。 | `eu-pef-2021-2279`; `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 缫丝厂门到门前景生丝数据集，连接上游蚕茧、逐一能源/材料、运输与处理数据集 |
| downstream_use | `secondary_dataset`；经方法、代表性和不确定性评审后可作 `background_dataset` |
| allowed_use | 用于与声明蚕种、蚕茧状态、技术、地域、期间、质量、含水基准和分配相符的 LCA process 或 lifecyclemodel |
| excluded_use | 无限定的全球/类别平均；边界和分配未统一的路线比较；替代并捻、绢纺、脱胶、染色、织造或后整理丝；以临时估计作评审后关键默认值 |
| required_metadata | 全部参考流限定信息；场址覆盖；期间；路线份额；产能利用率；上游数据集；每种能源/化学品/包装；副产品去向；分配；检验方法；来源限制；不确定性和缺口 |
| required_quality_disclosure | 原始记录覆盖；校准与实验室 QA；质量/水量闭合；鲜/干茧换算；路线汇总；来源适用性；临时估计及替换计划；上游代表性 |
| update_trigger | 产品流或参考属性、蚕种、蚕茧状态、缫丝/复摇技术、质量或含水规范、分配、副产品去向、水/能源系统、处理、地域变化，或获得可替换临时范围的审计数据 |

## 11. 数据源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-26110` | `standard` | 联合国统计司，CPC 3.0 Explanatory Notes，2025-06-30，26110，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf，检索于 2026-08-12 | 官方分类名称与下游丝纱类别区分；不支持过程或数量 |
| `fao-silk-reeling-testing-1999` | `handbook` | Yong-woo Lee, Silk Reeling and Testing Manual, FAO Agricultural Services Bulletin 136, ISBN 92-5-104293-4, 1999, https://www.fao.org/4/x2099E/x2099e00.htm，检索于 2026-08-12 | 路线分解、蚕茧状态、产率/含水筛查、用水规划筛查、复摇、副产品、调湿质量和质量检验；限制：主要为温带二化性蚕茧技术 |
| `iso-15625-2014` | `standard` | ISO 15625:2014, Silk — Electronic test method for defects and evenness of raw silk, 2023 确认，https://www.iso.org/standard/55447.html，检索于 2026-08-12 | 生丝电子疵点/匀度检验适用性；不复述付费程序 |
| `iso-21046-2018` | `standard` | ISO 21046:2018, Silk — Test method for determining the size of silk yarns, 2025 确认，https://www.iso.org/standard/69734.html，检索于 2026-08-12 | 丝线线密度方法适用性 |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html，检索于 2026-08-12 | LCI 边界、分配、报告、限制与评审框架 |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279, OJ L 471, ELI http://data.europa.eu/eli/reco/2021/2279/oj，检索于 2026-08-12 | 生命周期数据质量、供应链完整性、代表性、验证及使用限制 |
| `eu-txt-bref-2023` | `official_guidance` | European Commission JRC, Best Available Techniques Reference Document for the Textiles Industry, 2023-01, https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry，检索于 2026-08-12 | 条件性湿法过程水、能源、废水、排放监测及处理背景；不提供生丝特定数量因子 |
| `mass-balance-identity` | `method_factor` | 由实测前景投入、输出、库存变化和排放实施的质量守恒与场址水量平衡恒等式 | QA 上限和闭合，不是外部经验范围 |
