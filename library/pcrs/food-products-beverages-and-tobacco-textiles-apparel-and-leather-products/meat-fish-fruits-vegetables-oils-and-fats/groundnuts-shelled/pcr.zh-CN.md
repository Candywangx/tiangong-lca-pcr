---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.groundnuts-shelled
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 去壳花生

## 1. 范围与适用性

本 PCR 覆盖由 CPC 3.0 产品类别 21421 精确表示的通用去壳花生（花生仁），包括商业脱壳以及相关清理、粒度分级、挑选、批次控制和厂门准备。它支持散装或包装销售的生花生仁或干燥花生仁，但本身不声明食品等级、水分类别、花生仁尺寸、黄曲霉毒素结果、预期用途或包装形式。

本 PCR 不包括带壳花生、种用花生、烘烤或以其他方式熟制的花生、花生油、花生粉、花生粕、花生酱、花生糊、糖果制品以及厂门之后的运输、零售、使用或生命末期。只有当声明的预期用途和产品状态属于 Codex CXS 200-1995 的适用范围，并证明符合其适用质量要求时，数据集才可声称符合该标准。所有路线均保留天工通用产品流的精确身份；路线和质量差异仅通过必需限定信息表达。

前景边界始于脱壳设施接收门处已接受的带壳花生，止于准备离开设施厂门的去壳花生净重。若生产者以已经去壳的花生仁为起点，应声明该起始条件；只有在上游数据集保留被省略的脱壳路线和产品状态时，才能排除脱壳负荷。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.groundnuts-shelled |
| classification_refs | CPC 3.0：21421，Groundnuts, shelled |
| covered_products | 荚壳去除后的 Arachis hypogaea L. 生花生仁或干燥花生仁，可为整粒、半粒、破碎、按粒度分级、按等级分级、散装或包装状态，但产品仍须为去壳花生，而非进一步制造的花生产品。 |
| excluded_products | 带壳花生；种用花生；烘烤或以其他方式熟制的花生；花生油、花生粉、花生粕、花生酱、花生糊、糖果制品以及混合或配方食品。 |
| representative_product | 脱壳设施厂门处的通用去壳花生，声明实际批次水分、等级、黄曲霉毒素控制状态、净重基准和包装状态。 |
| production_route | 带壳花生接收和预清理；机械或人工脱壳及粒度分级；挑选、取样/检测和批次处置；净重称量、可选包装和发运准备。花生壳和被拒物料的替代处置路线相互排斥。 |
| market_state | 设施厂门处的散装或包装花生仁；生制或干燥状态、预期用途、水分基准、等级和包装是限定信息，而非不同参考流。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在脱壳设施厂门处为声明的预期用途供应的去壳花生。 |
| How much | 1 kg 去壳花生净重。 |
| How well | 处于声明的脱壳路线、生制/干燥状态、水分含量及基准、等级或花生仁尺寸类别、被拒物料规则、黄曲霉毒素控制状态及限值基准和包装状态。 |
| How long or cycle | 设施厂门交接时的一个声明生产批次；报告交接前已纳入的储存时长。 |
| reference_flow_link | 功能单位由通用天工产品流 `66ce8a77-8fe1-4513-910c-741aebeec043` 的恰好 1 kg 实现；除非另行要求报告干物质结果，否则按收到时净重归一化。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净重 |
| 参考产品流 | Groundnuts, shelled `66ce8a77-8fe1-4513-910c-741aebeec043` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 脱壳路线和起始条件；生制或干燥状态；水分含量、测量基准和方法；等级或花生仁尺寸类别；预期用途和适用产品规范；被拒物料定义、质量和处置；黄曲霉毒素取样、检测方法、结果、限值基准和批次决定；净重称量基准；包装类型、材料、皮重和散装/包装状态；已纳入的厂门前储存时长 |

构建前景数据包时，`必需限定信息` 中的每一项都应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息会使该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 最终去壳花生 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用经校准的毛重减去包装或容器皮重确定净重。所有清单结果按声明水分基准下的 1 kg 去壳花生净产出归一化。 |
| `moisture_as_received` | 带壳投入、中间花生仁和最终去壳花生 | 质量分数和 Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | % 和 kg | 记录水分含量、取样时间、检测方法以及质量是收到时质量还是水分校正质量。不得混用湿基质量和干物质质量。 |
| `codex_kernel_moisture` | 声称属于 CXS 200-1995 预期用途范围的批次 | 质量分数 | % | 对 CXS 200-1995 范围内拟加工后供人类食用的花生仁，核验规定的 9.0% 最大水分含量；更严格的目的地要求仍为控制要求，并应披露。 |
| `internal_mass_consistency` | 每个批次和过程 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对投入花生仁、接受花生仁、花生壳、被拒物料、粉尘或细料、样品、库存变化和最终净产出使用一致的收到时基准；单独报告任何计算的干物质平衡。 |
| `aflatoxin_result_basis` | 黄曲霉毒素控制记录 | 浓度和批次决定 | 声明的检测单位 | 记录被取样批次、取样方案、分析方法、结果、报告限、适用法律或合同限值、预期用途和接受/拒收/改作他用决定。不得从目视挑选结果推断浓度。 |
| `packaging_tare_separation` | 包装产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 从 1 kg 参考数量中排除包装皮重，并按类型和质量单独盘查包装材料。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 脱壳设施接收门处已接受的带壳花生；只有明确声明替代路线时，才允许以已去壳花生为起始投入。 |
| starting_condition_role | 厂门到厂门脱壳数据集的前景进入条件；种植、收获、晾制和交付负荷通过上游数据集或单独链接的运输表示。 |
| product_classification_scope | 精确的通用去壳花生产品类别；质量、预期用途、水分、等级、黄曲霉毒素控制和包装差异仍作为限定信息。 |
| recursive_input_rule | 若去壳花生进入再清理、再分级或重新包装过程，将其作为同类别投入记录一次并链接单独的上游数据集，不得在本前景数据包内重建其先前脱壳操作。 |
| upstream_dataset_requirement | 为带壳花生、电力、包装、供应商数据未含的运输以及输出废物或残余物的处理链接具有代表性的上游或下游数据集。保留地理、技术、水分和时间适用性。 |
| disclosure | 声明起始产品状态、供应商厂门或交付厂门约定、脱壳技术、水分和等级、批次控制路线、所有排除操作、储存时长以及是否纳入包装和出库装载。 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景脱壳操作 | 纳入从接收和预清理、脱壳和粒度分级、黄曲霉毒素控制的挑选/检测和批次处置、内部移动、净重称量、已纳入储存、可选包装、直接能源、直接排放、废物、残余物、样品和库存变化，直至设施厂门交接。 | `eu-pef-2021-2279`; `codex-cxc-22-1979`; `codex-cxc-55-2004-2025` |
| `boundary_upstream_links` | 产品和能源投入 | 只有在通过具有代表性的上游或下游数据集链接时，才能把种植、收获、晾制、外部进厂运输、发电、包装制造和外部处理留在前景过程之外；披露每项截断并论证其环境不显著性。 | `eu-pef-2021-2279` |
| `boundary_route_preservation` | 替代起始条件 | 不得把带壳接收和已去壳接收建模为同时发生的投入。为每个批次选择一条路线，并通过其上游数据集和路线限定信息保留被省略的脱壳历史。 | `unsd-cpc-3-0-2025`; `eu-pef-2021-2279` |
| `boundary_controlled_material` | 被拒花生仁、花生壳、粉尘、样品和包装不合格品 | 纳入每股受控物料的实测质量和有文件证明的处置。记录为可销售共产品的物流不得同时记录为废物；缺乏所选处置合法且满足其接收规范的证据时，被拒食品批次不得计为饲料或产品并获得抵扣。 | `codex-cxc-22-1979`; `codex-cxc-55-2004-2025`; `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_and_precleaning` | 接收和预清理 | `required` | 带壳路线始终纳入；已去壳路线应记录替代起始条件，并仅纳入适用的接收/清理操作。 | 建立批次身份、进料净重和质量状态；在脱壳前去除松散异物。 | 每 kg 转出的预清理物料。 |
| `shelling_and_size_grading` | 脱壳和粒度分级 | `required` | 带壳路线纳入；已去壳路线由上游已去壳投入数据集表示。 | 去除荚壳、分离花生仁和花生壳、去除异物并按粒度分级花生仁。 | 每 kg 产出的未最终挑选去壳花生仁。 |
| `aflatoxin_control_and_lot_disposition` | 黄曲霉毒素控制和批次处置 | `required` | 始终纳入；取样、分析、挑选技术和决定规则因批次而异。 | 检查/挑选花生仁，按要求取样和检测，确定等级和黄曲霉毒素控制决定，并隔离被拒物料。 | 每 kg 转出的已接受分级花生仁。 |
| `net_mass_packaging_and_dispatch` | 净重、包装和发运准备 | `required` | 始终纳入净重称量和厂门交接；仅包装产出纳入包装投入，仅声明时长纳入厂门前储存。 | 确定最终净产出，包装或准备散装产品，记录设施厂门处的储存和转移。 | 每 1 kg 去壳花生净产出。 |

### 过程：接收和预清理（`receiving_and_precleaning`）

#### 输入

##### 产品流

###### 接收的带壳花生（`in_shell_groundnuts_received`）

这是跨越接收门的批次特定进料花生质量。记录供应商批次、来源、交付约定、毛重、皮重、净重、水分、等级观察和接收决定。暂定范围仅在不存在代表性批次质量平衡时用于初始筛选，具有临时性；一旦获得代表性批次记录或经审查的可转移证据即应替换。

- 选定流：带壳花生
- 流属性/单位：Mass / kg
- 数量规则：进入前景边界的已接受净重实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_incoming_lot_records`
- 数量范围：暂定带壳投入筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性批次记录或经审查证据将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收和预清理电力（`precleaning_electricity`）

记录计量电力，或由设备功率和分配给批次的运行时间计算电力。该宽泛范围是无计量候选数据集的临时筛选估算，应由代表性计量或经审查的设备证据替换。

- 选定流：供应给设施的电力
- 流属性/单位：Energy / kWh
- 数量规则：分配给该批次的计量用电或计算设备用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 数量范围：暂定预清理用电筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性计量或经审查设备证据将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 预清理带壳花生（`precleaned_in_shell_groundnuts`）

按与进料批次一致的水分基准记录转入脱壳的中间质量。暂定范围是临时质量平衡筛选值，应由代表性批次记录替换。

- 选定流：预清理带壳花生
- 流属性/单位：Mass / kg
- 数量规则：预清理后的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_and_residue_mass`
- 数量范围：暂定预清理转移筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性批次质量记录将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 预清理异物和松散不合格物（`precleaning_rejects`）

按批次称量去除的石块、土壤、松散花生壳、受损花生仁、空瘪荚以及其他异物，并保留其分类和处置。该范围是刻意宽泛的临时筛选值，不是典型得率，应由代表性批次记录或经审查证据替换。

- 选定流：预清理不合格物
- 流属性/单位：Mass / kg
- 数量规则：按不合格类别和处置测得的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_and_residue_mass`
- 数量范围：暂定预清理不合格物筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性批次不合格物记录或经审查证据将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 释放到空气的预清理粉尘（`precleaning_dust_to_air`）

记录实测粉尘或有文件支持的工程估算，扣除作为废物记录的捕集粉尘。暂定范围仅适用于缺乏代表性监测的初始筛选，应由场址监测或经审查的设备特定证据替换。

- 选定流：未明确种类的颗粒物，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：排放到空气的未捕集粉尘实测值或计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dust_records`
- 数量范围：暂定预清理粉尘筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性监测或经审查设备证据将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：脱壳和粒度分级（`shelling_and_size_grading`）

#### 输入

##### 产品流

###### 转入的预清理带壳花生（`precleaned_in_shell_input`）

记录从预清理接收的质量，不重复计算上游供应。暂定范围仅支持初始质量平衡筛选，应由代表性批次转移记录替换。

- 选定流：预清理带壳花生
- 流属性/单位：Mass / kg
- 数量规则：进入脱壳的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_and_residue_mass`
- 数量范围：暂定脱壳投入筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性批次转移记录将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 脱壳和分级电力（`shelling_electricity`）

记录计量电力，或根据记录的功率和运行时间计算设备用电。该范围是宽泛的临时筛选估算，应由代表性计量或经审查设备证据替换。

- 选定流：供应给设施的电力
- 流属性/单位：Energy / kWh
- 数量规则：分配给批次的计量用电或计算设备用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 数量范围：暂定脱壳用电筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性计量或经审查设备证据将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转出的未挑选去壳花生仁（`unsorted_shelled_kernels`）

记录脱壳后、最终质量处置前离开的花生仁及其水分和粒度等级状态。暂定范围仅用于筛选，应由代表性批次转移记录替换。

- 选定流：去壳花生仁，未挑选中间产品
- 流属性/单位：Mass / kg
- 数量规则：转入控制和处置步骤的实测花生仁质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_and_residue_mass`
- 数量范围：暂定未挑选花生仁转移筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性批次转移记录将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 送往有文件证明的有益用途的花生壳（`shells_as_coproduct`）

只有当花生壳作为具有明确接收方和用途的合法指定产品或共产品离开过程时，才在此记录。对每一实测部分，本路线与 `shells_as_waste` 相互排斥。暂定范围不是典型得率，应由代表性批次记录或经审查的可转移证据替换。

- 选定流：回收花生壳
- 流属性/单位：Mass / kg
- 数量规则：销售或转移给有文件证明的有益用途的花生壳干重或收到时实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shell_and_reject_disposition`
- 数量范围：暂定回收花生壳筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性批次花生壳记录或经审查证据将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 送往废物处理或处置的花生壳（`shells_as_waste`）

仅记录未在 `shells_as_coproduct` 下记录的花生壳部分，并注明目的地和处理路线。暂定宽泛筛选值应由代表性批次记录或经审查的可转移证据替换。

- 选定流：废弃花生壳
- 流属性/单位：Mass / kg
- 数量规则：按废物目的地测得的花生壳质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shell_and_reject_disposition`
- 数量范围：暂定废弃花生壳筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性批次花生壳记录或经审查证据将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 脱壳细料和受损物料（`shelling_fines_and_damage`）

将脱壳和分级期间去除的破碎物、细料和受损物料与洁净回收花生壳分开记录。暂定范围仅适用于筛选，应由代表性批次记录替换。

- 选定流：脱壳细料和受损花生物料
- 流属性/单位：Mass / kg
- 数量规则：按物料类别和处置测得的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shell_and_reject_disposition`
- 数量范围：暂定脱壳残余物筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性批次残余物记录将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 释放到空气的脱壳和分级粉尘（`shelling_dust_to_air`）

记录实测粉尘或有文件支持的工程估算，扣除捕集物料。暂定范围用于缺乏代表性监测的初始筛选，应由场址监测或经审查的设备特定证据替换。

- 选定流：未明确种类的颗粒物，排放到空气
- 流属性/单位：Mass / kg
- 数量规则：排放到空气的未捕集粉尘实测值或计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dust_records`
- 数量范围：暂定脱壳粉尘筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性监测或经审查设备证据将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：黄曲霉毒素控制和批次处置（`aflatoxin_control_and_lot_disposition`）

#### 输入

##### 产品流

###### 接受控制的未挑选去壳花生仁（`unsorted_kernels_input`）

记录进入检查、挑选、取样/检测和处置步骤的批次质量和身份。暂定范围是筛选辅助值，应由代表性批次记录替换。

- 选定流：去壳花生仁，未挑选中间产品
- 流属性/单位：Mass / kg
- 数量规则：进入控制步骤的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aflatoxin_grade_and_lot_decision`
- 数量范围：暂定控制步骤投入筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性批次记录将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 挑选和控制电力（`control_electricity`）

记录挑选、风选和控制设备的计量电力或按设备运行时间计算的电力。暂定范围应由代表性计量或经审查设备证据替换。

- 选定流：供应给设施的电力
- 流属性/单位：Energy / kWh
- 数量规则：分配给批次的计量用电或计算设备用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 数量范围：暂定控制用电筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性计量或经审查设备证据将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已接受分级花生仁（`accepted_graded_kernels`）

记录已接受用于声明预期用途的花生仁质量、水分、等级及其关联的黄曲霉毒素控制决定。暂定范围仅用于初始筛选，应由代表性批次记录替换。

- 选定流：去壳花生仁，已接受分级中间产品
- 流属性/单位：Mass / kg
- 数量规则：为声明预期用途接受的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aflatoxin_grade_and_lot_decision`
- 数量范围：暂定已接受花生仁筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性批次记录将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作为合法指定产品改作他用的被拒物料（`rejected_material_as_product`）

只有在证据表明被拒部分满足声明的非食品或其他目的地的法律和合同规范时，才在此记录。对每一部分，本路线与 `rejected_material_as_waste` 相互排斥；不得仅因其被食品用途拒收就假定可作为饲料。该宽泛范围具有临时性，应由代表性处置记录或经审查证据替换。

- 选定流：改作指定非食品用途的花生物料
- 流属性/单位：Mass / kg
- 数量规则：具有规范、必要时的分析放行、接收方和预期用途文件的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shell_and_reject_disposition`
- 数量范围：暂定合法改作他用筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性处置记录或经审查证据将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 被拒花生仁和受控物料（`rejected_material_as_waste`）

按拒收原因和处理路线记录目视拒收、分析不合格、受污染、等级不符、取样或其他非产品物料，并排除在 `rejected_material_as_product` 下记录的部分。该宽泛范围具有临时性，应由代表性处置记录或经审查证据替换。

- 选定流：被拒花生仁和受控物料
- 流属性/单位：Mass / kg
- 数量规则：按拒收原因和有文件证明的处理或处置目的地测得的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shell_and_reject_disposition`
- 数量范围：暂定被拒物料筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性处置记录或经审查证据将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：净重、包装和发运准备（`net_mass_packaging_and_dispatch`）

#### 输入

##### 产品流

###### 转入厂门准备的已接受分级花生仁（`accepted_kernels_for_dispatch`）

记录转入最终称量和厂门准备的质量，并关联到已接受的批次控制记录。暂定范围仅用于筛选，应由代表性批次记录替换。

- 选定流：去壳花生仁，已接受分级中间产品
- 流属性/单位：Mass / kg
- 数量规则：最终净重称量前的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_net_mass_and_packaging`
- 数量范围：暂定最终转移筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性批次记录将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级、次级和三级包装材料（`packaging_materials`）

按类型、质量、相关时的再生含量声明和包装层级记录每种包装材料；只有声明为无包装散装路线时才使用零值。该宽泛范围是临时筛选估算，应由包装物料清单、皮重记录或经审查证据替换。

- 选定流：按材料和层级划分的包装材料
- 流属性/单位：Mass / kg
- 数量规则：分配给产出批次的包装实测质量或物料清单数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_net_mass_and_packaging`
- 数量范围：暂定包装筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至包装物料清单、皮重记录或经审查证据将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装、储存和发运电力（`dispatch_electricity`）

记录已纳入的包装、厂门前储存和发运准备的计量或计算电力。该宽泛范围具有临时性，应由代表性计量或经审查设备证据替换。

- 选定流：供应给设施的电力
- 流属性/单位：Energy / kWh
- 数量规则：分配给批次和声明储存时长的计量用电或计算设备用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 数量范围：暂定发运用电筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性计量或经审查设备证据将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 设施厂门处的 Groundnuts, shelled（`groundnuts_shelled_reference_output`）

这是最终批次决定和净重称量后的通用散装或包装去壳花生产出。其限定信息在不改变所选天工流身份的情况下保留产品状态。

- 选定流：Groundnuts, shelled `66ce8a77-8fe1-4513-910c-741aebeec043`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `calc_reference_normalization` 归一化后恰好 1 kg 净重
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：声明水分和包装状态下的 1 kg 去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_final_net_mass_and_packaging`

##### 废物流

###### 包装不合格物和产品洒落（`packaging_rejects_and_spill`）

按材料和目的地分别记录包装废料与产品洒落。该宽泛范围是临时筛选估算，应由代表性批次记录或经审查证据替换。

- 选定流：包装不合格物和花生洒落
- 流属性/单位：Mass / kg
- 数量规则：按材料类别和处置测得的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终去壳花生净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_net_mass_and_packaging`
- 数量范围：暂定包装不合格物筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 最终去壳花生净产出；仅使用至代表性批次记录或经审查证据将其替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 多产出前景操作 | 优先通过细分独立计量的操作避免分配；只有明确论证被替代功能和数据集时才扩展系统。不得仅依据废物处置主张建立避免产品抵扣。 | `eu-pef-2021-2279` |
| `allocation_shell_route` | 花生壳 | 当花生壳没有有文件证明的产品功能时，将其作为废物并建模其处理，不进行共产品分配。当花生壳作为指定共产品销售或转移时，仅将该实测部分记录为产品，并对共享负荷采用 PEF 层级。 | `eu-pef-2021-2279` |
| `allocation_shared_burdens` | 细分后剩余的共享负荷 | 只有当物理关系反映投入、产出和功能之间的因果关系时才采用物理分配；否则采用基于同时期、地理和时间代表性价格的经济分配。报告方法、分配因子、价格基准和敏感性。 | `eu-pef-2021-2279` |
| `allocation_rejected_material` | 被拒花生仁和受控物料 | 除非记录合法替代规范、必要时的分析放行、接收方和功能，否则不得给被声明用途拒收的物料分配共产品抵扣。对每一实测部分，产品改作他用与废物处理相互排斥。 | `codex-cxc-22-1979`; `codex-cxc-55-2004-2025`; `eu-pef-2021-2279` |
| `allocation_mass_balance` | 所有批次产出 | 保留与负荷分配相独立的物理质量平衡：在同一水分基准下，投入质量等于已接受花生仁、花生壳、被拒物料、粉尘/细料、样品、库存变化和实测损失之和。分配不得改变这些物理数量。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_incoming_lot_records` | `receiving_and_precleaning` | 进厂带壳花生 | 地磅、接收、供应商、水分和检查记录 | lot_id; supplier_id; origin; delivery_basis; gross_mass; tare_mass; net_mass; moisture_value; moisture_basis; method; grade_observation; acceptance_decision; timestamp | 经校准的毛重减皮重称量，关联批次身份，并进行代表性水分取样和接收检查。 | kg; % | 每个进厂批次 | 整个声明生产期 | 进入所代表设施或抽样总体的所有供应批次 | 按批次汇总已接受净重；被拒批次单独保留；未经校正不得合并不同水分基准。 | 校准记录；取样记录；供应商文件；签署的接收决定。 |
| `cp_intermediate_and_residue_mass` | `receiving_and_precleaning; shelling_and_size_grading` | 中间转移和预清理残余物 | 批次秤、料斗、库存和不合格物日志 | lot_id; process_id; material_class; gross_mass; tare_mass; net_mass; moisture_value; destination; timestamp | 称量转移和分离物料，或核对经校准的批次秤和库存变化。 | kg; % | 每批次或生产运行 | 整个声明生产期 | 所代表的所有生产线和班次 | 在一致水分基准下按批次、过程和物料类别汇总；保留库存变化。 | 秤校准；批次日志；库存核对；处置记录。 |
| `cp_energy_records` | `receiving_and_precleaning; shelling_and_size_grading; aflatoxin_control_and_lot_disposition; net_mass_packaging_and_dispatch` | 按操作划分的电力 | 电表、分表、设备功率和运行时间记录 | meter_id; start_reading; end_reading; equipment_id; rated_or_measured_power; operating_time; lot_id; allocation_driver | 优先使用经校准的分表；否则用功率乘以记录运行时间计算，并与设施总表核对。 | kWh | 每批次/运行或电表间隔 | 覆盖声明运行变异的代表性期间 | 所有纳入设备和所代表班次 | 扣除排除负荷；按记录运行时间或其他因果驱动因子分配共享用电；按已接受净产出归一化。 | 电表校准；公用事业账单核对；设备日志；分配工作表。 |
| `cp_shell_and_reject_disposition` | `shelling_and_size_grading; aflatoxin_control_and_lot_disposition` | 花生壳、被拒物料和受控物料 | 批次秤、挑选日志、检测放行、销售/转移和废物记录 | lot_id; material_class; rejection_reason; gross_mass; tare_mass; net_mass; moisture_basis; analytical_release; recipient; intended_use; product_or_waste_route; treatment_destination; timestamp | 称量每股隔离物流，并将其关联到相互排斥的产品改作他用或废物处置证据。 | kg | 每批次和每次装运 | 整个声明生产期 | 所有花生壳、不合格物、样品和受控物料目的地 | 按批次、类别和路线汇总；禁止同一部分同时出现在产品与废物总量。 | 秤校准；实验室结果；法律/合同规范；转移单；废物联单。 |
| `cp_aflatoxin_grade_and_lot_decision` | `aflatoxin_control_and_lot_disposition` | 花生仁等级和黄曲霉毒素控制决定 | 取样、实验室、分选机和放行/拒收记录 | lot_id; intended_use; grade_or_size_class; sampling_plan; sample_mass; laboratory_id; analytical_method; result; unit; reporting_limit; applicable_limit; limit_source; sort_passes; accepted_mass; rejected_mass; decision; timestamp | 采用声明的代表性取样方案和经验证分析方法；将结果和目视/电子挑选记录关联到精确批次及处置。 | 声明的浓度单位；kg | 每个受控批次和每次复检 | 整个声明生产期 | 作为已接受产出表示的每个批次 | 不得跨独立接受/拒收批次平均以掩盖不合格结果；只在批次处置后汇总质量。 | 交接链；认可或具备其他资格的实验室记录；方法标识；分选机日志；签署的批次放行。 |
| `cp_dust_records` | `receiving_and_precleaning; shelling_and_size_grading` | 捕集和未捕集颗粒物 | 烟道/区域监测、除尘器质量、维护和运行记录 | process_id; lot_id; monitoring_method; concentration_or_mass; air_volume; captured_dust_mass; operating_time; control_efficiency_basis | 可行时测量直接释放；否则由监测风量和浓度或有文件支持的设备模型计算，并扣除作为废物记录的捕集物料。 | kg；辅助浓度和风量单位 | 代表性监测事件和每个生产汇总间隔 | 设备和控制状态的代表性期间 | 所有纳入的产尘和控制设备 | 按过程和期间计算释放质量；避免重复计算捕集粉尘和空气排放；按已接受产出归一化。 | 监测报告；校准；除尘器日志；维护记录；计算工作表。 |
| `cp_final_net_mass_and_packaging` | `net_mass_packaging_and_dispatch` | 最终产出、包装和厂门前储存 | 包装线、秤、物料清单、仓库和发运记录 | lot_id; output_gross_mass; tare_mass; net_mass; moisture_value; grade; package_type; packaging_material; packaging_mass; bulk_or_packaged; storage_start; storage_end; dispatch_time | 经校准的毛重减皮重称量；将包装件数和材料规范与包装消耗及仓库移动核对。 | kg；小时或日 | 每个包装或散装批次及发运 | 整个声明生产期 | 所有最终产出和包装配置 | 按合格批次汇总最终净重；按材料和层级汇总包装；计算已纳入储存时长；按 1 kg 净产出归一化。 | 秤校准；包装规范；物料清单；仓库记录；发运文件。 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_mass` | 进厂、中间和最终称量物料 | net_mass_kg = gross_mass_kg - tare_mass_kg；包装皮重绝不属于最终产品质量。 | gross_mass; tare_mass | net_mass_kg | `codex-cxs-200-1995` |
| `calc_reference_normalization` | 所有清单行 | normalized_amount = attributable_period_or_lot_amount / accepted_final_net_mass_kg。分母仅含按声明预期用途和水分基准放行的产出。 | attributable flow amount; accepted final net mass | 每 1 kg 去壳花生净产出的数量 | `eu-pef-2021-2279` |
| `calc_moisture_consistency` | 物理质量平衡 | 在相同收到时基准上比较质量；需要干物质比较时，dry_mass = as_received_mass × (1 - moisture_fraction)，使用匹配的代表性样品。 | as-received mass; moisture fraction; sampling time | 披露的干物质比较 | `codex-cxs-200-1995`; `codex-cxc-22-1979` |
| `calc_lot_mass_balance` | 每个过程和完整前景路线 | input_mass = accepted_output + product_coproducts + waste_and_rejects + direct_particulate_mass + samples + closing_inventory - opening_inventory + unexplained_difference。报告无法解释的差异并调查重大偏差。 | lot inputs; outputs; shells; rejects; dust/fines; samples; inventories | 过程和路线质量平衡结果 | `eu-pef-2021-2279` |
| `calc_energy_assignment` | 共享电力 | 可行时直接分配计量用电；否则采用记录的设备运行时间、实测功率或其他有文件支持的因果驱动因子，并将分配总量与设施电表核对。 | meter readings; power; operating time; production records | 分配给批次和过程的 kWh | `eu-pef-2021-2279` |
| `calc_mutually_exclusive_routes` | 花生壳和被拒物料 | 对每个物料部分，product_route_mass × waste_route_mass 不得表示同一物理部分；路线总量应与隔离实测质量核对，并带有目的地证据。 | segregated mass; route flag; transfer or waste record | 无重叠的产品和废物路线质量 | `codex-cxc-22-1979`; `codex-cxc-55-2004-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_identity_and_qualifiers` | 最终产出 | 保留精确的通用天工流 UUID，并声明脱壳路线、起始条件、生制/干燥状态、水分及基准、等级、预期用途/规范、黄曲霉毒素控制记录、被拒物料处置、净重基准、包装和已纳入储存时长。 | 产品规范；批次记录；参考流元数据；发运文件。 |
| `dqr_lot_traceability` | 所有质量和控制记录 | 保持从进厂批次到中间物流、花生壳和不合格物分配、取样/检测、最终净重及目的地记录的可追溯联系。 | 批次谱系；时间戳；交接链；核对工作表。 |
| `dqr_temporal_and_technological_representativeness` | 前景数据 | 覆盖声明的代表性生产期以及相关季节、供应商、等级、水分、设备、班次和包装变异；披露排除项和异常运行条件。 | 抽样方案；生产日历；设备清单；覆盖声明。 |
| `dqr_measurement_quality` | 质量、水分、能源和分析结果 | 使用经校准或验证的仪器，并保留单位、方法标识、校准状态、取样程序、相关时的检出/报告限以及从原始数据到汇总数据的计算。 | 校准证书；实验室报告；电表记录；计算文件。 |
| `dqr_aflatoxin_control` | 每个已接受批次 | 保留适用限值来源、预期用途基准、取样方案、分析方法、结果、报告限和签署的批次决定；不得把目视挑选表示为定量黄曲霉毒素结果。 | 实验室结果；取样记录；适用法规或合同；批次放行。 |
| `dqr_completeness_and_cutoffs` | 前景清单 | 纳入跨越声明边界的所有物料和能源投入、直接排放、产品产出、废物、花生壳、不合格物、样品和库存变化；披露并论证每项截断。 | 完整性检查表；质量和能源核对；截断登记。 |
| `dqr_reasoned_estimate_replacement` | 每个 `reasoned_estimate` 范围 | 只有当前景记录和可靠可转移定量证据均不可得时，才将范围作为临时筛选指导。披露其使用，并在代表性批次/期间记录、经审计供应商证据、设备测量或经审查外部证据可得时立即替换；不得将其表示为典型或允许范围。 | 估算登记；适用性声明；替换行动和触发记录。 |
| `dqr_source_representativeness` | 链接的上游和下游数据集 | 记录地理、时间、技术、产品状态、水分基准和分配兼容性；在更具代表性的数据集可得时替换重大代理。 | 数据集元数据；适用性评估；代理替换日志。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求产品流 UUID `66ce8a77-8fe1-4513-910c-741aebeec043`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg；拒绝以替代流或更特定流作为本 PCR 参考身份。 | `unsd-cpc-3-0-2025` |
| `validate_required_qualifiers` | 最终数据集 | 若缺少脱壳路线/起始条件、生制或干燥状态、水分及基准、等级、预期用途/规范、被拒物料规则、黄曲霉毒素控制详情、净重基准、包装状态或已纳入储存时长，则不符合要求。 | `codex-cxs-200-1995`; `codex-cxc-22-1979`; `codex-cxc-55-2004-2025` |
| `validate_route_exclusivity` | 替代投入和物料处置 | 核验每批次只有一条起始路线，并核验每一实测花生壳或被拒物料部分只出现在一条产品改作他用路线或废物路线。出现同时重复路线或无依据的有益用途抵扣时失败。 | `codex-cxc-22-1979`; `codex-cxc-55-2004-2025`; `eu-pef-2021-2279` |
| `validate_net_mass_and_moisture` | 参考数量和物理平衡 | 核验经校准的毛重减皮重净重、一致水分基准和 1 kg 归一化。若声称适用 CXS 200-1995，核验花生仁水分不超过 9.0%，并披露任何更严格目的地限值。 | `codex-cxs-200-1995` |
| `validate_aflatoxin_control` | 已接受和被拒批次 | 核验可追溯取样方案、分析方法、结果、单位、报告限、适用限值及预期用途基准和批次决定。若以目视观察作为数值结果，或将不合格批次用于无依据目的地，则失败。 | `codex-cxc-22-1979`; `codex-cxc-55-2004-2025` |
| `validate_mass_balance` | 每个过程和完整路线 | 重新计算收到时质量平衡，以及报告时的干物质平衡。要求表示花生壳、不合格物、粉尘/细料、样品和库存变化，并要求调查和披露重大无法解释差异。 | `eu-pef-2021-2279` |
| `validate_allocation_and_cutoff` | 多产出建模和排除项 | 核验 PEF 分配层级、分配因子和价格/物理基准，并确认每项截断均明确且有论证。负荷分配不得改变物理数量。 | `eu-pef-2021-2279` |
| `validate_packaging` | 散装和包装路线 | 核验散装/包装限定信息、包装类型和材料、包装质量以及皮重排除。包装路线缺少包装清单，或无包装路线存在无法解释的包装时失败。 | `codex-cxs-200-1995`; `eu-pef-2021-2279` |
| `validate_reasoned_estimates` | 暂定定量范围 | 核验每项 `reasoned_estimate` 均标为临时筛选指导，仅在其声明的无数据条件下使用，不用于声称典型或允许性能，并关联替换触发器。 |  |
| `validate_data_quality` | 数据集发布画像 | 在数据包用作二手或背景数据集前，核验批次可追溯性、时间和技术覆盖、校准和分析证据、上游数据集代表性、完整性以及已披露限制。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 通用去壳花生脱壳、控制和厂门准备的前景生产数据包，并支持下游 process/lifecyclemodel 投影。 |
| downstream_use | 经审查、具有代表性的上游链接和有文件证明的分配后，可作为 `secondary_dataset`；`background_dataset`。 |
| allowed_use | 需要合格设施厂门去壳花生投入的产品足迹或生命周期模型，且路线、水分、等级、黄曲霉毒素控制状态、被拒物料处置、净重和包装相容。 |
| excluded_use | 未限定地替代带壳花生、种用花生、烘烤/熟制花生、花生油或其他制造花生产品；功能、边界、质量和数据代表性不等效的比较性声明；食品安全认证。 |
| required_metadata | 地理；设施和技术范围；期间；脱壳路线和起始条件；进料来源/交付基准；生制/干燥状态；水分值及基准；等级；预期用途/规范；黄曲霉毒素取样/方法/结果/限值/决定；净重方法；花生壳/不合格物路线；包装清单；储存时长；分配；截断；链接数据集版本。 |
| required_quality_disclosure | 覆盖和取样；校准和实验室能力；批次谱系；质量/能源核对；推理估算及替换状态；代理；不确定性；被拒批次；异常条件；限制。 |
| update_trigger | 产品流身份、CPC 范围、脱壳或挑选技术、代表性水分/等级组合、黄曲霉毒素规则或取样方法、预期用途限值、花生壳/不合格物处置、包装配置、能源结构、分配基准、设施覆盖发生变化，或出现可替换推理估算或重大代理的证据。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《产品总分类（CPC）3.0 版解释性说明》，2025 年 6 月 30 日，子类 21421“Groundnuts, shelled”。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期：2026-08-11）。 | 通用产品类别身份，以及与带壳花生和进一步制造产品的区分。 |
| `codex-cxs-200-1995` | `standard` | Codex Alimentarius，CXS 200-1995，《花生标准》。https://www.fao.org/input/download/standards/63/CXS_200e.pdf（检索日期：2026-08-11）。 | 在其预期用途范围内的产品定义、花生仁水分要求、质量/异物控制、包装和批次信息。 |
| `codex-cxc-22-1979` | `standard` | Codex Alimentarius，CXC 22-1979，《花生卫生操作规范》。https://workspace.fao.org/sites/codex/Standards/CXC%2022-1979/CXC_022e.pdf（检索日期：2026-08-11）。 | 商业脱壳过程分解、预清理、脱壳/粒度分级、挑选、水分安全处理、批次接受/拒收、储存和可追溯性。 |
| `codex-cxc-55-2004-2025` | `standard` | Codex Alimentarius，CXC 55-2004，《预防和降低花生黄曲霉毒素污染操作规范》，2025 年修订。https://workspace.fao.org/sites/codex/Standards/CXC%2055-2004/CXC_055e.pdf（检索日期：2026-08-11）。 | 黄曲霉毒素控制阶段、取样/检测和批次控制证据、隔离和处置保障。 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会，2021 年 12 月 15 日委员会建议（EU）2021/2279，附件 I《产品环境足迹方法》。ELI：http://data.europa.eu/eli/reco/2021/2279/oj（检索日期：2026-08-11）。 | 功能单位和参考流、生命周期清单边界、分配层级、截断披露、数据采集、数据质量、代表性和核验原则。 |
