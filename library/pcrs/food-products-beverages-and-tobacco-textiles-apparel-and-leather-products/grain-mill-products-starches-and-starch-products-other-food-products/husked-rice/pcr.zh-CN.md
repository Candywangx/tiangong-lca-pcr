---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.husked-rice
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 去壳稻米

## 1. 范围与适用性

本 PCR 适用于以稻谷为原料，经清理并去除稻壳、同时以保留糠层为正常产品状态的非蒸谷去壳稻米前景数据包。范围包括稻谷接收与清理、脱壳与产品分离，以及在所选碾米厂或工厂门口之前发生且已声明的调质、储存或包装。上游水稻种植以及向声明起始门口的运输采用关联上游数据集表示，不在前景过程中重复构建。

本 PCR 不适用于保留稻壳的未去壳稻谷、不再保留全部糠层或胚芽的半精米或精米、有意抛光的稻米、蒸谷米、熟制米、米粉或其他深加工稻米食品。脱壳和搬运导致的少量非有意糠层损失本身不会使产品变成精米，但有意碾白或抛光不在本 PCR 范围内。

### 产品与技术说明

本库采用的规范中文产品名称为**去壳稻米**。所选 Tiangong 参考产品流使用中文本地化名称**“去壳的稻谷”**；该数据库措辞与同一 UUID 支持的 `Husked rice` 身份绑定，不得将其解释为仍保留稻壳的未去壳稻谷。Codex CXS 198-1995 将 husked rice 定义为仅去除稻壳的稻米，并将其与稻谷及精米明确区分。因此，符合本 PCR 的数据包必须声明脱壳状态，且不得把参考产品范围扩大到未去壳稻谷或半精米/精米。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.husked-rice |
| classification_refs | CPC 3.0: 23162 — Husked rice |
| covered_products | 由稻谷仅去除稻壳得到的非蒸谷稻米籽粒；通常保留糠层的糙米或砻谷米；位于声明碾米厂/工厂门口的散装或包装产品 |
| excluded_products | 保留稻壳的稻谷；半精米或精米；有意抛光稻米；蒸谷米；熟制米；米粉及其他深加工稻米食品 |
| representative_product | 市售非蒸谷去壳稻米，对应 Tiangong 中文流名“去壳的稻谷” |
| production_route | 稻谷接收与清理 → 机械脱壳 → 分离去壳稻米与稻壳 → 条件性调质/储存 → 条件性包装 |
| market_state | 声明的碾米厂或工厂门口；散装或包装；声明水分、粒型/品种、产地、等级、调质状态和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供已去除稻壳且通常保留糠层的市售非蒸谷去壳稻米 |
| How much | 1 kg 净去壳稻米 |
| How well | 满足声明的产品规格及适用法律/合同质量限值；声明水分和杂质基准；未经有意碾白或抛光 |
| How long or cycle | 声明碾米厂/工厂门口的一个生产批次；该质量产品无使用期功能 |
| reference_flow_link | `dehusking_and_separation` 的 1 kg 净合格输出；若声明后续门口，则为最后纳入的调质/包装过程输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Husked rice `f762700e-8463-40fa-a164-0ecd28c744d6` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 脱壳状态；声明门口；水分含量及测量基准；已知时的稻种/品种或粒型；地理产地；生产技术；调质/干燥状态；散装或包装状态；产品等级及适用规格；生产期间 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告不含包装的去壳稻米净质量，并将前景清单归一化为恰好 1 kg 合格参考产品。 |
| `moisture_declaration` | 参考产品和稻谷输入 | 质量分数 | % m/m | 按稻谷接收状态和去壳稻米生产状态测量或记录水分。不得将商业参考质量默默转换为干物质；只有比较需要时才另行提供干物质换算。 |
| `codex_quality_basis` | 声称符合 Codex 的直接食用产品 | 质量分数 | % m/m | 只有在数据集声明采用该产品/规格基准时，才应用 Codex 15% m/m 最大水分以及适用于去壳稻米的杂质限值；否则声明所依据的市场规格。 |
| `energy_conversion` | 电力和热能 | 能量 | kWh or MJ | 保留计量单位和换算因子。仅以 1 kWh = 3.6 MJ 进行单位换算，不得据此认为电力和燃料在环境意义上等同。 |
| `mass_balance_basis` | 稻谷、去壳稻米、稻壳、拒收物、粉尘和库存变化 | 质量 | kg | 所有测量采用一致的水分和时间基准。库存期初/期末及水分变化对过程质量平衡有实质影响时必须记录。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在所选碾米厂/工厂门口接收的保留稻壳稻谷；声明供应商/产地、接收质量、水分、杂质状态和交付期间 |
| starting_condition_role | 前景转化的上游产品输入；种植与场外运输负荷由关联上游数据集提供 |
| product_classification_scope | 输出参考产品为 CPC 3.0 23162 Husked rice；该分类引用在本 PCR 中不包括稻谷或碾白/精制稻米 |
| recursive_input_rule | 进入已纳入调质、储存、混配或包装步骤的外购/调入去壳稻米作为独立上游产品输入记录，不递归生成其脱壳清单 |
| upstream_dataset_requirement | 关联在地理和时间上有代表性的稻谷供应数据集；采购电力、燃料、包装、运输及废物处理流跨越所选边界时分别关联相应数据集 |
| disclosure | 声明起始门口、输出门口、纳入操作、外包操作、内部转移、水分基准、库存变化、共产品去向、包装状态及相对默认路线的任何偏离 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_paddy_start` | 前景起始边界 | 前景转化从保留稻壳的接收稻谷开始；上游种植与场外稻谷运输保留在关联上游数据集中。 | `codex-cxs-198-1995-rice` |
| `boundary_required_operations` | 必需前景操作 | 纳入稻谷接收/清理和脱壳/分离。纳入归属于这些操作的全部现场能源、材料输入、稻壳、拒收物、粉尘和直接测量排放。 |  |
| `boundary_conditional_operations` | 调质、储存和包装 | 只有在声明输出门口之前发生时才纳入干燥、通风、储存、混配和包装；披露被省略或外包的操作，若仍在研究边界内则关联其数据集。 |  |
| `boundary_product_exclusions` | 产品身份 | 从参考产品过程中排除有意去除糠层/胚芽、碾白、抛光、蒸谷、熟制和制粉。 | `codex-cxs-198-1995-rice` |
| `boundary_recursive_input` | 同类别产品输入 | 将外部供应的去壳稻米作为适用下游步骤的上游输入记录，并阻止递归重建其脱壳负荷。 |  |
| `boundary_coproducts_and_waste` | 稻壳、回收稻米、拒收物和粉尘 | 测量全部输出组分，并将每一去向分类为共产品、废物、内部循环、处理或处置；不得因某组分没有收入而将其省略。 | `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `paddy_receipt_and_cleaning` | 稻谷接收与清理 | `required` | 从稻谷开始的脱壳路线始终纳入 | 前景接收、称量、筛分、风选和去除杂质 | 转入脱壳的清洁稻谷 kg |
| `dehusking_and_separation` | 脱壳与分离 | `required` | 始终纳入 | 前景去除稻壳并分离去壳稻米、稻壳和拒收物 | 1 kg 净合格去壳稻米输出 |
| `conditioning_and_storage` | 调质与储存 | `conditional` | 声明输出门口之前发生干燥、通风、缓苏、储存或混配时纳入 | 前景调质和库存持有 | 放行调质去壳稻米 kg |
| `packaging` | 包装 | `conditional` | 产品在声明输出门口之前包装时纳入 | 将产品包装为声明市场形态 | 1 kg 净包装去壳稻米，参考质量不含包装 |

### 过程：稻谷接收与清理（`paddy_receipt_and_cleaning`）

#### 输入

##### 产品流

###### 接收的保留稻壳稻谷（`paddy_rice_input`）

记录进入前景的全部稻谷，包括供应商/产地、批次、接收水分、实测质量和库存转移。该流不是参考产品。

- 选定流：Paddy rice
- 流属性/单位：Mass / kg
- 数量规则：经记录库存变化调整后的实测净接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净去壳稻米参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_paddy_receipts`
- 数量范围：暂定稻谷至去壳稻米质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.10
  - 上限：1.70
  - 单位：kg 稻谷/kg 去壳稻米
  - 基准：每 1 kg 净去壳稻米输出的接收稻谷质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收与清理采购电力（`cleaning_electricity`）

记录进料、输送、筛分、风选和清理所用的计量或设备分表电力。

- 选定流：Electricity, supplied to the facility
- 流属性/单位：Energy / kWh
- 数量规则：归属于接收与清理的实测电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净去壳稻米参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy_cleaning`
- 数量范围：暂定清理电力筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kWh/kg 去壳稻米
  - 基准：每 1 kg 净去壳稻米输出的电力
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入脱壳的清洁稻谷（`cleaned_paddy_output`）

根据实测接收量、清除杂质、粉尘、水分变化和库存变化计算内部转移。不得将该内部转移计作共产品。

- 选定流：Cleaned paddy rice
- 流属性/单位：Mass / kg
- 数量规则：转入 `dehusking_and_separation` 的计算质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净去壳稻米参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_paddy_receipts`
- 来源：`mass-balance-identity`
- 数量范围：暂定清洁稻谷得率筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.85
  - 上限：1.00
  - 单位：kg/kg 接收稻谷
  - 基准：每 kg 接收稻谷转入的清洁稻谷
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 清除的石块、秸秆、土壤及其他杂质（`cleaning_rejects`）

测量由筛分、去石、磁选或人工分选清除的拒收物，并记录处理或处置去向。

- 选定流：Grain-cleaning rejects
- 流属性/单位：Mass / kg
- 数量规则：按去向实测拒收物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 接收稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_outputs_cleaning`
- 数量范围：暂定清理拒收物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.15
  - 单位：kg/kg 接收稻谷
  - 基准：每 kg 接收稻谷的清理拒收物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：脱壳与分离（`dehusking_and_separation`）

#### 输入

##### 产品流

###### 清洁稻谷输入（`cleaned_paddy_input`）

记录来自清理过程的实测内部转移，并与上一过程输出核对一致。

- 选定流：Cleaned paddy rice
- 流属性/单位：Mass / kg
- 数量规则：实测或核对后的内部转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净去壳稻米参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dehusking_mass_outputs`
- 数量范围：暂定清洁稻谷输入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.10
  - 上限：1.70
  - 单位：kg/kg 去壳稻米
  - 基准：每 1 kg 净去壳稻米输出的清洁稻谷输入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 脱壳与分离采购电力（`dehusking_electricity`）

记录砻谷机、分离设备、风选、输送及相关控制系统用电。

- 选定流：Electricity, supplied to the facility
- 流属性/单位：Energy / kWh
- 数量规则：归属于脱壳与分离的实测电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净去壳稻米参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy_dehusking`
- 数量范围：暂定脱壳电力筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：0.20
  - 单位：kWh/kg 去壳稻米
  - 基准：每 1 kg 净去壳稻米输出的电力
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 去壳稻米参考产品（`husked_rice_output`）

记录分离后的净合格去壳稻米。该产品仅去除稻壳；有意去除糠层或胚芽不在范围内。

- 选定流：Husked rice `f762700e-8463-40fa-a164-0ecd28c744d6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰好 1 kg 净合格参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`codex-cxs-198-1995-rice`
- 数量范围：参考流归一化恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 参考流
  - 基准：每 1 kg 参考流的净合格去壳稻米
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 分离稻壳（`rice_husk_output`）

测量分离稻壳，并声明其出售、内部使用、无偿转移、处理或处置去向。共产品或废物分类依据记录的去向和所适用研究规则确定。

- 选定流：Rice husk
- 流属性/单位：Mass / kg
- 数量规则：按去向实测稻壳质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净去壳稻米参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_outputs_dehusking`
- 数量范围：暂定稻壳输出质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.10
  - 上限：0.50
  - 单位：kg/kg 去壳稻米
  - 基准：每 1 kg 净去壳稻米输出的分离稻壳
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 碎米、细料和不合格稻米（`rice_fines_and_rejects`）

将不合格稻米组分与稻壳分开测量，并记录回收、返工、饲用、处理或处置去向。

- 选定流：Rice fines and off-specification kernels
- 流属性/单位：Mass / kg
- 数量规则：按材料类别和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净去壳稻米参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_outputs_dehusking`
- 数量范围：暂定细料与拒收物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.15
  - 单位：kg/kg 去壳稻米
  - 基准：每 1 kg 净去壳稻米输出的细料和拒收物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排入空气的未捕集颗粒物（`particulate_to_air`）

脱壳或风选直接向空气排放时纳入本行。采用烟道/环境测量或明确记录的排放计算；过滤器捕集物仍作为废物输出，不作为基本流排放。

- 选定流：Particulate matter, to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或根据采集运行记录和声明因子计算排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净去壳稻米参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 数量范围：暂定颗粒物排放筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.01
  - 单位：kg/kg 去壳稻米
  - 基准：每 1 kg 净去壳稻米输出的未捕集颗粒物排放
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：调质与储存（`conditioning_and_storage`）

#### 输入

##### 产品流

###### 进入调质或储存的去壳稻米（`conditioning_rice_input`）

记录内部转移或单独购入的去壳稻米。外购同类别输入必须保留其上游数据集，不得视为内部生产。

- 选定流：Husked rice
- 流属性/单位：Mass / kg
- 数量规则：按批次实测输入质量和来源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行调质去壳稻米
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_mass_and_moisture`

###### 干燥、通风、输送和储存电力（`conditioning_electricity`）

调质或储存在声明输出门口之前发生时纳入。

- 选定流：Electricity, supplied to the facility
- 流属性/单位：Energy / kWh
- 数量规则：归属于所纳入批次和储存期间的实测电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行调质去壳稻米
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy_conditioning`
- 数量范围：暂定调质电力筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.30
  - 单位：kWh/kg 调质去壳稻米
  - 基准：每 kg 放行产品的调质与储存电力
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 采购热能或燃料（`conditioning_thermal_energy`）

采用热力干燥时纳入。保留采购能源载体身份并关联其供应数据集；燃料现场燃烧时，应在具体数据集中采用有记录的因子或测量增加燃料特定直接排放。

- 选定流：Thermal energy carrier or fuel, technology-specific
- 流属性/单位：Energy / MJ
- 数量规则：实测采购能源或燃料，并按声明低位/高位热值基准转换为能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行调质去壳稻米
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy_conditioning`
- 数量范围：暂定热能筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：MJ/kg 调质去壳稻米
  - 基准：每 kg 放行产品的采购热能
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调质去壳稻米（`conditioned_husked_rice_output`）

记录调质/储存后放行产品的质量、水分、放行日期和经核对的储存损失。

- 选定流：Husked rice
- 流属性/单位：Mass / kg
- 数量规则：实测净放行质量；该门口被声明时用作参考输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行调质去壳稻米
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_mass_and_moisture`
- 来源：`codex-cxs-198-1995-rice`

##### 废物流

###### 储存损失和清除的不合格产品（`conditioning_loss`）

记录调质/储存期间损失或清除的实测质量及其去向。

- 选定流：Off-specification husked rice or storage loss
- 流属性/单位：Mass / kg
- 数量规则：根据实测输入、输出、库存变化、取样移除和水分变化计算，并与实物记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行调质去壳稻米
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_mass_and_moisture`
- 来源：`mass-balance-identity`
- 数量范围：暂定调质损失筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg 调质去壳稻米
  - 基准：每 kg 放行产品的储存和调质损失
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：包装（`packaging`）

#### 输入

##### 产品流

###### 进入包装的去壳稻米（`packaging_rice_input`）

记录进入包装线的实测产品质量，并与包装输出、撒落、取样和库存变化核对。

- 选定流：Husked rice
- 流属性/单位：Mass / kg
- 数量规则：实测净产品输入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装去壳稻米
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 数量范围：暂定包装线稻米输入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.00
  - 上限：1.10
  - 单位：kg/kg 净包装去壳稻米
  - 基准：每 1 kg 净包装产品的稻米输入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级和次级包装材料（`packaging_materials`）

分别记录各材料和部件，包括声明门口范围内的袋、内衬、标签、封口、纸箱和托盘。

- 选定流：Packaging material, material-specific
- 流属性/单位：Mass / kg
- 数量规则：采购或领用质量减去有记录的未用退回量，并按包装产品归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装去壳稻米
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 数量范围：暂定包装质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg 净包装去壳稻米
  - 基准：每 kg 净产品的包装材料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装去壳稻米（`packaged_husked_rice_output`）

将稻米净质量与包装质量分开记录。声明门口为包装产品时以此作为参考输出。

- 选定流：Husked rice `f762700e-8463-40fa-a164-0ecd28c744d6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰好 1 kg 净去壳稻米；不含包装
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`codex-cxs-198-1995-rice`
- 数量范围：参考流归一化恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 参考流
  - 基准：每 1 kg 参考流的净包装去壳稻米
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 包装废料和撒落产品（`packaging_scrap`）

按材料和去向分别记录包装边角料、损坏容器和撒落稻米。

- 选定流：Packaging scrap and spilled product, material-specific
- 流属性/单位：Mass / kg
- 数量规则：按去向实测废料和撒落质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装去壳稻米
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 数量范围：暂定包装废料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg/kg 净包装去壳稻米
  - 基准：每 kg 净产品的包装废料和撒落产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 所有多功能前景操作 | 首先通过过程细分、分别计量，以及对去壳稻米、稻壳、回收稻米和废物去向的物理跟踪来避免分配。 | `iso-14044-2006` |
| `allocation_husk` | 离开系统的稻壳及其他共产品 | 无法通过细分解决共享负荷时，采用反映基础过程的、已记录的物理关系。只有在适合声明目标与范围并得到论证时才可采用质量分配；记录湿/干基准和水分。 | `iso-14044-2006` |
| `allocation_waste` | 分类为废物的输出 | 不得仅因废物发生转移而赋予共产品抵扣。按照所适用研究方法一致建模处理以及任何被接受的循环、回收或替代约定，并予以披露。 | `iso-14044-2006` |
| `allocation_internal_use` | 现场使用的稻壳或细料 | 保持内部使用可见：记录材料输出和接收过程输入，并防止重复计算所避免的采购能源或材料。 | `mass-balance-identity` |
| `allocation_sensitivity` | 实质性分配选择 | 报告分配方法、分配份额、共产品状态与去向；合理替代方案对参考产品结果有实质影响时提供敏感性情景。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_paddy_receipts` | `paddy_receipt_and_cleaning` | 稻谷输入和清洁稻谷转移 | 地磅、秤、批次、水分、杂质和库存记录 | timestamp; supplier/origin; lot_id; gross_mass; tare_mass; net_mass; moisture_percent; impurity_percent; opening_stock; closing_stock | 校准地磅/秤及有代表性的水分和杂质取样 | kg; % m/m | 每次接收和每次内部转移 | 完整报告期，并覆盖季节性生产批次 | 每个纳入设施和外包清理操作 | 按批次和期间汇总净质量；核对转移和库存变化；归一化至净参考输出 | 校准证书；取样计划；磅单；库存核对 |
| `cp_process_energy_cleaning` | `paddy_receipt_and_cleaning` | 清理电力 | 公用设施计量、分表和设备日志 | meter_id; opening_reading; closing_reading; unit; allocation_driver; operating_hours | 优先过程分表；否则核对设施总量并记录分配 | kWh | 每批/每生产期或至少每月 | 完整报告期 | 每条纳入接收与清理线 | 扣除非生产使用；仅分配有记录的共享能源；归一化至参考输出 | 仪表校准；发票；仪表照片/导出；分配工作表 |
| `cp_residue_outputs_cleaning` | `paddy_receipt_and_cleaning` | 清理拒收物 | 称重单、经验证质量的容器数量、转移单和处理记录 | date; lot_id; material_class; gross_mass; tare_mass; net_mass; moisture_percent_if_material; destination; disposition | 称量各清理拒收物流，或使用经验证的容器质量并定期复核 | kg; % m/m | 每次转移或每批 | 完整报告期 | 所有纳入清理残余物收集点 | 按材料和去向汇总；与清理质量平衡核对 | 秤校准；转移收据；处理记录；适用时的照片或取样记录 |
| `cp_process_energy_dehusking` | `dehusking_and_separation` | 脱壳电力 | 公用设施计量、分表和设备日志 | meter_id; opening_reading; closing_reading; unit; allocation_driver; operating_hours | 优先过程分表；否则核对设施总量并记录分配 | kWh | 每批/每生产期或至少每月 | 完整报告期 | 每条纳入脱壳与分离线 | 扣除非生产使用；仅分配有记录的共享能源；归一化至参考输出 | 仪表校准；发票；仪表照片/导出；分配工作表 |
| `cp_residue_outputs_dehusking` | `dehusking_and_separation` | 稻壳、细料和不合格产品 | 称重单、经验证质量的容器数量、转移单、销售/处理记录 | date; lot_id; material_class; gross_mass; tare_mass; net_mass; moisture_percent_if_material; destination; disposition | 称量各脱壳残余物流，或使用经验证的容器质量并定期复核 | kg; % m/m | 每次转移或每批 | 完整报告期 | 所有纳入脱壳残余物收集点 | 按材料和去向汇总；与脱壳质量平衡核对 | 秤校准；转移收据；买方/处理记录；适用时的照片或取样记录 |
| `cp_dehusking_mass_outputs` | `dehusking_and_separation` | 清洁稻谷输入和去壳稻米输出 | 进/出口秤、生产日志、实验室质量结果和库存记录 | batch_id; input_mass; output_mass; moisture_in; moisture_out; bran_removal_or_milling_state; start_time; end_time; opening_stock; closing_stock | 校准质量测量和批次关联质量取样 | kg; % m/m | 每生产批或连续运行班次 | 完整报告期 | 每条纳入脱壳线 | 核对输入/输出和库存；将净合格输出归一化为 1 kg | 校准；批次日志；水分结果；产品规格/检验记录 |
| `cp_air_emissions` | `dehusking_and_separation` | 排入空气的颗粒物 | 烟道测试、除尘器记录、运行时间、材料处理量和因子文件 | emission_point; pollutant_identity; measured_concentration_or_factor; gas_flow_or_throughput; operating_time; control_efficiency; method | 优先采用合规直接测量；否则采用与采集活动数据绑定且有记录的计算 | kg pollutant; method-native units | 每次测试及运行期间 | 报告期内有代表性的运行条件 | 每个实质排放点 | 按排放点计算排放质量并归一化至参考输出；捕集粉尘保留在废物输出 | 测试报告；仪器校准；因子出处；控制装置维护日志 |
| `cp_conditioning_mass_and_moisture` | `conditioning_and_storage` | 调质产品和储存损失 | 批次质量、水分测试、筒仓/料仓库存、温度/通风和放行记录 | lot_id; input_mass; output_mass; moisture_in; moisture_out; opening_stock; closing_stock; storage_days; rejected_mass | 校准质量测量、有代表性水分取样和库存核对 | kg; % m/m; day | 每次批次转移；至少每月盘点库存 | 全部纳入储存/调质期间 | 每个纳入干燥机、料仓、仓库或承包方 | 核对产品、水分变化、移除量和库存；归一化至放行产品 | 校准；实验室/水分仪核查；库存盘点；放行证明 |
| `cp_process_energy_conditioning` | `conditioning_and_storage` | 调质电力和采购热能 | 公用设施计量、分表、燃料发票、罐/库存和设备日志 | meter_id; opening_reading; closing_reading; fuel_quantity; unit; heating_value_basis; allocation_driver; operating_hours | 优先过程分表；否则核对设施总量并记录分配 | kWh; MJ; fuel-native unit | 每批/每生产期或至少每月 | 全部纳入储存/调质期间 | 每个纳入干燥机、料仓、仓库或承包方 | 扣除非生产使用；仅分配有记录的共享能源；归一化至调质产品 | 仪表校准；发票；仪表照片/导出；分配工作表 |
| `cp_packaging_records` | `packaging` | 稻米输入/输出、包装材料和废料 | 包装物料清单、领用/退回记录、包装件数、净含量检查、废料和撒落日志 | package_type; material; unit_mass; units_used; unused_return; product_input; net_product_output; scrap_mass; spill_mass | 经验证 BOM 加秤/计数记录及定期净含量检查 | kg; item | 每次包装运行 | 完整报告期 | 每条纳入包装线 | 计算实际包装消耗并核对稻米输入/输出；从参考质量中排除包装 | 供应商规格；秤校准；领退记录；净含量检验 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 期间流数量 / 声明输出门口的净合格去壳稻米质量 | period flow amount; net conforming output mass | amount per 1 kg reference flow | `mass-balance-identity` |
| `calc_stock_adjusted_input` | 稻谷和中间产品转移 | 消耗输入 = 接收量 + 期初库存 − 期末库存 − 有记录的转出 | receipts; opening stock; closing stock; transfers | stock-adjusted process input | `mass-balance-identity` |
| `calc_dry_matter` | 可选水分归一化比较 | 干质量 = 接收态质量 × (1 − moisture_percent/100)；除非研究明确改变功能基准，否则仅作为商业 1 kg 参考质量的并列信息而非替代 | mass; moisture_percent | dry matter mass | `mass-balance-identity` |
| `calc_process_mass_balance` | 清理、脱壳、调质和包装 | 核对实测质量输入与产品、共产品、废物、水分变化和库存变化；调查并披露无法解释的差异，不得强制闭合 | measured inputs; outputs; moisture; stocks | mass-balance statement and unexplained difference | `mass-balance-identity` |
| `calc_energy_normalization` | 采购电力和热能 | 每参考流能耗 = 可归属计量能耗 / 净合格输出质量；保留原始能源载体和换算基准 | meter/invoice values; allocation driver; output mass | kWh or MJ per kg reference flow | `mass-balance-identity` |
| `calc_allocation_share` | 无法避免的共享负荷 | 分配负荷 = 共享负荷 × 已记录分配份额；同一物理和水分基准上全部共产品份额之和必须为 1 | shared burden; co-product quantities; selected physical relation | burden assigned to husked rice and each co-product | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 证明仅有意去除稻壳；将任何碾白/抛光设备或操作记录为范围外，不得把其输出标为本参考产品。 | process flow diagram; equipment list; product specification; lot inspection; `codex-cxs-198-1995-rice` |
| `dq_measurement` | 质量、水分和能源 | 使用经校准或验证的仪器，保留原始读数，并记录取样和单位换算。 | calibration certificates; meter records; laboratory or moisture-meter checks |
| `dq_temporal` | 前景报告期 | 覆盖有代表性的生产期间，包括实质性的季节或生产期变化；少于完整运行年度时，论证代表性并披露排除项。 | production calendar; monthly/batch coverage table; representativeness statement |
| `dq_geographic_technology` | 稻谷供应和加工 | 声明国家/地区、设施、脱壳技术、调质路线、能源供应和外包操作。 | supplier records; facility description; equipment records; dataset metadata |
| `dq_completeness` | 所有纳入过程 | 核对稻谷、产品、稻壳、拒收物、粉尘、水分影响和库存变化；明确列示缺失流和估算方法。 | mass-balance worksheet; completeness checklist; exception log |
| `dq_source_provenance` | 次级数据和计算排放 | 记录数据集/因子身份、版本/日期、地理、技术、单位基准和替代理由。 | source register; calculation workbook; review record |
| `dq_provisional_ranges` | 所有 `reasoned_estimate` 范围 | 暂定范围仅作 QA 筛查。以有代表性的实测值和经审查的来源证据替换；未经披露不得将其用作自动替代值。 | foreground records; source update; methodology review decision |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 产品身份和范围 | 确认产品为已去除稻壳且通常保留糠层的去壳稻米。拒绝稻谷、有意碾制/碾白稻米、蒸谷米及进一步加工的稻米产品。 | `codex-cxs-198-1995-rice` |
| `validation_reference_flow` | 定量参考 | 要求恰好 1 kg 净去壳稻米，并使用产品流 UUID `f762700e-8463-40fa-a164-0ecd28c744d6`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg。 |  |
| `validation_qualifiers` | 参考产品元数据 | 要求全部参考流限定信息，包括脱壳状态、门口、水分基准、产地、技术、调质/包装状态、等级/规格和生产期间。 | `codex-cxs-198-1995-rice` |
| `validation_process_completeness` | 过程清单 | 必须纳入 `paddy_receipt_and_cleaning` 和 `dehusking_and_separation`；相关操作在声明门口之前发生时必须纳入条件性过程章节。 |  |
| `validation_mass_balance` | 各前景过程和报告期 | 要求有记录的质量平衡，包含输入、产品、稻壳、废物、水分变化和库存变化；未解决差异必须量化并披露。 | `mass-balance-identity` |
| `validation_moisture_and_quality` | 声称符合 Codex 的直接食用产品 | 核验水分不超过 15% m/m，并检查适用于去壳稻米的杂质限值；否则核验并披露所依据的市场规格。 | `codex-cxs-198-1995-rice` |
| `validation_allocation` | 多功能操作 | 要求提供细分证据或经论证的分配方法、同一基准上份额之和为 1、共产品去向，以及实质性情况下的敏感性披露。 | `iso-14044-2006` |
| `validation_provisional_ranges` | 暂定 QA 筛查 | 将超出 `reasoned_estimate` QA 校验范围的值标记复核，但不得替换实测数据，也不得仅因超出暂定无来源范围而判定不符合。 |  |
| `validation_source_traceability` | 非前景因子和数据集 | 要求完整数据包所用每个外部数据集或因子具有稳定身份、版本/日期、地理、技术、单位基准和计算关联。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明碾米厂/工厂门口的去壳稻米前景生产数据集 |
| downstream_use | `secondary_dataset`；经方法学审查、质量审查和发布后可作 `background_dataset` |
| allowed_use | 需要非蒸谷去壳稻米且地理、期间、技术、水分基准、产品规格、门口和分配方法相容的 LCI/LCA 研究 |
| excluded_use | 仅作稻谷种植代理；作半精米/精米、碾白、抛光、蒸谷、熟制或制粉产品代理；在水分、技术或共产品分配条件存在实质差异时无条件替代 |
| required_metadata | PCR id/version；Tiangong 流 UUID；CPC 引用；规范中文名和 Tiangong 中文名；声明门口；地理；期间；设施/技术；稻谷产地；水分和杂质基准；已知时的粒型/品种；等级/规格；调质和包装状态；分配方法；共产品去向；上游数据集身份 |
| required_quality_disclosure | 测量和校准覆盖；时间/地理/技术代表性；质量平衡结果；缺失或估算流；暂定范围超限；次级数据出处；分配敏感性；审查状态 |
| update_trigger | 稻谷来源、产品定义、脱壳/调质技术、输出门口、能源供应、共产品去向或分配、包装、适用规格发生实质变化，或新的经审查来源替代暂定范围 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-198-1995-rice` | `standard` | Codex Alimentarius, CXS 198-1995, *Standard for Rice*，官方 PDF：https://www.fao.org/input/download/standards/61/CXS_198e.pdf（检索日期 2026-08-11） | 产品定义；稻谷、去壳稻米与精米的区分；直接食用产品的水分和杂质质量基准 |
| `iso-14044-2006` | `standard` | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*，官方记录：https://www.iso.org/standard/38498.html（2022 年确认继续有效；检索日期 2026-08-11） | LCA/LCI 目标与范围、清单、分配、报告、局限性和审查框架 |
| `mass-balance-identity` | `method_factor` | 将质量守恒恒等式用于实测过程输入、输出、水分变化和库存变化；不使用外部数值因子 | 过程核对、库存调整、内部转移、归一化和共产品份额检查 |
