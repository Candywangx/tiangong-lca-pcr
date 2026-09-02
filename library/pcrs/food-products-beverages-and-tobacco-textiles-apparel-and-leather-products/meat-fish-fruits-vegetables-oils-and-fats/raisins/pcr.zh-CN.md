---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.raisins
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 葡萄干

## 1. 范围与适用性

本 PCR 适用于由健全的欧亚葡萄（*Vitis vinifera* L.）干燥制成，供直接食用、餐饮使用或重新包装的食品级葡萄干。范围包括无籽和有籽葡萄干、去籽或未去籽形态以及成串葡萄干。前景边界始于葡萄干生产设施接收葡萄，止于包装设施门口按申报净质量计量的包装葡萄干。

数据包应保留葡萄身份，并申报实际采用的干燥技术，以及浸渍、硫处理、漂白、去籽、清洗、含水率调整、巴氏杀菌、涂层或其他调湿整理操作。仅当批次记录和适用食品要求提供支撑时，方可使用天然、经处理、经保藏、涂层、无籽、去籽、成串等声称。小粒无核葡萄干（dried currants）、其他种类干果、油炸水果、已不再保持葡萄干身份的糖果制品、葡萄种植、分销、零售、使用和包装生命末期不属于本前景范围。研究目标要求完整生命周期时，仍需补充上游和下游数据集。

批次链接应在四个前景过程中保持同一已申报葡萄批次或有文件记录的混配身份，不得用通用干果流替换该身份。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.raisins |
| classification_refs | CPC 3.0：21411 Raisins |
| covered_products | 由健全欧亚葡萄干燥制成的适销食品级葡萄干，不包括 currant 类型；可为无籽或有籽、去籽、未去籽或成串形态；经申报时可为未经处理、经处理、经保藏或涂层产品 |
| excluded_products | 小粒无核葡萄干（dried currants）；其他物种的干果；油炸水果；不以葡萄干销售的含葡萄干糖果或混合物；仅供酿酒、制汁或鲜食的葡萄 |
| representative_product | 1 kg 食品级葡萄干净质量，并申报实际葡萄身份、干燥路线、含水率类别、调湿整理、处理、形态和包装 |
| production_route | 健全葡萄接收和预处理；一种已申报的主要干燥技术或有文件记录的顺序混合路线；含水率调节、清洁和分级；净质量包装 |
| market_state | 包装设施门口适合所申报食品用途的散装或零售包装葡萄干 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 保持干葡萄身份并提供可食用干果功能的食品级葡萄干 |
| How much | 1 kg 可食产品净质量，不含包装 |
| How well | 健全的欧亚葡萄干，不包括 currant 类型，并满足所申报的含水率、形态、处理、涂层、清洁度和食品级规范 |
| How long or cycle | 包装设施门口放行的一个生产批次；贮存时间不属于功能单位，建模时应另行申报 |
| reference_flow_link | 1 kg 参考产品流实现该功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净质量 |
| 参考产品流 | 葡萄干 `e2741aa4-2dfe-487f-a0fe-fd5d6dd3302d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 葡萄物种及品种或品种组；籽类型和形态；干燥技术；未经处理、经处理或经保藏状态；浸渍、硫处理、漂白、巴氏杀菌、涂层和去籽状态；放行含水率及测试方法；调湿方式；净质量基准；散装或零售包装形式及包装材料；食品级规范；生产地域和时期 |

构建前景数据包时，`必需限定信息` 中每一项均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中申报。缺失限定信息将使参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用调湿整理后、包装前或包装时放行的可食葡萄干净质量；排除全部包装和皮重。 |
| `batch_mass_consistency` | 葡萄、中间干葡萄、葡萄干、残余物和包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留批次实测质量，完成过程级质量平衡后方可归一化；不得将水分损失作为缺失质量处理。 |
| `release_moisture` | 包装葡萄干 | 质量分数 | 质量百分比 | 记录实测放行含水率和方法。符合 Codex CXS 360-2020 时，Malaga Muscatel 最大为 31%，Monukka 和有籽品种最大为 19%，其他所有形态或类型最大为 18%；采用与申报产品相符的限值。 |
| `energy_carrier_separation` | 干燥、整理和包装能源 | 能量 | kWh 或 MJ | 分别保留购入电力、每种燃料以及回收或现场能源的原始单位；说明换算，且不得把太阳干燥能量计作购入热量。 |
| `packaging_mass_separation` | 初级、次级和运输包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料分别记录包装，并报告每 kg 葡萄干净质量对应的包装质量；包装毛质量不得替代产品净质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 葡萄干生产设施接收的健全葡萄，并申报供应商、葡萄身份、来源、接收质量以及来料含水率或等效状态 |
| starting_condition_role | 葡萄干生产前景系统的上游产品投入 |
| product_classification_scope | 葡萄干这一语义产品类别；CPC 3.0 编码 21411 仅保留为外部分类参考 |
| recursive_input_rule | 作为投入购入的葡萄干或部分干燥葡萄应作为独立上游产品交换，申报来源和加工状态；不得将其重标为鲜葡萄，也不得在接收过程中重复构建其上游负荷 |
| upstream_dataset_requirement | 链接与地域、技术、时期和所申报处理相匹配的代表性葡萄种植及其他购入投入数据集；披露代理数据和数据缺口 |
| disclosure | 申报葡萄身份、干燥路线及任何顺序混合路线、处理和调湿整理步骤、放行含水率、产率、分配、包装配置、时间和地域覆盖、排除项以及上游数据集选择 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_chain` | 葡萄干前景生产 | 纳入接收及实际预处理、所申报干燥路线、整理和含水率调节以及包装，并纳入跨越这些过程边界的全部材料、水、能源、废物和直接基本流。 | `codex-cxs-360-2020`, `eu-pef-2021-2279` |
| `boundary_route_exclusivity` | 干燥技术 | 对实际采用的技术建模。除非批次证据表明存在顺序混合路线，日晒或太阳能干燥与加热脱水应作为替代路线；混合路线应说明顺序并分别计量各项能源投入，不得重复计入干燥负荷。 | `codex-cxs-360-2020` |
| `boundary_upstream_grapes` | 接收葡萄和部分加工葡萄投入 | 将种植以及供应商侧的任何干燥或处理保留在链接的上游数据集中，同时在前景边界保留葡萄身份和接收时加工状态。 | `eu-pef-2021-2279` |
| `boundary_downstream` | 分销、贮存、使用和生命末期 | 从包装门口前景数据集中排除这些阶段，明确排除项，并在生成完整生命周期结果时添加代表性下游阶段。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

所有数量均按同一生产批次采集，并归一化至 1 kg 包装葡萄干净质量。每个标为 `reasoned_estimate` 的范围，均是仅在缺少代表性前景数据或经评审外部证据时适用的、刻意设置得较宽的临时筛查阈值，而不是默认清单值。取得代表性批次测量、经审计供应商记录或经评审可转移证据后应予替换；经记录和核实后允许数值超出该范围。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `grape_receiving_pretreatment` | 葡萄接收和路线特定预处理 | `required` | 始终纳入；仅纳入实际实施的清洗、浸渍、硫处理、漂白、籽相关或其他准备操作 | 前景准备 | 转入干燥的预处理葡萄 kg |
| `grape_drying` | 已申报葡萄干燥路线 | `required` | 每个代表批次恰好一种主要技术，或一条有文件记录的顺序混合路线 | 前景脱水 | 离开干燥步骤的干葡萄 kg |
| `raisin_finishing` | 含水率调节、清洁、分选和可选涂层 | `required` | 始终纳入；可选单元操作和投入仅在实际发生时纳入 | 前景整理 | 放行至包装的调湿葡萄干 kg |
| `raisin_packaging` | 净质量灌装和包装 | `required` | 对所申报散装或零售市场状态始终纳入 | 前景包装 | 1 kg 包装葡萄干净质量 |

### 过程：葡萄接收和路线特定预处理（`grape_receiving_pretreatment`）

#### 输入

##### 产品流

###### 接收的健全葡萄（`received_grapes`）

按供应商批次记录葡萄的欧亚葡萄身份、来源、接收质量和来料状态。除非申报起始状态变化，不得以通用水果或已干燥葡萄干替代鲜葡萄。

- 选定流：健全葡萄，申报品种或品种组
- 流属性/单位：Mass / kg
- 数量规则：分配给代表批次的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_batch`
- 来源：`codex-cxs-360-2020`
- 数量范围：临时鲜葡萄投入筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：2
  - 上限：10
  - 单位：kg/kg 包装葡萄干净质量
  - 基准：每 1 kg 包装葡萄干净质量对应的鲜葡萄接收质量；取得代表性批次产率证据前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理水（`pretreatment_water`）

记录清洗、浸渍、冲洗或配液过程中与葡萄接触的计量或对账水量。仅在无此类水跨越前景边界时报告为零。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：供给该批次的实测或对账水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_batch`
- 数量范围：临时预处理用水筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg 包装葡萄干净质量
  - 基准：每 1 kg 包装葡萄干净质量对应的预处理进水；取得代表性计量批次前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 路线特定食品级预处理材料（`pretreatment_materials`）

对实际使用的每种碱液浸渍材料、油、硫处理或漂白材料以及其他加工助剂分别创建交换。保留食品级规范和浓度；不得向未使用该投入的批次添加互斥路线投入。

- 选定流：申报的食品级预处理材料，每种材料一个交换
- 流属性/单位：Mass / kg
- 数量规则：按供应形态计量的材料质量；仅在有不使用记录时记零或省略
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_batch`
- 来源：`codex-cxs-360-2020`
- 数量范围：临时预处理材料筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg 供应材料/kg 包装葡萄干净质量
  - 基准：每 1 kg 包装葡萄干净质量对应的路线特定预处理材料总量；取得代表性配方记录前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 转入干燥的预处理葡萄（`prepared_grapes`）

记录剔除果梗、不合格葡萄和排出处理液之后的实际转移质量。

- 选定流：供干燥的预处理葡萄
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_batch`
- 数量范围：临时预处理葡萄转移筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.5
  - 上限：10
  - 单位：kg/kg 包装葡萄干净质量
  - 基准：每 1 kg 包装葡萄干净质量对应的转入干燥葡萄；取得代表性批次平衡前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 预处理残余物和废水（`pretreatment_residues`）

在生成的数据集中，将废水、去除果梗、不合格葡萄和废处理液分别记录为废物交换，并保留处理去向以及适用的危险性或食品过程分类。

- 选定流：申报的预处理残余物或废水，每种废物一个交换
- 流属性/单位：Mass / kg
- 数量规则：送往各处理或回收路线的实测或质量平衡对账数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_batch`
- 数量范围：临时预处理残余物筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：6
  - 单位：kg/kg 包装葡萄干净质量
  - 基准：拆分为各废物交换前的合计筛查量；取得代表性批次平衡前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：已申报葡萄干燥路线（`grape_drying`）

#### 输入

##### 产品流

###### 进入干燥的预处理葡萄（`drying_grape_input`）

使用 `prepared_grapes` 的实测转移量；批次和葡萄身份应保持不变。

- 选定流：供干燥的预处理葡萄
- 流属性/单位：Mass / kg
- 数量规则：`grape_receiving_pretreatment` 的链接实测输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_batch`
- 数量范围：临时干燥投入筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.5
  - 上限：10
  - 单位：kg/kg 包装葡萄干净质量
  - 基准：每 1 kg 包装葡萄干净质量对应的进入所申报干燥路线的预处理葡萄；取得代表性批次平衡前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥能源载体（`drying_energy`）

分别记录购入电力和每种燃料。日晒或太阳能干燥仅记录实测辅助能源；加热脱水记录实际热源和效率基准。顺序混合路线应分别计量各阶段并申报顺序。

- 选定流：申报的电力或燃料，每种能源载体一个交换
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：分配给批次的计量、发票或设备日志能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch`
- 数量范围：临时购入干燥能源筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：MJ 当量/kg 包装葡萄干净质量
  - 基准：购入电力和燃料换算值，不计环境太阳能；取得路线代表性计量批次前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 离开所申报路线的干葡萄（`dried_grapes`）

记录后续含水率调节之前的干燥器出口质量和含水率。保留所申报干燥技术和处理历史。

- 选定流：供葡萄干整理的干葡萄
- 流属性/单位：Mass / kg
- 数量规则：实测干燥器出口质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch`
- 来源：`codex-cxs-360-2020`
- 数量范围：临时干燥器输出筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg/kg 包装葡萄干净质量
  - 基准：每 1 kg 包装葡萄干净质量对应的整理前干葡萄；取得代表性批次平衡前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 干燥过程中排入空气的水（`drying_water_to_air`）

根据批次质量和含水率平衡计算去除水量。实测液体排放或废水应另行报告，不得归类为排入空气的水。

- 选定流：Water to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_drying_water_balance` 计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_batch`
- 数量范围：临时蒸发水筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：9
  - 单位：kg/kg 包装葡萄干净质量
  - 基准：每 1 kg 包装葡萄干净质量对应的计算排入空气水量；取得代表性批次含水率平衡前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：含水率调节、清洁、分选和可选涂层（`raisin_finishing`）

#### 输入

##### 产品流

###### 进入整理的干葡萄（`finishing_dried_grapes`）

使用 `grape_drying` 的实测输出；保持批次、葡萄、处理和干燥路线身份链接。

- 选定流：供葡萄干整理的干葡萄
- 流属性/单位：Mass / kg
- 数量规则：`grape_drying` 的链接实测输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_batch`
- 数量范围：临时整理投入筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg/kg 包装葡萄干净质量
  - 基准：每 1 kg 包装葡萄干净质量对应的进入整理干葡萄；取得代表性批次平衡前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调湿用水和食品级整理材料（`finishing_materials`）

分别记录添加水、食用油、面粉或其他食品级涂层或调湿材料。申报用途、浓度和供应商规范；仅记录实际施用的材料。

- 选定流：申报的调湿用水或食品级整理材料，每种材料一个交换
- 流属性/单位：Mass / kg
- 数量规则：按供应形态实测的施用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`
- 来源：`codex-cxs-360-2020`
- 数量范围：临时整理材料筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 包装葡萄干净质量
  - 基准：拆分为各交换前的调湿用水和食品级材料总量；取得代表性配方记录前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理能源（`finishing_energy`）

仅在相关操作发生时记录清洁、去梗或去籽、含水率调节、巴氏杀菌、分选、分级和涂层所用电力和热量。

- 选定流：申报的电力或燃料，每种能源载体一个交换
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：分配给批次的计量或设备日志能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`
- 数量范围：临时整理能源筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：MJ 当量/kg 包装葡萄干净质量
  - 基准：每 1 kg 包装葡萄干净质量对应的购入整理能源；取得代表性计量批次前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 调湿食品级葡萄干（`conditioned_raisins`）

记录分选后、包装前的放行质量、含水率、形态、处理、涂层和食品级处置状态。

- 选定流：葡萄干 `e2741aa4-2dfe-487f-a0fe-fd5d6dd3302d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：放行至包装的实测合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`
- 来源：`codex-cxs-360-2020`
- 数量范围：临时整理产率筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.5
  - 单位：kg/kg 包装葡萄干净质量
  - 基准：每 1 kg 包装葡萄干净质量对应的放行至包装合格葡萄干；取得代表性批次平衡前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 整理不合格物和废水（`finishing_residues`）

将去除的果梗、籽、不合格葡萄干、粉尘、废水和废材料分别记录为交换，并记录实际处理或回收去向。

- 选定流：申报的整理残余物或废水，每种废物一个交换
- 流属性/单位：Mass / kg
- 数量规则：送往各去向的实测或质量平衡对账数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_batch`
- 数量范围：临时整理残余物筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 包装葡萄干净质量
  - 基准：拆分为各废物交换前的合计筛查量；取得代表性批次平衡前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：净质量灌装和包装（`raisin_packaging`）

#### 输入

##### 产品流

###### 供包装的调湿葡萄干（`packaging_raisin_input`）

使用 `raisin_finishing` 的实测合格输出，并保留批次和全部必需产品限定信息。

- 选定流：葡萄干 `e2741aa4-2dfe-487f-a0fe-fd5d6dd3302d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：`raisin_finishing` 的链接实测输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_batch`
- 数量范围：临时包装投入筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.5
  - 单位：kg/kg 包装葡萄干净质量
  - 基准：每 1 kg 包装葡萄干净质量对应的供包装调湿葡萄干；取得代表性灌装平衡前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

按材料和实际包装配置分别记录初级、次级和运输包装。凡标签、封口件、内衬和托盘跨越所申报边界，均应纳入。

- 选定流：申报的包装材料，每种材料一个交换
- 流属性/单位：Mass / kg
- 数量规则：实测、物料清单或采购对账包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 来源：`codex-cxs-360-2020`, `eu-pef-2021-2279`
- 数量范围：临时包装质量筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.5
  - 单位：kg/kg 包装葡萄干净质量
  - 基准：每 1 kg 包装葡萄干净质量对应的供应包装总量；取得代表性物料清单前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装能源（`packaging_energy`）

记录灌装、封口、赋码、检重和托盘准备的计量或设备日志电力及其他能源。

- 选定流：申报的电力或燃料，每种能源载体一个交换
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：分配给包装输出的计量或设备日志能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 数量范围：临时包装能源筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：MJ 当量/kg 包装葡萄干净质量
  - 基准：每 1 kg 包装葡萄干净质量对应的购入包装能源；取得代表性计量批次前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 净包装葡萄干（`packaged_raisins`）

参考输出为经核实的放行葡萄干可食净质量。包装质量和皮重保持为独立投入。

- 选定流：葡萄干 `e2741aa4-2dfe-487f-a0fe-fd5d6dd3302d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定归一化输出 1 kg 经核实葡萄干净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`eu-pef-2021-2279`
- 数量范围：参考流身份检查
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 参考流
  - 基准：精确归一化净产品输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`eu-pef-2021-2279`

##### 废物流

###### 包装废料和不合格包装（`packaging_scrap`）

分别记录边角料、破损包装、不合格包装和回收葡萄干；不得将回收产品与包装废物合并。

- 选定流：申报的包装废料或不合格包装组成，每种废物一个交换
- 流属性/单位：Mass / kg
- 数量规则：送往各处理或回收去向的实测或材料平衡对账数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装葡萄干净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_batch`
- 数量范围：临时包装废料筛查阈值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 包装葡萄干净质量
  - 基准：拆分为各废物交换前的包装废料合计；取得代表性包装平衡前临时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用接收、干燥、整理和包装操作 | 有独立记录时，应通过拆分批次、生产线或计量操作避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical_then_other` | 无法避免的多功能操作 | 无法拆分时，采用并记录相关的因果物理关系。仅在不存在可辩护物理关系时采用其他关系（如经济价值）；披露数量、价格、时期和敏感性。 | `eu-pef-2021-2279` |
| `allocation_residue_status` | 不合格葡萄、果梗、籽、回收葡萄干和其他输出 | 送去处置的输出作为废物处理，并将其处理计入该过程。若输出出售或作为共产品使用，应保留其质量和去向，并采用所申报分配层级；不得给予无文件依据的避免负荷信用。 | `eu-pef-2021-2279` |
| `allocation_packaging_line` | 共用包装公用工程 | 使用反映因果性的实测驱动因素分配共用包装能源和耗材，例如机器时间、灌装净质量或包装件数；说明驱动因素并确保覆盖生产线全部输出。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_batch` | `grape_receiving_pretreatment` | 接收葡萄、水、处理材料、预处理葡萄和残余物 | 批次记录 | batch_id; supplier_lot; grape_species; variety_group; origin; received_mass_kg; incoming_condition; water_kg; material_name; material_mass_kg; prepared_mass_kg; residue_type; residue_mass_kg; destination | 使用校准秤、仪表、配方单和废物记录对同一批次进行对账 | kg | 每批 | 代表生产期内全部批次 | 所有纳入的接收和预处理操作 | 按已识别流和批次求和，再除以经核实包装净输出 | 校准记录；供应商证书；配方记录；批次质量平衡；废物转移记录 |
| `cp_drying_batch` | `grape_drying` | 葡萄投入、能源载体、干燥输出、含水率和去除水量 | 批次和仪表记录 | batch_id; drying_technique; sequence; grape_input_kg; input_moisture_pct; energy_carrier; energy_quantity; energy_unit; dried_output_kg; exit_moisture_pct; liquid_loss_kg; drying_time | 批次关联秤、含水率测试、公用工程仪表、发票和设备日志 | kg; % by mass; kWh; MJ; h | 每批和每个计量期间 | 覆盖季节变化的全部代表性干燥批次 | 所有申报干燥设备和阶段 | 将能源对账至批次；计算产出质量加权含水率和批次质量平衡；归一化至包装净输出 | 秤和含水率方法记录；仪表对账；路线日志；质量平衡闭合 |
| `cp_finishing_batch` | `raisin_finishing` | 干葡萄投入、调湿材料、能源、合格葡萄干和残余物 | 批次记录 | batch_id; dried_input_kg; operation; water_added_kg; material_name; material_mass_kg; energy_quantity; energy_unit; accepted_mass_kg; release_moisture_pct; style; treatment_status; residue_type; residue_mass_kg; destination | 校准秤、实验室或经验证含水率方法、配方单、仪表和处置记录 | kg; % by mass; kWh; MJ | 每批 | 代表期内全部整理批次 | 所有纳入的调湿、清洁、分选、涂层和巴氏杀菌操作 | 按流分别求和；按质量加权含水率结果；归一化至包装净输出 | 校准和测试记录；食品级供应商规范；批次放行；残余物对账 |
| `cp_packaging_batch` | `raisin_packaging` | 葡萄干投入、净输出、包装材料、能源和废料 | 包装运行记录 | batch_id; package_format; units_filled; declared_net_mass_kg; verified_net_mass_kg; tare_kg; material_name; material_mass_kg; energy_quantity; energy_unit; scrap_type; scrap_mass_kg; destination | 检重秤或校准秤、包装物料清单、库存对账、仪表和废料记录 | kg; kWh; MJ; count | 每次包装运行 | 与代表性葡萄干批次关联的全部运行 | 所有纳入的散装和零售包装配置 | 计算核实净输出；分别汇总各包装材料和废物路线；归一化至净输出 | 秤检查；法定计量或内部核实记录；物料清单；库存和废料对账 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个前景流 | 归一化数量 = 分配至批次的流数量 / 经核实包装葡萄干净质量 | 批次流数量；经核实包装葡萄干净质量 | 每 1 kg 包装葡萄干净质量的数量 | `eu-pef-2021-2279` |
| `calc_drying_water_balance` | 排入空气的水 | 排入空气的水 = 预处理葡萄投入质量 + 干燥阶段添加材料 - 干葡萄输出质量 - 分别实测的液体和固体输出；与含水率基准计算比较并调查重大差异 | 投入和输出质量；投入及出口含水率；液体和固体损失 | 排入空气的水 kg 及质量平衡闭合 |  |
| `calc_net_packaged_mass` | 包装参考输出 | 经核实净质量 = 灌装包装毛质量 - 实测皮重，或独立核实净含量之和；包装质量不得进入参考输出 | 毛质量；皮重；检重或净含量记录 | 包装葡萄干净质量 kg | `codex-cxs-360-2020` |
| `calc_shared_operation_assignment` | 无法避免的共用公用工程 | 分配数量 = 共用总量 × 有文件依据的因果驱动份额；全部输出份额之和应为一 | 共用总量；各输出驱动量 | 分配至批次的公用工程或材料数量 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 全部代表批次 | 将输出追溯至欧亚葡萄批次，并保留品种或品种组、籽类型和形态、干燥技术、处理历史、调湿、涂层、含水率类别、食品级放行和包装形式。 | 供应商批次记录；路线和配方日志；批次放行证书 |
| `dq_measurement` | 质量、含水率、水、材料和能源记录 | 使用经校准或核实的仪器，并保留测试方法、单位换算、仪表分配、皮重确定和缺失数据处理。 | 校准证书；含水率方法记录；仪表和秤检查；换算工作表 |
| `dq_temporal_coverage` | 代表生产期 | 覆盖全部批次，或覆盖葡萄来源、干燥路线、季节条件和包装形式的有理由代表性样本；申报排除项。 | 生产计划；批次清单；抽样理由；覆盖率计算 |
| `dq_completeness` | 每个前景过程 | 对账产品投入、产品输出、残余物、废水、排入空气的水、处理材料、能源载体和包装。解释重大质量平衡缺口并披露未计量直接基本流。 | 过程质量平衡；公用工程对账；废物记录；完整性检查表 |
| `dq_representativeness` | 前景和链接上游数据 | 对重要数据集和流的技术、地域、时间代表性以及精度进行评估和披露。 | 按 `eu-pef-2021-2279` 开展的数据质量评估；代理数据理由 |
| `dq_provisional_ranges` | 每个 `reasoned_estimate` 范围 | 仅在缺乏更强证据时将该范围作为临时 QA 筛查，不得以中点替代前景数据。取得代表性批次测量、经审计供应商数据或经评审可转移证据后，应替换或撤销该范围，并记录替换决定。 | 范围登记表；数据改进计划；经评审替换证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 确认精确的 Raisins 产品流 UUID、Mass 属性 UUID、Units of mass UUID、1 kg 净数量和每项必需限定信息；拒绝采用包装毛质量的参考流。 | `unsd-cpc-3-21411`, `codex-cxs-360-2020` |
| `validation_grape_identity` | 产品和投入 | 确认健全欧亚葡萄干身份，并排除 currant 类型和其他干果；核实上游起始状态与实际使用的鲜葡萄、部分干燥葡萄或购入葡萄干投入相符。 | `codex-cxs-360-2020` |
| `validation_route_exclusivity` | 干燥清单 | 确认每批一种已申报主要干燥技术，或一条有文件记录的顺序混合路线。无混合路线证据时，拒绝同时计入日晒/太阳能和加热路线负荷。 | `codex-cxs-360-2020` |
| `validation_moisture_and_conditioning` | 放行葡萄干 | 确认放行含水率结果、适用产品形态、测试方法以及全部加水、进一步干燥、巴氏杀菌、处理或涂层记录；采用与申报类型相对应的 Codex 最大值。 | `codex-cxs-360-2020` |
| `validation_mass_balance` | 四个过程 | 确认中间质量链接并调查无法解释的质量平衡缺口；不得静默遗漏或重复计算排入空气的水、废水、残余物、回收产品和包装废料。 | `eu-pef-2021-2279` |
| `validation_packaging_net_mass` | 包装输出 | 确认包装形式、包装材料质量、皮重、经核实的可食葡萄干净质量和独立包装废料；归一化净输出应恰好等于 1 kg。 | `codex-cxs-360-2020`, `eu-pef-2021-2279` |
| `validation_foreground_priority` | 重要清单流 | 确认由实际批次记录生成清单值。将任何保留的 `reasoned_estimate` 标记为暂定，并要求继续披露其适用性、临时状态和替换触发器。 | `eu-pef-2021-2279` |
| `validation_allocation` | 共用或多输出操作 | 确认优先拆分、无法避免时采用有文件依据的因果分配、完整覆盖输出，并披露任何非物理关系和敏感性。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 从接收葡萄到包装设施门口包装葡萄干的前景葡萄干生产数据集 |
| downstream_use | `secondary_dataset`；经独立评审且复用代表性充分时可作为 `background_dataset` |
| allowed_use | 食品生产前景建模、供应链清单、等同范围内包装门口比较，以及添加代表性上游和下游阶段的完整生命周期研究 |
| excluded_use | 在未增加建模和评审时，不得用于关于葡萄种植、消费者贮存或使用、包装生命末期、其他干果的声称，也不得对干燥路线、含水率类别、处理、葡萄身份或包装形式不匹配的产品进行比较性声称 |
| required_metadata | 使用的 canonical PCR id 和版本；产品流 UUID；葡萄和批次身份；地域和时期；干燥技术和顺序；处理和调湿整理；放行含水率及方法；籽类型和形态；涂层；净质量和包装形式；前景边界；上游数据集；分配；排除项 |
| required_quality_disclosure | 数据覆盖；秤、仪表和含水率方法质量；质量平衡闭合；技术、地域和时间代表性；精度；代理数据；缺失流；暂定推理估算及替换状态 |
| update_trigger | 新的经评审 Codex 或分类范围；产品流身份变化；重大路线、处理、含水率、包装或分配变化；可替换暂定范围的代表性批次证据；审计发现；或数据超过所申报代表性期限 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21411` | `official_guidance` | 联合国统计司，Central Product Classification Version 3.0，子类 21411 “Raisins”，https://unstats.un.org/unsd/classifications/Econ/CPC（检索日期 2026-08-11） | 外部分类参考和产品类别命名 |
| `codex-cxs-360-2020` | `standard` | FAO/WHO Codex Alimentarius，CXS 360-2020，General Standard for Dried Fruits（含 Annex C Raisins），https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B360-2020%2FCXS_360e.pdf（检索日期 2026-08-11） | 葡萄干身份、葡萄物种、干燥和处理变体、食品级质量、含水率限值、调湿整理、包装及标签限定信息 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会，Recommendation (EU) 2021/2279，Annex I Product Environmental Footprint Method 和 Annex II PEFCR requirements，ELI http://data.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索日期 2026-08-11） | 功能单位、参考流、系统边界、清单完整性、多功能层级、前景数据质量、代表性和数据集披露 |
