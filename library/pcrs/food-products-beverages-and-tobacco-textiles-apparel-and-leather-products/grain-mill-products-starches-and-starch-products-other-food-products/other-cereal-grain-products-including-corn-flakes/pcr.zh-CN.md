---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-cereal-grain-products-including-corn-flakes
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他谷物产品（包括玉米片）

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 23140 所涵盖的其他经加工谷物及谷物产品的工厂前景数据包。涵盖去壳、压片、制成薄片、碾粒、切片、破碎、预煮、焙烤、膨化或以其他方式制备的谷物；完整、压片、制成薄片或磨碎的谷胚；布格麦；以及玉米片和未焙烤谷物片与焙烤谷物片或膨化谷物混合物等即食谷物食品。

本 PCR 允许按实际路线建模。数据集应声明实际谷物种类、产品形态、配方和制造路线，并仅纳入实际发生的条件性操作。不涵盖半精米或全精米、糙米、以谷物为基础的预制餐食和菜肴、以谷物粉为唯一产品的生产，以及焙烤食品用预拌粉和面团。除非研究明确扩展边界，否则农业谷物生产位于声明的前景起点上游。

默认前景边界始于制造场址接收谷物或谷物中间体，终于成品在工厂门口交付。参考数量为产品净质量；包装单独列入清单，不计入 1 kg 产品净质量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-cereal-grain-products-including-corn-flakes |
| classification_refs | CPC 3.0：23140，其他谷物产品（包括玉米片） |
| covered_products | 经加工谷物；完整、压片、制成薄片或磨碎的谷胚；布格麦；除玉米外的预煮或以其他方式制备的谷物；焙烤、膨化、制片、挤压或切丝谷物产品，包括玉米片和谷物片混合物 |
| excluded_products | 半精米或全精米（CPC 23161）；糙米（CPC 23162）；以谷物为基础的预制餐食和菜肴（CPC 23997）；以谷物粉为唯一产品；焙烤食品预拌粉和面团；除非明确纳入上游，否则不含农业谷物生产 |
| representative_product | 符合已声明配方和水分含量、以玉米片为代表的工厂门口即食谷物片 |
| production_route | 接收并制备谷物或谷物中间体，随后按适用情况进行混合、水热蒸煮或挤压、干燥与调质、压片或其他成型、焙烤/烘烤/膨化、冷却、涂层或强化及包装 |
| market_state | 工厂门口可食用谷物成品，按声明以散装或包装状态销售；净质量按收到状态报告，并披露水分和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合已声明产品规格的其他谷物成品 |
| How much | 工厂门口 1 kg 成品净质量 |
| How well | 可食用且已放行，满足已声明的谷物身份、配方、产品形态、水分规格和质量等级 |
| How long or cycle | 工厂门口放行所代表的一个生产批次或生产期；不指定使用期限 |
| reference_flow_link | `other_cereal_grain_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品净质量 |
| 参考产品流 | 其他谷物产品（包括玉米片） `53e35f86-383d-45f6-87ef-13a25f1f10e6` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 谷物种类和来源；产品形态；传统、挤压、膨化、焙烤或其他路线；配料和涂层配方；强化状态；收到状态水分或干物质含量；包装或散装状态；包装纳入情况；制造地域；参考期；分配方法；上游边界 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部前景数量归一化到工厂门口放行的 1 kg 合格产品净质量。包装质量不计入参考数量，应单独列入清单。 |
| `moisture_basis` | 谷物投入、中间体、共产品、废次品和成品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 收到状态和 kg 干物质 | 记录各物料状态实测或规格水分。没有声明各自水分值和 `calc_dry_matter` 规则时，不得比较或换算湿基与干基数量。 |
| `energy_carrier_separation` | 电力、外购热力或蒸汽及燃料 | 与所选流相适应的能量属性 | 电力用 kWh；燃料和热能用 MJ | 不同能源载体应作为独立清单行保留。可使用有记录的系数换算单位，但不得把电力与热能合并为无明确属性的单一数量。 |
| `water_accounting` | 工艺水、清洗水和配方水 | 与所选流相适应的质量或体积 | kg 或 m3 | 一致记录外供水、回收/回用水、进入产品的水、废水以及蒸发或排放的水，回用水不得再次作为新的外部投入。 |
| `batch_reconciliation` | 全部物料流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在归一化之前，以同一批次或报告期核对投入、产出、库存变化、水分转移、共产品、废物和直接物料排放。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址收到的谷物、经加工谷物物料、谷胚或配方原料，并声明供应商、来源、产品形态、水分和上游数据集覆盖 |
| starting_condition_role | 前景制造投入；声明从摇篮到大门覆盖时，农业生产和场外预处理由链接的上游数据集表示 |
| product_classification_scope | 与 CPC 3.0 子类 23140 语义等价的范围，不依赖 CPC 目录层级作为 PCR 身份 |
| recursive_input_rule | 若某项投入本身属于本 PCR 产品类别，则按具有自身上游数据集和已声明加工状态的技术圈产品投入记录；不得在接收过程中递归重建其制造过程 |
| upstream_dataset_requirement | 已发布数据集声明从摇篮到大门或背景数据集用途时，应为谷物原料、其他配料、能源载体、供水、包装和处理服务链接具有代表性的上游数据集 |
| disclosure | 声明起始物料状态、纳入的路线步骤、排除的生命周期阶段、包装处理、上游覆盖、截断、分配、数据缺口及代理值或推理估算的使用 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_complete` | foreground_manufacturing | 纳入从接收到工厂门口放行之间实际使用的全部操作：搬运与制备；清理、去壳、切割、碾磨或碾粒；混合；蒸煮或挤压；干燥与调质；压片、切丝、膨化、烘烤或焙烤；冷却；涂层或强化；包装；以及相关现场废物、废水和废气管理。条件性操作仅在实际发生时纳入。 | `us-epa-ap42-9-9-2-cereal-breakfast-food`; `eu-commission-2019-2031-fdm-bat` |
| `boundary_upstream_linkage` | cradle_to_gate_claim | 从摇篮到大门或背景数据集应为所有物料和能源投入链接上游数据集。大门到大门数据集应声明排除上游负荷，且不得被表述为从摇篮到大门。 | `eu-commission-2021-2279-environmental-footprint` |
| `boundary_minor_exclusions` | cut_off_and_data_gaps | 默认避免截断。任何排除的过程或流均应明确、具有理由，并检验其物料、能源和环境显著性；目标研究采用欧盟环境足迹方法时，还应应用其累计 3% 截断规则。 | `eu-commission-2021-2279-environmental-footprint` |
| `boundary_downstream_exclusion` | distribution_use_end_of_life | 分销、零售、消费者制备、使用和生命末期不在默认前景边界内。仅在明确扩展的研究中纳入，并与制造清单分开。 | `eu-commission-2021-2279-environmental-footprint` |
| `boundary_emission_points` | direct_emissions_and_treatment | 谷物搬运、碾磨、蒸煮、挤压、干燥、压片、烘烤、膨化、冷却或包装可能产生颗粒物和挥发性有机物时，应评估过程排气口和收集点；相关时按污染物记录直接排放和处理残余物。 | `us-epa-ap42-9-9-2-cereal-breakfast-food`; `eu-commission-2019-2031-fdm-bat` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_and_preparation` | 原料接收与谷物制备 | required | 始终纳入报告设施实际进行的接收、储存、搬运和制备操作 | 建立已声明起始物料并生产制备后的谷物进料 | kg 制备后谷物物料 |
| `cereal_transformation` | 谷物转化与热处理 | required | 纳入实际路线子集；若无热转化，则记录机械加工路线并将不适用步骤标为不适用 | 将制备后的谷物转化为经加工、熟制、挤压、压片、膨化、焙烤或其他制备状态 | kg 转化后谷物中间体 |
| `finishing_and_release` | 精整、包装与产品放行 | required | 始终纳入最终冷却/调质和产品放行；使用涂层、强化和包装时纳入相应步骤 | 生产工厂门口参考产品 | 1 kg 合格成品净质量 |
| `onsite_environmental_management` | 现场废物、废水与废气管理 | conditional | 前景场址内发生处理或治理时纳入 | 处理或转移残余物流并记录处理投入、产出和直接排放 | kg 或 m3 被处理物流 |

### 过程：原料接收与谷物制备（`receiving_and_preparation`）

#### 输入

##### 产品流

###### 谷物或谷物中间体（`cereal_material_input`）

按种类、来源、加工状态、供应商和水分记录进入场址的每种谷物物料。前景数据集应将实质不同的谷物投入拆分为独立行。

- 选定流：Route-specific cereal grain or cereal intermediate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测接收净质量，并与领料生产记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_and_moisture`
- 来源：`unsd-cpc-3-0-explanatory-notes`
- 数量范围：暂定谷物投入质量平衡筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：2.0
  - 单位：kg
  - 基准：每 1 kg 合格成品净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备用电（`preparation_electricity`）

记录接收、输送、风选、清理、去壳、切割、碾磨、碾粒及相关制备操作的计量或分配电力。

- 选定流：Site- and geography-specific electricity supply
- 流属性/单位：Energy / kWh
- 数量规则：实测过程用电，或按 `calc_shared_energy` 分配的设施电表用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 制备后谷物物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`eu-commission-2019-2031-fdm-bat`
- 数量范围：指示性谷物碾磨用电筛查值；不得作为完整谷物转化路线默认值
  - 范围角色：典型范围（`typical_range`）
  - 下限：0.05
  - 上限：0.13
  - 单位：kWh
  - 基准：每 kg 来源所涵盖谷物碾磨操作产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-commission-2019-2031-fdm-bat`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制备后谷物物料（`prepared_cereal_output`）

记录转入下一过程的清理、去壳、切割、碾磨、碾粒或其他制备后的谷物。除非离开前景边界，否则它是内部中间体。

- 选定流：Route-specific prepared cereal intermediate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后谷物物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_and_moisture`
- 来源：`us-epa-ap42-9-9-2-cereal-breakfast-food`
- 数量范围：暂定制备收率筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：1.0
  - 单位：kg/kg 谷物物料投入
  - 基准：在一致水分基准下制备后谷物产出除以谷物物料投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分离的谷物组分（`separated_cereal_coproducts`）

仅当麸皮、谷胚、谷壳、细粉或其他分离组分具有已记录的后续用途或经济价值时，将其记录为产品产出；否则记录为废物。

- 选定流：Fraction-specific cereal co-product
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按去向实测分离组分质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后谷物物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_and_moisture`
- 来源：`us-epa-ap42-9-9-2-cereal-breakfast-food`
- 数量范围：暂定分离组分筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 谷物物料投入
  - 基准：在一致水分基准下分离组分质量除以谷物物料投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 制备废次品和收集粉尘（`preparation_rejects`）

记录离开制备过程送往处理或处置的异物、不可销售谷物废次品和收集粉尘；处理方式不同时应按去向拆分。

- 选定流：Site-specific cereal preparation waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测废物容器或处置票据质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 制备后谷物物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals_and_treatment`
- 来源：`eu-commission-2019-2031-fdm-bat`
- 数量范围：暂定制备废物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 谷物物料投入
  - 基准：离开制备过程的废物除以谷物物料投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 直接排放到空气的颗粒物（`preparation_particulate_to_air`）

记录绕过收集或治理后残留的污染物特定颗粒物排放。不得将捕集粉尘质量作为空气排放。

- 选定流：Pollutant- and compartment-specific particulate matter to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放负荷，或按批准监测方法由流量和浓度计算的负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 制备后谷物物料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ap42-9-9-2-cereal-breakfast-food`; `eu-commission-2019-2031-fdm-bat`
- 数量范围：暂定直接颗粒物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 制备后谷物物料
  - 基准：治理后直接颗粒物排放除以制备后谷物产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：谷物转化与热处理（`cereal_transformation`）

#### 输入

##### 产品流

###### 制备后谷物进料（`prepared_cereal_input`）

记录进入已声明转化路线的制备后谷物中间体。

- 选定流：Route-specific prepared cereal intermediate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量和水分，计入库存调整后应与链接的上游内部产出相等
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转化后谷物中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_and_moisture`
- 来源：`us-epa-ap42-9-9-2-cereal-breakfast-food`
- 数量范围：暂定转化进料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：2.0
  - 单位：kg/kg 转化后谷物中间体
  - 基准：收到状态下制备后谷物进料除以转化后谷物产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 配方原料和添加剂（`formulation_ingredients`）

对糖、麦芽、盐、油、黏结剂、香料、微量营养素载体和其他配方原料，在物料或环境上重要时逐项记录。

- 选定流：Ingredient-specific product flow
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发料配方质量，并校正退料、返工和库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转化后谷物中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_and_packaging`
- 来源：`us-epa-ap42-9-9-2-cereal-breakfast-food`
- 数量范围：暂定配方投入总量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.0
  - 单位：kg/kg 转化后谷物中间体
  - 基准：非谷物配方原料总量除以转化后谷物产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺水和配方水（`transformation_water`）

记录配方、蒸煮、蒸汽直接接触、归属于批次的设备清洗及其他转化用途的外部水。回收水应单独记录，循环不得重复计量。

- 选定流：Site-specific process water supply
- 流属性/单位：Mass / kg
- 数量规则：水表或批次记录的外部水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转化后谷物中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-commission-2019-2031-fdm-bat`
- 数量范围：暂定外部用水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 转化后谷物中间体
  - 基准：不含循环水的外部水投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 转化用电（`transformation_electricity`）

记录已声明路线中混合器、蒸煮器、挤压机、干燥器、风机、压辊、膨化设备、烘炉、输送和冷却设备用电。

- 选定流：Site- and geography-specific electricity supply
- 流属性/单位：Energy / kWh
- 数量规则：实测过程用电，或按 `calc_shared_energy` 分配的设施电表用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转化后谷物中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`eu-commission-2019-2031-fdm-bat`
- 数量范围：暂定整条路线用电筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：5
  - 单位：kWh/kg 转化后谷物中间体
  - 基准：已声明转化路线的用电
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 燃料、外购热力或蒸汽（`transformation_thermal_energy`）

分别记录各热能载体，包括现场燃料及外购蒸汽或热力。燃料在前景边界内燃烧时，燃烧排放为直接基本流产出。

- 选定流：Carrier- and geography-specific fuel, heat, or steam supply
- 流属性/单位：Energy / MJ
- 数量规则：实测燃料消耗、蒸汽质量与焓，或按 `calc_shared_energy` 分摊的外购热力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转化后谷物中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`eu-commission-2019-2031-fdm-bat`
- 数量范围：暂定整条路线热能筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg 转化后谷物中间体
  - 基准：已声明转化路线使用的热能
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转化后谷物中间体（`transformed_cereal_output`）

记录转入精整过程的熟制、挤压、干燥、调质、压片、膨化、焙烤、烘烤或其他转化后的谷物。

- 选定流：Route-specific transformed cereal intermediate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格转移质量和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转化后谷物中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_and_moisture`
- 来源：`us-epa-ap42-9-9-2-cereal-breakfast-food`
- 数量范围：转化产出归一化检查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 转化后谷物中间体
  - 基准：合格转化产出除以其自身过程产出定量参考
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-conservation-identity`

##### 废物流

###### 不合格谷物和过程残余物（`transformation_residues`）

按去向记录不合格产品、洒漏、开停机残余物、过滤固体和其他转化废物。同一报告期内返回过程的返工是内部循环，不是废物产出。

- 选定流：Site-specific cereal transformation waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：扣除有记录返工后的实测废物和残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转化后谷物中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals_and_treatment`
- 来源：`eu-commission-2019-2031-fdm-bat`
- 数量范围：暂定转化残余物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.0
  - 单位：kg/kg 转化后谷物中间体
  - 基准：扣除返工后的废物和残余物质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排放到空气的水（`water_to_air`）

当物料平衡或影响建模需要时，记录干燥、冷却、烘烤、焙烤或膨化过程中从物料和外部水投入转移到直接大气排放的净水量。

- 选定流：Water to air, compartment selected for the site
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_water_balance` 由实测水分、用水、废水和库存变化计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转化后谷物中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_and_moisture`
- 来源：`mass-conservation-identity`
- 数量范围：暂定蒸发水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 转化后谷物中间体
  - 基准：转化路线排放到空气的净水量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 直接排放到空气的挥发性有机物（`transformation_voc_to_air`）

相关时记录蒸煮、挤压、干燥、冷却、烘烤、焙烤、膨化或涂层排气中的污染物特定 VOC；所选 LCIA 方法要求时拆分具体物质。

- 选定流：Pollutant- and compartment-specific volatile organic compound to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放负荷，或按批准方法由排气流量和浓度计算的负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转化后谷物中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ap42-9-9-2-cereal-breakfast-food`; `eu-commission-2019-2031-fdm-bat`
- 数量范围：暂定直接 VOC 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 转化后谷物中间体
  - 基准：治理后的直接 VOC 排放
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：精整、包装与产品放行（`finishing_and_release`）

#### 输入

##### 产品流

###### 转化后谷物投入（`transformed_cereal_input`）

记录转入精整过程的转化后谷物中间体，并与上游内部产出保持一致。

- 选定流：Route-specific transformed cereal intermediate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_and_moisture`
- 来源：`us-epa-ap42-9-9-2-cereal-breakfast-food`
- 数量范围：暂定精整投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：2.0
  - 单位：kg/kg 合格成品净质量
  - 基准：进入精整的转化后谷物投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 涂层与强化材料（`finishing_ingredients`）

使用时，按原料记录转化后的涂层、香料、油、糖、维生素、矿物质及载体。

- 选定流：Ingredient-specific coating or fortification product
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发料配方质量，并校正退料和库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_and_packaging`
- 来源：`us-epa-ap42-9-9-2-cereal-breakfast-food`
- 数量范围：暂定精整配料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.0
  - 单位：kg/kg 合格成品净质量
  - 基准：加入成品的转化后配料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

纳入包装时，按材料和质量记录一级、二级和三级包装；需要防潮包装的产品应声明防潮结构。

- 选定流：Material-specific packaging product
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：物料清单或发出包装质量，扣除退回的未用包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_and_packaging`
- 来源：`us-epa-ap42-9-9-2-cereal-breakfast-food`
- 数量范围：暂定包装质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 合格成品净质量
  - 基准：发给可销售产品的包装材料总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 精整和包装用电（`finishing_electricity`）

记录冷却、涂层、检验、输送、灌装、封口、喷码和装箱用电。

- 选定流：Site- and geography-specific electricity supply
- 流属性/单位：Energy / kWh
- 数量规则：实测过程用电，或按 `calc_shared_energy` 分配的设施电表用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`eu-commission-2019-2031-fdm-bat`
- 数量范围：暂定精整用电筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：2
  - 单位：kWh/kg 合格成品净质量
  - 基准：精整、包装和放行用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 其他谷物产品产出（`other_cereal_grain_product_output`）

该流是工厂门口放行的合格净参考产品。纳入包装时，包装后毛质量应另行记录。

- 选定流：其他谷物产品（包括玉米片） `53e35f86-383d-45f6-87ef-13a25f1f10e6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：质量放行后恰好 1 kg 合格成品净质量，不含包装质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-conservation-identity`
- 数量范围：参考流归一化恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-conservation-identity`

##### 废物流

###### 精整废次品和包装废物（`finishing_waste`）

按去向记录未返回返工的不合格产品、包装边角料、损坏包装和清线废物。

- 选定流：Site- and material-specific finishing waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：扣除有记录返工和退回包装后的实测废次品与废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals_and_treatment`
- 来源：`eu-commission-2019-2031-fdm-bat`
- 数量范围：暂定精整废物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 合格成品净质量
  - 基准：未返工精整废次品和包装废物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：现场废物、废水与废气管理（`onsite_environmental_management`）

#### 输入

##### 产品流

###### 处理用电与辅助材料（`treatment_inputs`）

将现场处理或治理使用的电力、化学品、水和燃料在实施数据集中拆分为物料或能源特定的前景行。

- 选定流：Treatment-input-specific product flow
- 流属性/单位：与各所选处理投入相适应的属性和单位
- 数量规则：实测处理投入，并按处理负荷或其他有记录因果驱动因素分配给谷物生产
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 或 m3 被处理残余物流，再归一化到参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals_and_treatment`
- 来源：`eu-commission-2019-2031-fdm-bat`
- 数量范围：暂定处理投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：已声明投入单位/每 kg 或 m3 被处理物流
  - 基准：宽泛路线特定处理筛查值；应以场址证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 进入现场处理的废水（`wastewater_to_treatment`）

记录进入现场处理的废水流量和相关污染物负荷。处理方式不同的废水物流应拆分。

- 选定流：Site-specific wastewater to treatment
- 流属性/单位：Volume / m3；污染物负荷用 kg
- 数量规则：实测废水体积，并由有代表性的浓度记录计算污染物负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-commission-2019-2031-fdm-bat`
- 数量范围：暂定废水体积筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：m3/kg 合格成品净质量
  - 基准：进入现场处理的废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 进入现场处理的固体残余物（`solid_residues_to_treatment`）

记录转入现场处理或储存的谷物残余物、收集粉尘、污泥和其他固体废物。

- 选定流：Residue-specific waste flow
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按残余物类型和处理路线实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals_and_treatment`
- 来源：`eu-commission-2019-2031-fdm-bat`
- 数量范围：暂定固体残余物处理筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.0
  - 单位：kg/kg 合格成品净质量
  - 基准：进入现场处理的固体残余物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 处理后废水排放或场外转移（`treated_wastewater_output`）

记录场址排放的处理后废水或转移至场外处理的废水，包括去向和相关残余污染物负荷。

- 选定流：Site-specific treated wastewater or wastewater for offsite treatment
- 流属性/单位：Volume / m3；污染物负荷用 kg
- 数量规则：实测排放体积并计算污染物负荷，或使用有记录的场外转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_wastewater`
- 来源：`eu-commission-2019-2031-fdm-bat`
- 数量范围：暂定处理后废水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：m3/kg 合格成品净质量
  - 基准：处理后排放或场外转移体积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 处理残余物（`treatment_residues`）

按最终去向记录污泥、废过滤材料、捕集粉尘和其他处理残余物。

- 选定流：Residue-specific treatment waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按去向实测处理残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals_and_treatment`
- 来源：`eu-commission-2019-2031-fdm-bat`
- 数量范围：暂定处理残余物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.0
  - 单位：kg/kg 合格成品净质量
  - 基准：离开场址的处理残余物质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | multi_output_processes | 尽可能通过独立计量或细分谷物制备、公用工程、转化、精整和处理过程来避免分配；研究目标允许时可采用系统扩展。 | `eu-commission-2021-2279-environmental-footprint` |
| `allocation_physical_relation` | inseparable_coproducts | 无法细分或系统扩展时，按有记录且具有因果性的物理关系分配共同投入与排放。只有质量与共同过程负荷相关时方可采用质量分配，且水分基准应一致。 | `eu-commission-2021-2279-environmental-footprint` |
| `allocation_other_relation` | no_relevant_physical_relation | 无法证明相关物理关系时，采用经济分配等其他有记录关系，声明价格、地域、时期和计算，并对重要共产品进行敏感性分析。 | `eu-commission-2021-2279-environmental-footprint` |
| `allocation_residue_classification` | fractions_residues_and_waste | 根据实际去向和经济状态对麸皮、谷胚、谷壳、细粉、不合格产品和处理残余物分类。返工是内部循环；可销售或有益利用的组分是共产品；废弃物流是废物。同一产出不得同时采用共产品分配和避免负荷抵扣。 | `eu-commission-2021-2279-environmental-footprint`; `eu-commission-2019-2031-fdm-bat` |
| `allocation_shared_utilities` | shared_energy_water_and_treatment | 共享公用工程和处理负荷应优先使用过程分表；否则采用运行时间、能源需求、处理流量、污染物负荷或产品质量等因果驱动因素，并披露驱动因素和覆盖范围。 | `eu-commission-2019-2031-fdm-bat`; `eu-commission-2021-2279-environmental-footprint` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_and_moisture` | `receiving_and_preparation`; `cereal_transformation`; `finishing_and_release` | 物料投入、中间体、产品、共产品和废次品 | 地磅、批次秤、生产、库存和实验室记录 | material_id; supplier; origin; batch_id; timestamp; gross_mass; tare_mass; net_mass; moisture_fraction; dry_matter_method; destination; rework_flag | 经校准的秤，并配合有代表性的水分试验或受控产品规格 | kg; 质量分数 | 每次接收、批次、转移和放行 | 至少一个有代表性的连续 12 个月；季节性生产采用完整生产期 | 每个纳入设施和产线 | 期初库存 + 接收 - 期末库存与领料和产出质量核对；按合格产品加权汇总 | 秤校准；抽样计划；实验室方法；库存核对；缺失记录清单 |
| `cp_recipe_and_packaging` | `cereal_transformation`; `finishing_and_release` | 配方、涂层、强化和包装投入 | 批准配方、物料清单、发退料及包装记录 | ingredient_id; packaging_material_id; batch_id; issued_mass; returned_mass; rework_mass; product_output_mass; specification_revision | 将受控配方或物料清单与实际发退料记录核对 | kg | 每批次或生产工单 | 与参考产品记录相同期间 | 每种产品配方和包装配置 | 净发料除以合格产品净质量；各材料保持独立 | 批准规格；批次可追溯性；发退料核对 |
| `cp_energy_and_fuel` | `receiving_and_preparation`; `cereal_transformation`; `finishing_and_release`; `onsite_environmental_management` | 电力、燃料、外购热力和蒸汽 | 电表、燃料交付记录、发票、锅炉或蒸汽日志 | meter_id; carrier; start_reading; end_reading; fuel_quantity; unit; steam_mass; pressure; temperature; operating_time; process_driver; product_output | 优先经校准分表；否则核对设施总表并按有记录因果驱动因素分配 | kWh; MJ; kg steam | 电表间隔及每次燃料交付；按月汇总 | 相同的代表性 12 个月或完整生产期 | 有分表时到过程或产线，否则按分配覆盖全设施 | 扣除非生产用途和外送；透明换算单位；按过程产出和参考流归一化各能源载体 | 电表校准；发票核对；换算系数；分配记录 |
| `cp_water_and_wastewater` | `cereal_transformation`; `onsite_environmental_management` | 外部水、回用水、废水和污染物负荷 | 水表、批次记录、排水流量计和代表性采样 | source; meter_reading; use_area; reused_volume; discharge_volume; sample_time; flow; pH; temperature; COD_or_TOC; nitrogen; phosphorus; chloride; conductivity; TSS | 经校准流量测量和有代表性的实验室分析；区分外部水与循环水 | m3; kg; 浓度单位 | 可行时连续或按批计量流量；水质按许可或代表性频率 | 与生产数据相同期间并代表相关运行状态 | 每条实质不同的水和废水物流 | 以流量加权浓度计算负荷；核对供水、产品带入、蒸发、回用、排放和库存变化 | 仪表校准；实验室认可或方法；抽样计划；流量与水质时间匹配 |
| `cp_direct_emissions` | `receiving_and_preparation`; `cereal_transformation`; `finishing_and_release`; `onsite_environmental_management` | 颗粒物、VOC、燃烧污染物和其他直接排放 | 烟囱或排气测试、连续监测、运行小时和批准计算记录 | source_id; pollutant; compartment; flow_rate; concentration; test_duration; operating_state; abatement_state; operating_hours; calculation_method | 适用的标准化测量或有记录工程计算；需要时在代表性/正常最高预期排放状态测量 | kg; mg/Nm3; Nm3/h | 许可或方法规定频率，并在重大工艺变更后开展 | 代表生产期和相关运行状态 | 每个重要排放点 | 由匹配的流量与浓度计算污染物负荷；没有证据不得扣减捕集物料；按过程产出归一化 | 测试报告；方法；仪器校准；检出限；治理状态 |
| `cp_residuals_and_treatment` | `receiving_and_preparation`; `cereal_transformation`; `finishing_and_release`; `onsite_environmental_management` | 废物、共产品、场外处理及现场处理投入/产出 | 容器称量、处置票据、发票、处理日志和去向记录 | residue_id; classification; mass; moisture; destination; treatment; economic_value; rework_quantity; treatment_input; treatment_output | 实测质量或体积，并记录去向和状态 | kg; m3 | 每次转移或处理批次 | 与生产数据相同期间 | 每个设施和处理路线 | 抵销内部转移和返工；按材料及处理去向汇总；归一化到参考流 | 称量票据；承包商记录；交接链；处理日志；状态判定 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化数量 = 报告期或批次数量 / 合格成品净质量 | 采集的清单行数量；合格产品净质量 | 每 1 kg 参考产品数量 | `mass-conservation-identity` |
| `calc_dry_matter` | 谷物物料和产品 | 干质量 = 收到状态质量 ×（1 - 水分质量分数）；物料状态换算只能使用各自实测水分 | 收到状态质量；水分分数 | kg 干物质及有记录的湿基换算 | `mass-conservation-identity` |
| `calc_mass_balance` | 各过程及完整前景系统 | 期初库存 + 投入 = 合格产品 + 共产品 + 废物 + 直接物料排放 + 期末库存，并明确产品带水和蒸发 | 质量和水分记录；库存变化；排放；废水 | 核对残差及其占总投入百分比 | `mass-conservation-identity`; `eu-commission-2019-2031-fdm-bat` |
| `calc_water_balance` | 用水和干燥过程 | 外部水 + 物料含水 = 产出含水 + 废水 + 排放到空气的水 + 期末水库存 - 期初水库存；回用水是内部循环 | 外部水和回用水；物料水分；废水；库存 | 按去向计量的 kg 或 m3 水 | `mass-conservation-identity`; `eu-commission-2019-2031-fdm-bat` |
| `calc_shared_energy` | 共享公用工程 | 先按分表分配各能源载体；无分表时使用有记录因果驱动因素，并保留未分配残差用于 QA | 设施和过程电表；运行时间；额定负荷；过程产出 | 各过程和参考流的能源载体用量 | `eu-commission-2019-2031-fdm-bat`; `eu-commission-2021-2279-environmental-footprint` |
| `calc_emission_load` | 直接空气或水排放 | 负荷 = 匹配流量 × 浓度 × 运行时间或排放体积，并记录单位换算和检出限处理 | 流量或体积；浓度；时间；方法元数据 | 每参考流的污染物特定 kg | `eu-commission-2019-2031-fdm-bat` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和全部物料行 | 保留产品代码、谷物种类、配方修订、路线、水分基准、包装状态、场址、地域和参考期；没有有记录加权规则时不得汇总实质不同产品。 | 产品规格；批次和批号记录；声明的必需限定信息 |
| `dq_temporal` | 前景活动数据 | 连续生产优先使用有代表性的连续 12 个月；季节性生产使用完整生产期；识别异常停机、开停机和试产并说明是否纳入。 | 带日期的仪表、生产记录和异常清单 |
| `dq_completeness` | 过程和流覆盖 | 覆盖所有纳入的路线操作及物料、能源、水、废物、废水和相关直接排放；记录截断、数据缺口、代理和推理估算。 | 过程流程图；BAT 2 风格清单；缺口登记；`eu-commission-2021-2279-environmental-footprint` |
| `dq_measurement` | 采集记录 | 可行时使用经校准仪表和秤，保留原始值和调整值，记录换算，并将仪表或发票与设施总量核对。 | 校准证书；发票；核对工作表 |
| `dq_representativeness` | 场址、技术、地域和时间 | 评估前景及链接次级数据的技术、地域、时间代表性和精度；有代表性数据可用时替换代理。 | 按 `eu-commission-2021-2279-environmental-footprint` 开展的数据质量评估 |
| `dq_uncertainty` | 计算值和分配值 | 保留抽样变异、检出限、分配敏感性以及重要结果的不确定性或范围元数据。 | 实验室报告；不确定性计算；敏感性结果 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | 参考产品 UUID 应为 `53e35f86-383d-45f6-87ef-13a25f1f10e6`，参考流属性 UUID 应为 `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID 应为 `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位应为 kg。 |  |
| `validate_required_qualifiers` | dataset_metadata | 缺少谷物身份、产品形态、路线、配方、水分基准、包装状态、地域、时期、分配或上游边界时，参考定义不完整。 | `unsd-cpc-3-0-explanatory-notes` |
| `validate_scope` | product_category | 确认产品位于已声明语义范围内，且不是精米或糙米、谷物预制餐食、仅谷物粉产出或焙烤预拌粉/面团。 | `unsd-cpc-3-0-explanatory-notes` |
| `validate_process_coverage` | foreground_process_map | 每个必需过程及声明路线实际使用的每个条件性过程均应有清单行；省略的路线步骤应明确为不适用，不得静默缺失。 | `us-epa-ap42-9-9-2-cereal-breakfast-food`; `eu-commission-2019-2031-fdm-bat` |
| `validate_material_reconciliation` | material_and_water_balance | 以一致报告期计算各过程及全系统质量和水平衡。发布前调查并披露残差；推理估算范围仅是 QA 筛查，不能接受无法解释的不平衡。 | `mass-conservation-identity`; `eu-commission-2019-2031-fdm-bat` |
| `validate_energy_reconciliation` | energy_inventory | 将电力和燃料总量与仪表、发票或交付记录核对；保持能源载体独立，并披露共享公用工程分配。 | `eu-commission-2019-2031-fdm-bat` |
| `validate_coproduct_allocation` | multi_output_processes | 核验共产品/废物分类、细分尝试、分配驱动因素、分配系数、时期和敏感性；防止返工、共产品和废物重复抵扣或重复承担负荷。 | `eu-commission-2021-2279-environmental-footprint` |
| `validate_emission_specificity` | direct_emissions | 直接排放应使用污染物和环境区室特定的流，并有测量或计算证据。捕集粉尘和处理残余物不得同时作为未治理基本流排放。 | `us-epa-ap42-9-9-2-cereal-breakfast-food`; `eu-commission-2019-2031-fdm-bat` |
| `validate_data_quality_and_sources` | all_inventory_and_rules | 核验时间覆盖、完整性、代表性、校准、来源引用、采集协议链接，并明确披露全部数据缺口、代理、截断和推理估算。 | `eu-commission-2021-2279-environmental-footprint`; `eu-commission-2019-2031-fdm-bat` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 指定设施、路线和参考期内生产已声明其他谷物产品的前景生产数据集 |
| downstream_use | 经评审后可作为 `secondary_dataset` 或 `background_dataset` 发布；声明从摇篮到大门覆盖时应链接上游数据；可投影为 Tiangong `process` 和 `lifecyclemodel` 记录 |
| allowed_use | 大门到大门制造评估；链接上游数据集后的从摇篮到大门产品建模；在声明产品、路线、地域、时期和分配范围内的情景及热点分析 |
| excluded_use | 无限定地代表全部 CPC 23140 产品；在功能、配方、水分、包装、边界、分配、地域和数据质量不一致时作直接比较声明；在排除农业生产或下游阶段时作相应生命周期主张 |
| required_metadata | PCR id 和版本；参考流 UUID；产品及配方标识；谷物种类和来源；工艺路线；水分基准；包装状态；场址和地域；参考期；技术；上游覆盖；分配；截断；采集协议；来源 id；数据质量声明 |
| required_quality_disclosure | 前景/次级数据占比；仪表和采样覆盖；质量、水和能源核对；缺失数据；代理流；未解决 UUID；推理估算；不确定性；分配敏感性；代表性；校验发现 |
| update_trigger | 配方、路线、设备、能源或水系统、包装、共产品去向、治理、场址、法规、来源证据、Tiangong 身份或数据质量发生实质变化；否则在所代表时期不再现实时复审 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes` | `official_guidance` | United Nations Statistics Division, *CPC Ver. 3.0 Explanatory Notes*, updated 30 June 2025, subclass 23140, pp. 102-103. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-11） | 产品范围、纳入项、排除项和分类身份 |
| `us-epa-ap42-9-9-2-cereal-breakfast-food` | `official_guidance` | U.S. Environmental Protection Agency, *AP-42, Chapter 9.9.2: Cereal Breakfast Food*, August 1995. https://www.epa.gov/sites/default/files/2020-10/documents/c9s09-2.pdf（检索于 2026-08-11） | 传统、压片、挤压、膨化等谷物路线的过程分解；颗粒物和 VOC 排放点筛查 |
| `eu-commission-2019-2031-fdm-bat` | `official_guidance` | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, especially BAT 2, BAT 5, and BAT 28. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索于 2026-08-11） | 水、能源、原料、废水、废气和残余物清单；监测策略；谷物清理与碾磨粉尘控制；指示性谷物碾磨能源筛查范围 |
| `eu-commission-2021-2279-environmental-footprint` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, Annex I, sections 4.5 and 4.6. https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-11） | 系统边界、分配层级、截断披露、数据质量、代表性和验证原则 |
| `mass-conservation-identity` | `method_factor` | 在对齐的过程批次或报告期应用质量守恒恒等式；不使用外部数值因子。 | 参考归一化、干物质换算、物料与水平衡计算及 QA 核对 |
