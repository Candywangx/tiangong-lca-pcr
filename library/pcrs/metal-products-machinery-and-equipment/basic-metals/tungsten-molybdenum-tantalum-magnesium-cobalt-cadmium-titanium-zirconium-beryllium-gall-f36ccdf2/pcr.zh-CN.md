---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tungsten-molybdenum-tantalum-magnesium-cobalt-cadmium-titanium-zirconium-beryllium-gall-f36ccdf2
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未锻轧钨及其他特定有色金属、其粉末和钴冶金中间产品

## 1. 范围与适用性

本 PCR 适用于 CPC 41601 产品组的门到门生产：未锻轧钨、钼、钽、镁、钴、镉、钛、锆、铍、镓、铪、铟、铌、铼、铊、锗和钒；上述金属的粉末（镁粉除外）；以及钴锍和其他钴冶金中间产品。只有在明确声明具体产品、原料状态和生产路线时，方可用于原生、再生、湿法冶金、火法冶金、电解或化学路线。

该产品组在化学性质和技术路线方面高度异质。下列详细清单是以钨精矿生产钨粉的已审核代表性路线。为其他涵盖产品建立数据集时，必须以实际路线和原子交换替换代表性过程图，不得把钨路线的流、收率或排放作为代理。范围不包括锻轧制品及其制件、镁粉、金属陶瓷、金属制成品、所接收精矿之前的采矿和选矿、资本品、员工差旅，以及下游使用或寿命终结。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tungsten-molybdenum-tantalum-magnesium-cobalt-cadmium-titanium-zirconium-beryllium-gall-f36ccdf2 |
| classification_refs | CPC 3.0: 41601（精确分类语境；本 PCR 不声称已存在接受的映射） |
| covered_products | 范围所列且已声明的未锻轧金属及非镁金属粉末；钴锍和其他已声明的钴冶金中间产品 |
| excluded_products | 锻轧制品及其制件；镁粉；金属陶瓷；作为废物出售的金属废料和碎料；不符合所声明化学身份或市场状态的产品 |
| representative_product | 钨粉 |
| production_route | 代表性路线：钨精矿经湿法冶金制三氧化钨，再经氢还原；其他涵盖产品必须采用各自声明的路线特定过程图 |
| market_state | 生产设施门口的干燥可销售粉末；声明纯度、粒度分布、水分和氧含量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产符合已声明产品规格的可销售钨粉 |
| How much | 1 kg 干钨粉 |
| How well | 达到已声明的钨纯度、粒度分布、水分、氧含量和批次验收状态 |
| How long or cycle | 已声明报告期内具有代表性的一个生产批次 |
| reference_flow_link | `tungsten_powder_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 干燥可销售产品 |
| 参考产品流 | 钨粉 `50fa22a2-c21a-49ec-a088-53d2c4656c86` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 具体化学/产品身份；原生或再生原料状态；生产路线；干基或收到基；纯度和分析方法；粒度分布；水分；氧含量；设施地理位置；技术；报告期；分配方法 |

构建前景数据包时，必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明全部必需限定信息。非钨涵盖产品必须采用自身的精确产品流并保留 1 kg 干产品质量参考，不得使用钨的 UUID 作为代理。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | 参考产品和质量归一化清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按干基报告可销售产品。按收到状态称量时，保留毛重和实测水分，并以毛重乘以一减水分质量分数计算干质量。 |
| `gas_reference_conditions` | 天然气、工业氧气和 UUID 未解决的氢气行 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录气体体积对应的温度、绝对压力和干湿基准。把全部气体记录换算到数据集声明的同一参考状态；不得合并不同状态下的体积。 |
| `electricity_energy_conversion` | 外购电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量的电能，并按 1 kWh = 3.6 MJ 换算。声明电压等级、电网地理位置、现场发电和损耗边界。 |
| `material_assay_basis` | 钨精矿、三氧化钨、残渣和钨粉 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 同时保留物料总质量和实测钨质量分数。没有明确换算记录时，不得以含钨质量替代总流质量。 |

## 5. 系统边界

前景边界始于钨精矿或其他明确声明的冶金原料到达转化设施。代表性路线包括碱法分解或浸出、固液分离、净化、沉淀/煅烧制三氧化钨、氢还原、粉末后处理、现场大气排放控制，以及直至干燥可销售钨粉出厂前产生的废水或残渣。精矿、电力、燃料、气体、化学品和水的上游生产与运输必须用关联数据集表示。废物跨出前景边界后的处理以单独下游处理过程关联，不得隐含吸收。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 设施门口接收的冶金原料，并声明具体材料身份、原生/再生状态、来源、总质量、水分、目标金属品位和杂质组成 |
| starting_condition_role | 前景转化路线的上游产品输入 |
| product_classification_scope | CPC 41601 语境，限于数据集声明的具体涵盖产品和市场状态 |
| recursive_input_rule | 同类别产品用作原料时，作为独立产品输入并关联自身上游数据集；不得在当前前景过程中递归纳入其生产，也不得与产出净额抵销 |
| upstream_dataset_requirement | 为每项接收原料、电力供应、燃料、气体、化学品和水输入关联在地理和技术上具有代表性的数据集 |
| disclosure | 披露产品身份、路线、原料来源和品位、原生/再生份额、过程所有权、截断、再生含量核算、分配、污染治理、废水和残渣去向 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_specificity` | 每个前景数据集 | 只纳入声明产品和路线实际采用的单元操作，并披露排除的路线阶段；不得把钨路线交换引入其他涵盖金属。 | `jrc-nfm-bref-2017` |
| `boundary_upstream_inputs` | 外购原料和公用工程 | 每项外购原料、电力、燃料、工业气体、化学品和水的生产与交付必须用上游数据集表示。 | `jrc-nfm-bref-2017` |
| `boundary_direct_releases` | 前景排放和废物 | 在下游处理之前，将直接大气排放、水体排放和每项离开受控过程的废物分别记录为原子交换。 | `jrc-nfm-bref-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `tungsten_hydrometallurgy` | 钨精矿分解、净化和氧化物制备 | conditional | 通过碱法湿法冶金路线以钨精矿生产钨粉时必须纳入 | 前景转化和中间产品生产 | 转移至还原过程的干三氧化钨 kg |
| `tungsten_powder_reduction` | 氢还原和钨粉后处理 | conditional | 通过氢还原三氧化钨生产钨粉时必须纳入 | 前景还原和最终产品生产 | 干燥可销售钨粉 kg |
| `other_covered_metal_route` | 其他 CPC 41601 涵盖产品的声明路线 | conditional | 参考产品不是钨粉时，必须用其替代代表性钨路线 | 路线特定前景生产 | 1 kg 干燥已声明可销售产品 |

### 过程：钨精矿分解、净化和氧化物制备（`tungsten_hydrometallurgy`）

#### 输入

##### 产品流

###### 钨精矿原料（`tungsten_concentrate_input`）

选矿后的钨精矿作为代表性含钨原料跨越设施边界。

- 选定流：钨精矿 `9d78c8bc-0a1c-4f89-9c86-efc516cd7e76`
- 流属性/单位：Mass / kg
- 数量规则：实测收到基质量并换算为干质量，另行保留钨品位
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移至还原过程的干三氧化钨
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydromet_batch`
- 来源：`jrc-nfm-bref-2017`

###### 工艺用水（`hydromet_process_water`）

将分解、洗涤和配液用水作为一项产品输入计量；不得重复计算内部循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：跨越前景边界的净工艺用水计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移至还原过程的干三氧化钨
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydromet_batch`
- 来源：`jrc-nfm-bref-2017`

###### 氢氧化钠（`sodium_hydroxide_input`）

碱法分解所用氢氧化钠按交付产品质量记录，并保留浓度和溶液载体水信息。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：采购或领用质量，并记录有效 NaOH 浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移至还原过程的干三氧化钨
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydromet_batch`
- 来源：`jrc-nfm-bref-2017`

###### 湿法冶金用电（`hydromet_electricity`）

分解、泵送、分离和净化设备所用外购电力应单独分表计量，或依据有记录的电表层级分配。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电能并换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移至还原过程的干三氧化钨
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydromet_batch`
- 来源：`jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 三氧化钨中间产品（`tungsten_trioxide_output`）

转移至还原过程的干三氧化钨为内部产品流。其 UUID 仍未解决，不得以钨酸或仲钨酸铵替代。

- 选定流：三氧化钨
- 流属性/单位：Mass / kg
- 数量规则：实测干转移质量，并与钨分析和批次平衡核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移至还原过程的干三氧化钨
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_hydromet_batch`
- 来源：`jrc-nfm-bref-2017`

##### 废物流

###### 含钨浸出渣（`tungsten_leach_residue`）

分解或浸出后分离出的湿固体作为独立废物记录，并保留水分和残余钨含量。

- 选定流：含钨浸出渣
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量，并保留水分和钨分析结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转移至还原过程的干三氧化钨
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydromet_batch`
- 来源：`jrc-nfm-bref-2017`

###### 含钨工艺废水（`tungsten_process_wastewater`）

洗涤、净化或污染治理排出的液态废水在厂外处理之前记录，并保留体积或密度换算以及溶解钨浓度。

- 选定流：含钨工艺废水
- 流属性/单位：Mass / kg
- 数量规则：计量体积并用实测密度换算为质量，或直接测量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移至还原过程的干三氧化钨
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hydromet_batch`
- 来源：`jrc-nfm-bref-2017`

##### 基本流

### 过程：氢还原和钨粉后处理（`tungsten_powder_reduction`）

#### 输入

##### 产品流

###### 三氧化钨原料（`tungsten_trioxide_input`）

湿法冶金内部生产的三氧化钨进入还原炉。其身份未解决状态与上一过程的产出相同。

- 选定流：三氧化钨
- 流属性/单位：Mass / kg
- 数量规则：实测干炉料质量，并与转移的中间产品核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干燥可销售钨粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_reduction_batch`
- 来源：`jrc-nfm-bref-2017`

###### 工业氢气还原剂（`hydrogen_reductant`）

按声明的气体参考状态记录还原三氧化钨所用单质氢。尚未确认精确的 Tiangong 产品 UUID。

- 选定流：工业氢气
- 流属性/单位：Volume / m3
- 数量规则：计量的氢气供应量减去单独计量且输出过程边界的回收氢气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干燥可销售钨粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reduction_batch`
- 来源：`jrc-nfm-bref-2017`

###### 还原和后处理用电（`reduction_electricity`）

分别记录还原炉、气体循环、冷却辅助设备、研磨、筛分和包装设备使用的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电能并换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干燥可销售钨粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reduction_batch`
- 来源：`jrc-nfm-bref-2017`

###### 炉窑加热用天然气（`reduction_natural_gas`）

仅当气态天然气在还原或后处理边界内燃烧时纳入，并与氢气分开记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按声明参考状态计量的天然气；全电路线为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干燥可销售钨粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reduction_batch`
- 来源：`jrc-nfm-bref-2017`

###### 助燃用工业氧气（`combustion_oxygen`）

仅在外购氧气用于支持现场天然气燃烧时纳入，并声明纯度和压力。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：按声明参考状态计量的氧气；仅用空气助燃或不燃烧燃料时为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干燥可销售钨粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reduction_batch`
- 来源：`jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售钨粉（`tungsten_powder_output`）

依据声明的批次规格验收合格的干燥可销售钨粉为参考产出。

- 选定流：钨粉 `50fa22a2-c21a-49ec-a088-53d2c4656c86`
- 流属性/单位：Mass / kg
- 数量规则：实测验收批次质量并换算至干基；归一化后固定为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 干燥可销售钨粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_reduction_batch`
- 来源：`un-cpc-3-0-2025`

##### 废物流

##### 基本流

###### 现场天然气燃烧产生的化石二氧化碳（`fossil_co2_output`）

只有天然气在前景边界内燃烧时才纳入直接化石二氧化碳；本行不含上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据计量天然气和经核实的场址燃料碳平衡计算；现场不燃烧化石燃料时为不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干燥可销售钨粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_reduction_batch`
- 来源：`jrc-nfm-bref-2017`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 多产出前景操作 | 优先细分独立计量的单元操作并保留内部中间产品转移，从而避免分配。 | `jrc-nfm-bref-2017` |
| `allocation_recovery_loop` | 在同一报告系统内返回的再生过程物料 | 将内部回收循环作为内部转移；只计算跨越前景边界的补充输入以及净废物或产品。 |  |
| `allocation_joint_products` | 联合生产的可销售金属或钴中间产品 | 无法细分时，若实测可回收金属质量能反映因果关系，则采用该物理关系；否则采用经济分配并披露价格期、币种和敏感性。除非废物作为具有市场功能且有记录的产品离开边界，否则不得给予信用。 | `jrc-nfm-bref-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_hydromet_batch` | `tungsten_hydrometallurgy` | 每项所列原料、公用工程、中间产品和废物交换 | 批次台账、磅单、仪表、实验室分析和废物联单 | timestamp; batch_id; flow identity; supplier or destination; gross mass or meter reading; moisture; tungsten grade; concentration; meter start/end; density; unit | 将采购/领用记录和校准仪表与批次生产及实验室分析核对 | kg, m3, MJ, mass fraction | 每批次并按月核对 | 至少连续 12 个有代表性的月份，短期生产则覆盖全部批次 | 运行控制下的全部前景湿法冶金单元 | 按原子流求和并归一化到干三氧化钨转移量；记录共用仪表分配 | 仪表校准；磅单；分析证书；实验室 QA/QC；库存核对；废物联单 |
| `cp_reduction_batch` | `tungsten_powder_reduction` | 每项所列原料、能源、气体、产品和直接排放交换 | 炉次记录、气体和电力仪表、产品批次记录及燃料碳记录 | timestamp; batch_id; flow identity; meter start/end; gas temperature and pressure; gross mass; moisture; product acceptance; carbon content; unit | 将炉料、气体和能源仪表、验收产品批次及直接排放计算输入进行核对 | kg, m3, MJ, mass fraction | 每炉次并按月核对 | 至少连续 12 个有代表性的月份，短期生产则覆盖全部批次 | 运行控制下的全部还原和后处理单元 | 按原子流求和并归一化到干燥验收粉末；记录共用仪表分配和不合格批次 | 校准仪表；炉次记录；产品证书；水分和氧含量测试；燃料证书；质量和碳平衡闭合 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_mass` | 精矿、三氧化钨、残渣和钨粉 | 干质量 = 收到基质量 ×（1 − 水分质量分数） | 收到基质量；实测水分分数 | kg 干物料 |  |
| `calc_flow_normalization` | 每项清单行 | 归一化数量 = 报告期原子流数量 ÷ 报告期干燥验收钨粉质量 | 核对后的流数量；干燥验收产品质量 | 每 kg 参考流的数量 |  |
| `calc_electricity_mj` | 电力记录 | MJ = 计量 kWh × 3.6 | 计量 kWh | MJ 电力 |  |
| `calc_gas_reference_volume` | 氢气、天然气和氧气记录 | 将实测气体体积换算到数据集声明的温度、绝对压力和干湿基准，并保留换算输入 | 实测体积；温度；绝对压力；水分基准；压缩因子方法 | 声明参考状态下的 m3 |  |
| `calc_direct_fossil_co2` | 现场天然气燃烧 | 根据计量燃料和经核实的场址燃料碳平衡计算化石 CO2；核对燃料碳、输出物流中的碳和未氧化残余碳 | 天然气数量；燃料碳数据；输出碳；残余碳 | kg 化石 CO2 | `jrc-nfm-bref-2017` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和全部产品输入 | 确认具体化学身份、市场状态、纯度或品位、水分基准、原生/再生状态及供应商或内部来源。 | 产品规格；分析证书；供应商声明；带 UUID 行的 Tiangong 直读身份 |
| `dq_route` | 前景过程图 | 声明全部纳入的单元操作，并将过程图与设备、批次和仪表记录核对；非钨数据集必须替换代表性路线和流。 | 工艺流程图；设备清单；批次路线；仪表图 |
| `dq_temporal` | 全部前景记录 | 采用一个一致报告期，并解释停产、启动、检修和非代表性生产。 | 带日期记录；生产日历；异常日志 |
| `dq_completeness` | 质量、钨和碳平衡 | 报告平衡闭合、仪表缺失估算和截断；调查可能隐藏残渣、废水或排放的物料差额。 | 签署的核对记录；不确定性记录；纠正措施日志 |
| `dq_uuid` | UUID 为空的行 | 保留具体原子名称；在公开状态码 100 的精确流得到直接核验前，不得使用代理 UUID。 | 已最终确定的混合检索回执和未来直读审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_product` | 参考流 | 确认参考产出为采用给定 UUID、Mass 属性和 kg 单位的干燥可销售钨粉；或确认非钨涵盖数据集已明确替换为精确产品身份且未保留钨 UUID。 | `un-cpc-3-0-2025` |
| `validate_atomic_inventory` | 全部清单行 | 确认每行仅表示一个物理、化学、废物、能源或基本流交换；路线不适用的行必须明确标为不适用，不得合并或默默省略。 |  |
| `validate_balance` | 每个报告期 | 对输入、产品、内部转移、废物和直接排放进行总质量、钨以及燃烧化石燃料时的碳平衡核对，并披露闭合程度和未解决损失。 | `jrc-nfm-bref-2017` |
| `validate_gas_basis` | 氢气、天然气和氧气 | 确认采用一个声明的气体参考状态，并根据保留的温度、压力和干湿基准数据核验每项体积换算。 |  |
| `validate_no_proxy_uuid` | UUID 为空的清单行 | 若为未解决的三氧化钨、浸出渣、废水或氢气行赋予钨酸、仲钨酸铵、钨尾矿、混合气体或其他非精确候选 UUID，则拒绝该数据集。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；经独立审查并解决相关身份与范围证据缺口后可作为 `background_dataset` |
| downstream_use | 需要声明的涵盖未锻轧金属、粉末或钴中间产品之路线、地理和产品特定生产数据的产品足迹与生命周期模型 |
| allowed_use | 产品身份、市场状态、原料、路线、技术、地理位置、报告期、分配和数据质量披露与研究相符时使用 |
| excluded_use | 在涵盖金属或路线之间作通用代理；用于锻轧或金属制成品、镁粉、仅采矿数据集；忽略纯度、品位、产品状态或分配差异的比较 |
| required_metadata | 可用时的具体产品和流 UUID；化学规格；干基/收到基；原料来源和原生/再生份额；路线和技术；地理位置；报告期；气体参考状态；分配；截断；来源和去向数据集 |
| required_quality_disclosure | 前景数据份额；仪表和分析覆盖率；质量、钨和碳平衡闭合；不确定性和估算方法；未解决 UUID；代表性限制；范围证据缺口 |
| update_trigger | 路线、原料、技术、能源结构、纯度规格、分配或污染治理发生实质变化；报告期超过项目阈值；可获得精确替换 UUID 或兼容的独立范围证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《CPC 第 3.0 版结构》，代码 41601，2025。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 正式分类身份和产品边界措辞 |
| `jrc-nfm-bref-2017` | `official_guidance` | Cusano、Gonzalo、Farrell、Remus、Roudier 和 Delgado Sancho，《有色金属工业最佳可行技术参考文件》，EUR 28648 EN，JRC107041，2017，doi:10.2760/8224。https://publications.jrc.ec.europa.eu/repository/handle/JRC107041 | 有色金属过程边界、通用及行业特定过程分解、资源投入、直接大气/水体排放、废物、监测和数据质量控制 |
