---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cashew-nuts-shelled
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 脱壳腰果仁

## 1. 范围与适用性

本 PCR 覆盖从生产场址接收带壳腰果开始，经果仁释放处理、脱壳、按需干燥或调质、去皮、分级，直至生产场址门口包装完成的食用腰果仁前景生产。适用于完整、破碎或按其他等级供应的脱壳腰果仁，且必须声明批次身份、质量状态和包装形式。

本 PCR 不包括腰果种植和采收、外购物料及包装的制造、接收前及出厂后的运输、零售、消费者制备和生命末期。下游生命周期模型可通过单独引用的数据集纳入这些阶段。调味、包衣、配方化或进一步烘烤的休闲食品，以及腰果酱、腰果脂、腰果粉、腰果油和饮料均不属于本类别。UNECE 来源只支持果仁身份及质量、计量和包装限定信息，不提供默认 LCI 数量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cashew-nuts-shelled |
| classification_refs | CPC 3.0：21424，Cashew nuts, shelled（`unsd-cpc-3-0-21424`） |
| covered_products | 已与果壳分离，并以完整、破碎或已声明果仁等级供应的食用腰果仁，包括未经其他食品配料配方化的生果仁或经工艺调质的果仁 |
| excluded_products | 带壳腰果；调味、包衣、配方化或休闲食品型进一步烘烤产品；腰果酱、腰果脂、腰果粉、腰果油、饮料及非食用果壳衍生产品 |
| representative_product | 符合生产者声明的商业等级及批次规格的包装食用腰果仁 |
| production_route | 接收带壳腰果 -> 一条已声明的果仁释放调质路线 -> 脱壳与分离 -> 干燥/去皮/分级 -> 包装 |
| market_state | 工厂门口包装果仁；声明果仁形态、等级、水分或调质状态、包装材料、包装规格和气氛处理方式 |

果仁身份以及质量、计量和包装描述符依据 `unece-ddp-17-cashew-kernels-2023`。这些是产品限定信息，不是定量清单默认值。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产并包装具有已声明果仁形态和商业质量状态的食用脱壳腰果仁 |
| How much | 1 kg 包装腰果仁净重，不包括不随产品销售的运输包装 |
| How well | 符合生产者声明的等级和批次规格，并报告缺陷、水分或调质状态及包装条件 |
| How long or cycle | 一个可识别的生产批次或生产期；除场内加工和包装所需外，不计入仓储服务时长 |
| reference_flow_link | `kernel_packing` 的合格包装果仁净输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 去壳腰果 `8e888f2c-671c-44bf-8607-1bde41ac66b8` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 果仁形态和等级；批次或生产期标识；接收坚果的原产地和供应商批次可追溯性；果仁释放调质路线；水分或调质状态及测量基准；缺陷和不合格品基准；包装材料和包装规格；真空或保护气氛处理；净重基准；共产品和废物去向 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `MU-01` | 参考产品和所有质量平衡行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按所声明的供应状态记录净质量。参考数量不包括托盘和运输包装，并将其质量作为单独投入报告。 |
| `MU-02` | 接收坚果、果仁、不合格品和残余物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留称量质量、测量时间和水分或调质状态。只有在报告实测水分及换算公式时，才可在接收状态质量与干物质质量之间换算。 |
| `MU-03` | 电力、燃料、外购热和自产蒸汽 | 与所选流相适应的 Energy | kWh 或 MJ | 保留发票或计量记录中的能源单位及换算因子。除非各自表示不同且不重叠的边界穿越，否则同一路线不得将蒸汽、燃料投入及由其产生的有用热同时计为能源投入。 |
| `MU-04` | 按件数报告的包装 | 用于清单归一化的 Mass | kg | 使用批次特定的件数和经核验的单件质量换算包装质量；保留两个原始字段，并分别识别初级、次级和运输包装。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收按供应商批次识别，并记录质量及水分或调质状态的带壳腰果 |
| starting_condition_role | 上游农业和采后生产由所链接的投入数据集表示；前景从生产场址接收开始 |
| product_classification_scope | CPC 3.0 子类 21424 语义范围内的食用腰果仁；CPC 引用是分类语境而非规范身份 |
| recursive_input_rule | 外购脱壳果仁或退回的同类别果仁必须作为显式投入保留。场内返工果仁按批次追踪，并从中间产品总产出中扣除，以免同一物料被递归计数。 |
| upstream_dataset_requirement | 将接收的带壳坚果、公用工程、辅助材料和包装链接至具有代表性的上游数据集，并披露其地域、技术、时间和分配兼容性 |
| disclosure | 声明场址、期间、批次汇总方式、投入来源、调质路线、场内燃烧、干燥和去皮技术、等级、包装配置、门内所含仓储、共产品去向、废物处理、分配以及所有临时估算的替换情况 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `SB-01` | 前景系统 | 纳入从接收至生产场址门口合格包装果仁的过程，包括为所声明批次实施的内部搬运、果仁释放调质、脱壳、分离、干燥或调质、去皮、分级和包装。 | `eu-pef-2021-2279` |
| `SB-02` | 上游和下游阶段 | 通过链接的上游数据集表示外购投入。从本前景单元过程排除种植、出厂后运输、零售、使用和生命末期，并披露增补这些阶段的任何下游模型。 | `eu-pef-2021-2279` |
| `SB-03` | 果仁释放调质 | 每个批次必须且只能选择一条主要调质分支：蒸汽/湿热、干热/烘烤、热油或其他有记录的路线。若场址使用多条路线，应将其记录和产出拆分为单独单元过程或路线特定数据集；不得对同一批次同时应用互斥分支。 |  |
| `SB-04` | 排放和废物处理 | 当场内产生排放或实施废物处理时，将其纳入门内；否则链接输出废物或处理服务并披露接收路线。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `kernel_release_shelling` | 果仁释放调质、脱壳与分离 | required | 每批只应用一条已声明调质分支；该分支不使用的路线特定投入为零且省略 | 前景生产 | 离开本过程的分离食用果仁质量 |
| `kernel_finishing` | 果仁干燥或调质、去皮与分级 | required | 纳入实际实施的各项操作；被旁路的单元操作记为不适用，而不得作为备选路线同时发生 | 前景生产与质量整理 | 离开本过程的合格分级果仁质量 |
| `kernel_packing` | 果仁包装 | required | 纳入所声明包装配置；除非将不同包装产出分别建模，否则真空和保护气氛分支互斥 | 前景包装 | 1 kg 合格包装果仁净重 |

### 过程：果仁释放调质、脱壳与分离（`kernel_release_shelling`）

#### 输入

##### 产品流

###### 接收的带壳腰果（`received_in_shell_nuts`）

接收的带壳坚果作为主要物料投入跨越前景边界。保留其供应商批次、原产地、实测质量和水分或调质状态。

- 选定流：Cashew nuts in shell
- 流属性/单位：Mass / kg
- 数量规则：分配至加工批次的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装果仁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 数量范围：有条件的临时筛选范围；仅用于候选期 QA，并在完整的代表性生产期提供经审查的质量平衡证据时替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：2
  - 上限：10
  - 单位：kg/kg 包装果仁净重
  - 基准：每 1 kg 合格包装果仁净重对应的接收带壳坚果质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 路线特定调质公用工程（`conditioning_utilities`）

记录所选调质分支实际跨越边界的电力、燃料、外购热、蒸汽或热油。不同载能体须创建独立清单交换；本归一化行只是紧凑角色模式，绝不授权互斥分支同时发生。

- 选定流：Site-selected energy carrier, purchased heat, or process utility
- 流属性/单位：Energy / MJ，同时保留原始 kWh 或燃料单位记录及换算
- 数量规则：仅分配至已声明调质路线的计量、发票或库存平衡用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 分离食用果仁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 数量范围：有条件的临时筛选范围；仅在路线记录不完整时使用，并在取得路线特定计量或经核对的采购记录时替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：MJ/kg 分离果仁
  - 基准：每 1 kg 分离食用果仁对应的跨边界外购能源合计，不重复计算派生热量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调质用水（`conditioning_water`）

只有所选分支向浸泡、蒸制、清洗或其他有记录的调质操作供水时才纳入用水。无用水投入的路线将本行记为不适用。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：分配至批次和所选路线的实测或计量用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 分离食用果仁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 数量范围：有条件的临时筛选范围；仅用于候选期 QA，并在取得路线特定用水测量时替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 分离果仁
  - 基准：每 1 kg 分离食用果仁对应的供水量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 分离食用果仁（`separated_kernel_output`）

本中间产品是最终分级和包装前转移至整理过程的实称果仁质量。

- 选定流：Cashew kernel, ungraded intermediate
- 流属性/单位：Mass / kg
- 数量规则：与批次质量平衡核对的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装果仁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 数量范围：有条件的临时筛选范围；仅用于候选期 QA，并在取得经审查的批次级果仁得率记录后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：3
  - 单位：kg/kg 包装果仁净重
  - 基准：每 1 kg 合格包装果仁净重对应的转移分离食用果仁
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作为共产品回收的果壳和种皮（`shell_residue_coproduct`）

只记录有意销售或供给有记录有益用途的实测部分。同一质量不得同时作为废物出现。

- 选定流：Cashew shells and testa, declared co-product
- 流属性/单位：Mass / kg
- 数量规则：按批次和接收用途记录的实测发运共产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装果仁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_disposition`
- 数量范围：有条件的临时筛选范围；仅用于候选期 QA，并在取得经审查的去向和质量平衡记录后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：9
  - 单位：kg/kg 包装果仁净重
  - 基准：每 1 kg 合格包装果仁净重对应的共产品果壳和种皮质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 作为废物处置的果壳和种皮（`shell_residue_waste`）

只记录转移至废物管理的实测部分。每个残余物部分的共产品和废物去向互斥。

- 选定流：Cashew shells and testa waste
- 流属性/单位：Mass / kg
- 数量规则：按批次和有记录处理目的地记录的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装果仁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_disposition`
- 数量范围：有条件的临时筛选范围；仅用于候选期 QA，并在取得经审查的去向和质量平衡记录后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：9
  - 单位：kg/kg 包装果仁净重
  - 基准：每 1 kg 合格包装果仁净重对应的废物果壳和种皮质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 路线特定直接排放（`conditioning_direct_emissions`）

当燃料或热油系统在场内产生排放时，使用经审查的因子或直接测量分别报告每个基本流。只有前景边界内不发生直接释放时才可省略本模式。

- 选定流：Pollutant-specific elementary flow selected for the declared route
- 流属性/单位：Mass / kg
- 数量规则：实测释放量，或实际燃料用量乘以已披露且经审查的污染物特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 分离食用果仁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数量范围：有条件的临时筛选范围；仅用于标记候选记录，并在取得路线特定测量或经审查因子时替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg 每种污染物/kg 分离果仁
  - 基准：每种污染物分别按每 1 kg 分离食用果仁筛选
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：果仁干燥或调质、去皮与分级（`kernel_finishing`）

#### 输入

##### 产品流

###### 接收用于整理的分离食用果仁（`finishing_kernel_input`）

记录从脱壳过程转入的实称质量，避免将内部产出视为新生产物料。

- 选定流：Cashew kernel, ungraded intermediate
- 流属性/单位：Mass / kg
- 数量规则：与 `separated_kernel_output` 匹配的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装果仁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 数量范围：有条件的临时筛选范围；仅用于候选期 QA，并在取得经审查的批次级转移记录后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：3
  - 单位：kg/kg 包装果仁净重
  - 基准：每 1 kg 合格包装果仁净重对应的整理投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理公用工程（`finishing_utilities`）

记录干燥或调质、去皮、拣选和分级实际使用的电力、燃料、外购热、压缩空气或其他物料型公用工程。在实施的清单中分开不同载能体。

- 选定流：Site-selected electricity, energy carrier, purchased heat, or material utility
- 流属性/单位：能源采用 Energy / MJ；非能源公用工程采用载体特定单位
- 数量规则：分配至整理批次的计量、发票或库存平衡用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格分级果仁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 数量范围：有条件的临时筛选范围；仅在整理记录不完整时使用，并在取得过程特定计量或经核对的采购记录时替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：MJ/kg 合格分级果仁
  - 基准：每 1 kg 合格分级果仁对应的跨边界外购能源合计，不重复计算派生能源
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格分级果仁（`graded_kernel_output`）

记录达到所声明形态和等级并转移至包装的果仁。

- 选定流：去壳腰果 `8e888f2c-671c-44bf-8607-1bde41ac66b8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分级后的实测合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装果仁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_and_output_records`
- 数量范围：有条件的临时筛选范围；仅用于候选期 QA，并在取得经审查的等级得率记录后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg/kg 包装果仁净重
  - 基准：每 1 kg 合格包装果仁净重对应的转移合格分级果仁
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作为共产品回收的等外果仁（`off_grade_kernel_coproduct`）

只有等外部分有意销售或转移至有记录的产品用途时，才将其实测质量记录为共产品。不得再将同一部分记录为废物。

- 选定流：Off-grade cashew kernel, declared co-product
- 流属性/单位：Mass / kg
- 数量规则：按批次和接收用途记录的实测发运质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装果仁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_disposition`
- 数量范围：有条件的临时筛选范围；仅用于候选期 QA，并在取得经审查的去向和等级得率记录后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 包装果仁净重
  - 基准：每 1 kg 合格包装果仁净重对应的等外果仁共产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 作为废物处置的等外果仁和种皮（`finishing_reject_waste`）

记录送往废物处理的实测不合格品和种皮。任何回收产品部分均不计入本行，并按其产品去向记录。

- 选定流：Cashew kernel reject and peeling waste
- 流属性/单位：Mass / kg
- 数量规则：按批次和处理目的地记录的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装果仁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_disposition`
- 数量范围：有条件的临时筛选范围；仅用于候选期 QA，并在取得经审查的去向和等级得率记录后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 包装果仁净重
  - 基准：每 1 kg 合格包装果仁净重对应的整理不合格品和种皮废物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：果仁包装（`kernel_packing`）

#### 输入

##### 产品流

###### 合格分级果仁投入（`packing_kernel_input`）

记录进入所声明包装配置的实称果仁转移量。

- 选定流：去壳腰果 `8e888f2c-671c-44bf-8607-1bde41ac66b8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入包装的实测质量，并与包装产出和包装阶段损失核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装果仁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_and_output_records`
- 数量范围：有条件的临时筛选范围；仅用于候选期 QA，并在取得经审查的包装质量平衡记录后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.2
  - 单位：kg/kg 包装果仁净重
  - 基准：每 1 kg 合格包装果仁净重对应的进入包装分级果仁
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级和次级包装（`packaging_materials`）

根据经核验的采购、领用或件数记录分别记录每种包装材料。只有运输包装随产品跨越所声明工厂门口时才纳入，并单独报告。

- 选定流：Material-specific packaging flow
- 流属性/单位：Mass / kg
- 数量规则：各包装层实测领用质量，或件数乘以经核验的单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装果仁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 数量范围：有条件的临时筛选范围；仅用于候选期 QA，并在取得经审查的包装特定领用和单件质量记录时替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.2
  - 单位：kg/kg 包装果仁净重
  - 基准：每 1 kg 合格包装果仁净重对应的包装材料总质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装用电和气氛气体（`packing_utilities`）

记录包装用电，以及仅针对所选包装分支的真空系统用能或保护气氛气体。除非分别建模不同包装产出，否则不得同时采用真空和保护气氛气体。

- 选定流：Electricity and declared packing-atmosphere gas as separate implemented exchanges
- 流属性/单位：电力采用 Energy / MJ；气氛气体采用 Mass / kg
- 数量规则：按包装产出分配的计量电力和外购气体库存平衡量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装果仁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 数量范围：有条件的临时筛选范围；仅在包装公用工程记录不完整时使用，并在取得包装线计量或经核对的采购记录时替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：MJ-equivalent/kg 包装果仁净重
  - 基准：分别报告的包装用电和气体归一化至每 1 kg 合格包装果仁净重；实施清单中不得合计不同物理流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装脱壳腰果仁（`packed_kernel_reference_output`）

这是经净重核验并依据所声明批次和等级规格放行的参考产品。

- 选定流：去壳腰果 `8e888f2c-671c-44bf-8607-1bde41ac66b8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化数据集恰好为 1 kg 合格包装产品净重
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`eu-pef-2021-2279`
- 数量范围：声明参考量恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：归一化参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`eu-pef-2021-2279`

##### 废物流

###### 包装不合格品和包装废料（`packing_waste`）

记录包装阶段剔除的果仁和场内废弃的包装材料，并按实际材料和处理目的地分开。

- 选定流：Material-specific packing waste
- 流属性/单位：Mass / kg
- 数量规则：按材料和处理目的地记录的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格包装果仁净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_disposition`
- 数量范围：有条件的临时筛选范围；仅用于候选期 QA，并在取得经审查的包装损失和废物记录后替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 包装果仁净重
  - 基准：每 1 kg 合格包装果仁净重对应的包装不合格品和包装废料质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `AL-01` | 所有共享操作 | 分配前优先采用过程细分、路线分离计量，并将投入、排放和废物直接归属至批次或产品等级。 | `eu-pef-2021-2279` |
| `AL-02` | 果壳、种皮、等外果仁和去除的皮 | 根据有记录的去向，将每个实测部分仅分类一次为内部再用、产品/共产品或废物。绝不得同时将同一质量报告为共产品和废物。 |  |
| `AL-03` | 存在共产品且不可避免的共享负担 | 当物理因果关系能代表过程时采用有记录的物理因果关系。若不存在可辩护的物理关系，则采用同期净经济价值，并披露价格、期间、地域和敏感性。不规定默认分配因子。 | `eu-pef-2021-2279` |
| `AL-04` | 废物和输出残余物 | 将场内搬运和处理负担分配至前景过程。除非提供单独声明的下游建模方法和替代证据，否则不得主张避免产品或回收信用。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `kernel_release_shelling`; `kernel_finishing` | 接收物料、内部转移、果仁、果壳、种皮和不合格品 | 地磅、经校准秤、批次单 | lot_id; route_id; timestamp; gross_mass; tare_mass; net_mass; moisture_or_conditioning_state; destination | 称量每个接收批次和物料转移；核对转移和库存变化 | kg | 每批和每次转移 | 覆盖正常路线运行的代表性生产期 | 每个生产场址和路线 | 按批次和路线合计净质量；归一化前保留期初和期末库存 | 秤校准；签字批次记录；批次可追溯性；核对记录 |
| `cp_utility_records` | 所有过程 | 电力、燃料、外购热、蒸汽、水、压缩空气、气氛气体 | 分表、发票、罐体或气瓶库存平衡、运行日志 | meter_start; meter_end; purchase_quantity; opening_stock; closing_stock; route_id; operating_hours; allocation_driver | 优先采用路线或产线计量；否则核对采购和库存，并使用披露的因果驱动分配 | 原始单位，另为能源记录 MJ、为质量记录 kg | 每班或每批抄表；每月核对发票和库存 | 与生产产出相同期间，并覆盖正常运行以及重大开停机事件 | 每个场址、路线和包装线 | 期初加采购减期末；分配至路线；单位仅换算一次；归一化至匹配的过程产出 | 仪表校准；发票；换算因子；分配工作表 |
| `cp_residue_disposition` | 所有过程 | 共产品、内部再用、不合格品、废物和处理路线 | 称量单、发运单、废物联单、内部转移记录 | lot_id; material_type; mass; disposition_class; recipient; treatment; date | 称量每个去向并链接至来源批次或生产期 | kg | 每次发运或内部转移 | 与产品质量平衡相同生产期 | 每个场址和接收路线 | 按材料和互斥去向汇总；与质量平衡核对 | 秤校准；发运或废物文件；接收方证据 |
| `cp_quality_and_output_records` | `kernel_finishing`; `kernel_packing` | 合格等级、水分或调质状态、缺陷、包装放行和净产出 | 实验室或生产质量记录、包装检查、经校准秤 | lot_id; kernel_form; grade; test_method; sample_plan; moisture_or_conditioning_result; defect_result; pack_size; net_mass; release_status | 按声明规格抽样评价批次；称量放行产出 | kg 及方法特定质量单位 | 每个放行批次 | 数据集期间纳入的所有批次 | 每个场址、等级和包装配置 | 保留批次结果；仅合计放行净质量；无披露不得合并不兼容等级或状态 | 试验方法；抽样记录；仪器校准；放行授权 |
| `cp_packaging_records` | `kernel_packing` | 初级、次级和运输包装 | 采购或领用记录、物料清单、件数和单件质量试验 | material_id; layer; item_count; unit_mass; issued_mass; returned_mass; pack_output_mass | 称量领用材料，或用计数件数乘以经核验单件质量；核对退料和废料 | kg | 每个包装批次或生产期 | 与包装产出相同期间 | 每种包装配置 | 领用减退料，按材料和包装层分开，归一化至包装净产出 | 供应商规格；单件质量试验；领退料记录 |
| `cp_direct_emissions` | `kernel_release_shelling` | 路线特定燃烧或工艺设备的场内污染物释放 | 直接测量或排放计算记录 | route_id; fuel_quantity; fuel_property; pollutant; factor; factor_source; control_efficiency; measured_release | 测量每项释放，或使用经审查的污染物特定因子从采集燃料量计算 | kg 每种污染物 | 每个监测期间或燃料批次 | 与路线产出相同期间 | 每个场内排放源 | 分别计算每种污染物；只汇总相同基本流；归一化至分离果仁产出 | 监测报告或燃料记录；因子引用；计算表；控制记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `CAL-01` | 所有清单行 | 归一化数量 = 分配至批次或生产期的数量 / 合格包装果仁净产出；对明确按过程产出归一化的行保留过程产出基准 | 已分配数量；合格包装净产出；适用时的过程产出 | 每参考流或所声明过程产出的数量 | `eu-pef-2021-2279` |
| `CAL-02` | 接收状态和干物质报告 | 干质量 = 接收状态质量 x（1 - 实测水分分数）；仅在水分分数和方法可用时执行换算，并保留原始接收状态质量 | 称量质量；实测水分分数；试验方法 | 单独标记的干质量和换算记录 | `unece-ddp-17-cashew-kernels-2023` |
| `CAL-03` | 路线和包装备选分支 | 保持每个互斥调质或包装分支独立；只有以实测合格产出对路线特定清单加权后方可汇总，绝不得将完整备选清单相加到同一批次 | 路线标识；分支特定投入和产出；合格产出 | 路线特定清单及任何已披露的产量加权汇总 |  |
| `CAL-04` | 按件计数的包装 | 包装质量 = 领用件数 x 经核验的单件质量，并对退回的未使用包装作调整、单独实测废料 | 件数；单件质量；退料；废料 | 按材料区分的包装投入和包装废物 |  |
| `CAL-05` | 质量平衡 | 平衡差 = 接收物料投入 - 产品产出 - 共产品产出 - 废物产出 - 有记录的库存变化；调查差值，而不得将无法解释的差值强制归入产品或废物流 | 所有实测物料质量；期初和期末库存 | 已披露的质量平衡核对及未解释差值 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `DQ-01` | 产品身份 | 保留 CPC 分类语境、Tiangong 产品流 UUID、果仁形态、等级、批次、原产地、水分或调质状态和包装限定信息。 | 产品规格；`unsd-cpc-3-0-21424`；`unece-ddp-17-cashew-kernels-2023` |
| `DQ-02` | 代表性 | 覆盖每个已声明场址、技术、调质路线、等级和包装配置的正常运行；披露排除的批次、扰动、开机、停机和季节限制。 | 生产计划；路线登记；完整性声明；`eu-pef-2021-2279` |
| `DQ-03` | 测量和计算 | 采用经校准的质量测量，保留公用工程原始单位和换算因子，记录分配驱动，并保持原始记录对归一化行的可追溯性。 | 校准记录；发票；批次单；计算和分配工作簿 |
| `DQ-04` | 临时范围 | 将所有 `reasoned_estimate` 范围视为有条件的候选期 QA 指导，而非默认 LCI 数量。当获得首个完整代表性生产期、经审查的供应商数据，或具有相同路线和基准的有来源范围时予以替换。 | 替换日志；经审查的前景数据集或外部来源记录 |
| `DQ-05` | 完整性 | 核对产品、共产品、废物和库存变化质量，并记录所有排除项、缺失仪表、代理数据集、未量化排放和数据缺口。 | 质量平衡报告；数据缺口登记；`eu-pef-2021-2279` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `VAL-01` | 参考流 | 确认参考产出恰好为 1 kg 合格包装果仁净重，并使用产品流 UUID `8e888f2c-671c-44bf-8607-1bde41ac66b8`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 |  |
| `VAL-02` | 产品和批次元数据 | 任何必需限定信息缺失，或产品范围包含带壳坚果、配方化或进一步加工的排除产品时，均判数据包不完整。 | `unsd-cpc-3-0-21424`；`unece-ddp-17-cashew-kernels-2023` |
| `VAL-03` | 路线互斥 | 确认每批只有一条主要果仁释放调质路线，每个包装产出只有一条包装气氛分支。存在备选路线时，要求分开的路线记录或产量加权汇总；拒绝同一批次的同时完整路线清单。 |  |
| `VAL-04` | 共产品和废物去向 | 确认每个残余物质量只有一个去向，且不存在任何果壳、种皮、去除的皮、不合格品或等外果仁同时计为产品/共产品和废物。 |  |
| `VAL-05` | 清单证据 | 确认采集和计算行链接采集协议，外部或方法证据具有来源标识，保留原始单位，采用路线特定归一化，并披露所有替代数据集和分配选择。 | `eu-pef-2021-2279` |
| `VAL-06` | 临时估算 | 将每个 `reasoned_estimate` 标记为仅供候选期使用，并核验其声明的替换触发器。未经明确方法审查及有来源替换或有记录接受，不得将此类范围作为发布关键允许范围接受。 |  |
| `VAL-07` | 质量平衡和完整性 | 确认接收坚果、果仁、共产品、废物和库存变化的核对；报告无法解释的差值和所有跳过检查，不得静默平衡。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 脱壳腰果仁生产和包装的前景单元过程数据包；只有完成审查后才具备发布为 `secondary_dataset` 或 `background_dataset` 的资格 |
| downstream_use | 构建需要工厂门口脱壳腰果仁投入的 TianGong `process` 记录和 `lifecyclemodel` 系统 |
| allowed_use | 采用具有代表性的上游数据集链接接收坚果、公用工程、辅助材料和包装，对路线、场址、期间、等级和包装配置特定的门到门过程建模 |
| excluded_use | 未增补数据集的农业生产、出厂后配送、零售、消费或生命末期；配方化或进一步加工的腰果食品；合并互斥的完整路线；将临时范围用作无条件默认 LCI 数量 |
| required_metadata | 规范 PCR id；CPC 语境；Tiangong 流 UUID；场址和期间；供应商批次原产地；调质路线；果仁形态和等级；水分或调质状态及试验基准；缺陷和不合格品基准；包装材料、规格和气氛；共产品和废物去向；分配；上游数据集引用 |
| required_quality_disclosure | 批次覆盖和排除；校准；质量平衡差；公用工程分配；场内排放；代表性；数据缺口；代理数据集；临时估算及其替换状态；来源和方法版本 |
| update_trigger | 供应商来源、产品规格、路线、设备、公用工程组合、得率或不合格品模式、残余物去向、分配、包装配置、测量方法、数据集代表性发生实质变化，或获得可替换临时范围的证据 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21424` | official_guidance | 联合国统计司，《产品总分类》（CPC）3.0 版，子类 21424 “Cashew nuts, shelled” | 仅用于分类语境和类别标签 |
| `unece-ddp-17-cashew-kernels-2023` | standard | UNECE 关于腰果仁销售和商业质量控制的 DDP-17 标准，WP.7 当前清单（2023） | 果仁身份及质量、计量和包装限定信息；不用于 LCI 默认数量 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会关于使用环境足迹方法测量和传达生命周期环境绩效的建议（EU）2021/2279 | 边界、清单、分配、数据质量、归一化和披露方法框架 |
