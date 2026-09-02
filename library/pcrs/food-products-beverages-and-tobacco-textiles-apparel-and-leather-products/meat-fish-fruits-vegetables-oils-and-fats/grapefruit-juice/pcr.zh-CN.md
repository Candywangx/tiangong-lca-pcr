---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.grapefruit-juice
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 葡萄柚汁

## 1. 范围与适用性

本 PCR 用于生产加工场址门口、供直接饮用的未发酵葡萄柚汁前景数据包。覆盖非浓缩还原汁、由葡萄柚浓缩汁复原的果汁，以及在明确路线份额时两者的组合。前景边界可包括鲜果接收、分选、清洗、柑橘精油回收、机械榨汁、筛滤或精制、澄清、调配或复原、保藏、冷却、灌装、初级包装、原位清洗和场内废水处理，但仅纳入报告场址控制的操作。

以浓缩状态销售的葡萄柚浓缩汁、葡萄柚果肉饮料、混合果汁、葡萄柚风味饮料、发酵饮料和鲜葡萄柚不在产品范围内。除非研究明确扩展边界，配送、零售、消费者冷藏或制备以及包装报废均不属于本场址门口前景边界。适用食品法规或市场规格严于本 PCR 时，以其为准。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.grapefruit-juice |
| classification_refs | CPC 3.0：21432（Grapefruit juice；精确映射语境） |
| covered_products | 未发酵单倍浓度葡萄柚汁；非浓缩还原葡萄柚汁；由浓缩汁制成的葡萄柚汁；已声明直接榨取汁与复原汁比例的组合 |
| excluded_products | 以浓缩状态销售的葡萄柚浓缩汁；葡萄柚果肉饮料；混合果汁；不满足所声明葡萄柚汁身份的风味或稀释饮料；发酵葡萄柚饮料；鲜葡萄柚 |
| representative_product | 在加工场址门口放行的未发酵单倍浓度葡萄柚汁 |
| production_route | 鲜葡萄柚接收、预处理、机械榨汁与精制，并可包括同一前景控制下的浓缩步骤；和/或接收葡萄柚浓缩汁后复原与调配；随后保藏、冷却及出厂准备 |
| market_state | 加工场址门口已完成的液态产品，处于已声明的散装、无菌、冷藏、冷冻、罐装或其他初级包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供直接饮用的成品未发酵葡萄柚汁 |
| How much | 1 kg 葡萄柚汁净质量，不含初级和次级包装 |
| How well | 满足已声明路线对应的葡萄柚汁身份、组成、保藏和市场要求；复原汁至少满足 Codex 基线的 20 °C 下 10.0 °Brix，除非适用要求更严格 |
| How long or cycle | 场址门口放行的一个生产批次；保质期是必需限定信息，但不是归一化基准 |
| reference_flow_link | `grapefruit_juice_reference_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 葡萄柚汁 `796385da-cb79-4275-8087-13bc9656ff65` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 路线份额（非浓缩还原和/或浓缩还原）；果实种类与产品身份；实测可溶性固形物及方法；保藏方式；散装或初级包装状态及包装材料；果肉或澄清状态；添加甜味剂及其他可选配料状态；生产地域与期间；保质期或贮存条件；共产品与废物处理；分配方法 |

构建前景数据包时，`必需限定信息` 应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失这些信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有前景数量归一化到场址门口 1 kg 葡萄柚汁净质量；参考数量不含包装质量，包装应单独记录。 |
| `route_mass_conversion` | 各路线输入与输出 | Mass | kg | 保留实测批次质量及水分或浓缩状态。仅可使用批次或产品特定密度把体积换算为质量，并保留密度、温度、方法及原始记录。 |
| `soluble_solids_check` | 复原葡萄柚汁 | 折光法可溶性固形物 | 20 °C 下 °Brix | 记录修正后的可溶性固形物结果及方法。Codex 基线要求复原葡萄柚汁至少为 10.0 °Brix；适用更严格市场规则时应引用并执行该规则。 |
| `energy_carrier_accounting` | 电力、燃料、蒸汽、制冷及回收能源 | Energy 或载能体特定属性 | kWh、MJ 或载能体质量/体积单位 | 分开记录外购载能体和场内转换；归一化前保留计量数量及换算因子。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在加工场址接收已收获葡萄柚、单倍浓度葡萄柚汁和/或葡萄柚浓缩汁，并声明数量、来源、供应商、浓缩状态及运输交接点 |
| starting_condition_role | 带上游供应数据集链接的门到门前景起始条件 |
| product_classification_scope | 仅限葡萄柚汁；路线中间体须显式记录，且不得把本 PCR 扩大至葡萄柚果肉饮料、混合果汁、鲜果或作为参考产品销售的浓缩汁 |
| recursive_input_rule | 将购入葡萄柚汁或浓缩汁记录为显式产品输入并链接上游数据集；除非其制造由本场址控制并作为前景过程细分，不得在同一数据包内递归展开 |
| upstream_dataset_requirement | 为葡萄柚种植与采收、购入果汁或浓缩汁、配料与加工助剂、包装、公用工程、燃料、制冷剂、入厂运输以及场外废物或废水处理链接有代表性的上游数据集 |
| disclosure | 声明路线份额、各葡萄柚衍生输入的来源与浓缩状态、受控操作、保藏与包装状态、时间和地域覆盖、截断、数据缺口、共产品去向及分配选择 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_controlled_operations` | 前景操作 | 纳入把已声明接收的葡萄柚衍生输入转为参考产品所需的全部受控操作，包括路线特定的预处理、榨汁、筛滤、复原或调配、保藏、冷却、灌装、清洗以及场内残余物或废水管理。 | `jrc-fdm-bref-2019` |
| `boundary_upstream_links` | 购入输入与服务 | 对边界外的上游生产和场外处理链接数据集，不得将购入葡萄柚、浓缩汁、配料、包装、能源、运输或废物处理视为零负荷。 | `ec-pef-method-2021` |
| `boundary_route_specificity` | 路线选择 | 仅纳入代表性生产组合实际发生的过程，但必须声明非浓缩还原与浓缩还原份额，并保留各路线中间体质量平衡。 |  |
| `boundary_direct_releases` | 场址直接释放 | 记录跨越受控场址边界的直接排放、制冷剂损失、废水、固体残余物和产品损失，不得把它们隐藏在笼统公用工程总量中。 | `jrc-fdm-bref-2019` |
| `boundary_downstream_exclusion` | 场址门口数据集 | 本前景数据包排除配送、零售、消费者使用及报废；若研究扩展边界，应单独报告这些阶段。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fresh_fruit_extraction` | 鲜葡萄柚预处理、榨汁与精制 | conditional | 前景控制下加工鲜葡萄柚时纳入。 | 将验收鲜果转为果汁中间体及分离柑橘材料 | 每 kg 验收鲜葡萄柚及每 kg 果汁中间体 |
| `reconstitution_blending` | 浓缩汁接收、复原与调配 | conditional | 前景控制下使用葡萄柚浓缩汁、购入单倍浓度汁或允许的调配配料时纳入。 | 生产路线特定果汁中间体 | 每 kg 调配后葡萄柚汁中间体 |
| `stabilisation_factory_gate` | 保藏、冷却、灌装与出厂准备 | required | 始终纳入实际保藏和放行操作；报告场址进行灌装及初级包装时一并纳入。 | 生产已声明的参考葡萄柚汁 | 每 1 kg 参考产品 |
| `site_services_effluent` | 清洗、公用工程支持与废水处理 | required | 纳入可归属于代表性生产的场址服务，以及全部受控废水或残余物管理。 | 支持前景操作并记录边界释放 | 每 1 kg 参考产品 |

### 过程：鲜葡萄柚预处理、榨汁与精制（`fresh_fruit_extraction`）

#### 输入

##### 产品流

###### 验收鲜葡萄柚（`fresh_grapefruit_input`）

记录分开识别入厂拒收鲜果后进入受控预处理线的合格葡萄柚。

- 选定流：Grapefruit, fresh
- 流属性/单位：Mass / kg
- 数量规则：分配至代表性生产批次的验收鲜葡萄柚质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_route_mass_records`
- 数量范围：暂定鲜果投入筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1.0
  - 上限：5.0
  - 单位：kg 鲜葡萄柚/kg 参考葡萄柚汁
  - 基准：等待经评审场址或文献证据的宽泛初始路线估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理与榨汁用水（`fresh_route_water`）

记录用于清洗、果实输送、精油回收、榨汁支持和精制且跨越过程边界的工艺水；不得与 CIP 用水合并。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：鲜果路线的计量或水箱平衡供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_route_utility_records`
- 数量范围：暂定鲜果路线用水筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg 水/kg 参考葡萄柚汁
  - 基准：包含路线差异、等待经评审证据的宽泛初始估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 鲜果路线电力（`fresh_route_electricity`）

记录输送、分选、清洗、精油回收、榨汁、筛滤、泵送和精制的计量电力。

- 选定流：Electricity, supplied to processing site
- 流属性/单位：Energy / kWh
- 数量规则：路线分表读数或场址电力的有记录分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_route_utility_records`
- 数量范围：暂定鲜果路线电力筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kWh/kg 参考葡萄柚汁
  - 基准：等待经评审技术特定证据的宽泛初始估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 筛滤后葡萄柚汁中间体（`screened_juice_intermediate`）

记录机械榨汁与筛滤或精制之后、进入调配或保藏之前的实测果汁质量。

- 选定流：Grapefruit juice, intermediate
- 流属性/单位：Mass / kg
- 数量规则：榨汁过程交接点实测中间体果汁质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收鲜葡萄柚及每 1 kg 参考葡萄柚汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_route_mass_records`

###### 回收葡萄柚精油（`recovered_grapefruit_oil`）

仅在精油以有记录用途或市场离开过程时作为共产品记录，否则按实际废物处理记录。

- 选定流：Grapefruit essential oil
- 流属性/单位：Mass / kg
- 数量规则：作为共产品离开榨汁过程的实测回收精油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收鲜葡萄柚
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_route_mass_records`

###### 可利用果皮、果肉与种子共产品（`usable_citrus_residue`）

仅在有记录下游用途使其成为共产品时，将分离柑橘固体记作产品输出，并声明材料状态和去向。

- 选定流：Grapefruit peel, pulp, and seeds for further use
- 流属性/单位：Mass / kg
- 数量规则：发运继续利用的实测残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收鲜葡萄柚
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_route_mass_records`

##### 废物流

###### 拒收鲜果与不可利用柑橘残余物（`fresh_route_organic_waste`）

按去向记录不具共产品功能的拒收鲜果、果皮、果肉、种子及其他有机固体。

- 选定流：Citrus processing organic waste
- 流属性/单位：Mass / kg
- 数量规则：按目的地与处理路线实测的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收鲜葡萄柚及每 1 kg 参考葡萄柚汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_route_mass_records`
- 数量范围：暂定柑橘固体质量平衡筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.0
  - 单位：kg 残余物/kg 验收鲜葡萄柚
  - 基准：发现计量边界或水分状态错误前使用的物理上限筛选
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 鲜果路线废水（`fresh_route_wastewater`）

记录果实预处理、精油回收、榨汁和精制后，进入场内处理或场外转移前的废水。

- 选定流：Wastewater from fruit-juice processing
- 流属性/单位：Mass / kg
- 数量规则：分配至鲜果路线的实测或水量平衡废水质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_site_water_effluent_records`
- 数量范围：暂定鲜果路线废水筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：12
  - 单位：kg 废水/kg 参考葡萄柚汁
  - 基准：等待经评审场址证据的宽泛初始估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：浓缩汁接收、复原与调配（`reconstitution_blending`）

#### 输入

##### 产品流

###### 葡萄柚浓缩汁或购入果汁中间体（`grapefruit_derived_input`）

按浓缩状态、可溶性固形物、供应商、来源和批次分别记录购入的葡萄柚衍生输入，并链接上游数据集。

- 选定流：Grapefruit juice concentrate or purchased single-strength grapefruit juice
- 流属性/单位：Mass / kg
- 数量规则：按浓缩状态和供应商批次实测的投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reconstitution_batch_records`
- 数量范围：暂定葡萄柚衍生投入筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.05
  - 上限：1.2
  - 单位：kg 投入/kg 参考葡萄柚汁
  - 基准：跨浓缩汁和单倍浓度汁、等待产品特定证据的宽泛初始范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饮用级复原水（`reconstitution_water`）

记录用于复原浓缩汁或调整已声明配方的饮用级水，并与清洗和冷却水分开。

- 选定流：饮用水
- 流属性/单位：Mass / kg
- 数量规则：批次计量或配方记录的加水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reconstitution_batch_records`
- 数量范围：暂定复原水筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1.0
  - 单位：kg 水/kg 参考葡萄柚汁
  - 基准：等待批次浓度数据的宽泛初始配方范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 可选配料与加工助剂（`optional_ingredients`）

按物质及实际批次质量记录甜味剂、复原的葡萄柚成分、澄清材料、加工助剂或其他允许配料；法规允许性取决于市场。

- 选定流：Declared ingredient or processing aid, substance-specific
- 流属性/单位：Mass / kg
- 数量规则：各物质的配方或领料记录质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reconstitution_batch_records`

###### 复原与调配电力（`blending_electricity`）

记录浓缩汁处理、泵送、混合、澄清和调配的计量或分配电力。

- 选定流：Electricity, supplied to processing site
- 流属性/单位：Energy / kWh
- 数量规则：路线分表读数或场址电力的有记录分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reconstitution_utility_records`
- 数量范围：暂定调配电力筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kWh/kg 参考葡萄柚汁
  - 基准：等待经评审技术特定证据的宽泛初始估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调配葡萄柚汁中间体（`blended_juice_intermediate`）

记录转入保藏过程的实测配方产出，以及可溶性固形物、温度和路线份额。

- 选定流：Grapefruit juice, blended intermediate
- 流属性/单位：Mass / kg
- 数量规则：调配过程交接点实测批次产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reconstitution_batch_records`

##### 废物流

###### 不合格调配物与配方损失（`blending_product_loss`）

按实际去向记录不合格产品、罐底残留、过滤残余物和未回收配方损失。

- 选定流：Grapefruit-juice formulation waste
- 流属性/单位：Mass / kg
- 数量规则：分配至调配批次的实测或质量平衡损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_reconstitution_batch_records`
- 数量范围：暂定调配损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg 损失/kg 调配果汁中间体
  - 基准：等待经评审场址证据的宽泛初始质量平衡筛选
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：保藏、冷却、灌装与出厂准备（`stabilisation_factory_gate`）

#### 输入

##### 产品流

###### 送入保藏的果汁中间体（`juice_to_stabilisation`）

记录进入实际保藏和出厂准备工序的果汁质量、路线份额、可溶性固形物及温度。

- 选定流：Grapefruit juice, pre-preservation intermediate
- 流属性/单位：Mass / kg
- 数量规则：从榨汁和/或调配转入的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_gate_batch_records`

###### 热能或蒸汽（`preservation_thermal_energy`）

分载能体记录巴氏杀菌、灭菌、蒸发、热灌装或其他已声明保藏所用外购热量、燃料或蒸汽。

- 选定流：Thermal energy carrier, route-specific
- 流属性/单位：Energy / kWh or MJ
- 数量规则：计量载能体用量或有记录设备能量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stabilisation_utility_records`
- 数量范围：暂定保藏能源筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 参考葡萄柚汁
  - 基准：跨保藏技术、等待经评审路线特定证据的宽泛初始估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 稳定化与灌装电力（`stabilisation_electricity`）

记录泵送、换热、冷却、制冷、无菌系统、灌装、输送和产品贮存的可归属电力。

- 选定流：Electricity, supplied to processing site
- 流属性/单位：Energy / kWh
- 数量规则：过程分表读数或场址电力的有记录分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stabilisation_utility_records`
- 数量范围：暂定稳定化电力筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kWh/kg 参考葡萄柚汁
  - 基准：等待经评审场址与技术证据的宽泛初始估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级包装（`primary_packaging_input`）

前景边界内灌装时按材料和组件记录各初级包装、封口、内衬及无菌组件；仅在已声明无包装散装输出时省略。

- 选定流：Primary packaging material, material-specific
- 流属性/单位：Mass / kg
- 数量规则：按材料和组件的包装领用记录减退回未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_factory_gate_batch_records`
- 数量范围：暂定初级包装筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：kg 包装/kg 参考葡萄柚汁
  - 基准：跨散装和零售初级包装状态、等待包装特定证据的宽泛初始估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 葡萄柚汁参考输出（`grapefruit_juice_reference_output`）

这是在已声明保藏和出厂准备后，于加工场址门口放行的成品葡萄柚汁净质量。

- 选定流：葡萄柚汁 `796385da-cb79-4275-8087-13bc9656ff65`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定输出 1 kg 葡萄柚汁净质量，不含包装
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 保藏或灌装的产品与包装损失（`factory_gate_product_loss`）

按材料和去向分别记录保藏拒收、开机与换产产品、罐底残留、破损包装和包装边角料。

- 选定流：Product or packaging waste, material-specific
- 流属性/单位：Mass / kg
- 数量规则：实测废物质量或经核对的批次质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_factory_gate_batch_records`
- 数量范围：暂定场址门口损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg 损失/kg 参考葡萄柚汁
  - 基准：等待经评审场址证据的宽泛初始质量平衡筛选
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 制冷剂向空气泄漏（`refrigerant_leakage`）

制冷设备服务于代表性产品时，根据补充和维护记录逐物质记录向空气释放的制冷剂，不得合并物质。

- 选定流：Refrigerant emission to air, substance-specific
- 流属性/单位：Mass / kg
- 数量规则：依据设备维护和生产记录分配的年度或生产期制冷剂损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_site_environmental_records`

### 过程：清洗、公用工程支持与废水处理（`site_services_effluent`）

#### 输入

##### 产品流

###### 清洗与 CIP 用水（`cip_water`）

记录清洗罐体、管道、榨汁机、灌装机、地面及其他受控设备的用水，并尽可能区分新水、回用水和回收水。

- 选定流：Process water for cleaning
- 流属性/单位：Mass / kg
- 数量规则：分配至代表性生产的计量 CIP 与卫生用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_water_effluent_records`
- 数量范围：暂定清洗用水筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg 水/kg 参考葡萄柚汁
  - 基准：等待经评审场址证据的宽泛初始估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗化学品（`cip_cleaning_agents`）

逐物质记录供应给受控操作的清洁剂、酸、碱、消毒剂及其他清洗化学品。

- 选定流：Cleaning agent, substance-specific
- 流属性/单位：Mass / kg
- 数量规则：按化学品的领料、加药或罐体平衡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_water_effluent_records`
- 数量范围：暂定清洗化学品筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg 化学品/kg 参考葡萄柚汁
  - 基准：等待经评审化学品特定证据的宽泛初始估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 场址服务电力（`site_service_electricity`）

记录尚未分配给产品过程的 CIP、压缩空气、泵水、废水处理及其他可归属场址服务电力。

- 选定流：Electricity, supplied to processing site
- 流属性/单位：Energy / kWh
- 数量规则：服务分表读数或分配至代表性生产的有记录电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_service_utility_records`
- 数量范围：暂定场址服务电力筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kWh/kg 参考葡萄柚汁
  - 基准：等待经评审场址证据的宽泛初始估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送场内或场外处理的废水（`site_wastewater`）

记录交接给场内处理、场外处理或许可排放点的废水质量或体积及相关污染物；适用时分开记录未污染冷却水。

- 选定流：Wastewater from grapefruit-juice processing
- 流属性/单位：Mass / kg
- 数量规则：分配至代表性生产的废水流量计总量或有记录场址水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_site_water_effluent_records`
- 数量范围：暂定总废水筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：25
  - 单位：kg 废水/kg 参考葡萄柚汁
  - 基准：等待经评审场址证据的宽泛初始估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废水处理污泥与分离固体（`effluent_treatment_residue`）

报告场址控制处理时，按干基或湿基及实际去向记录污泥和分离固体。

- 选定流：Wastewater-treatment residue
- 流属性/单位：Mass / kg
- 数量规则：带水分基准和去向的实测残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考葡萄柚汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_environmental_records`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid` | 果汁、葡萄柚精油、可利用柑橘固体及其他共产品 | 首先通过细分独立计量操作避免分配；仅在附加功能和替代产品得到可靠证明时采用系统扩展。 | `ec-pef-method-2021` |
| `allocation_physical` | 不可分离的多功能操作 | 无法细分或系统扩展时，使用能反映输入输出如何提供功能的有记录、可量化物理关系；不得仅因质量数据可得而默认质量分配。 | `ec-pef-method-2021` |
| `allocation_other_relationship` | 缺乏可辩护物理关系的多功能操作 | 仅在记录拒绝细分、系统扩展和物理分配的理由后，方可使用场址和期间特定经济价值等其他关系；披露价格、期间、币种、因子和敏感性。 | `ec-pef-method-2021` |
| `allocation_waste_status` | 果皮、果肉、种子、拒收鲜果、不合格果汁及污泥 | 根据有记录去向和功能，把各输出分类为产品、共产品或废物。废物处理负荷留在产生系统；未经单独论证的系统扩展模型，不得赋予避免生产信用。 | `ec-pef-method-2021` |
| `allocation_shared_site_services` | 与其他产品共用的公用工程和场址服务 | 优先分表计量。仅对剩余共享量，使用过程时间、计量吞吐量、清洗周期或设备需求等因果驱动因子，并保留计算。 | `ec-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fresh_route_mass_records` | `fresh_fruit_extraction` | 鲜果、果汁中间体、精油、可利用残余物及废物质量 | 地磅、批次票、罐位、发运记录 | lot_id; timestamp; accepted_fruit_mass_kg; rejected_fruit_mass_kg; juice_intermediate_mass_kg; oil_mass_kg; usable_residue_mass_kg; waste_mass_kg; moisture_basis; destination | 按生产批次核对校准秤、罐体计量及发运记录。 | kg | 每批或每班 | 完整代表性生产期间 | 所有受控鲜果生产线 | 按批次与路线求和，归一化至参考产品净质量，并分开共产品与废物去向。 | 秤校准；批次核对；签署的发运或废物记录 |
| `cp_fresh_route_utility_records` | `fresh_fruit_extraction` | 水和电力 | 计量表、账单、设备日志 | meter_id; opening_reading; closing_reading; timestamp; route_runtime; production_mass_kg; allocation_driver | 使用路线分表；无分表时核对场址总量，仅用有记录因果驱动因子分配剩余量。 | kg 水；kWh | 计量间隔及各生产期 | 完整代表性生产期间 | 所有受控鲜果生产线 | 扣除经核实非生产用量，分配至路线并归一化。 | 计量表校准；账单核对；分配工作表 |
| `cp_reconstitution_batch_records` | `reconstitution_blending` | 葡萄柚衍生输入、水、配料、中间体产出及损失 | 配方、批记录、罐表、实验室结果 | batch_id; input_id; supplier; origin; concentration_state; input_mass_kg; water_mass_kg; ingredient_mass_kg; output_mass_kg; brix_20c; temperature; loss_mass_kg | 每批核对领料、校准罐表或秤读数及可溶性固形物结果。 | kg；°Brix | 每批 | 完整代表性生产期间 | 所有受控调配线 | 按配方与路线份额汇总，计算质量平衡并归一化。 | 批准配方；仪器校准；批次放行记录 |
| `cp_reconstitution_utility_records` | `reconstitution_blending` | 电力及其他路线公用工程 | 计量表与设备运行日志 | meter_id; opening_reading; closing_reading; runtime; rated_load; batch_id; output_mass_kg | 优先分表；否则使用经验证运行时间与负荷分配剩余量。 | kWh | 计量间隔及各批次生产期 | 完整代表性生产期间 | 所有受控调配线 | 将路线公用工程分配至批次并归一化。 | 计量表校准；运行日志；计算工作表 |
| `cp_factory_gate_batch_records` | `stabilisation_factory_gate` | 果汁输入、成品输出、包装及产品或包装损失 | 批记录、灌装计数、包装清单、秤、仓库放行 | batch_id; input_mass_kg; finished_net_mass_kg; package_component; package_mass_kg; rejected_product_mass_kg; packaging_scrap_mass_kg; preservation_method; storage_state | 核对过程转移、灌装或秤记录、包装领用、拒收及仓库放行。 | kg | 每批或每班 | 完整代表性生产期间 | 所有受控保藏与灌装线 | 汇总放行净产品，包装与损失分别归一化至参考产品。 | 秤与灌装机校准；包装库存核对；放行记录 |
| `cp_stabilisation_utility_records` | `stabilisation_factory_gate` | 热能、电力、冷却及制冷 | 计量表、燃料或蒸汽账单、设备日志 | carrier_id; quantity; unit; energy_content; meter_reading; runtime; preservation_method; product_mass_kg | 使用过程分表，或用有记录换算因子核对载能体账单与设备记录。 | kWh；MJ；载能体特定单位 | 计量间隔及各生产期 | 完整代表性生产期间 | 所有受控保藏、冷却、灌装及贮存设备 | 分开载能体，分配至代表性操作并归一化。 | 计量表校准；账单；能量换算记录 |
| `cp_site_water_effluent_records` | `site_services_effluent` | 清洗水、清洗化学品及废水 | 水表、加药日志、废水表、实验室样品 | meter_id; water_source; water_mass_kg; chemical_id; chemical_mass_kg; effluent_mass_kg; COD; BOD; TSS; pH; discharge_destination; sampling_time | 核对进水、回用、产品用水、蒸发及废水表，并保留加药和代表性废水分析。 | kg；适用时 mg/L | 每次清洗或计量间隔；依许可或场址计划采样 | 完整代表性生产期间 | 所有受控过程与废水系统 | 仅用有记录驱动因子分配剩余共享服务并归一化。 | 计量表校准；加药记录；实验室报告；水量平衡 |
| `cp_site_service_utility_records` | `site_services_effluent` | 共享场址服务的电力与其他公用工程 | 分表、账单、设备日志 | meter_id; quantity; unit; runtime; service_area; production_mass_kg; allocation_driver | 尽可能分表；否则核对场址总量并按因果关系分配剩余服务用量。 | kWh；MJ；载能体特定单位 | 计量间隔 | 完整代表性生产期间 | 所有相关受控场址服务 | 移除已单独计量产品过程用量，分配剩余量并归一化。 | 计量表校准；账单核对；分配工作表 |
| `cp_site_environmental_records` | `site_services_effluent` | 制冷剂损失、处理残余物及直接释放 | 制冷剂维护日志、残余物票据、许可监测、排放计算 | substance_id; opening_inventory; purchases; closing_inventory; recovered_mass; emitted_mass; residue_mass; moisture_basis; destination; monitoring_result; factor_source | 使用逐物质库存平衡、校准计量或应用于采集活动数据的批准因子。 | kg；释放特定单位 | 每次维护及报告期 | 完整代表性生产期间 | 所有受控制冷与处理系统 | 逐物质或残余物计算并归一化。 | 维护证书；库存核对；实验室或许可记录；因子引用 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每条清单记录 | 归一化数量 = 分配至代表性生产的数量 / 放行葡萄柚汁净质量 | 分配数量；放行葡萄柚汁净质量 | 每 1 kg 参考葡萄柚汁的数量 |  |
| `calc_fresh_route_yield` | `fresh_fruit_extraction` | 鲜果路线出汁率 = 筛滤后果汁中间体质量 / 验收鲜葡萄柚质量 | 果汁中间体质量；验收鲜葡萄柚质量 | kg 果汁中间体/kg 验收鲜葡萄柚 | `jrc-fdm-bref-2019` |
| `calc_route_mass_balance` | 各路线及生产批次 | 质量平衡差 = 实测输入总质量 - 实测产品、共产品、废物及释放输出总质量；应调查差异而非强制归零 | 全部实测质量输入与输出；水分和浓缩状态 | 已披露差异与核对状态 |  |
| `calc_reconstitution_brix_check` | 复原葡萄柚汁 | 将 20 °C 下修正折光可溶性固形物与 Codex 10.0 °Brix 下限及已声明更严格市场规则比较 | 修正结果；测量温度和修正；适用阈值 | 通过/不通过、实测值与引用阈值 | `codex-cxs-247-2005`; `us-21-cfr-146-132` |
| `calc_allocation_factor` | 剩余多功能负荷 | 输出 i 分配因子 = 输出 i 的有记录驱动因子 / 所有共产品同类驱动因子之和；仅在第 7 节层级后使用 | 同一驱动因子的输出数量或价值；细分评估 | 各输出的已披露分配因子 | `ec-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 每个代表性产品 | 保留产品名称、葡萄柚种类或法定身份、路线份额、浓缩状态、可溶性固形物、保藏、包装状态、添加配料、地域、期间及保质期或贮存条件。 | 批准规格、实验室结果、配方、标签或放行记录 |
| `dq_temporal_coverage` | 前景活动数据 | 覆盖完整声明生产期间并捕捉季节或生产期差异；解释停机、缺失时段及外推。 | 计量完整性报告、生产日历及缺口日志 |
| `dq_measurement_traceability` | 实测数量 | 使用经校准或核实的计量系统，并保留原始读数、单位、换算因子及记录责任人。 | 校准证书、计量表或秤日志及换算工作表 |
| `dq_mass_balance` | 鲜果、果汁、浓缩汁、水、共产品、废物及损失 | 在一致水分与浓缩状态上核对各路线质量输入输出；披露未解释差异及纠正措施。 | 批次或生产期质量平衡工作表 |
| `dq_allocation` | 共享操作及共产品 | 记录分配层级评估、因果驱动因子、因子、数据期间及敏感性；可细分时保留未分配计量值。 | 分配决策记录及计算工作表 |
| `dq_upstream_representativeness` | 链接数据集 | 匹配输入身份、地域、技术、浓缩状态、时间覆盖、运输交接点及处理路线，并披露代理。 | 数据集元数据及代理理由 |
| `dq_provisional_ranges` | 所有 `reasoned_estimate` 范围 | 暂定范围仅作编制或 QA 筛选，不得覆盖采集值；在关键发布用途前须由经评审证据替换或明确接受。 | 评审记录及替代来源或接受决定 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考输出 | 确认恰有一个 1 kg 净质量 Grapefruit juice 参考输出，产品流 UUID 为 `796385da-cb79-4275-8087-13bc9656ff65`、Mass UUID 为 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID 为 `93a60a57-a4c8-11da-a746-0800200c9a66`、单位为 kg，且包装质量单列。 |  |
| `validate_product_scope` | 产品身份 | 拒绝将果肉饮料、以浓缩状态销售的浓缩汁、混合果汁、身份范围外风味饮料、发酵饮料及鲜果应用本 PCR。 | `codex-cxs-247-2005`; `us-21-cfr-146-132` |
| `validate_route_completeness` | 代表性生产组合 | 确认路线份额覆盖代表性生产、实际发生的各条件过程均已纳入、购入果汁或浓缩汁有上游数据集，且未遗漏受控操作。 | `jrc-fdm-bref-2019` |
| `validate_soluble_solids` | 复原葡萄柚汁 | 确认存在 20 °C 下修正可溶性固形物结果，且达到 Codex 基线的至少 10.0 °Brix，或达到所引用更严格适用市场阈值。 | `codex-cxs-247-2005`; `us-21-cfr-146-132` |
| `validate_inventory_completeness` | 前景清单 | 确认跨越受控边界的全部产品、共产品、废物、废水、包装、公用工程及直接基本流释放均已记录或明确标为不适用。 | `jrc-fdm-bref-2019`; `ec-pef-method-2021` |
| `validate_mass_balance` | 各路线及生产批次 | 确认质量采用一致状态，已计算质量平衡差，并调查和披露实质差异而非静默分配。 |  |
| `validate_allocation` | 多功能与共享操作 | 确认遵循第 7 节层级，驱动因子和分配因子可复现，且废物处理或避免生产信用未重复计算。 | `ec-pef-method-2021` |
| `validate_data_quality` | 发布的前景数据集 | 确认协议覆盖、校准或核实证据、时间和地域代表性、来源链接、代理披露及暂定范围评审状态完整。 | `ec-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 成品葡萄柚汁加工场址门口前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 产品身份、路线组合、地域、期间、保藏、包装状态及边界与本数据集匹配或经透明调整的产品足迹、process 和 lifecyclemodel 研究 |
| excluded_use | 不得直接代表葡萄柚浓缩汁、果肉饮料、混合或风味饮料、发酵饮料、鲜葡萄柚，亦不得在无附加建模时代表下游配送、使用及报废 |
| required_metadata | canonical PCR id；参考流 UUID；路线份额；输入来源与浓缩状态；可溶性固形物结果和方法；保藏；包装状态与质量；地域；期间；技术；保质期或贮存条件；共产品和废物去向；分配；数据缺口；上游数据集链接 |
| required_quality_disclosure | 前景覆盖与协议完整性；校准与核对证据；路线质量平衡；时间和地域代表性；分配敏感性；代理数据集；暂定推理估算及评审状态；排除阶段 |
| update_trigger | 鲜果或浓缩汁采购、配方或可溶性固形物目标、路线组合、榨汁或保藏技术、能源或水系统、包装、场址分配、共产品去向、废物或废水处理、法定身份要求发生实质变化，或前景数据期间不再具有代表性 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `codex-cxs-247-2005` | `standard` | Codex Alimentarius, General Standard for Fruit Juices and Nectars, CXS 247-2005, https://www.fao.org/input/download/standards/10154/CXS_247e.pdf（检索于 2026-08-11） | 果汁身份与组成、饮用级复原水、真实性与质量检查、复原葡萄柚汁最低 10.0 °Brix |
| `us-21-cfr-146-132` | `standard` | U.S. eCFR, 21 CFR 146.132, Grapefruit juice, https://www.ecfr.gov/current/title-21/section-146.132（官方 XML 版本日期 2026-08-06；检索于 2026-08-11） | 葡萄柚汁身份、直接榨取和浓缩还原区别、美国标准的 10% 可溶性固形物规则、允许的保藏及市场特定标签语境 |
| `jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Food, Drink and Milk Industries, EUR 29978 EN, JRC118627, 2019, doi:10.2760/243911, https://eippcb.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf（检索于 2026-08-11） | 柑橘汁过程分解；分选、清洗、精油回收、机械榨汁、筛滤、保藏、浓缩、清洗、废水、能源及固体残余物边界 |
| `ec-pef-method-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the Environmental Footprint methods, Annex I, Sections 4.5 and 4.6, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索于 2026-08-11） | 多功能层级、细分与系统扩展、物理及其他分配关系、企业特定清单采集和数据质量要求 |
