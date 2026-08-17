---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.processed-liquid-milk
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 加工液态奶

## 1. 范围与适用性

本 PCR 适用于通过分离或脂肪标准化、均质、巴氏杀菌、灭菌、超高温处理、允许的强化、冷却和灌装等一种或多种操作，使液态奶适合所声明市场的产品。只要最终产品仍为无调味、未发酵的液态奶，本规则覆盖全脂、部分脱脂、脱脂、强化、巴氏杀菌、均质、灭菌、UHT 以及定量和定性组成等同的复原乳。前景数据包表示从乳品厂门口验收乳开始，到乳品厂门口已声明包装或散装产品为止的加工。

本 PCR 不覆盖生乳、鲜奶油、浓缩乳或乳粉、加糖乳、发酵或酸化乳、调味乳、婴幼儿配方食品或植物基乳替代品。上游生乳生产、外购公用工程与包装材料生产、乳品厂门口之后的配送、零售、使用和寿命终止不属于前景操作；研究范围需要时，应通过明确的上游或下游数据集连接。

天工过程 `bf42212c-0425-402b-85bc-64ec44aec568` 是汇总加工液态奶制造过程的身份引用，其定量参考为所选产品流。该 UUID 支持类别层面的过程身份，但不替代下述场址特定过程分解与前景记录。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.processed-liquid-milk |
| classification_refs | CPC 3.0 22110，Processed liquid milk，exact |
| covered_products | 无调味加工液态奶，包括全脂、部分脱脂、脱脂、强化、巴氏杀菌、均质、灭菌、UHT 以及组成等同的复原乳 |
| excluded_products | 生乳；鲜奶油或浓缩奶油；浓缩乳、淡炼乳、炼乳或乳粉；加糖、调味、发酵、凝结或酸化乳；婴幼儿配方食品；植物基替代品 |
| representative_product | 采用所声明一次包装、可在乳品厂门口发运的无调味加工牛乳 |
| production_route | 乳接收与冷藏；有条件的澄清、分离和标准化；热处理；有条件的均质；冷却；灌装；储存；清洗与废水管理 |
| market_state | 乳品厂门口的成品液态产品；巴氏杀菌等冷链产品处于冷藏状态，采用经验证 UHT 或灭菌路线的产品则在无菌包装中常温稳定 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在乳品厂门口提供满足所声明组成、食品安全处理和包装规格的加工液态奶 |
| How much | 1 kg 加工液态奶净质量，不包括一次和二次包装质量 |
| How well | 符合所声明动物种类、脂肪等级、固形物或强化规格、热处理路线、均质状态、包装配置和适用食品安全要求 |
| How long or cycle | 一个在乳品厂门口放行的生产批次；声明保质期和所需储存温度，但不包括消费者储存服务 |
| reference_flow_link | 功能单位由下述天工产品流恰好 1 kg 实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 加工液态奶净质量 |
| 参考产品流 | Processed liquid milk `02cfe33a-6f85-4477-bfde-c8057d01cfa1` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 动物种类和来源乳身份；生乳路线或组成等同的复原路线；脂肪等级或实测脂肪含量；蛋白质和总固形物基准；热处理路线；均质状态；强化；包装材料及标称灌装规格或散装交付；产品净质量基准；生产地域；厂门储存温度；声明保质期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅报告液态奶净质量。包装应作为独立清单投入记录，包装质量不得计入 1 kg 参考数量。 |
| `volume_to_mass` | 乳、水和液态化学品记录 | 质量或带实测换算基准的体积 | kg 或 m3 | 仅使用适用于被测物料、温度、组成、批次或报告期的密度把体积换算为质量；保留原始体积、密度、温度和计算。 |
| `composition_basis` | 乳及乳品共产品 | 质量分数 | kg/kg | 在一致的分析基准和湿质量基准上记录脂肪、蛋白质和总固形物，并标明取样方法和平均期；不得根据产品名称推断缺失组成。 |
| `energy_carrier_separation` | 外购电力、燃料、蒸汽、热水和制冷 | 能量 | kWh、MJ 或 MWh | 每种能源载体保留为独立交换。仅为设施级 QA，使用有记录的物理单位换算把电能和热能换算为 MWh，不得把一次能源与交付能源合并。 |
| `wastewater_volume` | 工艺废水 | 体积 | m3 | 在扣除单独计量且未进入工艺废水系统的未污染水后，报告排放废水体积；保留处理去向和测量点。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 乳品厂接收点验收的乳，声明供应者或来源、动物种类、数量、温度、组成、验收状态及批次或交付时间 |
| starting_condition_role | 前景采集从乳品厂的接收、储存和加工开始；来源乳生产由匹配的上游数据集表示 |
| product_classification_scope | 处于经复核 CPC 3.0 22110 语义范围内的无调味加工液态奶，不依赖消费数据集所用分类系统 |
| recursive_input_rule | 当同类别加工液态奶或不合格乳作为返工料时，将其作为具有来源和数量的独立技术系统投入记录，在其供应数据集处终止递归，并防止重复计入既往加工 |
| upstream_dataset_requirement | 为生乳或复原乳组分、电力、燃料或蒸汽、水、清洗化学品、制冷剂和包装材料采用在地域、时间、技术、动物种类和组成方面匹配的数据集 |
| disclosure | 声明来源乳路线、设施地域、分配边界、纳入的单元操作、旁路或外包操作、热处理与储存路线、包装范围、废水去向以及与其他乳品共享的过程数据 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_at_dairy_reception` | 前景系统边界 | 纳入乳接收、验收计量、冷藏、适用的标准化、热处理、均质、冷却、灌装、厂门储存、清洗、产品损失以及所声明产品路线产生的工艺废水。 | `ifc-dairy-ehs-2007`; `unsd-cpc-22110` |
| `boundary_upstream_inputs` | 上游技术系统 | 通过明确上游数据集连接来源乳、适用的复原配料、公用工程、水、化学品、包装和制冷剂；不得默默省略其生产。 | `ifc-dairy-ehs-2007` |
| `boundary_downstream_exclusion` | 下游阶段 | 从前景过程排除乳品厂门口之后的配送、零售、消费者冷藏、消费、包装寿命终止和产品寿命终止，同时把它们标识为生命周期模型的下游阶段。 | `idf-dairy-pefcr-2018` |
| `boundary_losses_and_effluent` | 损失与排放 | 当拒收乳、溢漏、分离残渣、包装废料、清洗化学品、废水、处理污泥以及制冷剂或燃烧直接排放跨越前景边界时予以纳入，并披露回收、处理和去向。 | `ifc-dairy-ehs-2007` |
| `boundary_heat_route` | 热处理 | 记录实际处理路线及其时间—温度或等效验证记录；采用生产地司法辖区的法定食品安全准则并披露所用准则。 | `eu-reg-853-2004` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `milk_reception_and_standardisation` | 乳接收与标准化 | `required` | 始终纳入接收与储存；仅在所声明产品执行澄清、分离、组成调整或复原时纳入相应操作 | 前景物料准备 | 验收乳 kg 和离开本过程的标准化乳 kg |
| `heat_treatment_and_filling` | 热处理、冷却与灌装 | `required` | 始终纳入经验证热处理和灌装路线；使用时纳入均质和无菌灌装 | 前景产品制造 | 乳品厂门口 1 kg 加工液态奶净质量；天工类别过程身份 `bf42212c-0425-402b-85bc-64ec44aec568` |
| `sanitation_and_wastewater_management` | 卫生与废水管理 | `required` | 纳入可归因于所声明产品路线的全部清洗、CIP、罐车或管线冲洗、废水收集和场内处理 | 跨过程前景支持与处理 | 按参考产品分配的报告期服务量 |

### 过程：乳接收与标准化（`milk_reception_and_standardisation`）

#### 输入

##### 产品流

###### 验收来源乳（`source_milk_input`）

验收生乳，或组成等同复原路线中明确声明的保藏乳组分和水，在数量、温度、质量、动物种类和组成检查后进入前景乳品厂。

- 选定流：场址和动物种类特定的来源乳，或已声明复原组分；构建前景数据包时必须选择精确天工流身份
- 流属性/单位：质量 / kg
- 数量规则：拒收后实测验收质量，按参考产品净质量归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 乳品厂门口加工液态奶净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milk_mass_and_composition`
- 来源：`unsd-cpc-22110`; `ifc-dairy-ehs-2007`
- 数量范围：暂定生乳质量平衡筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.95
  - 上限：1.20
  - 单位：kg/kg 加工液态奶净质量
  - 基准：分离损失或共产品移出前、每单位参考产品的验收来源乳
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收与分离用电（`reception_electricity`）

通过分表或有记录的设施分配，记录卸料、泵送、冷却、储存搅拌、澄清和分离用电。

- 选定流：与地域和电压匹配的电力产品流
- 流属性/单位：能量 / kWh
- 数量规则：可归因于接收和标准化的实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 乳品厂门口加工液态奶净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`ifc-dairy-ehs-2007`; `eu-fdm-bat-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 标准化乳中间流（`standardised_milk_output`）

经所声明澄清、分离、组成调整、复原或储存步骤后的验收乳进入热处理。

- 选定流：标准化乳中间流，表示为内部产品流，不把最终参考产品复用为外部输出
- 流属性/单位：质量 / kg
- 数量规则：与来源乳、共产品、拒收物和管线存量核对的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 乳品厂门口加工液态奶净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_milk_mass_and_composition`
- 来源：`ifc-dairy-ehs-2007`

###### 奶油或其他可销售乳级分（`separation_coproduct`）

当脂肪标准化或分离产生可销售乳级分时，按实测质量和组成将其记为共产品而不是废物。

- 选定流：与出售或转移物料相匹配的精确奶油或乳级分产品流
- 流属性/单位：质量 / kg
- 数量规则：离开过程的实测共产品质量和组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 乳品厂门口加工液态奶净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milk_mass_and_composition`
- 来源：`ifc-dairy-ehs-2007`; `iso-14044-2006`

##### 废物流

###### 拒收乳与分离残渣（`reception_rejects`）

拒收批次、过滤或分离残渣及接收损失应按去向记录；只有存在有记录用途时，回收的食品或饲料物料才重新分类为产品。

- 选定流：与去向匹配的有机废物或废水流
- 流属性/单位：质量 / kg
- 数量规则：实测拒收、溢漏、过滤残渣和分离排放质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 乳品厂门口加工液态奶净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_effluent_records`
- 来源：`ifc-dairy-ehs-2007`

##### 基本流

### 过程：热处理、冷却与灌装（`heat_treatment_and_filling`）

#### 输入

##### 产品流

###### 标准化乳进料（`standardised_milk_input`）

经核对的标准化乳中间流进入经验证的热处理路线。

- 选定流：标准化乳内部产品流
- 流属性/单位：质量 / kg
- 数量规则：前一过程的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 乳品厂门口加工液态奶净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milk_mass_and_composition`
- 来源：`ifc-dairy-ehs-2007`

###### 工艺用电（`process_electricity`）

泵送、均质、换热辅助、冷却、灌装、包装设备和产品储存用电应保留为独立能源载体。

- 选定流：与地域和电压匹配的电力产品流
- 流属性/单位：能量 / kWh
- 数量规则：分表实测电量或根据设施总表形成的有记录分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 乳品厂门口加工液态奶净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`ifc-dairy-ehs-2007`; `eu-fdm-bat-2019`

###### 热能载体（`thermal_energy`）

热处理和产品温度控制所用燃料、蒸汽或热水应作为独立外购载体或场内燃料投入记录，不合并其交付量。

- 选定流：能源载体和供应者特定的燃料、蒸汽或热水产品流
- 流属性/单位：能量 / MJ
- 数量规则：计量的交付热能，或根据实测燃料用量和有记录换算计算的能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 乳品厂门口加工液态奶净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`ifc-dairy-ehs-2007`; `eu-fdm-bat-2019`

###### 一次包装材料（`primary_packaging`）

按材料和部件记录容纳与保护参考产品所需的全部包装组件，包括盖、封口、标签以及存在时的无菌阻隔层。

- 选定流：与实际包装物料清单相匹配的材料特定包装产品流
- 流属性/单位：质量 / kg
- 数量规则：发出包装量减去有记录的可复用或工序内回收废料，并与合格包装产品数量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 乳品厂门口加工液态奶净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`ifc-dairy-ehs-2007`
- 数量范围：暂定一次包装筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：0.050
  - 单位：kg 包装/kg 加工液态奶净质量
  - 基准：每单位参考产品发出的全部一次包装组件
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 加工液态奶参考产品（`processed_liquid_milk_output`）

乳品厂门口放行的合格产品是定量参考输出。

- 选定流：Processed liquid milk `02cfe33a-6f85-4477-bfde-c8057d01cfa1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：放行检查后固定为 1 kg 液态奶净质量；不包括包装质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-22110`

##### 废物流

###### 不合格产品与包装废料（`filling_rejects`）

产品损失、开停机损失、破损包装和包装边角料应单独计量，并分配至复用、回收、废水、再生、处理或处置。

- 选定流：按去向区分的乳品废物与包装废物流
- 流属性/单位：质量 / kg
- 数量规则：按去向实测或质量平衡得到的不合格产品与包装材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 乳品厂门口加工液态奶净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_effluent_records`
- 来源：`ifc-dairy-ehs-2007`

##### 基本流

###### 制冷剂泄漏至空气（`refrigerant_leakage`）

当机械制冷服务于所声明路线时，应按实际制冷剂物种报告泄漏；不得以通用制冷剂基本流替代物种特定流。

- 选定流：与记录制冷剂物种对应的精确天工排放至空气基本流
- 流属性/单位：质量 / kg
- 数量规则：年度库存损失加维修补充量减有记录回收量，并分配至所声明产品路线
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 乳品厂门口加工液态奶净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`ifc-dairy-ehs-2007`

### 过程：卫生与废水管理（`sanitation_and_wastewater_management`）

#### 输入

##### 产品流

###### 工艺与清洗用水（`process_cleaning_water`）

对产品接触操作、漂洗、罐车和管线清洗、CIP 及地面清洗使用的饮用水或其他获准水，应在相关边界计量。

- 选定流：与地域和水质匹配的供水产品流
- 流属性/单位：体积 / m3
- 数量规则：可归因于所声明产品路线的实测工艺与清洗水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 乳品厂门口加工液态奶净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cip_and_water_records`
- 来源：`ifc-dairy-ehs-2007`

###### 清洗与消毒化学品（`cleaning_chemicals`）

碱性、酸性、消毒及其他清洗剂应按供应配方和活性浓度记录；未知配方不得由通用化学品替代。

- 选定流：配方或活性成分特定的化学品产品流
- 流属性/单位：质量 / kg
- 数量规则：发出化学品质量与库存变化及稀释记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 乳品厂门口加工液态奶净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cip_and_water_records`
- 来源：`ifc-dairy-ehs-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 进入处理的工艺废水（`process_wastewater`）

含乳漂洗水、CIP 排放、罐车和管线冲洗水及其他污染水流，应在排放或处理入口计量点记录，并声明去向和场内处理。

- 选定流：与实际处理路线和接收系统匹配的废水流
- 流属性/单位：体积 / m3
- 数量规则：可归因于所声明产品路线的实测工艺废水排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收来源乳
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_effluent_records`
- 来源：`ifc-dairy-ehs-2007`; `eu-fdm-bat-2019`
- 数量范围：市场奶设施废水排放 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.0003
  - 上限：0.0030
  - 单位：m3/kg 原料
  - 基准：市场奶至少占产量 80% 的设施年度平均比废水排放
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-fdm-bat-2019`

###### 废水处理污泥（`wastewater_sludge`）

场内处理废水时，处理污泥及其他残余物应按湿质量或干质量基准和去向记录。

- 选定流：与去向匹配的废水处理污泥流
- 流属性/单位：质量 / kg
- 数量规则：实测污泥质量，并记录固形物含量、处理、回收与处置路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 乳品厂门口加工液态奶净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_effluent_records`
- 来源：`ifc-dairy-ehs-2007`

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 全部共享乳品操作 | 首先通过分表和单元过程细分避免分配，把直接计量的包装、热处理、清洗、储存和废物管理记录分配给引起这些记录的产品路线。 | `iso-14044-2006`; `idf-dairy-pefcr-2018` |
| `allocation_reconcile_milk_components` | 标准化与分离 | 分配前核对投入和产出的总质量以及脂肪、蛋白质和总固形物。奶油及其他可销售乳级分是共产品；产品损失和处理残余物不是共产品，除非有记录的有益用途使其成为产品。 | `ifc-dairy-ehs-2007` |
| `allocation_physical_relationship` | 剩余共享负荷 | 当细分不能消除共享负荷时，使用反映操作因果使用的有记录物理关系，例如处理量、处理时间、制冷负荷或保留乳固形物；湿总质量不能表示因果关系时不得默认使用。 | `iso-14044-2006` |
| `allocation_other_relationship` | 缺少可辩护物理关系 | 如果不存在可辩护的物理关系，使用同期经济价值等其他有记录关系，披露价格期间和地域，并报告相对于合理替代方法的敏感性检查。 | `iso-14044-2006` |
| `allocation_no_avoided_burden_credit` | 废物与回收物料 | 除非所声明 LCA 建模框架明确要求替代，否则不得在前景数据集中计入避免产品信用；透明报告回收输出和处理去向供下游建模。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_milk_mass_and_composition` | `milk_reception_and_standardisation` | 来源乳、中间物、产品、共产品 | 地磅、校准流量计、筒仓平衡、实验室记录、批记录 | 交付质量或体积；换算时的密度和温度；动物种类；供应者；脂肪；蛋白质；总固形物；验收或拒收质量；中间转移；共产品质量 | 逐交付和生产批次采集；每日核对质量与组成 | kg；kg/kg；°C | 每次交付和批次，按日及月汇总 | 至少连续 12 个有代表性月份或完整生产季 | 服务所声明产品的全部接收、储存、分离和产品线 | 库存修正后求和；计算组成加权平均；按放行净产品归一化 | 校准记录、实验室 QA、库存核对、拒收日志 |
| `cp_utility_records` | `heat_treatment_and_filling` | 电力与热能载体 | 公用工程总表、分表、账单、燃料或蒸汽表 | 载体身份；表计起止；燃料量；蒸汽或热量；电量；停产时间；分配驱动因素 | 采集各载体表计并与设施账单核对 | kWh；MJ；MWh；载体单位 | 连续或每班，按月汇总 | 至少连续 12 个有代表性月份或完整生产季 | 服务接收、加工、灌装、冷藏和已分配公用工程的全部表计 | 扣除边界外用户；保留载体；按第 7 节分配共享量；按验收乳和净产品归一化 | 表计校准、账单核对、有记录换算因子 |
| `cp_heat_treatment_records` | `heat_treatment_and_filling` | 经验证处理与放行 | 自动时间—温度曲线、分流阀记录、灭菌或 UHT 验证、放行检验 | 路线；进出口温度；保持时间；流量或批次；分流事件；验证准则；放行状态 | 保留每批连续关键控制记录及异常复核 | °C；s 或 min；通过/不通过 | 每批连续记录 | 完整报告期 | 服务所声明产品的每条热处理线 | 将每个放行批次连接至处理记录和适用法定或 HACCP 准则 | 仪表校准、HACCP 验证、放行授权 |
| `cp_packaging_records` | `heat_treatment_and_filling` | 一次包装与废料 | 物料清单、领退料日志、灌装计数、废料记录 | 组件；材料；供应者；组件质量；领用件数；合格件数；废料；再生或处置量 | 按产品代码核对包装库存与生产线计数 | kg；件 | 每生产批次，按月汇总 | 完整报告期 | 服务所声明产品的每条灌装包装线 | 发出减退库，按组件和去向分开，再除以净产品 | 供应者规格、组件称量检查、生产线核对 |
| `cp_cip_and_water_records` | `sanitation_and_wastewater_management` | 水与清洗剂 | 水表、CIP 配方、化学品发料和库存记录 | 水量；CIP 回路；循环次数；浓度；供应配方；化学品质量；回收漂洗水；产品路线 | 计量用水并用配方与库存核对化学品发出量 | m3；kg；kg 活性成分 | 每次 CIP 循环或班次，按月汇总 | 完整报告期 | 可归因于所声明产品的全部回路和清洗活动 | 扣除有记录复用；按因果驱动因素分配共享循环；按净产品归一化 | 表计校准、浓度检验、CIP 完成日志、库存核对 |
| `cp_waste_and_effluent_records` | `sanitation_and_wastewater_management` | 拒收物、废水、污泥、包装废物 | 废物秤、废水表、处理日志、处置或回收联单 | 废物身份；质量或体积；固形物含量；监测时的 COD 或 BOD；处理；去向；回收状态 | 在确定边界计量或称量每股物流并保留去向证据 | kg；m3；kg 干固体 | 连续或每次发运，按月汇总 | 完整报告期 | 全部产品路线物流和共享处理物流 | 分流保留；应用库存或固形物修正；按验收乳和净产品归一化 | 表计校准、实验室 QA、联单、处理记录 |
| `cp_refrigerant_records` | `heat_treatment_and_filling` | 制冷剂排放 | 制冷剂库存、采购、维修、回收和设备日志 | 制冷剂物种；期初和期末充注量；补充量；回收质量；设备和维修事件 | 按制冷剂物种和设备组进行年度质量平衡 | kg | 每次维修事件，年度核对 | 完整报告年 | 服务所声明路线的制冷设备 | 期初库存加补充量减期末库存和回收量，按有记录制冷负荷驱动因素分配 | 维修证明、钢瓶记录、检漏和回收日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | 全部清单行 | 归一化数量 = 报告期可归因于所声明路线的数量 / 报告期放行加工液态奶净质量 | 可归因数量；放行净产品质量 | 每 1 kg 参考流数量 |  |
| `calc_volume_to_mass` | 以体积报告的乳记录 | 质量 = 实测体积 × 适用于相应物料、温度、组成和期间的实测或有记录密度 | 体积；密度；温度；组成 | 乳或液态投入 kg |  |
| `calc_mass_and_solids_balance` | 接收与标准化 | 将投入质量和脂肪、蛋白质、总固形物与产品、共产品、废物、库存变化及有记录测量不确定性核对 | 来源乳；组分；产品；共产品；废物；库存变化；组成 | 质量和组分闭合率 | `ifc-dairy-ehs-2007` |
| `calc_site_energy_intensity` | 设施级能源 QA | 比能耗 = 换算为 MWh 的交付电力与交付热能总和 / 原料吨数；各载体交换仍分别保留 | 电力；热能；原料质量 | MWh/吨原料 | `eu-fdm-bat-2019` |
| `calc_wastewater_intensity` | 设施级废水 QA | 比废水排放 = 实测工艺废水排放 / 原料吨数 | 工艺废水体积；原料质量 | m3/吨原料 | `eu-fdm-bat-2019` |
| `calc_refrigerant_loss` | 制冷 | 排放质量 = 期初充注量 + 补充量 - 期末充注量 - 回收量，按物种分别计算 | 库存和维修记录 | 各物种制冷剂排放 kg | `ifc-dairy-ehs-2007` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 产品动物种类、组成、处理路线、包装、地域、储存条件和净质量基准完整且与参考流一致。 | 批准的产品规格、标签或散装合同、放行记录 |
| `dq_temporal_coverage` | 前景活动数据 | 除季节性或生产季产品外，至少采用连续 12 个有代表性月份；解释停产、异常生产和外推。 | 带日期表计导出、生产日历、账单、批记录 |
| `dq_mass_balance` | 乳和包装 | 归一化前核对乳与一次包装投入、产品、共产品、废物、库存变化和有记录不确定性。 | 签署的质量平衡工作表、库存记录、校准证据 |
| `dq_metering_and_conversion` | 实测数量 | 标识表计、校准状态、测量点、原始单位、换算因子及负责记录的人员或系统。 | 校准证书、表计图、计算记录 |
| `dq_allocation` | 共享操作与共产品 | 保留直接归属、分配驱动因素数值、分配因子、所用价格或物理数据及敏感性结果。 | 分配工作表和来源记录 |
| `dq_source_dataset_match` | 上游数据集 | 记录时间、地域、技术、动物种类、组成、载体、材料和处理路线匹配；披露代理及其预期偏差方向。 | 数据集元数据和代理说明 |
| `dq_traceability` | 全部前景记录 | 在不嵌入私密凭据的情况下，把每个归一化值追溯至不可变来源记录、计算规则、责任人或系统及报告期。 | 记录标识、审计轨迹、QA 批准 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考输出 UUID、Mass 流属性 UUID、Units of mass 单位组 UUID、参考单位 kg 和固定数量 1 kg 必须与第 3 节及输出行完全一致。 |  |
| `validate_required_qualifiers` | 数据集元数据 | 任一必需限定信息缺失、含糊或与所选产品流和过程路线不一致时，数据包不完整。 | `unsd-cpc-22110` |
| `validate_scope_exclusions` | 产品类别 | 本 PCR 不得用于生乳、奶油、浓缩乳或乳粉、加糖、发酵、酸化、调味乳及非乳替代品。 | `unsd-cpc-22110` |
| `validate_heat_treatment` | 热处理路线 | 要求处理路线、时间—温度或等效验证、异常处理、适用司法辖区准则及批次放行连接；声称采用欧盟准则时，依据 Regulation (EC) No 853/2004 核验。 | `eu-reg-853-2004` |
| `validate_mass_and_solids_closure` | 乳加工 | 标记总乳质量或脂肪、蛋白质、总固形物中无法解释的不平衡；数据包必须说明闭合率、测量不确定性、库存变化和纠正措施，不得强行配平。 | `ifc-dairy-ehs-2007` |
| `validate_energy_qa` | 设施级能源 | 对市场奶至少占产量 80% 的设施，将年度交付比能耗与每吨原料 0.1 至 0.6 MWh 比较；超出指示范围须解释，不得自动替换。 | `eu-fdm-bat-2019` |
| `validate_wastewater_qa` | 设施级废水 | 对市场奶至少占产量 80% 的设施，将年度工艺比废水排放与每吨原料 0.3 至 3.0 m3 比较；超出指示范围须复核边界和表计。 | `eu-fdm-bat-2019` |
| `validate_coproduct_allocation` | 标准化与共享操作 | 要求共产品分类、直接归属、分配驱动因素、因子总和和敏感性披露；每项共享负荷的各产出分配因子之和必须为一。 | `iso-14044-2006` |
| `validate_waste_destinations` | 废物与废水 | 每项拒收物、残渣、包装废料、废水、污泥和回收物流必须具有数量、分类和去向，且不得重复计算回收和处置。 | `ifc-dairy-ehs-2007` |
| `validate_no_double_counting` | 前景与上游数据集 | 核验乳品接收和加工没有既嵌入上游乳数据集又在前景重复，返工料也未递归展开两次。 |  |
| `validate_refrigerant_species` | 制冷排放 | 制冷适用时，要求物种特定库存和基本流身份；不得使用掩盖实际物种的通用制冷剂排放。 | `ifc-dairy-ehs-2007` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 乳品厂门口加工液态奶的前景生产数据集 |
| downstream_use | 经复核后可发布为 `secondary_dataset` 或 `background_dataset`，并可供应包含配送、零售、使用和寿命终止的下游 `process` 或 `lifecyclemodel` |
| allowed_use | 产品组成、处理路线、包装、地域、时间、分配和上游乳路线与数据集匹配的归因型乳品厂门口清单及更广生命周期模型 |
| excluded_use | 生乳生产；奶油、浓缩乳、乳粉、加糖、发酵、酸化或调味乳；植物基替代品；对不同动物种类、脂肪等级、处理、包装或分配方法进行无依据比较 |
| required_metadata | 发布时的 PCR id 和版本；产品与必需限定信息；地域；参考年和报告期；设施和技术说明；纳入及外包操作；上游数据集身份；分配方法；数据责任方；复核状态 |
| required_quality_disclosure | 一手数据覆盖；表计和实验室 QA；质量和固形物闭合；共产品和废物处理；能源和废水 QA 比较；代理数据集；不确定性与敏感性；未解决身份或范围局限 |
| update_trigger | 来源乳或配方、热处理或灌装技术、包装、设施、公用工程组合、废水处理、分配方法、法定食品安全要求、天工参考身份或 QA 范围证据发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-22110` | `dataset` | 联合国统计司，CPC 22110 分类详情，https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1073/22110，检索日期 2026-08-10 | 纳入与排除产品范围及分类身份 |
| `ifc-dairy-ehs-2007` | `official_guidance` | 世界银行集团 / IFC，Environmental, Health, and Safety Guidelines for Dairy Processing，2007-04-30，https://www.ifc.org/content/dam/ifc/doc/2000/2007-dairy-processing-ehs-guidelines-en.pdf，检索日期 2026-08-10 | 乳品过程分解、接收与冷却、标准化、热处理、包装、CIP、废物、废水、能源和数据质量控制 |
| `eu-fdm-bat-2019` | `standard` | Commission Implementing Decision (EU) 2019/2031，Official Journal L 313，2019-12-04，https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj，检索日期 2026-08-10 | 市场奶设施比能耗和比废水排放 QA 范围及资源效率背景 |
| `eu-reg-853-2004` | `standard` | Regulation (EC) No 853/2004，2026-01-27 合并文本，Annex III Section IX，https://eur-lex.europa.eu/eli/reg/2004/853/2026-01-27/eng，检索日期 2026-08-10 | 热处理路线、时间—温度或等效验证及放行记录要求 |
| `iso-14044-2006` | `standard` | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines，含已发布修订，https://www.iso.org/standard/38498.html，检索日期 2026-08-10 | 分配层级、物理关系、其他关系、敏感性、报告与复核 |
| `idf-dairy-pefcr-2018` | `official_guidance` | International Dairy Federation，Dairy Product Environmental Footprint 2018，https://fil-idf.org/dairy-declaration/dairy-product-environmental-footprint-2018/，检索日期 2026-08-10 | 乳品生命周期阶段、一手和二手数据角色、数据质量及下游边界披露 |
