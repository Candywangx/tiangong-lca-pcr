---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.rape-colza-and-mustard-oil-crude
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 粗制油菜籽油、芥菜籽油和芥末籽油

## 1. 范围与适用性

本 PCR 适用于油厂或提取厂门口的粗制油菜籽、芥菜籽或芥末籽油前景数据包。范围包括种子接收与预处理、实际采用的机械压榨和/或溶剂萃取、粗油分离与脱溶、发运前适用的澄清或脱胶、共产品处理，以及直至申报工厂门口输出的散装储存。

本 PCR 适用于尚未经过精炼工序形成精炼食用油的粗油。排除碱炼中和、脱色、脱臭、冬化、分提、氢化、酯交换、零售灌装、配送、使用和寿命终止。种子种植及运至油厂的运输由上游数据集表示，不纳入油厂前景清单。只有在申报路线和记录能够证明相应机械加工条件时，才可建模初榨或冷榨声明；本 PCR 本身不产生此类声明。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.rape-colza-and-mustard-oil-crude |
| classification_refs | CPC 3.0：21641，Rape, colza and mustard oil, crude（精确映射语境） |
| covered_products | 通过机械压榨、预压后溶剂萃取、直接溶剂萃取或其他在精炼前结束的已申报油厂路线，由油菜籽、芥菜籽或芥末籽获得的散装粗油 |
| excluded_products | 精炼油菜籽/芥菜籽/芥末籽油；成品瓶装食用油；生物柴油及其他化学转化产品；以油籽粕或饼为参考产品的产品；种子种植数据集 |
| representative_product | 提取厂门口、按接收状态计且在精炼前的 1 kg 粗制油菜籽/芥菜籽/芥末籽油 |
| production_route | 种子接收与预处理，随后进行机械和/或溶剂萃取、粗油回收、适用的澄清或脱胶及散装储存 |
| market_state | 油厂或提取厂门口的散装粗油；必须申报种类/原料、适用时的低芥酸或 canola 状态、提取路线、调质状态、水分/挥发物基准以及任何脱胶或澄清操作 |

Codex CXS 210-1999 界定了相关芥末籽油和油菜籽油的植物来源，并区分机械取得的初榨或冷榨油与其他油品状态。Codex 身份或组成指标可作为已申报的产品质量证据，但不能替代工厂特定的物料和能源记录。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为精炼前散装产品交付的粗制油菜籽、芥菜籽或芥末籽油 |
| How much | 1 kg |
| How well | 已申报产品身份、种子种类、适用时的低芥酸或 canola 声明、提取路线、粗油调质状态、质量基准和工厂门口状态；排除精炼油 |
| How long or cycle | 一个生产批次，或归一化为 1 kg 合格粗油输出的有记录报告期生产混合 |
| reference_flow_link | 由油厂或提取厂门口申报的 1 kg 参考产品流实现功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Rape, colza and mustard oil, crude `092932e3-7b6d-430d-b6e5-722b8f4e1c6d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 种子种类；适用时的低芥酸或 canola 状态；提取路线；适用时所用溶剂；粗油澄清/脱胶状态；按接收状态或干物质计量基准；水分和挥发物基准；工厂及地理范围；报告期；分配方法和共产品 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考粗油输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将前景数据包归一化为申报工厂门口恰好 1 kg 合格粗油。没有实测批次密度或已申报的产品特定密度来源时，不得将油体积记录换算为质量。 |
| `mass_basis_consistency` | 种子、粗油、粕/饼、壳、油脚、污泥及其他质量流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 说明每项质量是按接收状态还是干物质计。任何换算均使用实测水分或挥发物数据，并保留原始测量记录。 |
| `energy_conversion` | 外购电力和热能 | 为现场载能体选择的能量属性 | kWh 或 MJ | 保留发票或仪表原始单位。电力仅按 1 kWh = 3.6 MJ 换算；没有记录的低位热值及来源时，不得将燃料质量或体积换算为能量。 |
| `solvent_balance_unit` | 溶剂萃取路线 | 实际溶剂流的属性 | kg 或 L | 采购、回收、库存、油/粕夹带、废水和空气损失记录采用一致属性和单位。质量-体积换算必须有实测或供应商特定密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在油厂门口接收的含油油菜籽、芥菜籽或芥末籽，并申报种类、供应商来源、水分、杂质和质量基准 |
| starting_condition_role | 前景油厂过程的上游产品投入 |
| product_classification_scope | 仅限粗制油菜籽、芥菜籽和芥末籽油；边界在精炼为 CPC 21642 或其他精炼油产品前结束 |
| recursive_input_rule | 若购买同类别的合格粗油作为中间投入，将其仅作为独立上游产品数据集记录一次，并从前景数据包排除相应提取工序；披露数量、来源、调质状态和聚合规则 |
| upstream_dataset_requirement | 种子种植和运至油厂使用独立上游数据集，其地理、技术、时间覆盖和质量基准应与申报种子供应相容 |
| disclosure | 申报种子种类与份额、提取及溶剂路线、纳入的预处理/澄清步骤、分配方法、共产品、截断、报告期、场址覆盖、外购中间粗油和边界偏离 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crude_oil_gate` | 所有合规数据集 | 纳入从种子接收至合格散装粗油储存或发运的前景操作；排除下游精炼、灌装、配送、使用和寿命终止。 | us-epa-ap42-9-11-1-vegetable-oil-processing; codex-cxs-210-named-vegetable-oils |
| `boundary_route_condition` | 机械和溶剂路线 | 仅纳入实际发生的路线步骤。溶剂萃取必须纳入萃取、油和粕脱溶、溶剂回收及相关排放/废水记录；纯机械路线不得继承溶剂工序。 | us-epa-ap42-9-11-1-vegetable-oil-processing |
| `boundary_upstream_seed` | 种子供应 | 用相容的上游数据集表示种子种植和入厂运输；场址记录已聚合上游阶段时应防止重复计算。 | eu-pef-2021-2279 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `seed_receiving_preparation` | 种子接收与预处理 | required | 始终纳入种子跨越油厂门口后进行的操作；披露外包或省略的预处理 | 为所选提取路线准备已申报油籽 | 交付提取的 kg 预处理种子 |
| `oil_extraction_recovery` | 油脂提取与粗油回收 | required | 纳入实际机械、预压、直接溶剂或组合路线 | 从预处理种子分离粗油，并在适用时回收路线特定溶剂 | 回收的 kg 粗油中间体 |
| `crude_oil_clarification_storage` | 粗油澄清与散装储存 | required | 纳入申报工厂门口前实际发生的过滤、沉降、离心、适用的脱胶、转移及储存 | 交付申报市场状态的合格粗油 | 1 kg 合格粗油输出 |

### 过程：种子接收与预处理（`seed_receiving_preparation`）

#### 输入

##### 产品流

###### 油厂接收的含油种子（`seed_input`）

记录跨越油厂边界的每一股油菜籽、芥菜籽或芥末籽流。在质量检查前保留种类、供应商、来源、水分、杂质和质量基准，不得合并不同种子流。

- 选定流：合格油菜籽/芥菜籽使用 Rape or colza seed `be87e81e-303f-4607-a1f5-0cb5ef2d8f74`；芥末籽路线须解析匹配的公开芥末籽产品流
- 流属性/单位：Mass / kg
- 数量规则：实测入厂合格种子质量，仅按有记录的地磅修正调整，并按申报质量基准报告
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 交付提取的预处理种子，随后归一化为 1 kg 参考粗油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_receipts`
- 来源：`codex-cxs-210-named-vegetable-oils`; `us-epa-ap42-9-11-1-vegetable-oil-processing`

###### 预处理电力和热能（`preparation_energy`）

记录输送、清理、干燥、破碎、调质、脱壳、轧胚或压榨准备所用的计量或分配电力，以及每种热能载体。

- 选定流：与发票和仪表一致的场址特定外购电力及热能载体
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：仪表计量用量，或从共用仪表向本过程明确记录的分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 交付提取的预处理种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`us-epa-ap42-9-11-1-vegetable-oil-processing`

##### 废物流

#### 输出

##### 产品流

###### 转移至提取的预处理种子（`prepared_seed_output`）

记录去除杂质和路线特定壳组分后的预处理种子质量。该流为前景内部转移，须与种子投入、移出物料、水分变化和记录损失核对。

- 选定流：内部预处理油菜籽/芥菜籽/芥末籽中间体
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或根据合格种子、移出物料及实测水分变化计算的物料衡算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 交付提取的预处理种子
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_seed_receipts`
- 来源：`us-epa-ap42-9-11-1-vegetable-oil-processing`

##### 废物流

###### 杂质和被拒种子物料（`seed_preparation_residue`）

按实际去向记录杂质、被拒种子及路线特定分离物料。出售或作为共产品使用的物料必须归为产品流，而非废物流。

- 选定流：按组成和处置路线选择的场址特定种子清理残余物或被拒种子废物流
- 流属性/单位：Mass / kg
- 数量规则：按去向称重或以其他方式实测的出厂数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 交付提取的预处理种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_outputs`
- 来源：`us-epa-ap42-9-11-1-vegetable-oil-processing`

##### 基本流

###### 预处理颗粒物排放至空气（`preparation_particulate_air`）

在排放跨越环境边界时，记录接收、输送、清理、干燥、破碎、脱壳和轧胚的实测或许可颗粒物排放。场址记录可得时，不得以 AP-42 因子代替工厂测量。

- 选定流：申报环境区室的场址特定颗粒物排放流
- 流属性/单位：Mass / kg
- 数量规则：烟囱或无组织排放测量、许可清单或已披露的场址模型，并报告方法和控制装置
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 交付提取的预处理种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions_wastewater`
- 来源：`us-epa-ap42-9-11-1-vegetable-oil-processing`

### 过程：油脂提取与粗油回收（`oil_extraction_recovery`）

#### 输入

##### 产品流

###### 从预处理转入的油籽（`prepared_seed_input`）

以相同批次身份、质量基准和数量记录内部预处理种子转移。

- 选定流：内部预处理油菜籽/芥菜籽/芥末籽中间体
- 流属性/单位：Mass / kg
- 数量规则：等于所关联批次或报告期衡算中的 `prepared_seed_output`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 回收的粗油中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_seed_receipts`
- 来源：`us-epa-ap42-9-11-1-vegetable-oil-processing`

###### 提取电力和热能（`extraction_energy`）

记录压榨机、提取器、蒸发器、脱溶器、冷凝器、泵、干燥器及溶剂回收设备所用电力，以及每种燃料、蒸汽或热载体。

- 选定流：与发票和仪表一致的场址特定外购电力及热能载体
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：仪表计量用量，或共用公用工程向提取过程的有记录分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 回收的粗油中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`us-epa-ap42-9-11-1-vegetable-oil-processing`; `eu-pef-2021-2279`

###### 提取溶剂补充量（`extraction_solvent_makeup`）

仅在溶剂萃取路线纳入本行。选择实际溶剂产品流；采购物料已知时不得以通用有机溶剂 UUID 替代。

- 选定流：场址特定提取溶剂产品流；工厂记录识别为己烷时通常为己烷
- 流属性/单位：Mass / kg 或 Volume / L，并与溶剂衡算保持一致
- 数量规则：采购量加期初库存减期末库存，并修正转移量及从衡算边界外返回的回收溶剂
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 回收的粗油中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance`
- 来源：`us-epa-ap42-9-11-1-vegetable-oil-processing`

##### 废物流

#### 输出

##### 产品流

###### 回收的粗油中间体（`crude_oil_intermediate`）

记录压榨和/或脱溶后、最终工厂门口澄清或散装储存调整前的粗油。

- 选定流：Rape, colza and mustard oil, crude `092932e3-7b6d-430d-b6e5-722b8f4e1c6d`
- 流属性/单位：Mass / kg
- 数量规则：转移至粗油澄清或储存的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 回收的粗油中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_outputs`
- 来源：`codex-cxs-210-named-vegetable-oils`; `us-epa-ap42-9-11-1-vegetable-oil-processing`

###### 粕、压榨饼及可回收壳共产品（`oilseed_coproducts`）

分别记录每种可销售粕、压榨饼、壳或其他共产品的实际身份、组成基准、质量和去向。不得用大豆粕流表示油菜籽/芥菜籽/芥末籽粕。

- 选定流：根据前景输出身份解析的路线及原料特定粕、压榨饼或壳产品流
- 流属性/单位：Mass / kg
- 数量规则：按共产品和去向称量的出厂或内部转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 回收的粗油中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_outputs`
- 来源：`us-epa-ap42-9-11-1-vegetable-oil-processing`; `eu-pef-2021-2279`

##### 废物流

###### 提取残余物和废弃材料（`extraction_waste`）

按处理去向记录废过滤材料、未回收污泥、受污染吸附物、规格外物料和其他废物。作为产品回收的物料或循环溶剂不属于废物流。

- 选定流：按组成和处理路线选择的场址特定废物流
- 流属性/单位：Mass / kg
- 数量规则：称重发运、废物联单或库存变化衡算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 回收的粗油中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_outputs`
- 来源：`us-epa-ap42-9-11-1-vegetable-oil-processing`

##### 基本流

###### 溶剂排放至空气（`solvent_emission_air`）

仅在使用溶剂时纳入本行。通过封闭溶剂衡算计算损失，并与可用的实测或许可空气排放、废水夹带以及产品或共产品残留相核对。

- 选定流：申报环境区室的实际空气排放溶剂
- 流属性/单位：Mass / kg
- 数量规则：封闭溶剂衡算，优先采用实测排放，并单独记录所有非空气去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 回收的粗油中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance`
- 来源：`us-epa-ap42-9-11-1-vegetable-oil-processing`

### 过程：粗油澄清与散装储存（`crude_oil_clarification_storage`）

#### 输入

##### 产品流

###### 接收的粗油中间体（`crude_oil_intermediate_input`）

在不改变产品身份或质量基准的前提下，将中间体投入与提取输出关联。若外购粗油进入本过程，应用递归投入规则，并与场址自产油分开。

- 选定流：Rape, colza and mustard oil, crude `092932e3-7b6d-430d-b6e5-722b8f4e1c6d`
- 流属性/单位：Mass / kg
- 数量规则：实测关联转移量加单独计量的合格外购粗油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格粗油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_outputs`
- 来源：`codex-cxs-210-named-vegetable-oils`

###### 澄清、转移与储存公用工程（`clarification_utilities`）

仅在用于达到申报粗油状态时，记录电力、热、水、惰性气体、助滤剂和其他加工助剂。

- 选定流：与前景记录一致的场址特定公用工程或加工助剂产品流
- 流属性/单位：所选流的属性和单位
- 数量规则：按公用工程或助剂计量、采购或库存衡算的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格粗油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`codex-cxs-210-named-vegetable-oils`; `us-epa-ap42-9-11-1-vegetable-oil-processing`

##### 废物流

#### 输出

##### 产品流

###### 工厂门口合格粗油（`reference_crude_oil_output`）

本行为参考输出。产品必须仍为粗油，且不得包含碱炼、脱色、脱臭或其他下游精炼工序。

- 选定流：Rape, colza and mustard oil, crude `092932e3-7b6d-430d-b6e5-722b8f4e1c6d`
- 流属性/单位：Mass / kg
- 数量规则：归一化后恰好 1 kg；保留实测未归一化输出和申报质量基准
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_material_outputs`
- 来源：`codex-cxs-210-named-vegetable-oils`

##### 废物流

###### 油脚、污泥、废助滤剂和废水（`clarification_waste`）

记录沉降、离心、过滤、纳入时的脱胶、储罐清洗和溢漏控制产生的每股废物流。若某股物料出售或有益利用，应将其归为产品共输出并纳入分配复核。

- 选定流：按组成和处理路线选择的场址特定废物流
- 流属性/单位：按实测使用 Mass / kg 或 Volume / m3
- 数量规则：称重发运、废水表、联单或有记录的衡算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格粗油输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions_wastewater`
- 来源：`us-epa-ap42-9-11-1-vegetable-oil-processing`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 多输出预处理和提取过程 | 首先对可直接归属的操作进行细分，或在研究目标支持时扩展系统。可依据独立仪表、批次或过程记录直接归属的负荷不得再分配。 | eu-pef-2021-2279 |
| `allocation_physical_then_other` | 粗油、粕/饼、壳和其他共产品之间的剩余共用负荷 | 无法避免分配时，采用有记录的相关物理关系。无法证明相关物理关系时，采用其他有理由的关系，例如使用有代表性价格期的经济价值。内部一致地应用一种方法并披露理由。 | eu-pef-2021-2279; ilcd-format-1-1-process |
| `allocation_fraction_check` | 每个已分配多输出过程 | 分配比例须覆盖全部共产品，使用相同报告期和基准，并在舍入容差内合计为 1.000。未分配废物单独报告；分配选择对粗油结果有实质影响时进行敏感性结果。 | ilcd-format-1-1-process |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_receipts` | `seed_receiving_preparation` | 种子投入和预处理种子转移 | 地磅、进厂检验、水分测试和批次记录 | date; batch_id; supplier; origin; seed species/type; low-erucic/canola claim; gross_mass; tare_mass; accepted_mass; moisture; foreign_matter; rejected_mass; mass_basis | 经校准地磅和有记录的取样/测试方法 | kg; % | 每次交付或每批 | 完整报告期，通常为连续 12 个月或完整季节性生产期 | 每个设施和纳入的进料线 | 按种子类型和批次汇总合格质量；水分基准换算单独保留 | 校准记录；实验室方法；与供应商发票及库存移动核对 |
| `cp_energy_utilities` | all | 电力、燃料、蒸汽、热、水、惰性气体和加工助剂 | 仪表、发票、储罐液位或库存记录 | timestamp; meter_id; opening; closing; purchases; stock_change; carrier; unit; process_assignment; allocation_key | 优先使用校准分表，否则采用有记录的全厂总量分配 | kWh; MJ; kg; L; m3 | 仪表间隔及月度结算 | 与产品输出相同期间 | 每个设施和公用工程系统 | 汇总直接仪表；共用用量仅按有记录的因果键分配 | 仪表校准；发票；库存核对；分配工作表 |
| `cp_material_outputs` | all | 粗油、预处理种子、粕/饼、壳、残余物及其他输出 | 磅单、生产日志、罐计量、发运或库存记录 | date; batch_id; material_identity; product_or_waste; gross_mass; tare_mass; moisture_or_volatiles; destination; opening_stock; closing_stock | 校准秤或罐计量；体积换算时使用有记录的密度 | kg; L; m3; % | 每批或每次转移及月度结算 | 完整报告期 | 每个纳入过程和储存位置 | 按身份及去向汇总；核对转移与库存变化；报告期关闭后再归一化 | 校准；交付/联单记录；库存核对；产品检测证书 |
| `cp_solvent_balance` | `oil_extraction_recovery` | 溶剂补充、回收、库存、夹带、废水和空气损失 | 采购、储罐、回收仪表、实验室、排放和废水记录 | solvent_identity; purchases; opening_stock; closing_stock; recovered_internal; offsite_transfer; oil_carryover; meal_carryover; wastewater_load; measured_air_release; density; unit | 使用一致单位进行封闭质量衡算，并与实测排放及排水数据核对 | kg 或 L | 日或批次记录，月度闭合 | 整个溶剂路线报告期 | 包括储罐和回收在内的完整溶剂系统 | 输入减库存、输出、回收转移和非空气去向等于残余损失；解释不平衡 | 罐体校准；发票；实验室测试；排放和排水报告；签署的衡算复核 |
| `cp_emissions_wastewater` | all | 颗粒物、溶剂、废水和处理残余物 | 烟囱/无组织测试、许可清单、废水表/样品及废物联单 | source; substance; compartment; concentration; flow_rate; duration; volume; treatment; destination; method; detection_limit | 场址测量或已披露的监管计算 | kg; m3 | 按监测计划及每次发运 | 与生产相同期间 | 每个纳入排放点和排口 | 按运行时间积分实测负荷；没有记录不得扣除处理或回收 | 认可测试或方法引用；许可报告；联单；检出限处理 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_seed_mass` | 种子接收 | accepted_seed_mass = gross_mass - tare_mass - 单独称量的被拒物料；任何干物质换算使用同批次实测水分 | gross_mass; tare_mass; rejected_mass; measured_moisture; declared mass basis | 按种类和基准的合格种子质量 | us-epa-ap42-9-11-1-vegetable-oil-processing |
| `calc_period_normalization` | 所有清单行 | normalized_amount = reporting_period_amount / qualifying_crude_oil_output_mass | 同一闭合期间的流数量；相同基准的合格粗油质量 | 每 1 kg 参考粗油的数量 | eu-pef-2021-2279 |
| `calc_stock_change` | 储存的种子、溶剂、粗油、共产品和废物 | consumed_or_produced = 实测转移量并按统一截点的期初库存减期末库存调整 | purchases/transfers; opening stock; closing stock; measurement basis | 闭合期间物料量 | eu-pef-2021-2279 |
| `calc_solvent_loss` | 溶剂路线 | residual solvent loss = solvent inputs + opening stock - closing stock - recovered/offsite solvent - 油、粕、废水和其他去向的量化夹带；与实测空气排放比较并披露不平衡 | 所有 `cp_solvent_balance` 字段 | 每 kg 粗油的溶剂损失和核对差额 | us-epa-ap42-9-11-1-vegetable-oil-processing |
| `calc_allocation_fraction` | 多输出过程 | allocation_fraction_i = 共产品 i 的所选分配基准 / 全部共产品相同基准之和 | co-product outputs; physical relationship data or representative values/prices | 每个共产品的分配比例；总计 = 1.000 | eu-pef-2021-2279; ilcd-format-1-1-process |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和种子投入 | 保留种子种类、粗制与精炼状态、提取路线、调质/脱胶状态、适用时的低芥酸或 canola 声明，以及匹配的 Tiangong 流身份。 | 产品规格；批次记录；流 UUID；使用时的 Codex 身份测试或供应商证书 |
| `dq_temporal` | 所有前景数据 | 投入和输出采用同一闭合、有代表性的报告期，通常为连续 12 个月或完整季节性生产期。解释停产、异常生产期和外推。 | 带日期的仪表、生产、库存和发运记录；期间核对 |
| `dq_measurement` | 质量、公用工程、溶剂、排放和废水 | 使用校准仪器或可追溯发票。保留原始单位、换算因子、检出限、共用仪表分配和库存调整。 | 校准证书；发票；实验室/许可报告；计算工作簿 |
| `dq_completeness` | 每个纳入过程 | 核对种子、油、共产品、废物、溶剂和库存。列出排除流，并证明路线条件下的溶剂及排放行没有被静默省略。 | 签署的物料/溶剂衡算；完整性检查表；例外日志 |
| `dq_representativeness` | 聚合生产混合 | 报告场址覆盖、地理、种子份额、技术份额、产能/利用率以及该期间代表发布数据集的理由。 | 设施清单；生产汇总；供应商和技术记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考产品 UUID 必须为 `092932e3-7b6d-430d-b6e5-722b8f4e1c6d`，属性必须为 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组必须为 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，归一化数量必须等于 1 kg。 | codex-cxs-210-named-vegetable-oils |
| `validate_crude_state` | 产品身份和边界 | 若参考产品过程纳入碱炼中和、脱色、脱臭或其他精炼步骤，而未拆分为下游精炼油数据集，则拒绝该数据包。要求申报澄清/脱胶状态。 | codex-cxs-210-named-vegetable-oils; us-epa-ap42-9-11-1-vegetable-oil-processing |
| `validate_route_completeness` | 机械和溶剂路线 | 过程图和清单必须与申报路线一致。使用溶剂时，要求溶剂身份、补充、回收、库存、夹带、废水及空气损失核对；不使用时将这些检查标为不适用。 | us-epa-ap42-9-11-1-vegetable-oil-processing |
| `validate_mass_balance` | 种子预处理、提取和储存 | 要求关联内部转移，并披露种子、粗油、共产品、废物、水分变化和库存的物料衡算。未解释的不平衡必须报告并复核。 | eu-pef-2021-2279 |
| `validate_allocation` | 多输出过程 | 要求分配层级、基准、期间、比例和共产品清单，比例在舍入容差内合计为 1.000；拒绝大豆粕或其他语义不匹配的代理身份。 | eu-pef-2021-2279; ilcd-format-1-1-process |
| `validate_qualifiers` | 数据集元数据 | 发布前要求全部参考流限定信息、场址/地理、报告期、来源 id、测量基准和未解析 UUID 声明。 | ilcd-format-1-1-process |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 粗制油菜籽/芥菜籽/芥末籽油生产的前景数据包；复核后可发布为 secondary_dataset，在具有代表性时可发布为 background_dataset |
| downstream_use | 为精炼或转化前消耗合格粗油的产品构建 process 和 lifecyclemodel |
| allowed_use | 产品身份、路线、边界、分配、地理和期间与研究匹配时的场址特定或已申报生产混合的从摇篮到工厂门口建模 |
| excluded_use | 精炼油参考产品；零售食用油；生物柴油或化学转化；无相容复核范围的比较声明；外推至未申报种子类型或提取路线 |
| required_metadata | PCR id；产品流 UUID；种子类型及份额；提取路线；适用时的溶剂身份；澄清/脱胶状态；质量基准；地理；场址；报告期；分配方法；共产品；上游种子数据集；数据源 |
| required_quality_disclosure | 测量覆盖；仪表和秤校准；库存核对；种子和油物料衡算；适用时的溶剂衡算；共用公用工程分配；缺失流；截断；不确定性；代表性；未解析 UUID |
| update_trigger | 产品身份、流 UUID、原料混合、提取技术、溶剂、边界、分配方法、场址覆盖、报告期、质量规格或外部方法/来源要求发生实质变化 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `codex-cxs-210-named-vegetable-oils` | standard | Codex Alimentarius Commission，CXS 210-1999，Standard for Named Vegetable Oils，2024 年修订并含 2026 年勘误，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/tr/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+210-1999%2FCXS_210e.pdf（检索于 2026-08-10） | 油菜籽油和芥末籽油身份；粗油组成/质量语境；初榨和冷榨加工声明的区分 |
| `us-epa-ap42-9-11-1-vegetable-oil-processing` | official_guidance | U.S. Environmental Protection Agency，AP-42 Section 9.11.1 Vegetable Oil Processing，1995 年 11 月，https://www.epa.gov/sites/default/files/2020-10/documents/c9s11-1.pdf（检索于 2026-08-10） | 通用油籽处理与预处理；路线条件下的溶剂萃取、脱溶、溶剂回收、粗油储存、颗粒物及溶剂清单要求；未将大豆特定数量用作油菜籽/芥末籽默认值 |
| `eu-pef-2021-2279` | official_guidance | European Commission，Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索于 2026-08-10） | 企业特定制造数据、清单一致性、分配决策层级和代表性报告 |
| `ilcd-format-1-1-process` | official_guidance | European Commission Joint Research Centre，ILCD Format 1.1 Documentation — Process data set，https://eplca.jrc.ec.europa.eu/LCDN/downloads/ILCD_Format_1.1_Documentation/ILCD_ProcessDataSet.html（检索于 2026-08-10） | 分配比例记录、建模与校验元数据、完整性、复核和数据质量披露 |
