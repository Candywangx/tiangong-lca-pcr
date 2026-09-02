---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flours-meals-and-pellets-inedible-of-fish-crustaceans-molluscs-or-other-aquatic-invertebrates
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 鱼、甲壳类、软体动物或其他水生无脊椎动物制不可食用粉、粗粉和团粒

## 1. 范围与适用性

本 PCR 适用于以鱼、甲壳类、软体动物或其他水生无脊椎动物为原料，且明确不可供人食用的粉、粗粉和团粒的工厂门生产。其覆盖范围与 CPC 3.0 子类 21291 完全一致；混合物种产品仅在声明水生动物组成时纳入。产品保持明确的非食品属性时，可表示饲料或技术用途去向。

可食用鱼粉、可食用水产粉、食品配料、主要由水生植物制成的粉、以鱼油为参考产品的产品，以及不能证明具有不可食用属性的未明确粗粉均不在范围内。本 PCR 不确立食品或饲料安全、合法销售性、营养性能或目的地特定法规符合性。

前景边界始于生产设施接收合格水生原料，终止于工厂门 1 kg 净参考产品。上游捕捞、养殖、收集、供应商加工和进厂运输，以及下游使用和生命末期不属于前景过程图，但研究范围要求时应采用兼容的上下游数据集表示。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flours-meals-and-pellets-inedible-of-fish-crustaceans-molluscs-or-other-aquatic-invertebrates |
| classification_refs | CPC 3.0: 21291（exact） |
| covered_products | 以鱼、甲壳类、软体动物或其他水生无脊椎动物制成的不可食用粉、粗粉和团粒，包括已声明组成的混合物 |
| excluded_products | 可食用鱼粉或水产粉；食品配料；水生植物粉；以鱼油为参考产品的产品；未证明具有不可食用/非食品属性的产品 |
| representative_product | 工厂门不可食用水生动物粗粉；适用时声明粉或团粒形态 |
| production_route | 每个数据集只选择一条转化路线：湿法热处理、压榨和干燥，或不设压榨段的直接干燥和粉碎；最终粒度处理或制粒接在所选路线之后 |
| market_state | 工厂门散装或包装的干态粉、粗粉或团粒，用于已声明的非食品用途 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以鱼、甲壳类、软体动物或其他水生无脊椎动物制成的不可食用粉、粗粉或团粒 |
| How much | 工厂门 1 kg 净产品质量 |
| How well | 符合生产者声明的产品规格并明确标识为不可食用/非食品；声明产品形态、原料组成和路线 |
| How long or cycle | 工厂门放行的一个生产批次；不适用服务持续时间 |
| reference_flow_link | `inedible_aquatic_animal_flour_meal_or_pellets` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 鱼类、甲壳动物、软体动物或其他水生无脊椎动物的不宜食用的粉、粗粉和丸子 `c14df87e-86ae-4718-a6a6-f8808c8fe661` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 明确的不可食用/非食品属性和预期非食品去向；粉、粗粉或团粒形态；鱼/甲壳类/软体动物/其他水生无脊椎动物组成及混合物种状态；所选转化路线；净质量基准和工厂门状态；水分含量及测定基准；盐渍或盐水原料影响质量或收率时的盐含量或盐度；包装纳入或排除；适用时的毛重、去冰衣或沥干质量以及冰衣或游离液处理方式 |

构建前景数据包时，应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明每项适用的必需限定信息。冰衣、游离液和包装不得计入 1 kg 净参考质量；若已声明的商业规格明确要求其他基准，则应提供换算到 1 kg 净产品的转换。缺少适用限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告工厂门放行的 1 kg 净产品。排除包装、游离液和可去除冰衣；物料以带冰衣或浸液形态销售时，记录毛重及去冰衣或沥干质量，并记录换算。 |
| `moisture_basis` | 参考产品和路线质量平衡 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录水分比例、试验方法、取样点以及各质量使用湿基还是干物质基准；收率、分配或质量平衡计算中不得混用基准。 |
| `salt_and_liquid_basis` | 盐渍、盐水浸泡、清洗或海洋来源物料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 添加盐或盐度及游离液处理方式对净质量、干燥需求或收率有实质影响时予以记录；所有数量均换算至已声明的净产品基准。 |
| `inventory_normalization` | 所有前景清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留测量时的原始单位，再以合格净参考产品产量对每个批次或期间总量归一化；换算前保持电力、燃料和水载体单位明确。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | foreground_processes | 纳入接收/预处理、恰好一条转化路线和最终粒度处理或制粒，直至工厂门放行；纳入适用的公用工程、包装、拒收物、废物、共产品和直接排放。 | `codex-cxc-52-2003` |
| `boundary_upstream_completeness` | upstream_inputs | 不得仅因上游水生原料、能源、水、包装或运输负荷在前景过程图之外而将其视为零；应链接兼容的上游数据集，并披露排除项和截断。 | `eu-pef-2021-2279` |
| `boundary_non_food_identity` | product_scope | 在流身份、数据集名称、产品规格和预期用途元数据中保持参考产品明确不可食用/非食品，并与可食用鱼粉或水产粉区分。 | `unsd-cpc-3-0-21291` |
| `boundary_route_exclusivity` | conversion_route | 一个产品批次或数据集分段只能选择 `wet_thermal_conversion` 或 `direct_drying_conversion`；不得对同一物料叠加两条路线。设施同时运行两条路线时，应先分开建模，再按质量加权汇总。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 生产设施门口接收的水生动物原料；适用时声明来源组成、物理状态、此前保藏或供应商加工、水分、盐/盐水状态、冰衣/游离液及不可食用属性 |
| starting_condition_role | 设施转化的前景起点状态；并不表示原料无上游负荷 |
| product_classification_scope | 输出精确属于 CPC 3.0 子类 21291；PCR 身份保持独立于 CPC |
| recursive_input_rule | 输入已符合本 PCR 产品定义时，将其记录为同类上游产品并链接自身数据集，不得在接收过程中重建其上游生产；披露输入和输出数量以避免递归和重复计算 |
| upstream_dataset_requirement | 对研究所需的水生原料、电力、燃料、水、包装和运输使用供应商特定或代表性数据集；说明地理、技术、期间和分配状态 |
| disclosure | 声明来源物料的来源和状态、所选互斥路线、工厂门状态、适用的排除项和截断、共产品/废物分类、净质量换算、水分基准、盐/盐水状态、冰衣/沥干质量处理及数据缺口 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receiving` | 原料接收与预处理 | required | 所有数据集 | 前景接收、检验、适用时解冻/沥液、粒度减小和转移 | kg 接收水生原料和 kg 预处理物料 |
| `wet_thermal_conversion` | 湿法热处理、压榨和干燥 | conditional | 已声明路线对湿物料进行蒸煮或热处理，并在干燥前分离液体或油时选择；对同一物料与 `direct_drying_conversion` 互斥 | 前景转化路线 | kg 干燥粗粉中间物 |
| `direct_drying_conversion` | 直接干燥和粉碎 | conditional | 物料不经过压榨/分离段而直接干燥和粉碎时选择；对同一物料与 `wet_thermal_conversion` 互斥 | 前景转化路线 | kg 干燥粗粉中间物 |
| `final_conditioning` | 最终粒度处理、可选制粒和放行 | required | 所有数据集；制粒和包装行仅在实际实施时适用 | 前景最终处理和工厂门放行 | 1 kg 净合格参考产品 |

### 过程：原料接收与预处理（`raw_material_receiving`）

#### 输入

##### 产品流

###### 接收合格的不可食用水生动物原料（`accepted_aquatic_raw_material`）

记录跨越设施门口的批次特定鱼、甲壳类、软体动物或其他水生无脊椎动物物料。记录中保留来源组成、此前加工、不可食用属性、水分、盐/盐水及冰衣/游离液状态。

- 选定流：Aquatic-animal raw material（场址选择的天工流；UUID 待解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：预处理损失前按批次测量接收湿质量或已声明干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定原料收率筛查；仅在尚无完整代表性批次质量平衡时适用，获得经审查的前景收率证据后必须替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：kg 接收原料/kg 净产品
  - 基准：每 1 kg 净参考产品的宽泛湿料或干料筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 转移至所选路线的预处理物料（`prepared_material_output`）

计算沥液、分选和粒度减小后的转移质量。只将其转移至一条转化路线。

- 选定流：Prepared aquatic-animal material（场址选择的天工流；UUID 待解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：接收质量减去测得拒收物、去除游离液和库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_records`

##### 废物流

###### 接收拒收物和去除的异物（`receiving_rejects`）

按实际处理去向记录拒收原料、异物和单独去除的物料；不得将可销售的输出归类为废物。

- 选定流：Receiving rejects（场址选择的天工废物流；UUID 待解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次和处理去向测量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 接收原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 数量范围：暂定拒收比例筛查；仅在无法使用经校准的拒收称量时适用，获得代表性批次记录后必须替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 接收原料
  - 基准：接收原料的拒收质量比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：湿法热处理、压榨和干燥（`wet_thermal_conversion`）

#### 输入

##### 产品流

###### 湿法热处理的预处理物料（`wet_route_material_input`）

仅记录分配至本路线的物料。同一物料不得进入 `direct_drying_conversion`。

- 选定流：Prepared aquatic-animal material（场址选择的天工流；UUID 待解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量路线进料质量并与 `prepared_material_output` 核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 干燥粗粉中间物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_route_records`
- 来源：`codex-cxc-52-2003`

###### 湿法路线电力（`wet_route_electricity`）

记录本路线蒸煮控制、压榨、泵送、干燥辅助和粉碎的计量或分摊电力。

- 选定流：Electricity, supplied（场址选择的天工流；UUID 待解决）
- 流属性/单位：Energy / kWh
- 数量规则：路线计量电力，或由已记录的分表计算分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干燥粗粉中间物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_route_records`
- 数量范围：暂定电力筛查；仅在获得代表性路线计量前适用，取得计量运行期数据后必须替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 干燥粗粉中间物
  - 基准：宽泛的湿法路线首轮电力筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 湿法路线热能载体（`wet_route_thermal_energy`）

分别记录每种购入蒸汽、热量或燃料载体；在相应基本流中记录直接燃烧排放。

- 选定流：Thermal energy carrier（载体特定天工流；UUID 待解决）
- 流属性/单位：Energy / MJ
- 数量规则：计量载体消耗，并声明低位或高位热值约定
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干燥粗粉中间物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_route_records`
- 数量范围：暂定热能筛查；仅在获得代表性路线计量前适用，取得载体特定计量数据后必须替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：MJ/kg 干燥粗粉中间物
  - 基准：宽泛的湿法路线首轮热能筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 湿法路线干燥粗粉中间物（`wet_route_intermediate`）

测量送至最终处理的干燥中间物，并记录转移点水分。

- 选定流：Inedible aquatic-animal meal intermediate（场址选择的天工流；UUID 待解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按已声明水分基准测量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 预处理物料输入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_route_records`
- 数量范围：暂定中间物收率筛查；仅在完整路线质量平衡通过审查前适用，此后必须以设施证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.03
  - 上限：1
  - 单位：kg/kg 预处理物料
  - 基准：已声明水分基准下的湿法路线中间物收率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 回收油或其他可销售共产品（`wet_route_coproduct`）

分别记录每种可销售的分离输出。没有共产品时将本行标记为不适用，而不是假定其承担零负荷。

- 选定流：Recovered aquatic-animal co-product（共产品特定天工流；UUID 待解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按类型和去向测量可销售共产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 预处理物料输入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_route_records`
- 数量范围：暂定共产品收率筛查；仅在回收共产品且尚无代表性分离记录时适用，取得记录后必须替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.6
  - 单位：kg/kg 预处理物料
  - 基准：已声明湿基或干基上的共产品质量比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 湿法路线废水和不可销售残余物（`wet_route_waste`）

在前景数据集中按处理去向分别记录废水和固体残余物；本卡片定义共同采集规则，不表示合并的数据库流。

- 选定流：Wastewater or process residue（废物特定天工流；UUID 待解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量各废物类型的排放或转移数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干燥粗粉中间物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_route_records`
- 数量范围：暂定废物输出筛查；仅在废物特定测量前适用，获得监测排放和转移记录后必须替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 干燥粗粉中间物
  - 基准：包括从湿料分离水的宽泛筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 湿法路线直接排放（`wet_route_direct_emissions`）

直接燃烧、干燥或粉尘排放跨越环境边界时，将每种测量或计算排放分别记录为基本流。

- 选定流：Direct emission（物质特定天工基本流；UUID 待解决）
- 流属性/单位：物质特定属性/物质特定单位
- 数量规则：监测值，或依据采集的载体用量和经审查因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干燥粗粉中间物
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_route_records`

### 过程：直接干燥和粉碎（`direct_drying_conversion`）

#### 输入

##### 产品流

###### 直接干燥的预处理物料（`direct_route_material_input`）

仅记录分配至不设压榨/分离段的直接干燥路线的物料。同一物料不得进入 `wet_thermal_conversion`。

- 选定流：Prepared aquatic-animal material（场址选择的天工流；UUID 待解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量路线进料质量并与 `prepared_material_output` 核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 干燥粗粉中间物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_route_records`

###### 直接路线电力和热能载体（`direct_route_energy`）

在前景数据集中将电力和每种热能载体记录为单独的产品流交换，并采用本共同路线采集规则。

- 选定流：Electricity or thermal energy carrier（载体特定天工流；UUID 待解决）
- 流属性/单位：Energy / kWh 或 MJ，按载体保留
- 数量规则：计量载体特定消耗；不得合并不同单位
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干燥粗粉中间物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_route_records`
- 数量范围：暂定路线能源合计筛查；仅用于首轮完整性审查，获得代表性计量后必须以分载体范围替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：60
  - 单位：MJ-equivalent/kg 干燥粗粉中间物
  - 基准：仅用于筛查换算；原始载体单位保持权威
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 直接路线干燥粗粉中间物（`direct_route_intermediate`）

测量送至最终处理的干燥粉碎中间物，并记录转移点水分。

- 选定流：Inedible aquatic-animal meal intermediate（场址选择的天工流；UUID 待解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按已声明水分基准测量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 预处理物料输入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_route_records`
- 数量范围：暂定直接路线收率筛查；仅在完整路线质量平衡通过审查前适用，此后必须以设施证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.03
  - 上限：1
  - 单位：kg/kg 预处理物料
  - 基准：已声明水分基准下的直接路线中间物收率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 直接路线拒收物和收集粉尘（`direct_route_waste`）

按处理去向记录未循环的拒收物、除尘残余物和不合格物料；内部循环单独记录，不得作为废物重复计算。

- 选定流：Direct-route process waste（废物特定天工流；UUID 待解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量废物转移质量并减去已记录的内部循环
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干燥粗粉中间物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_route_records`
- 数量范围：暂定直接路线废物筛查；仅在具有代表性的废物称量前适用，获得路线特定记录后必须替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 干燥粗粉中间物
  - 基准：未循环路线废物比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 直接干燥排放（`direct_route_direct_emissions`）

直接燃烧或颗粒物排放跨越环境边界时，将每种测量或计算排放分别记录为基本流。

- 选定流：Direct emission（物质特定天工基本流；UUID 待解决）
- 流属性/单位：物质特定属性/物质特定单位
- 数量规则：监测值，或依据采集的载体用量和经审查因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干燥粗粉中间物
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_route_records`

### 过程：最终粒度处理、可选制粒和放行（`final_conditioning`）

#### 输入

##### 产品流

###### 所选路线的中间物（`selected_route_intermediate`）

每个批次或单独计量的数据集分段只接收一条路线的中间物。

- 选定流：Inedible aquatic-animal meal intermediate（场址选择的天工流；UUID 待解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量输入，并与所选路线输出和库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_conditioning_records`

###### 最终处理电力（`final_conditioning_electricity`）

记录实际实施的最终粉碎、筛分、可选制粒、冷却和包装电力。

- 选定流：Electricity, supplied（场址选择的天工流；UUID 待解决）
- 流属性/单位：Energy / kWh
- 数量规则：计量电力或已记录的设备级计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_conditioning_records`
- 数量范围：暂定最终处理电力筛查；仅在获得代表性计量前适用，取得产品形态特定记录后必须替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kWh/kg 净产品
  - 基准：宽泛的粒度处理、制粒和包装电力筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_input`）

只有包装随工厂门产品提供时才纳入各包装材料；包装质量不得计入 1 kg 净产品。

- 选定流：Packaging material（材料特定天工流；UUID 待解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量或按采购核对的包装消耗，扣除未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_conditioning_records`
- 数量范围：暂定包装筛查；仅适用于尚无规格支持包装数据的包装产品，取得物料清单记录后必须替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 净产品
  - 基准：每 1 kg 净产品随附的包装
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 合格的不可食用水生动物粉、粗粉或团粒（`inedible_aquatic_animal_flour_meal_or_pellets`）

仅在确认非食品属性、声明产品形态及必需质量基准限定信息后放行参考产品。

- 选定流：鱼类、甲壳动物、软体动物或其他水生无脊椎动物的不宜食用的粉、粗粉和丸子 `c14df87e-86ae-4718-a6a6-f8808c8fe661`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：固定参考输出 1 kg 净合格产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 最终拒收物和未循环细粉（`final_conditioning_waste`）

按处理去向分别记录不合格产品、包装损失和未循环细粉。

- 选定流：Final-conditioning waste（废物特定天工流；UUID 待解决）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：测量质量并减去已记录的内部循环
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_conditioning_records`
- 数量范围：暂定最终拒收筛查；仅在代表性拒收称量前适用，获得产品形态特定记录后必须替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kg/kg 净产品
  - 基准：未循环最终拒收物比例
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | route_and_process_outputs | 可分别建模输出时，通过路线分离、过程细分和直接计量避免分配。进行任何设施级汇总前保持两条转化路线分开。 | `eu-pef-2021-2279` |
| `allocation_physical_then_other` | unavoidable_multi_output_process | 无法细分时，使用投入/排放与输出之间已记录的因果物理关系。没有可辩护物理关系时，使用经济或其他有依据的关系，披露价格和期间并进行敏感性检验。 | `eu-pef-2021-2279` |
| `allocation_output_classification` | coproduct_waste_and_internal_recycle | 将可销售回收油或其他可用输出归为共产品，将送往处理的物料归为废物，将同过程再循环归为内部循环。不得重复计算内部循环，也不得仅因残余物标签就赋予零上游负荷。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_records` | `raw_material_receiving` | 接收物料、预处理转移、去除液体和拒收物 | 批次票据、称量记录、检验和规格记录 | lot_id; source composition; inedible status; gross_mass; net/drained/deglazed_mass; moisture; salt_or_salinity; free_liquid_or_glaze; rejects; inventory_change | 经校准称量、批次检验和代表性取样 | kg 和已声明比例 | 每批次 | 包括物料变化的代表性生产期间 | 范围内所有接收点 | 将接收输入与预处理转移、拒收物、去除液体和库存变化核对；归一化至净参考输出 | 秤校准；取样/试验方法；批次追溯；核对签字 |
| `cp_wet_route_records` | `wet_thermal_conversion` | 路线进料、公用工程、中间物、共产品、废物和直接排放 | 批次日志、仪表、发票、实验室结果和废物记录 | batch_id; feed_mass; feed_moisture; electricity; carrier_energy; water; intermediate_mass/moisture; co-product_mass; wastewater; residue; emission_activity_data; inventory_change | 路线分表和批次质量平衡；仅采用经审查因子计算排放 | kg、kWh、MJ 和物质特定单位 | 每批次或仪表期间 | 覆盖负荷和原料变化的代表性运行期间 | 分配至湿法路线的所有设备 | 仅汇总兼容批次；先归一化至干燥中间物，再归一化至净参考输出 | 仪表校准；载体换算约定；水分方法；质量平衡闭合；因子身份 |
| `cp_direct_route_records` | `direct_drying_conversion` | 路线进料、能源、中间物、废物和直接排放 | 批次日志、仪表、发票、实验室结果和废物记录 | batch_id; feed_mass/moisture; electricity; thermal_carrier; intermediate_mass/moisture; rejects; fines; emission_activity_data; inventory_change | 路线分表和批次质量平衡；保持能源载体分开 | kg、kWh、MJ 和物质特定单位 | 每批次或仪表期间 | 覆盖负荷和原料变化的代表性运行期间 | 分配至直接路线的所有设备 | 仅汇总兼容批次；先归一化至干燥中间物，再归一化至净参考输出 | 仪表校准；水分方法；质量平衡闭合；因子身份 |
| `cp_final_conditioning_records` | `final_conditioning` | 所选中间物、粒度处理/制粒能源、包装、产品和拒收物 | 生产订单、仪表、物料清单、秤和放行规格 | lot_id; route_id; intermediate_mass/moisture; electricity; product_form; packaging_by_material; gross_mass; net_mass; product_moisture; salt_or_salinity; rejects; inventory_change | 经校准称量、计量、包装核对和放行取样 | kg、kWh 和已声明比例 | 每生产批次 | 与所选路线相同的代表性期间 | 范围内所有最终处理和包装线 | 将路线输入与净产品、拒收物和库存变化核对；从参考质量中排除包装/游离液/可去除冰衣 | 秤/仪表校准；物料清单；放行试验；路线追溯；核对签字 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 工厂门产品 | net_reference_mass = gross_mass - packaging_mass - removable_glaze_mass - free_liquid_mass；可获得直接净重时采用直接净重并保留核对 | gross_mass; packaging_mass; removable_glaze_mass; free_liquid_mass; direct_net_mass | kg 净参考产品 |  |
| `calc_dry_matter` | 每个物料平衡点 | dry_matter_mass = measured_mass × (1 - moisture_mass_fraction)；仅在水分以 0 至 1 湿基质量比例表示时使用，并保留试验方法 | measured_mass; moisture_mass_fraction; basis declaration | kg 干物质 |  |
| `calc_normalized_exchange` | 每项清单交换 | normalized_amount = compatible-period exchange amount / compatible-period net conforming reference-product output | exchange amount; net output; route and period identifiers | 每 1 kg 净参考产品的数量 | `eu-pef-2021-2279` |
| `calc_mass_balance` | 每个过程和完整前景系统 | discrepancy = inputs + opening_stock - products - co-products - wastes - removed_liquids - closing_stock；水分变化有实质影响时，按已声明湿质量和干物质分别计算 | all mass inputs/outputs; stock change; moisture data | 带符号和百分比的差异及调查说明 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_traceability` | 所有批次 | 从接收到放行保留来源组成、不可食用/非食品状态、路线、产品形态、去向、批次关联以及适用的水分/盐/冰衣/沥干质量信息。 | 批次谱系、规格、检验和放行记录；`unsd-cpc-3-0-21291`；`codex-cxc-52-2003` |
| `dq_measurement_basis` | 质量、水分和公用工程数据 | 使用经校准设备或已记录的发票核对；识别取样和试验方法、能量换算约定、缺失期间和估算方法。 | 校准、实验室、仪表和发票记录 |
| `dq_temporal_and_operating_coverage` | 前景数据集 | 覆盖代表性生产期间及相关来源物料、负荷、路线和季节变化；披露停机、启动、异常和排除期间。 | 生产日历、批次清单和覆盖核对；`eu-pef-2021-2279` |
| `dq_completeness_and_balance` | 过程和设施清单 | 核对所有物料输出、共产品、废物、去除液体、内部循环和库存变化；调查无法解释的差异并披露未解决缺口。 | 湿质量和干物质平衡、废物联单和库存记录 |
| `dq_background_representativeness` | 链接的上游数据集 | 记录水生原料、能源、水、包装和运输数据集的地理、技术、参考年份、分配状态和兼容性。 | 数据集元数据和选择依据；`eu-pef-2021-2279` |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | 要求恰好 1 kg 净输出，产品流 UUID 为 `c14df87e-86ae-4718-a6a6-f8808c8fe661`，Mass UUID 为 `93a60a56-a3c8-11da-a746-0800200b9a66`，Units of mass UUID 为 `93a60a57-a4c8-11da-a746-0800200c9a66`，单位为 kg。 |  |
| `validate_inedible_scope` | product_identity | 拒绝以可食用鱼粉、水产粉或其他食品配料表示的数据集，也拒绝缺少明确不可食用/非食品声明的数据集。 | `unsd-cpc-3-0-21291` |
| `validate_route_selection` | process_map | 每个批次或单独建模分段必须在 `wet_thermal_conversion` 和 `direct_drying_conversion` 中恰好选择一个，并必须包含 `raw_material_receiving` 和 `final_conditioning`。 |  |
| `validate_required_qualifiers` | reference_flow | 要求每项适用限定信息，包括净质量、水分基准、盐/盐度、包装及毛重/去冰衣/沥干质量处理；不适用条件应明确标识。 |  |
| `validate_mass_and_transfer_balance` | foreground_inventory | 核对过程之间的转移，并计算湿质量平衡及在有实质影响时的干物质平衡；对无法解释的差异发出审查标记，不得静默缩放输出。 |  |
| `validate_allocation_and_output_class` | multi_output_processes | 要求过程细分或已记录的分配关系，以及一致的共产品、废物和内部循环分类；禁止重复计算。 | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | reasoned_estimate_ranges | 每个 `reasoned_estimate` 范围仅作为不符合项筛查；获得代表性前景或经审查外部证据时应予替换，未经明确审查不得用作发布关键的允许范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 3.0 21291 不可食用水生动物粉、粗粉或团粒工厂门生产的前景产品数据集 |
| downstream_use | `secondary_dataset`；`background_dataset` |
| allowed_use | 对采用一条兼容路线、产品形态、原料组成和工厂门状态均已声明的非食品产品进行 LCA 建模；仅在路线特定建模后按质量加权汇总 |
| excluded_use | 可食用鱼粉、可食用水产粉、食品配料、水生植物粉、以鱼油为参考产品、安全或营养声明，或与已声明元数据实质不一致的设施/路线 |
| required_metadata | 规范 PCR id；CPC 3.0 21291 参考；产品 UUID；不可食用属性和预期去向；水生来源组成；产品形态；路线；设施地理/技术/期间；净质量和水分基准；适用时的盐/盐度和毛重/去冰衣/沥干质量处理；包装基准；分配；截断；数据质量；未解决缺口 |
| required_quality_disclosure | 前景覆盖和代表性；仪表/秤/试验基准；湿质量和干物质闭合；分配和共产品/废物分类；背景数据集选择；暂定推理估算行及其替换状态 |
| update_trigger | 路线、设备、燃料/电力供应、来源物料混合或状态、水分/盐规格、收率、共产品回收、产品形态、包装或分配发生实质变化时重建或分段数据集；获得代表性测量或经审查外部证据时替换每个暂定范围 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21291` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类》（CPC）3.0 版，子类 21291“鱼、甲壳类、软体动物或其他水生无脊椎动物制不可食用粉、粗粉和团粒” | 精确类别身份及与可食用产品区分 |
| `codex-cxc-52-2003` | 标准（`standard`） | Codex Alimentarius，《鱼和渔业产品操作规范》，CXC 52-2003，当前适用修订 | 直接相关的水生原料接收、状态/追溯和过程控制结构；仅用作过程证据，不赋予食品属性 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会 2021 年 12 月 15 日关于使用环境足迹方法的建议（EU）2021/2279，附件一产品环境足迹方法，CELEX 32021H2279 | 系统边界完整性、前景数据质量、归一化和分配层级 |
