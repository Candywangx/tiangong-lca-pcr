---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.hazelnuts-shelled
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 榛子（去壳）

## 1. 范围与适用性

本 PCR 覆盖以带壳榛子脱壳得到生榛子仁的前景生产，从带壳原料在脱壳设施接收开始，到散装或包装榛子仁在设施门口放行为止。适用于作为去壳榛子销售的整仁和碎仁；必须声明来料状态、榛仁形态、质量标识、尺寸或口径、水分基准、路线和包装状态。

种植、采收、接收前已完成的作业和入厂运输由相链接的上游数据集表示。烘烤、去皮、切片、研磨、调味、包衣、巧克力或糖果制造、零售、使用及设施门口之后的终端处置不属于本类别。本 PCR 不以商业质量标准提供默认 LCI 数量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.hazelnuts-shelled |
| classification_refs | CPC 3.0 子类 21423，榛子（去壳）（`unsd-cpc-3-0-21423`） |
| covered_products | 脱壳后销售的生整粒或碎粒榛子仁，包括已声明等级与状态的散装和包装榛仁 |
| excluded_products | 带壳榛子；烘烤、去皮、切片、研磨、调味、包衣或配方化榛子产品；榛子油和榛子粕 |
| representative_product | 脱壳或包装设施门口的生去壳榛子仁 |
| production_route | 带壳榛子的接收与准备；脱壳与榛仁分选；采用一条已声明的最终路线后放行或包装 |
| market_state | 散装或包装生榛仁，并报告榛仁形态、已声明时的商业类型或品种、产地、收获年或批次期间、质量标识、尺寸或口径、水分基准、最终处理路线和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在设施门口提供用于后续食品流通或加工的去壳榛子仁 |
| How much | 1 kg 去除包装的去壳榛子仁净质量 |
| How well | 符合已声明的榛仁形态、已声明时的商业类型或品种、质量标识、尺寸或口径、水分基准、缺陷筛选准则和包装状态 |
| How long or cycle | 一个可识别生产批次或生产活动直至设施门口放行；不指定使用寿命 |
| reference_flow_link | 过程 `final_conditioning_and_packing` 的输出行 `shelled_hazelnuts_reference` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净质量 |
| 参考产品流 | 去壳榛子 `310457e0-388d-4c3a-9090-b4bbc5288d05` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 生榛仁状态；整粒、碎粒或已声明的混合；已声明时的商业类型或品种；产地；收获年或批次期间；质量标识；尺寸或口径；水分含量及测量基准；壳碎片、异物和缺陷筛选准则；`dry_route` 或 `wet_route`；散装或包装规格 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告设施门口测量点扣除皮重和包装后的榛仁净质量。 |
| `consistent_moisture_basis` | 来料榛子、中间榛仁、输出与损失 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录水分含量、取样点、方法及湿基或干基惯例。只有在测量值和明确公式均有记录时，才可在不同水分基准间换算质量。 |
| `lot_mass_balance` | 每个前景过程 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对同一批次或经核对的报告期使用校准秤记录投入、产品、共产品和废物质量；库存变化与水分校正分别披露。 |
| `route_exclusivity` | 最终调理 | 路线声明 | dry_route 或 wet_route | 每个所表示批次只能选择一条最终处理路线：`dry_route` 不对榛仁进行有意水洗，`wet_route` 包含有意水洗及随后干燥。不得对同一产品质量同时应用两条路线。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在脱壳设施门口接收的带壳榛子，并声明产地、批次期间、来料水分基准、储存状态及任何先前干燥或处理 |
| starting_condition_role | 进入前景脱壳系统的上游产品投入 |
| product_classification_scope | 语义上对应 CPC 3.0 子类 21423 的去壳榛子仁；分类引用不拥有 PCR 身份 |
| recursive_input_rule | 进入混配或包装的外购去壳榛子仁由单独的上游去壳榛子数据集表示，并绕过本前景系统的接收与脱壳；披露其质量份额和属性，不通过本过程链重新生成 |
| upstream_dataset_requirement | 链接与已声明产地、作物期间、来料状态和物流相适应的种植、采收、接收前调理及入厂运输数据集 |
| disclosure | 报告设施位置、报告期、来源地区、来料状态、纳入的现场准备、所选最终路线、包装状态、共产品去向、废物处理及所有排除项 |

### 边界规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景系统 | 纳入从接收到设施门口输出之间的现场准备、脱壳、分离、分选、唯一所选最终路线、放行或包装、直接公用工程、直接基本流排放、废物与共产品。 | eu-pef-2021-2279 |
| `boundary_upstream_linkage` | 上游投入 | 以可追溯且与已声明地理、期间和技术相符的上游数据集表示带壳榛子、接收前作业、入厂运输、能源、水和包装。 | eu-pef-2021-2279 |
| `boundary_route_choice` | 最终调理 | 对一个所表示批次应用 `dry_route` 或 `wet_route` 之一。有意水洗和由此产生的干燥只属于 `wet_route`，绝不得加入 `dry_route`。 |  |
| `boundary_direct_releases` | 每个前景过程 | 将每一种经测量、计算、许可要求或其他原因需报告的直接基本流排放记录为单独流；不得以未具体说明的通用排放替代。 | eu-pef-2021-2279 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_preparation` | 带壳榛子的接收与准备 | `required` | 始终纳入；只记录在设施门口接收后实际进行的准备作业 | 建立已声明起始状态，去除异物，并在需要时调理带壳原料 | 每 1 kg 转入脱壳的已准备带壳榛子 |
| `shelling_and_sorting` | 脱壳、分离与榛仁分选 | `required` | 始终纳入 | 去壳、分离榛仁组分，并将每一壳或榛仁组分恰好一次归为产品或废物 | 每 1 kg 转入最终调理的分选榛仁中间品 |
| `final_conditioning_and_packing` | 最终调理、放行与包装 | `required` | 始终纳入；每个所表示批次恰好应用 `dry_route` 或 `wet_route` 之一 | 应用已声明路线、核验放行属性并生产散装或包装参考产品 | 每 1 kg 去壳榛子仁参考产品净质量 |

### 过程：带壳榛子的接收与准备（`receipt_and_preparation`）

#### 输入

##### 产品流

###### 来料带壳榛子（`in_shell_hazelnuts_input`）

按产地、批次期间、来料水分基准和先前处理分别记录跨越设施门口的接收批次。

- 选定流：In-shell hazelnuts；在所生产数据集中解析 Tiangong 产品流 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：所表示批次或经核对生产活动接收的净质量测量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 去壳榛子仁参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_mass_and_identity`
- 来源：
- 数量范围：临时且有条件的材料投入筛选区间；仅在接收记录不可得时使用，并在首个经核验批次质量或经评审定量来源可得时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 去壳榛子仁参考产品净质量；仅限候选阶段的后备值，须在评审发布前替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收与准备用电（`receipt_electricity`）

计量或分配的电力覆盖本过程中实际运行的接收、输送、预清理、通风和调理设备。

- 选定流：与设施相适应的电力供应；在所生产数据集中解析产品流
- 流属性/单位：Energy / kWh
- 数量规则：计量用电，或从设施电表向所表示设备和期间进行的有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 转入脱壳的已准备带壳榛子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_utilities`
- 来源：
- 数量范围：临时且有条件的电力筛选区间；仅在计量或有文件依据的分配不可得时使用，并在此类记录或经评审定量证据可得时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：kWh
  - 基准：每 1 kg 已准备带壳榛子；宽泛的候选阶段筛选值，不是 LCI 默认值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 现场调理用热能（`receipt_conditioning_heat`）

只有在设施门口接收后且脱壳前进行加热或干燥时才记录本投入；接收前干燥仍属于上游。

- 选定流：场址特定的热力或燃料供应；在所生产数据集中分别解析各能源载体
- 流属性/单位：Energy / MJ
- 数量规则：归属于现场调理作业的计量能源或采购记录能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 转入脱壳的已准备带壳榛子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_utilities`
- 来源：
- 数量范围：临时且有条件的热能筛选区间；只在进行现场调理且记录不可得时适用，并在首个经核验能源记录或经评审定量来源可得时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：MJ
  - 基准：每 1 kg 已准备带壳榛子；宽泛的候选阶段筛选值，不是 LCI 默认值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

不规定默认基本流数量。按 `boundary_direct_releases` 分别记录需报告的排放。

#### 输出

##### 产品流

###### 已准备带壳榛子（`prepared_in_shell_hazelnuts`）

转入脱壳的测量流保持批次身份，并单独报告任何水分校正。

- 选定流：Prepared in-shell hazelnuts；内部产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入 `shelling_and_sorting` 的测量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 转入脱壳的已准备带壳榛子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_mass_and_identity`
- 来源：

##### 废物流

###### 去除的异物与不可用带壳组分（`receipt_removed_fraction`）

按实际去向记录离开前景控制的异物和拒收来料榛子，不从公用工程记录中扣除。

- 选定流：在所生产数据集中按材料和处理路线解析的场址特定废物流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往各废物处理路线的测量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接收的带壳榛子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_mass_and_identity`
- 来源：
- 数量范围：临时且有条件的质量平衡筛选区间；仅在废物称重不可得时使用，并在首个经核验废物记录或经评审定量来源可得时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 接收的带壳榛子；有物理边界的候选阶段筛选值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

不规定默认基本流数量。按 `boundary_direct_releases` 分别记录需报告的排放。

### 过程：脱壳、分离与榛仁分选（`shelling_and_sorting`）

#### 输入

##### 产品流

###### 转入脱壳的已准备带壳榛子（`prepared_in_shell_hazelnuts_input`）

扣除任何已披露库存变化后，本内部产品投入等于 `receipt_and_preparation` 的测量输出。

- 选定流：Prepared in-shell hazelnuts；内部产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：与 `prepared_in_shell_hazelnuts` 匹配的转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 分选榛仁中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_shelling_mass_balance`
- 来源：

###### 脱壳与分选用电（`shelling_electricity`）

电力覆盖实际使用的破壳、分离、风选、输送、检验和分选设备。

- 选定流：与设施相适应的电力供应；在所生产数据集中解析产品流
- 流属性/单位：Energy / kWh
- 数量规则：计量用电，或从设施电表向所表示设备和期间进行的有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 分选榛仁中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shelling_utilities`
- 来源：
- 数量范围：临时且有条件的电力筛选区间；仅在计量或有文件依据的分配不可得时使用，并在记录或经评审定量证据可得时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kWh
  - 基准：每 1 kg 分选榛仁中间品；宽泛的候选阶段筛选值，不是 LCI 默认值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

不规定默认基本流数量。按 `boundary_direct_releases` 分别记录需报告的排放。

#### 输出

##### 产品流

###### 分选榛仁中间品（`sorted_kernel_intermediate`）

转入最终调理的榛仁流在壳和缺陷分离后、任何路线特定最终作业前测量。

- 选定流：Hazelnut kernel intermediate；内部产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入 `final_conditioning_and_packing` 的测量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 分选榛仁中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shelling_mass_balance`
- 来源：

###### 作为产品销售的榛子壳（`marketed_hazelnut_shells`）

只有当榛子壳满足有文件依据的去向产品接收准则并作为共产品离开时，才在此记录。同一壳质量不得同时报告为废物。

- 选定流：场址特定共产品 Hazelnut shells；在所生产数据集中解析产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：交付用于有文件依据的有益用途或销售的测量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 分选榛仁中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shelling_mass_balance`
- 来源：

###### 其他可用榛仁组分（`usable_kernel_fractions`）

只有当等外或碎榛仁作为产品转移且具有有文件依据的用途或客户时，才在此记录；否则使用下方废物行，绝不能两者同时使用。

- 选定流：场址特定可用 Hazelnut kernel fraction；在所生产数据集中解析产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：作为产品转移的测量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 分选榛仁中间品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shelling_mass_balance`
- 来源：

##### 废物流

###### 废弃榛子壳（`discarded_hazelnut_shells`）

在此按去向记录送往废物处理的壳。报告为 `marketed_hazelnut_shells` 的壳不进入本行。

- 选定流：在所生产数据集中按处理路线解析的 Hazelnut shell waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往各废物处理路线的测量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 进入脱壳的已准备带壳榛子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shelling_mass_balance`
- 来源：
- 数量范围：临时且有条件的质量平衡筛选区间；仅在废物称重不可得时使用，并在首个经核验壳去向记录或经评审定量来源可得时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 已准备带壳榛子；有物理边界的候选阶段筛选值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废弃榛仁组分与异物（`discarded_kernel_fraction`）

无有文件依据产品去向的榛仁组分和异物按处理路线报告，不计作共产品。

- 选定流：在所生产数据集中按材料和处理路线解析的场址特定 food-processing waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往各废物处理路线的测量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 进入脱壳的已准备带壳榛子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shelling_mass_balance`
- 来源：
- 数量范围：临时且有条件的质量平衡筛选区间；仅在废物称重不可得时使用，并在首个经核验去向记录或经评审定量来源可得时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 已准备带壳榛子；有物理边界的候选阶段筛选值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

不规定默认基本流数量。按 `boundary_direct_releases` 分别记录需报告的排放。

### 过程：最终调理、放行与包装（`final_conditioning_and_packing`）

#### 输入

##### 产品流

###### 转入最终调理的分选榛仁中间品（`sorted_kernel_input`）

扣除已披露库存变化后，本内部产品投入等于测量输出 `sorted_kernel_intermediate`。

- 选定流：Hazelnut kernel intermediate；内部产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：与 `sorted_kernel_intermediate` 匹配的转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 去壳榛子仁参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_final_mass_and_release`
- 来源：

###### 最终调理与包装用电（`final_electricity`）

电力覆盖实际运行的路线特定处理、最终检验、输送和包装设备。

- 选定流：与设施相适应的电力供应；在所生产数据集中解析产品流
- 流属性/单位：Energy / kWh
- 数量规则：计量用电，或从设施电表向所表示设备和期间进行的有文件依据的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 去壳榛子仁参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_utilities_and_route`
- 来源：
- 数量范围：临时且有条件的电力筛选区间；仅在计量或有文件依据的分配不可得时使用，并在记录或经评审定量证据可得时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kWh
  - 基准：每 1 kg 去壳榛子仁参考产品净质量；宽泛的候选阶段筛选值，不是 LCI 默认值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 湿法路线工艺用水（`wet_route_water`）

只对已声明的 `wet_route` 记录用水；`dry_route` 清单中不存在本流。

- 选定流：与设施相适应的工艺水；在所生产数据集中解析产品流
- 流属性/单位：Mass / kg
- 数量规则：进入有意榛仁水洗的计量水量或批次记录水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg `wet_route` 去壳榛子仁参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_utilities_and_route`
- 来源：
- 数量范围：临时且有条件的用水筛选区间；只在 `wet_route` 计量不可得时适用，并在首个经核验批次记录或经评审定量来源可得时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg `wet_route` 去壳榛子仁参考产品净质量；宽泛的候选阶段筛选值，不是 LCI 默认值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 湿法路线干燥用热能（`wet_route_drying_energy`）

只有在已声明 `wet_route` 的水洗后进行干燥时才记录热能；分别解析各能源载体。

- 选定流：场址特定的热力或燃料供应；在所生产数据集中分别解析各能源载体
- 流属性/单位：Energy / MJ
- 数量规则：归属于水洗后干燥的计量能源或采购记录能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg `wet_route` 去壳榛子仁参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_utilities_and_route`
- 来源：
- 数量范围：临时且有条件的热能筛选区间；只在 `wet_route` 能源记录不可得时适用，并在首个经核验记录或经评审定量来源可得时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：MJ
  - 基准：每 1 kg `wet_route` 去壳榛子仁参考产品净质量；宽泛的候选阶段筛选值，不是 LCI 默认值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

按材料和组件记录随放行产品进入的包装；只有在有文件依据的无包装散装转移时数量才为零。

- 选定流：在所生产数据集中分别解析每种包装材料和组件
- 流属性/单位：Mass / kg
- 数量规则：与已包装输出核对的采购或材料清单质量，并单独识别可重复使用包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 去壳榛子仁参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：
- 数量范围：临时且有条件的包装筛选区间；仅在包装材料清单不可得时使用，并在首个经核验材料清单或经评审定量来源可得时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：kg
  - 基准：每 1 kg 去壳榛子仁参考产品净质量；覆盖散装到包装状态的宽泛候选阶段筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

不规定默认基本流数量。按 `boundary_direct_releases` 分别记录需报告的排放。

#### 输出

##### 产品流

###### 去壳榛子仁参考产品（`shelled_hazelnuts_reference`）

只有记录必需限定信息和所选路线后，参考输出才可放行。

- 选定流：去壳榛子 `310457e0-388d-4c3a-9090-b4bbc5288d05`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `calc_reference_normalization` 归一化后的 1 kg 净产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每 1 kg 去壳榛子仁参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：
- 来源：eu-pef-2021-2279
- 数量范围：精确的归一化参考数量
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 去壳榛子仁参考产品净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：eu-pef-2021-2279

##### 废物流

###### 湿法路线废水（`wet_route_wastewater`）

只对 `wet_route` 记录废水，并扣除另行测量的产品持水或蒸发水；分别解析各处理去向。

- 选定流：在所生产数据集中流向有文件依据处理路线的 Wastewater
- 流属性/单位：Mass / kg
- 数量规则：计量排放量，或以采集的用水和持水记录计算的批次平衡量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg `wet_route` 去壳榛子仁参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_final_utilities_and_route`
- 来源：
- 数量范围：临时且有条件的废水筛选区间；只在 `wet_route` 排放记录不可得时适用，并在首个经核验排放或水平衡记录可得时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg `wet_route` 去壳榛子仁参考产品净质量；宽泛的候选阶段筛选值，不是 LCI 默认值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装准备废物（`packaging_preparation_waste`）

按材料和处理路线记录损坏、裁切或拒收包装；只有包装记录核实时才可使用零值。

- 选定流：在所生产数据集中按材料和处理路线解析的 Packaging waste
- 流属性/单位：Mass / kg
- 数量规则：测量废物，或包装投入减去已包装和退回组件后的核对量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 去壳榛子仁参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：
- 数量范围：临时且有条件的包装废物筛选区间；仅在废物记录不可得时使用，并在首个经核验包装平衡或经评审定量来源可得时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：kg
  - 基准：每 1 kg 去壳榛子仁参考产品净质量；宽泛的候选阶段筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

不规定默认基本流数量。按 `boundary_direct_releases` 分别记录需报告的排放。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid_by_subdivision` | 共用作业 | 首先在可行时通过分别计量或细分不同批次、路线和产品组分的作业来避免分配。 | eu-pef-2021-2279 |
| `alloc_shell_and_kernel_status` | 壳和非参考榛仁组分 | 每个实物组分恰好归类一次：只有具有有文件依据的产品去向与接收证据时才归为产品，否则归为流向其处理路线的废物。不得在产品行和废物行重复报告同一质量。 | eu-pef-2021-2279 |
| `alloc_remaining_joint_inputs` | 细分后的参考榛仁与共产品 | 若仍需分配，使用反映底层过程关系且有文件依据的物理关系。只有在无法建立可辩护物理关系时才使用经济分配；价格应与报告期一致，并披露方法和输入且进行敏感性检验。 | eu-pef-2021-2279 |
| `alloc_no_unstated_credit` | 废物处理与有益利用 | 除非所采用研究方法明确要求，不得在前景清单内扣除避免负担抵扣；任何下游替代或回收处理均须单独披露。 | eu-pef-2021-2279 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_mass_and_identity` | `receipt_and_preparation` | 来料、已准备及去除材料的质量和身份 | 秤单、接收记录、水分测试和去向记录 | lot_id; origin; crop_or_lot_period; gross_mass; tare_mass; accepted_mass; prepared_mass; removed_mass; moisture_value; moisture_basis; prior_treatment; destination | 校准秤、代表性水分取样和批次核对 | kg；水分单位按报告值 | 每批；在已声明报告期汇总 | 所有被表示的接收批次 | 每个纳入设施 | 汇总可比质量；水分校正与库存变化分开；只在核对后归一化 | 秤校准；取样方法；批次追踪；签署的去向记录 |
| `cp_receipt_utilities` | `receipt_and_preparation` | 电力和有条件的现场热能 | 仪表、分表、账单、燃料收据和设备日志 | period; meter_start; meter_end; purchased_quantity; carrier; equipment_hours; allocation_driver; conditioned_mass | 优先直接计量；否则向运行设备和期间进行有文件依据的分配 | 电力为 kWh；热力或燃料能量为 MJ | 仪表区间和每次调理活动 | 与所表示已准备输出相同期间 | 每个纳入设施和能源载体 | 扣除有文件依据的非过程用量；按已披露因果驱动因素分配剩余量；按已准备质量归一化 | 仪表身份；账单；设备日志；分配工作表 |
| `cp_shelling_mass_balance` | `shelling_and_sorting` | 已准备投入、分选榛仁、壳、可用组分与废弃组分 | 批次秤和去向记录 | batch_id; prepared_input_mass; sorted_kernel_mass; marketed_shell_mass; discarded_shell_mass; usable_fraction_mass; discarded_kernel_mass; inventory_change; moisture_value; destination | 以校准批次秤按组分去向核对 | kg | 每批或每个批次 | 所有被表示的脱壳批次 | 每条纳入脱壳线 | 在一致水分基准上将所有输出与库存变化同投入核对；不得重复产品和废物组分 | 秤校准；批次单；去向接收证据；废物收据；水分记录 |
| `cp_shelling_utilities` | `shelling_and_sorting` | 电力 | 仪表、分表、账单和设备日志 | period; meter_start; meter_end; electricity_quantity; equipment_hours; allocation_driver; sorted_kernel_mass | 优先直接计量；否则向脱壳和分选设备进行有文件依据的分配 | kWh | 仪表区间和每次生产活动 | 与所表示分选榛仁输出相同期间 | 每条纳入脱壳线 | 扣除有文件依据的非过程用量，并按分选榛仁质量归一化 | 仪表身份；账单；设备日志；分配工作表 |
| `cp_final_mass_and_release` | `final_conditioning_and_packing` | 榛仁投入、参考输出、路线和放行属性 | 批次秤、放行测试和批次记录 | lot_id; sorted_kernel_input_mass; gross_output_mass; tare_mass; net_output_mass; route; kernel_form; commercial_type_or_variety; origin; crop_or_lot_period; quality_designation; size_or_calibre; moisture_value; moisture_basis; defect_criteria; packaging_state | 校准秤及有文件依据的放行检验或测试 | kg；属性特定单位 | 每个放行批次 | 所有被表示的放行批次 | 每条纳入最终生产线 | 扣除皮重计算净输出；保留批次属性和路线；只汇总相容产品状态 | 秤校准；放行授权；取样与测试方法；批次追踪 |
| `cp_final_utilities_and_route` | `final_conditioning_and_packing` | 电力、湿法路线水与热能及废水 | 仪表、分表、账单、批次记录和排放记录 | period; lot_id; route; electricity_quantity; wash_water_quantity; heat_quantity; energy_carrier; wastewater_quantity; retained_water; allocation_driver; net_output_mass | 优先直接批次计量；否则采用有文件依据的仪表分配和水平衡 | kWh；kg 水；MJ；kg 废水 | 仪表区间和每个最终处理批次 | 与所表示放行输出相同期间 | 每条纳入最终生产线和公用工程 | 只向 `wet_route` 分配水洗用水、干燥热能和废水；按相容路线输出归一化 | 仪表身份；账单；批次路线记录；水平衡；排放记录；分配工作表 |
| `cp_packaging_records` | `final_conditioning_and_packing` | 包装投入与准备废物 | 材料清单、采购记录、包装计数和废物记录 | packaging_material; component_mass; units_used; reusable_status; packed_output_mass; waste_mass; returned_mass; bulk_transfer_flag | 将包装采购或材料清单与已包装输出、退回和废物核对 | kg | 每个包装规格和报告期 | 与所表示已包装输出相同期间 | 每条纳入包装线 | 按材料汇总；按包装计数或测量质量分配共用组件；单独报告有文件依据的散装转移 | 供应商规格；材料清单；采购记录；废物收据；核对工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 参考产品及所有归一化行 | 参考产品净质量 = 放行总质量 - 皮重和所含包装质量；将各项已核对清单数量除以 kg 计参考产品净质量 | gross_output_mass; tare_mass; included_packaging_mass; reconciled_inventory_quantity | kg 计参考产品净质量和每 kg 参考产品清单量 | eu-pef-2021-2279 |
| `calc_moisture_conversion` | 在不同水分含量下比较的质量 | 干物质 = 湿质量 ×（1 - 湿基水分分数）；只依据记录的测量值换算，并保留原值与公式 | wet_mass; moisture_fraction; stated_basis | 干物质等效质量及已披露换算 |  |
| `calc_process_mass_balance` | 每个前景过程 | 已核对投入 = 产品 + 共产品 + 废物 + 净库存变化 + 单独量化的水分损失或增加；调查并披露未解释残差，不得强制闭合 | input masses; output masses; waste masses; inventory change; moisture measurements | 过程平衡与未解释残差 | eu-pef-2021-2279 |
| `calc_utility_intensity` | 每个公用工程行 | 归一化公用工程量 = 已核对过程公用工程量 ÷ 相容过程输出质量；载体与路线保持分开 | metered_or_allocated_utility; compatible_output_mass; carrier; route | 每过程输出或参考流的公用工程量 | eu-pef-2021-2279 |
| `calc_wet_route_water_balance` | `wet_route` | 有测量排放时废水 = 测量排放；否则为水洗投入 - 单独测量持水 - 单独测量蒸发或其他有文件依据输出 | wash_water_quantity; measured_discharge; retained_water; evaporation_or_other_output | 带方法标志的湿法路线废水量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_traceability` | 所有批次与参考流 | 在数据包中保留供应商或产地、收获年或批次期间、来料状态、已声明时的商业类型或品种、榛仁形态、放行标识和 Tiangong 参考 UUID。 | 批次追踪、放行记录和参考流元数据；产品限定信息参考 `unsd-cpc-3-0-21423` 与 `unece-ddp-04-2010` |
| `dq_measurement_consistency` | 质量、水分、公用工程与路线记录 | 使用经校准或核验仪器，保留原始读数与分配工作表，只在已声明水分基准和相容路线下比较质量。 | 校准证据、仪表记录、水分方法和计算工作表 |
| `dq_temporal_and_site_coverage` | 前景数据 | 覆盖报告期内每个纳入场址及已声明的代表批次或生产活动；披露停机、缺失区间、替代与排除。 | 场址清单、生产日历、完整性核对和缺口日志 |
| `dq_fraction_destination` | 壳和非参考榛仁组分 | 保留产品接收或废物处理证据，并且每个组分只核对一次，不得产品与废物重复。 | 客户接收证据、转移记录、废物收据和质量平衡 |
| `dq_reasoned_estimate_replacement` | 每个 `reasoned_estimate` 区间 | 只有指定记录不可得时才有条件使用该区间。首个经核验前景记录或经评审定量来源可得时即替换，并在本 PCR 进入已评审方法学前完成替换；若研究中仍使用，须标注为暂定并报告敏感性。 | 估算登记表、替换评审、支持记录或来源及敏感性结果 |
| `dq_pef_disclosure` | 发布数据集画像 | 记录解释下游使用所需的边界、分配、数据来源、数据质量、局限和建模选择。 | 与 `eu-pef-2021-2279` 对齐的数据集文件 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 输出必须使用 Hazelnuts, shelled UUID `310457e0-388d-4c3a-9090-b4bbc5288d05`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg，并填充全部必需限定信息。 | unsd-cpc-3-0-21423; unece-ddp-04-2010 |
| `val_reference_amount` | 参考流 | 扣除皮重和包装后的参考输出净质量必须精确归一化为 1 kg。 | eu-pef-2021-2279 |
| `val_route_exclusivity` | 最终调理 | 每个所表示批次必须且只能声明 `dry_route` 或 `wet_route` 之一；水洗用水、湿法路线干燥能源和废水必须不存在于 `dry_route`，且只能链接到 `wet_route`。 |  |
| `val_process_completeness` | 前景系统 | 必须表示全部三个必需过程；排除任何现场作业时，必须声明并提供其未发生的证据。 |  |
| `val_mass_and_moisture_balance` | 每个前景过程 | 必须在一致基准上核对投入、产品、共产品、废物、库存变化和量化水分变化，并披露未解释残差。 | eu-pef-2021-2279 |
| `val_fraction_exclusivity` | 壳与其他榛仁组分 | 一个实物组分按去向只能出现在产品行或废物行之一，绝不能同时出现。 | eu-pef-2021-2279 |
| `val_estimate_status` | 暂定范围 | 每个 `reasoned_estimate` 必须包含使用条件和替换触发器；在以经核验前景或经评审来源证据替换前，对已评审用途的校验结论为不充分。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 评审后为 `secondary_dataset` 或 `background_dataset`；评审前为候选前景数据包 |
| downstream_use | 需要设施门口去壳榛子生产的产品足迹、过程和生命周期模型研究，但须检查地理、时间、路线和质量代表性 |
| allowed_use | 当来料状态、来源地区、技术、最终路线、榛仁形态、质量标识、水分基准、共产品处理和包装状态匹配或经透明调整时使用 |
| excluded_use | 直接表示种植、带壳榛子、烘烤或其他进一步加工榛子产品、零售、消费，或未声明的干法与湿法最终路线混合 |
| required_metadata | PCR id 与状态；Tiangong 参考 UUID；设施与地理；报告期；来源地区；收获或批次期间；来料状态；榛仁与质量限定信息；水分方法与基准；路线；过程覆盖；共产品与废物去向；分配；包装；数据来源 |
| required_quality_disclosure | 前景与上游数据份额；仪表与秤覆盖；分配方法；质量平衡残差；缺失记录；暂定估算与敏感性；来源年代；技术、地理与时间局限 |
| update_trigger | 新的经核验前景记录；任何 `reasoned_estimate` 的替换；产地组合、作物期间、来料水分、设备、路线、质量标识、包装、共产品去向、分配基准、法规、官方标准或来源改变；或重大校验发现 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21423` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类（CPC）3.0 版》，子类 21423“榛子（去壳）” | 仅用于分类语境和类别身份 |
| `unece-ddp-04-2010` | 标准（`standard`） | 联合国欧洲经济委员会，UNECE 榛子仁营销与商业质量控制标准 DDP-04，2010 年版，当前通过文本 | 仅用于榛仁身份及质量或计量限定信息；不用于 LCI 默认量 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会建议（EU）2021/2279，关于使用环境足迹方法，附件 I 产品环境足迹方法 | 功能单位归一化、边界链接、分配层级、数据质量、披露与校验原则 |
