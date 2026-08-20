---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-yarn-other-than-sewing-thread-containing-less-than-85-by-weight-of-cotton
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 含棉低于 85% 的棉纱（缝纫线除外）

## 1. 范围与适用性

本 PCR 适用于含棉、棉质量分数低于 85% 且不属于缝纫线的可销售纱线从厂门到厂门的生产。它覆盖棉纤维与一种或多种已声明非棉短纤维混合，并包括将接收纤维加工为包装纱线所需的工厂作业。默认路线为短纤纺纱；当混纤成分或纱线规格需要其他路线时可以采用，但必须披露该路线。

前景边界从以适合所声明纺纱路线的状态接收纤维开始，包括接收与储存、开松与清洁、混棉、梳理、并条、可选精梳与粗纱、纺纱、可选并捻、络筒、质量控制和包装。仅当报告场址在参考纱线出厂前实施纤维或纱线湿法加工时，才纳入该湿法加工。上游棉花种植与轧花、非棉纤维生产、场外废物和废水处理、资本品、下游织造、产品使用及生命周期末端需要单独数据集。

本 PCR 不适用于棉质量分数达到或超过 85% 的棉纱、棉缝纫线、不含棉的纱线、没有短纤纺纱阶段的连续长丝纱、作为独立产品销售的纤维准备品、机织或针织物以及纺织制成品。数据包必须声明棉分数、全部混纤成分、再生含量状态、纱线细度制式与数值、捻度、纺纱技术、颜色或湿加工状态、水分或商业质量约定、质量等级、包装形式、生产地理范围和报告期。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-yarn-other-than-sewing-thread-containing-less-than-85-by-weight-of-cotton |
| classification_refs | CPC 3.0：26370，精确映射语境 |
| covered_products | 含棉质量分数大于 0% 且低于 85% 的可销售短纤纱线，不包括缝纫线；在路线有记录时，可为本色、漂白、染色、含再生料、单纱、股线、环锭纺、转杯纺、喷气纺或其他已声明纺纱技术 |
| excluded_products | 含棉达到或超过 85% 的棉纱；棉缝纫线；不含棉的纱线；没有短纤纺纱阶段的连续长丝纱；作为纤维准备品销售的粗纱或条子；织物及纺织制成品 |
| representative_product | 采用短纤路线生产并包装的本色棉/聚酯混纺纱 |
| production_route | 接收棉和已声明非棉短纤维 -> 开松/清洁/混棉 -> 梳理/并条 -> 可选精梳/粗纱 -> 纺纱 -> 可选并捻 -> 络筒/质量控制 -> 包装；如实施则纳入场内湿法加工 |
| market_state | 制造厂门处的可销售纱线，采用已声明水分或商业质量基准，并声明混纺成分、细度、捻度、纺纱技术、颜色状态、质量等级和包装形式 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供下游纺织制造使用的含棉混纺纱线，不包括缝纫线 |
| How much | 制造厂门处 1 kg 净合格可销售纱线 |
| How well | 棉质量分数大于 0% 且低于 85%；纱线满足已声明混纺成分、细度、捻度、强力或质量等级、颜色状态、水分约定、纺纱技术和包装规格 |
| How long or cycle | 工厂门处一次中间纱线交付；不适用使用时长功能 |
| reference_flow_link | 参考流为离开前景系统的合格可销售纱线净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 含棉重量少于85%的棉纱（缝纫线除外） `c18d2185-7f88-431e-8bfe-8180bb29e192` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 棉质量分数及成分检测或供应商声明基准；每种非棉纤维的身份和质量分数；各纤维的原生或再生状态；纱线细度制式与数值；捻度与捻向；纺纱技术；单纱或股线结构；本色、漂白、染色或其他处理状态；水分或商业质量约定；质量等级；包装形式；生产地理范围；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部前景输入和输出归一化至 1 kg 净合格纱线。参考质量不包括纱芯、筒管、纸箱、捆扎带及其他包装，包装应单独记录。 |
| `composition_mass_fraction` | 棉及混纤成分 | 质量分数 | kg 纤维/kg 总纤维 | 在一个已声明并一致采用的基准上确定棉和其他纤维分数。需要实验室分离时，采用 ISO 1833-1 及适用的特定混合物部分或等效经验证方法，并报告方法、水分修正及非纤维物质处理。 |
| `cotton_threshold` | 参考产品身份 | 棉质量分数 | kg 棉/kg 总纤维 | 实测或核实的棉分数必须大于 0 且严格小于 0.85。结果达到或超过 0.85 或不含棉的纱线不属于本 PCR。 |
| `commercial_mass_conversion` | 纱线与纤维质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 发票或生产系统采用调湿质量或商业质量时，保留观测质量和水分基准，并使用明确、可审计的公式换算到声明的参考基准。 |
| `energy_units` | 电力与热能 | Energy | kWh 或 MJ | 保留计量单位。仅使用已声明系数换算，识别燃料数据采用质量、体积、低位热值能量还是高位热值能量，并防止燃料与外购热力重复计算。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景纺纱系统 | 纳入从接收可纺纤维到包装可销售纱线的全部场内作业，包括归属于声明产品的公用工程、物料损失、废物和直接排放。 | `eu-jrc-textiles-bref-2023`; `ec-pef-method-2021` |
| `boundary_rule_2` | 上游纤维与辅料生产 | 棉纤维、每种非棉纤维、电力、燃料、水、化学品和包装采用独立上游数据集建模。对同类别投入纱线不得递归重复本纱线 PCR。 | `ec-pef-method-2021` |
| `boundary_rule_3` | 条件性作业 | 当实施或实质归属于产品时，纳入精梳、粗纱、并捻、湿法加工、废水处理、调湿、压缩空气和场内能源生产；否则披露排除情况。 | `eu-jrc-textiles-bref-2023`; `ec-pef-method-2021` |
| `boundary_rule_4` | 排除与截断 | 不得仅因已知物料、能源、废物或直接排放流数值较小而省略。下游符合 PEF 的研究采用任何截断时，必须明确披露、说明理由并按适用研究规则核查。 | `ec-pef-method-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 棉和每种非棉混纤均以适合所选纺纱路线的已声明等级、水分状态、包装形式、来源及原生或再生状态在纱厂接收。 |
| starting_condition_role | 接收纤维状态为前景入口；上游纤维种植、开采、聚合物生产、轧花、回收和纤维制造由关联数据集表示。 |
| product_classification_scope | 含棉混纺纱线，不包括缝纫线，棉质量分数大于 0% 且低于 85%。 |
| recursive_input_rule | 若消耗本产品类别内的纱线作为投入，则记录其实测数量并关联单独上游纱线数据集；不得递归展开同一前景纺纱作业。 |
| upstream_dataset_requirement | 棉、每种混纤成分、外购能源、辅料、包装、范围内运输及场外处理应采用在成分、来源、再生含量、技术、地理和时间方面具有代表性的数据集。 |
| disclosure | 披露纤维成分与检测基准、起始水分状态、纺纱路线、湿加工状态、前景所有权、排除作业、分配、截断、上游数据集选择和全部暂定估算。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fibre_opening_blending` | 纤维接收、开松、清洁和混棉 | required | 始终 | 建立声明的纤维配方、去除异物并形成均匀混合物 | 转出的准备混合纤维 kg |
| `carding_drawing_preparation` | 梳理、并条和纺纱准备 | required | 始终 | 使纤维平行并均匀；使用时包括精梳和粗纱 | 转出的条子或粗纱 kg |
| `spinning_winding_packaging` | 纺纱、并捻、络筒、质量控制和包装 | required | 始终 | 形成并包装合格可销售纱线 | 1 kg 净合格纱线 |
| `onsite_wet_processing` | 场内纤维或纱线湿法加工 | conditional | 出售前实施漂白、染色、洗涤、煮练或其他湿处理时纳入 | 施用和去除处理化学品并管理水、能源及废液 | 处理纱线输出 kg |

### 过程：纤维接收、开松、清洁和混棉（`fibre_opening_blending`）

#### 输入

##### 产品流

###### 棉纤维投入（`cotton_fibre_input`）

记录进入声明混纺配方的接收棉纤维；当来源、等级、原生或再生属性不同时应分开记录。

- 选定流：Cotton fibre, supplier-specific product flow
- 流属性/单位：Mass / kg
- 数量规则：按声明纤维质量基准修正的实测领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_opening_blending`
- 来源：`eu-jrc-textiles-bref-2023`
- 数量范围：暂定棉投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：1.10
  - 单位：kg/kg 净合格纱线
  - 基准：每参考流在过程损失前接收的棉投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 非棉混纤投入（`blend_partner_fibre_input`）

按纤维名称、来源、等级及原生或再生状态分别记录每种非棉纤维；不得将不同纤维类型汇总为未识别余额。

- 选定流：Declared non-cotton staple fibre, supplier-specific product flow
- 流属性/单位：Mass / kg
- 数量规则：按声明纤维质量基准修正的每种混纤实测领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_opening_blending`
- 来源：`eu-jrc-textiles-bref-2023`
- 数量范围：暂定混纤投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.15
  - 上限：1.10
  - 单位：kg/kg 净合格纱线
  - 基准：每参考流在过程损失前接收的非棉纤维总投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 开松和混棉用电（`opening_blending_electricity`）

记录棉包开松、清洁、物料输送、混棉、局部抽吸、调湿及可归属辅助设备的计量电力。

- 选定流：Electricity, applicable grid or supplier mix
- 流属性/单位：Energy / kWh
- 数量规则：该过程及报告期的分配电表用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转出准备混合纤维
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_opening_blending`
- 数量范围：暂定电力筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：2.0
  - 单位：kWh/kg 准备混合纤维
  - 基准：开松、清洁、混棉、输送及可归属辅助服务
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调理水与准备辅料（`blend_conditioning_inputs`）

记录开松和混棉时施加的水、抗静电剂、润滑剂或其他准备剂。仅在核实没有使用时记录为零。

- 选定流：Process water and each declared preparation auxiliary
- 流属性/单位：Mass / kg；水还可保留 m3 并提供换算
- 数量规则：归属于产品的实测用量或采购与库存核对用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转出准备混合纤维
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_opening_blending`
- 来源：`eu-jrc-textiles-bref-2023`
- 数量范围：暂定准备投入总量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 准备混合纤维
  - 基准：添加水和准备剂的合计，不包括环境调湿
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 准备混合纤维（`prepared_fibre_blend`）

记录转入梳理的质量，并保留批次层面的纤维配方。

- 选定流：Prepared cotton-containing fibre blend, internal product flow
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转出准备混合纤维
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_opening_blending`

##### 废物流

###### 开松与清洁排杂（`opening_cleaning_rejects`）

按去向记录异物、不可用纤维及其他排杂；回收纤维应与处置废物分开。

- 选定流：Fibre and foreign-matter rejects, destination-specific waste flow
- 流属性/单位：Mass / kg
- 数量规则：按处理去向实测排杂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转出准备混合纤维
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_opening_blending`
- 数量范围：暂定排杂筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg 准备混合纤维
  - 基准：计入任何回收收益前的开松和清洁排杂总量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 来料包装废物（`incoming_packaging_waste`）

记录以前景废物、再用或回收流离开的棉包包装、捆扎带、托盘及其他包装。

- 选定流：Packaging waste, material- and destination-specific
- 流属性/单位：Mass / kg
- 数量规则：按去向实测或采购核对的包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转出准备混合纤维
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_opening_blending`
- 数量范围：暂定来料包装筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg 准备混合纤维
  - 基准：离开过程且未再用的来料包装
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 未捕集纤维粉尘排放至空气（`opening_dust_to_air`）

记录适用收集系统后的实测或计算颗粒物排放；已收集粉尘属于废物流，不属于直接排放。

- 选定流：Particulate matter, emission to air, applicable size fraction
- 流属性/单位：Mass / kg
- 数量规则：烟道或车间排风测量，或气流量乘实测浓度与运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转出准备混合纤维
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_fibre_opening_blending`
- 数量范围：暂定粉尘排放筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.01
  - 单位：kg/kg 准备混合纤维
  - 基准：控制后未捕集颗粒物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：梳理、并条和纺纱准备（`carding_drawing_preparation`）

#### 输入

##### 产品流

###### 准备混合纤维投入（`prepared_blend_input`）

记录进入梳理的准备混合纤维质量和批次身份。

- 选定流：Prepared cotton-containing fibre blend, internal product flow
- 流属性/单位：Mass / kg
- 数量规则：实测过程投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转出条子或粗纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carding_drawing_preparation`

###### 梳理与准备用电（`carding_preparation_electricity`）

记录梳理、并条、可选精梳、可选粗纱、输送、抽吸、压缩空气和可归属服务的电力。

- 选定流：Electricity, applicable grid or supplier mix
- 流属性/单位：Energy / kWh
- 数量规则：声明路线的分配电表用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转出条子或粗纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carding_drawing_preparation`
- 数量范围：暂定电力筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：4.0
  - 单位：kWh/kg 条子或粗纱
  - 基准：声明的梳理、并条、精梳、粗纱、输送、抽吸和辅助服务
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入纺纱的条子或粗纱（`sliver_roving_output`）

记录转入纺纱机的质量和路线状态。

- 选定流：Cotton-containing sliver or roving, internal product flow
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转出条子或粗纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carding_drawing_preparation`

##### 废物流

###### 梳理、精梳和并条纤维废物（`preparation_fibre_waste`）

当梳棉废料、精梳落棉、条子废料及其他纤维损失的质量或去向不同时，应分开记录。

- 选定流：Textile fibre preparation waste, quality- and destination-specific waste flow
- 流属性/单位：Mass / kg
- 数量规则：按废物类别和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转出条子或粗纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carding_drawing_preparation`
- 数量范围：暂定准备损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.25
  - 单位：kg/kg 条子或粗纱
  - 基准：计入回收收益前的纺纱准备纤维废物总量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 未捕集梳理与准备粉尘排放至空气（`preparation_dust_to_air`）

记录收集后的颗粒物排放；当测量区分粒径时分别报告。

- 选定流：Particulate matter, emission to air, applicable size fraction
- 流属性/单位：Mass / kg
- 数量规则：实测排放或气流量-浓度计算结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转出条子或粗纱
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_carding_drawing_preparation`
- 数量范围：暂定粉尘排放筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.01
  - 单位：kg/kg 条子或粗纱
  - 基准：控制后未捕集颗粒物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：纺纱、并捻、络筒、质量控制和包装（`spinning_winding_packaging`）

#### 输入

##### 产品流

###### 条子或粗纱投入（`sliver_roving_input`）

记录进入声明纺纱技术的准备纤维质量。

- 选定流：Cotton-containing sliver or roving, internal product flow
- 流属性/单位：Mass / kg
- 数量规则：实测过程投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_winding_packaging`

###### 纺纱与络筒用电（`spinning_winding_electricity`）

记录纺纱机、可选并捻、络筒、抽吸、压缩空气、调湿、质量控制和包装设备的电力。

- 选定流：Electricity, applicable grid or supplier mix
- 流属性/单位：Energy / kWh
- 数量规则：声明产品和路线的分配电表用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_winding_packaging`
- 数量范围：暂定电力筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.10
  - 上限：8.0
  - 单位：kWh/kg 净合格纱线
  - 基准：纺纱、可选并捻、络筒、抽吸、压缩空气、调湿、质量控制和包装
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 纺纱与络筒辅料（`spinning_auxiliaries`）

记录保留在纱线或用于纱线的润滑剂、抗静电剂、蜡和清洁剂。与产品不接触的机器润滑剂应与产品准备剂分开。

- 选定流：Each spinning, winding, or product preparation auxiliary
- 流属性/单位：Mass / kg
- 数量规则：归属于产品的实测领用或采购与库存核对质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_winding_packaging`
- 来源：`eu-jrc-textiles-bref-2023`
- 数量范围：暂定辅料投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 净合格纱线
  - 基准：与产品接触的纺纱和络筒辅料总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 纱线包装材料（`yarn_packaging_input`）

按材料和再用状态记录筒管、纸管、纸箱、薄膜、捆扎带、托盘和标签。

- 选定流：Packaging material, material-specific product flow
- 流属性/单位：Mass / kg
- 数量规则：实测物料清单或采购与库存核对质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_winding_packaging`
- 数量范围：暂定包装筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：0.20
  - 单位：kg/kg 净合格纱线
  - 基准：随参考产品供应或归属于参考产品的包装总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格可销售含棉混纺纱（`reference_yarn_output`）

该输出为剔除不合格纱并排除包装质量后的净参考产品。

- 选定流：含棉重量少于85%的棉纱（缝纫线除外） `c18d2185-7f88-431e-8bfe-8180bb29e192`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 净合格纱线的固定参考数量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 纺纱与络筒纤维废物（`spinning_fibre_waste`）

按可回收性和去向分别记录气流纺废料、清纱废料、接头废料、不合格纱及其他含纤维废物。

- 选定流：Textile spinning waste, quality- and destination-specific waste flow
- 流属性/单位：Mass / kg
- 数量规则：按类别和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_winding_packaging`
- 数量范围：暂定纺纱损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg 净合格纱线
  - 基准：计入回收收益前的含纤维纺纱和络筒废物总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 辅料与维护废物（`spinning_auxiliary_waste`）

按危险属性和处理去向记录废油、污染擦拭物、过滤器和空化学品容器。

- 选定流：Auxiliary and maintenance waste, material- and destination-specific
- 流属性/单位：Mass / kg
- 数量规则：分配至报告产品的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_winding_packaging`
- 数量范围：暂定维护废物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg/kg 净合格纱线
  - 基准：归属于产品的辅料容器、过滤器、擦拭物和废油
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 未捕集纺纱粉尘排放至空气（`spinning_dust_to_air`）

在可用时使用实测浓度和气流量记录控制后的颗粒物排放。

- 选定流：Particulate matter, emission to air, applicable size fraction
- 流属性/单位：Mass / kg
- 数量规则：实测排放或气流量-浓度计算结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净合格纱线
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_spinning_winding_packaging`
- 数量范围：暂定粉尘排放筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.01
  - 单位：kg/kg 净合格纱线
  - 基准：控制后未捕集颗粒物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：场内纤维或纱线湿法加工（`onsite_wet_processing`）

#### 输入

##### 产品流

###### 进入湿法加工的物料（`wet_processing_material_input`）

记录进入场内湿法过程的散纤维或纱线干质量或调湿质量及状态。

- 选定流：Cotton-containing fibre blend or yarn, internal product flow
- 流属性/单位：Mass / kg
- 数量规则：在声明基准上实测批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wet_processing`

###### 湿法加工水、化学品和能源（`wet_processing_inputs`）

分别记录水、染料、盐、碱、酸、洗涤剂、助剂、电力、蒸汽和燃料；不得合并为一个未识别的湿法加工投入。

- 选定流：Each water, chemical, electricity, purchased heat, or fuel input
- 流属性/单位：计量单位下的 Mass、Volume 或 Energy
- 数量规则：批次配方和计量公用工程用量与生产记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wet_processing`
- 来源：`eu-jrc-textiles-bref-2023`
- 数量范围：暂定湿法加工用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.50
  - 单位：m3/kg 处理纱线
  - 基准：纳入的纤维或纱线湿处理总工艺用水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 处理纱线输出（`treated_yarn_output`）

记录净合格处理纱线及其最终水分、颜色和处理状态。

- 选定流：Treated cotton-containing blended yarn, internal or reference product flow
- 流属性/单位：Mass / kg
- 数量规则：在参考基准上实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wet_processing`

##### 废物流

###### 废水与湿法加工残余物（`wet_processing_waste`）

按去向分别记录送往场内或场外处理的废水、污泥、废浴残余物和化学品包装。

- 选定流：Wastewater or wet-processing residue, treatment-specific waste flow
- 流属性/单位：废水 Volume / m3；残余物 Mass / kg
- 数量规则：按去向实测排放体积和废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_wet_processing`
- 数量范围：暂定废水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.50
  - 单位：m3/kg 处理纱线
  - 基准：每处理纱线输出转移至处理的废水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 湿法加工直接排放（`wet_processing_direct_emissions`）

将场内控制后排放至空气、水和土壤的实测污染物分别作为基本流报告；不得用未处理废水体积代替污染物排放。

- 选定流：Each measured pollutant emitted to the applicable environmental compartment
- 流属性/单位：Mass / kg
- 数量规则：排放浓度乘实测流量和运行时间，或直接质量测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 处理纱线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_wet_processing`
- 来源：`eu-jrc-textiles-bref-2023`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 共用设备和公用工程 | 优先按过程、机器、批次或生产订单采用产品特定计量和细分。无法细分时，采用已记录的因果物理驱动量，如机器小时、气流量、蒸汽、压缩空气需求或质量吞吐量。 | `ec-pef-method-2021` |
| `allocation_rule_2` | 纤维废物与可回收次级输出 | 在计入收益前记录总投入和全部含纤维输出。不得从投入质量中扣除售出或内部回收废物。若下游研究分配负担或收益，应披露方法并保留未分配前景清单。 | `ec-pef-method-2021` |
| `allocation_rule_3` | 同一产线的多种纱线产品 | 使用反映资源需求的实测物理关系分配剩余共用负担。仅在没有更具代表性的物理驱动量时采用质量分配；经济分配需明确说明理由并进行敏感性分析。 | `ec-pef-method-2021` |
| `allocation_rule_4` | 内部循环纤维 | 将内部返工视为内部循环：记录回收质量、重新进入的过程及附加能源或损失；防止同时计作避免原生投入和外售共产品。 | `ec-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fibre_opening_blending` | `fibre_opening_blending` | 接收纤维、电力、准备剂、转移、排杂、包装和粉尘 | 地磅或秤记录；发票；库存台账；分表；配方；废物联单；排放测量 | 批次 id；纤维类型；棉标识；原生/再生状态；来源；等级；水分基准；领用质量；转移质量；电力；准备剂质量；排杂质量；包装质量与去向；气流量；粉尘浓度；运行时间 | 将开清棉生产订单与校准秤、库存变化、分表、配方、废物记录和控制系统测量核对 | kg；kWh；m3；mg/m3；h | 物料按批次；电表连续或每班；每次废物转移；排放按许可证要求频次 | 至少连续 12 个有代表性的月份，或批次生产的完整生产活动 | 归属于产品的全部开松、混棉、抽吸、储存和共用辅助设备 | 汇总产品特定记录；仅对剩余共用用量采用披露的物理驱动量分配；归一化到准备混合纤维和参考纱线 | 秤和电表校准；库存核对；配方批准；废物转移记录；采样计划；排放监测报告 |
| `cp_carding_drawing_preparation` | `carding_drawing_preparation` | 准备混合纤维、电力、条子/粗纱、纤维废物和粉尘 | 生产订单；校准秤；分表；机器计数器；废物联单；排放测量 | 路线；机器 id；投入质量；输出质量；梳棉废料；精梳落棉；其他废物；电力；压缩空气基准；气流量；粉尘浓度；运行时间 | 在物料转移、机器记录、电表和废物收集之间核对每条声明的普梳或精梳路线 | kg；kWh；mg/m3；h | 每批次或生产订单；电力每班或连续；每次废物转移；规定排放监测间隔 | 与参考产品数据相同期间 | 全部梳理、并条、可选精梳、可选粗纱、输送、抽吸和可归属服务 | 仅汇总等同路线；当普梳与精梳路线损失或能耗实质不同时分开保留 | 校准；路线追溯；质量核对；电表覆盖；废物分类；排放测试报告 |
| `cp_spinning_winding_packaging` | `spinning_winding_packaging` | 准备纤维、电力、辅料、包装、纱线输出、废物和粉尘 | 生产订单；秤；分表；配方或领用记录；包装清单；质量系统；废物联单；排放测量 | 纺纱技术；细度；捻度；投入质量；合格输出质量；不合格质量；废物类别；电力；辅料质量；包装材料与质量；气流量；粉尘浓度；运行时间 | 从纺纱投入到净包装纱线核对生产订单，并从参考质量中排除包装 | kg；kWh；mg/m3；h | 每生产订单；电表连续或每班；每次包装领用与废物转移；规定排放监测间隔 | 与参考产品数据相同期间 | 归属于产品的纺纱、可选并捻、络筒、抽吸、压缩空气、调湿、实验室和包装系统 | 仅汇总配方与路线等同的产品；采用净合格纱线作为分母 | 秤和电表校准；质量放行；成分证书或检测；包装规格；质量平衡；排放报告 |
| `cp_onsite_wet_processing` | `onsite_wet_processing` | 湿法过程物料、配方、水、能源、化学品、处理输出、废水、残余物和直接排放 | 批卡；配方系统；流量计；能源表；化学品领用；实验室分析；废水和废气监测；废物联单 | 批次 id；投入/输出质量和水分；处理方式；化学品身份与质量；水量；电力；蒸汽或燃料；废水体积；污染物浓度；污泥和残余物质量；去向 | 将每批配方和公用工程记录与处理输出及环境监测核对 | kg；m3；kWh；MJ；mg/L；mg/m3；h | 物料和化学品按批；公用工程连续或按批；按许可证要求监测 | 与参考产品数据相同期间，并代表声明的色号或处理 | 全部纳入的场内纤维/纱线湿法过程和处理设备 | 按等同处理配方汇总；由实测浓度和流量计算直接排放；归一化到处理输出和参考纱线 | 仪表校准；批准配方；实验室 QA/QC；排放记录；许可证报告；废物联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 全部前景流 | 归一化流 = 报告期可归属流 / 声明参考基准上的净合格纱线质量 | 可归属流；净合格纱线质量；适用时的水分换算 | 每 1 kg 参考纱线的流 | `ec-pef-method-2021` |
| `calc_cotton_fraction` | 产品类别核查 | 棉分数 = 同一基准上的干棉质量或声明基准棉质量 / 全部纤维质量之和；仅由配方计算不足时采用经验证的特定混合物方法 | 成分检测或受控配方；水分及非纤维物质修正 | 棉和混纤质量分数 | `iso-1833-1-2020` |
| `calc_mass_balance` | 各过程及前景总计 | 质量平衡差 = 总质量投入 - 产品输出 - 废物输出 - 实测直接质量排放 - 已记录库存变化；调查无法解释的差异，不得通过修改废物流强制归零 | 物料投入；输出；废物；排放；库存变化 | 核对差异及百分比 |  |
| `calc_meter_allocation` | 共用电力、热力、水和压缩空气 | 采用因果性最强的实测驱动量分配剩余共用消耗；披露驱动量、分子、分母和排除负荷 | 共用电表总量；产品特定计量；机器小时、气流量、吞吐量或其他驱动量 | 可归属公用工程用量 | `ec-pef-method-2021` |
| `calc_direct_emission` | 实测空气或水排放 | 排放质量 = 浓度 x 实测流量 x 运行时间，并记录单位换算及空白或检出限处理 | 浓度；流量；时间；换算系数 | 每参考流污染物质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考纱线与纤维投入 | 保留产品到批次可追溯性，核实含棉且棉质量分数低于 85%；识别每种混纤及再生含量声明。 | 成分证书或经验证检测；配方批准；供应商批次记录；成品放行 |
| `dq_measurement` | 质量与公用工程数据 | 使用校准秤和仪表，或核对采购、库存变化和生产记录。记录商业质量到参考质量的换算以及共用仪表分配。 | 校准证书；仪表图；发票；库存核对；分配工作底稿 |
| `dq_temporal` | 报告期 | 覆盖至少连续 12 个有代表性的月份，除非属于批次生产；说明停机、异常批次、路线变化及任何较短期间。 | 生产日历；批次清单；维护和停机日志 |
| `dq_completeness` | 前景清单 | 纳入所含过程的全部已知物料、能源、水、产品、废物和直接排放流。量化缺失数据占比，不得静默省略流。 | 质量与能量平衡；废物联单；环境监测；完整性检查表 |
| `dq_representativeness` | 前景与上游数据 | 评估技术、地理和时间代表性及精度；披露代理数据集和暂定估算。 | 与欧委会 PEF 准则一致的已记录数据质量评价 |
| `dq_route_separation` | 实质不同的产品或路线 | 当汇总会掩盖实质不同的消耗或损失时，分别保留纤维配方、纺纱技术、普梳/精梳路线、纱线细度和湿处理配方。 | 路线级生产订单以及计量或分配记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 产品身份 | 若产品为缝纫线、不含棉或经核实棉质量分数达到或超过 0.85，则失败。纤维基准或混纤成分未声明时失败。 | `unsd-cpc-3-0-2025`; `iso-1833-1-2020` |
| `validation_rule_2` | 参考流 | 若参考输出不是在声明水分或商业质量基准上的 1 kg 净合格纱线、该质量包含包装，或指定 Tiangong 产品流、Mass 流属性、单位组和 kg 单位身份不匹配，则失败。 |  |
| `validation_rule_3` | 过程完整性 | 任一必需过程没有对应清单章节，或适用的精梳、粗纱、并捻、湿法加工、废水处理、调湿、压缩空气或场内能源作业被省略且未披露时失败。 | `eu-jrc-textiles-bref-2023`; `ec-pef-method-2021` |
| `validation_rule_4` | 质量平衡 | 无法解释的过程或前景质量平衡差超过投入质量 5% 时标记；发布前无法核对则失败。 |  |
| `validation_rule_5` | 前景证据 | 当可以合理获取前景记录时，若棉及混纤质量、净纱线输出、电力、主要辅料、包装、纤维废物或适用的水和废水仅以默认估算表示，则失败。 | `ec-pef-method-2021` |
| `validation_rule_6` | 估算与来源追溯 | 标记候选 PCR 中每项 `reasoned_estimate`；其作为未经审查的发布关键允许范围，或外部来源数值缺少引用 source id 时，发布失败。 |  |
| `validation_rule_7` | 分配与重复计算 | 共用负担缺少已声明驱动量、回收纤维既获得收益又从总投入中省略，或内部循环纤维同时计作避免投入与外售共产品时失败。 | `ec-pef-method-2021` |
| `validation_rule_8` | 数据质量与披露 | 数据包缺失期间、地理、技术、纤维来源、再生状态、成分方法、水分约定、截断、分配、湿加工状态或上游数据集选择时失败。 | `ec-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 含棉质量分数低于 85% 的棉混纺纱从厂门到厂门前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 当成分、纱线结构、纺纱技术、湿加工状态、地理、时间和质量具有代表性时，可关联至下游机织、针织、非织造、纺织整理、服装、家纺或其他产品系统 |
| excluded_use | 含棉达到或超过 85% 的棉纱；缝纫线；不含棉的纱线；没有短纤纺纱的连续长丝纱；未识别纤维混合物；没有关联上游纤维与辅料数据集的从摇篮到厂门声明；未满足适用审查和研究规则的公开比较声明 |
| required_metadata | PCR id；产品流 UUID；净参考质量；棉及每种混纤分数和检测基准；原生/再生状态；纤维来源；纱线细度；捻度；纺纱技术；结构；颜色/处理状态；水分约定；包装形式；地理；报告期；纳入过程；上游数据集；截断；分配 |
| required_quality_disclosure | 各主要流的数据来源和测量方法；仪表与秤覆盖；质量平衡核对；路线分离；缺失数据；代理；暂定估算；技术、地理和时间代表性；精度；审查状态 |
| update_trigger | 当纤维配方、再生含量、纺纱技术、纱线细度系列、湿加工路线、能源供应、分配驱动量、场址边界、生产地理或代表性报告期发生实质变化，或经审查证据替换暂定范围时更新 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification Version 3.0 Explanatory Notes*, code 26370, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-11） | 官方类别身份及棉含量低于 85% 的边界 |
| `eu-jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Textiles Industry*, January 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry（检索于 2026-08-11） | 棉纤维开松与清洁；混棉；梳理、精梳、并条、粗纱、纺纱、并捻和络筒过程分解；混纤处理；准备剂及后续排放相关性 |
| `ec-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索于 2026-08-11） | 功能单位与参考流框架；系统边界；公司特定前景数据；分配层级；完整性、截断和数据质量规则 |
| `iso-1833-1-2020` | standard | ISO 1833-1:2020, *Textiles — Quantitative chemical analysis — Part 1: General principles of testing*, https://www.iso.org/standard/74881.html（检索于 2026-08-11） | 纺织纤维混合物成分检测的一般基准；对声明混纺选择适用的特定混合物 ISO 1833 部分 |
