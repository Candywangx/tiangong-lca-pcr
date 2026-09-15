---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.orange-juice
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 橙汁

## 1. 范围与适用性

本 PCR 适用于以橙为原料、以直接榨取橙汁、非浓缩还原橙汁、浓缩还原橙汁或浓缩橙汁状态供应的产品。范围包括清汁或浑浊汁、已声明的果肉或汁胞，以及仍符合产品定义且由同种水果以物理方式回收的橙香气或挥发性风味组分。只要声明起始条件及上游数据集，前景路线可以从鲜橙、外购单倍浓度橙汁或外购浓缩橙汁开始。

本 PCR 不包括橙果肉饮料、橙味饮料、混合果汁、发酵橙饮料、以果泥销售的橙果泥、单独销售的橙皮油、果胶、干橙皮、动物饲料及其他作为独立产品销售的柑橘副产品。这些输出可以作为橙汁路线的共产品出现，但不得成为本 PCR 的参考产品。果园种植、所声明制造交付点之后的配送、消费者冷藏或制备，以及包装生命末期不属于前景边界；若研究明确扩展模型并识别新增过程，则可纳入。

通用 Tiangong 参考流是类别代表流。前景数据包应声明实际橙种或商业规格、直接榨取或浓缩还原路线、浓缩与复原状态、可溶性固形物含量、果肉或汁胞含量、保藏处理、包装或散装状态及交付温度。如果现行公开可读的 Tiangong 产品流比该代表流更准确地匹配这些事实，应以更具体的流替换，同时保留质量参考流属性并记录替换原因。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.orange-juice |
| classification_refs | CPC 3.0: 21431 Orange juice |
| covered_products | 直接榨取橙汁；非浓缩还原橙汁；浓缩还原橙汁；浓缩橙汁；含已声明果肉或汁胞及同种水果物理回收组分的清汁或浑浊橙汁 |
| excluded_products | 橙果肉饮料；橙味饮料；混合果汁；发酵橙饮料；以果泥销售的橙果泥；作为参考产品单独销售的橙油、果胶、干橙皮、饲料及其他副产品 |
| representative_product | 以下述 Tiangong 产品流表示的橙汁；该记录仅为代表流，不能替代实际路线和产品限定信息 |
| production_route | 鲜橙接收、分选和清洗、榨汁和精制，并视实际情况包括浓缩、香气回收、储存、复原或调配、稳定化、灌装及散装或包装交付 |
| market_state | 在所声明制造商门口以散装或包装状态交付的橙汁；单倍浓度或浓缩；按声明采用冷藏、冷冻、无菌、热灌装或其他物理保藏方式 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供具有所声明浓度、组成、保藏处理、包装状态和制造商门口交付条件的橙汁 |
| How much | 1 kg 按销售状态计的橙汁产品 |
| How well | 符合所声明产品规格和适用的橙汁真实性、组成、卫生及标签要求，并披露路线与可溶性固形物基准 |
| How long or cycle | 制造商门口交付的一批产品或一个核算期；不隐含使用阶段服务期限 |
| reference_flow_link | 参考产品输出行 `orange_juice_reference_output` 每参考流恰为 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 橙汁 `858ebbd0-452b-443d-9964-94ee3f2c1c57` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 橙种或商业规格；直接榨取、非浓缩还原、浓缩还原或浓缩路线；实测 °Brix 和浓缩状态；果肉或汁胞含量；配料和物理恢复橙组分声明；保藏处理；散装或包装形式；交付温度；地理范围；参考期 |

构建前景数据包时，`必需限定信息` 中的每一项都应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。限定信息缺失时，参考流不完整。不得使用代表性 Tiangong 流暗示浓度、组成、保藏、包装或交付状态不同的两种产品可以互换。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考橙汁输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告产品净质量，不含不随产品销售的运输包装。归一化参考输出恰为 1 kg；归一化前保留实测批次质量。 |
| `as_sold_concentration` | 所有参考产品 | Mass 和实测可溶性固形物 | kg 和 °Brix | 1 kg 参考量保持为按销售状态计的产品。不得将浓缩汁静默换算为单倍浓度汁。记录实测 °Brix、取样温度或校正方法，以及直接榨取、复原或浓缩状态。 |
| `reconstitution_basis` | 浓缩还原橙汁 | Mass 和实测可溶性固形物 | kg 和 °Brix | 记录浓缩汁质量、饮用级复原水、实测最终质量和最终 °Brix。适用市场规则；CXS 247-2005 是默认国际规格，其对复原橙汁给出 11.8–11.2 °Brix，受进口国规定约束，且其所述原产地例外不低于 10 °Brix。 |
| `concentrate_status` | 浓缩橙汁 | Mass 和实测可溶性固形物 | kg 和 °Brix | 声明浓缩倍数。按照 CXS 247-2005，浓缩果汁通过物理去水，使 °Brix 至少比相应复原果汁值高 50%。 |
| `single_strength_equivalent` | 不同浓度状态间的可选比较 | Mass 和实测可溶性固形物 | kg 和 °Brix | 当研究报告单倍浓度当量时，以按销售状态计的质量乘以实测产品 °Brix，再除以所声明单倍浓度目标 °Brix。将其作为附加结果报告，不替换 1 kg 参考流。 |
| `utility_conversion` | 电力、燃料、蒸汽、冷却、水和废水 | 与选定 Tiangong 流匹配的属性 | 选定流的参考单位 | 保留仪表或发票原始单位，记录换算因子，仅在分配给橙汁路线后归一化。不得将蒸汽质量、热能和燃料质量或体积视为可互换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂接收的鲜橙；工厂接收的外购单倍浓度橙汁；工厂接收的外购浓缩橙汁；或明确声明的组合 |
| starting_condition_role | 报告组织实际运营或控制前景转化的首个产品输入 |
| product_classification_scope | 仅限与 CPC 3.0 代码 21431 一致的橙汁；其他果汁、混合果汁、果肉饮料、饮料及独立销售的柑橘副产品不属于参考产品范围 |
| recursive_input_rule | 进入前景过程的外购橙汁或浓缩橙汁只作为一个产品输入记录，并关联供应商门口上游数据集。除非供应商操作确为受控前景操作，否则不得递归重建。 |
| upstream_dataset_requirement | 跨越边界的橙、外购橙汁或浓缩汁、配料、包装材料、能源载体、供水、处理服务及其他技术圈输入，均须有地理、技术和时间上适当的上游数据集，或明确的数据缺口。 |
| disclosure | 声明起始产品状态、供应商门口边界、纳入的单元操作、外包操作、储存和保藏状态、包装边界、截断、分配选择，以及制造商门口之后增加的任何下游阶段。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_route` | 橙汁前景生产 | 从所声明起始条件到制造商门口交付，纳入所有现场或受控操作，包括清洗和分级、榨汁和精制、实际采用的浓缩或复原、稳定化、储存、灌装或散装装载、就地清洗，以及可归属于该路线的现场废物或废水处理。 | `fao-fruit-juice-processing-2001`; `fao-who-cxs-247-2005` |
| `boundary_upstream_inputs` | 产品、材料、能源、水、包装和处理输入 | 将所有跨越前景边界的输入关联到上游数据集。若鲜橙进入工厂，果园种植属于上游；若外购浓缩汁是起始条件，浓缩汁生产属于上游。 | `eu-pef-method-2021` |
| `boundary_recursive_orange_input` | 外购橙汁或浓缩橙汁 | 在供应商门口记录一次外购橙产品并要求其上游数据集。仅纳入报告设施接收后实际实施的转化。 | `unsd-cpc-3-2025` |
| `boundary_downstream_exclusions` | 配送、使用和生命末期 | 前景数据集不包括所声明交付点之后的配送、零售和消费者冷藏、消费者制备及包装生命末期，除非研究明确增加并标识这些阶段。 | `eu-pef-method-2021` |
| `boundary_environmental_releases` | 前景操作 | 纳入实测直接排放、制冷剂损失、离场废水，以及在跨越前景或环境边界时的固体残余物或废物，并识别其处理去向。 | `world-bank-fruit-vegetable-processing-1998` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `orange_receiving_preparation` | 橙接收与准备 | conditional | 鲜橙进入前景时必须纳入 | 前景水果接收、分级、分选、清洗和准备 | kg 接受橙 |
| `juice_extraction_finishing` | 榨汁与精制 | conditional | 在前景中从橙榨汁时必须纳入 | 前景榨汁、分离、精制和可选果肉回收 | kg 中间橙汁 |
| `juice_concentration_storage` | 橙汁浓缩与浓缩汁储存 | conditional | 在前景中去水或储存浓缩汁时必须纳入 | 前景蒸发、香气回收、冷却和储存 | kg 浓缩橙汁 |
| `juice_reconstitution_blending` | 橙汁复原与调配 | conditional | 生产浓缩还原汁，或在前景中调入允许的橙组分或配料时必须纳入 | 前景饮用水添加、标准化和调配 | kg 调配橙汁 |
| `stabilization_filling_handoff` | 稳定化、灌装与交付 | required | 始终必须纳入；仅记录实际实施的处理、灌装、散装装载、冷却和储存步骤 | 最终前景调理和参考产品交付 | 1 kg 参考橙汁 |

### 过程：橙接收与准备（`orange_receiving_preparation`）

#### 输入

##### 产品流

###### 接收鲜橙（`fresh_oranges_received`）

记录进入受控工厂的完好橙净质量。选择与所声明橙种、生产地理和供应商门口状态相匹配的现行 Tiangong 产品流；不得用橙汁参考流表示整果。

- 选定流：数据集特定的鲜橙 Tiangong 产品流；构建前景数据包时选择 UUID 并回读确认
- 流属性/单位：Mass / kg
- 数量规则：归一化前，使用经校准接收秤记录接受与拒收水果的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 供应的水果清洗水（`fruit_washing_water`）

记录跨越过程边界用于水果清洗和准备的供水，并扣除单独计量的内部循环水。

- 选定流：与水源和处理匹配的数据集特定 Tiangong 供水产品流；构建前景数据包时选择 UUID 并回读确认
- 流属性/单位：Volume / m3
- 数量规则：可归属于接收橙的计量补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater`
- 来源：`world-bank-fruit-vegetable-processing-1998`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 接受的备好橙（`prepared_oranges_output`）

记录清除杂物和拒收水果后放行至榨汁工序的水果质量。

- 选定流：内部中间产品；不规定外部 Tiangong 流
- 流属性/单位：Mass / kg
- 数量规则：以接收橙减去实测杂物和拒收水果计算，并在可用时与直接转移质量核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 接受的备好橙
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`

##### 废物流

###### 拒收水果与杂物（`rejected_fruit_debris`）

拒收水果、叶片、土壤或其他杂物离开准备过程时，按物料类别和去向分别记录实测质量。

- 选定流：与物料和处理去向匹配的数据集特定 Tiangong 废物流；构建前景数据包时选择 UUID 并回读确认
- 流属性/单位：Mass / kg
- 数量规则：按物料类别和去向记录实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 接受的备好橙
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

###### 水果清洗废水（`fruit_washing_wastewater`）

扣除单独计量的循环和蒸发后，记录离开清洗工序的废水；可用时保留污染物测量。

- 选定流：与排放或处理去向匹配的数据集特定 Tiangong 废水流；构建前景数据包时选择 UUID 并回读确认
- 流属性/单位：Volume / m3
- 数量规则：可归属于水果准备的计量排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 接受的备好橙
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater`
- 来源：`world-bank-fruit-vegetable-processing-1998`

##### 基本流

### 过程：榨汁与精制（`juice_extraction_finishing`）

#### 输入

##### 产品流

###### 转入榨汁的备好橙（`prepared_oranges_input`）

转移与 `prepared_oranges_output` 核对一致的中间质量，不得重复添加上游负荷。

- 选定流：内部中间产品；不规定外部 Tiangong 流
- 流属性/单位：Mass / kg
- 数量规则：等于前一前景过程关联的备好橙输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 中间橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`

###### 提取补充水（`extraction_makeup_water`）

声明的提取与精制路线使用时，将提取补充水作为独立流记录。

- 选定流：与设施水源匹配的饮用水或过程水供应
- 流属性/单位：Volume / m3
- 数量规则：计量或批记录的加水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 中间橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`fao-who-cxs-247-2005`; `fao-fruit-juice-processing-2001`

###### 果胶酶制剂（`extraction_pectinase`）

声明的提取与精制路线使用时，将果胶酶制剂作为独立流记录。

- 选定流：果胶酶制剂产品流
- 流属性/单位：Mass / kg
- 数量规则：按交付浓度计的实测批次投加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 中间橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`fao-who-cxs-247-2005`; `fao-fruit-juice-processing-2001`

###### 抗坏血酸加工助剂（`extraction_ascorbic_acid`）

声明的提取与精制路线使用时，将抗坏血酸加工助剂作为独立流记录。

- 选定流：抗坏血酸产品流
- 流属性/单位：Mass / kg
- 数量规则：实测批次投加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 中间橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`fao-who-cxs-247-2005`; `fao-fruit-juice-processing-2001`

###### 过滤助剂（`extraction_filter_aid`）

声明的提取与精制路线使用时，将过滤助剂作为独立流记录。

- 选定流：声明的矿物或纤维素过滤助剂产品流
- 流属性/单位：Mass / kg
- 数量规则：提取或精制设备的实测领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 中间橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`fao-who-cxs-247-2005`; `fao-fruit-juice-processing-2001`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 中间橙汁（`intermediate_orange_juice`）

记录榨汁和精制后、浓缩、复原或最终稳定化之前的橙汁。在规定转移点测量质量和 °Brix。

- 选定流：内部中间橙汁；仅当中间产品同时为所声明参考产品时使用代表性 Tiangong 参考流
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量并配对可溶性固形物测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 中间橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality_mass`
- 来源：`fao-who-cxs-247-2005`; `fao-fruit-juice-processing-2001`

###### 可销售橙皮（`coproduct_orange_peel`）

将该输出共产品的质量、规格、市场状态和去向分别记录；不具有经济产品功能的材料按废物处理。

- 选定流：橙皮共产品流
- 流属性/单位：Mass / kg
- 数量规则：实测输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 中间橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_allocation`
- 来源：`fao-fruit-juice-processing-2001`

###### 可销售橙果肉与汁胞（`coproduct_orange_pulp_cells`）

将该输出共产品的质量、规格、市场状态和去向分别记录；不具有经济产品功能的材料按废物处理。

- 选定流：橙果肉或汁胞共产品流
- 流属性/单位：Mass / kg
- 数量规则：实测输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 中间橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_allocation`
- 来源：`fao-fruit-juice-processing-2001`

###### 可销售橙籽（`coproduct_orange_seeds`）

将该输出共产品的质量、规格、市场状态和去向分别记录；不具有经济产品功能的材料按废物处理。

- 选定流：橙籽共产品流
- 流属性/单位：Mass / kg
- 数量规则：实测输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 中间橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_allocation`
- 来源：`fao-fruit-juice-processing-2001`

###### 回收橙精油（`coproduct_orange_oil`）

将该输出共产品的质量、规格、市场状态和去向分别记录；不具有经济产品功能的材料按废物处理。

- 选定流：橙精油产品流
- 流属性/单位：Mass / kg
- 数量规则：实测输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 中间橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_allocation`
- 来源：`fao-fruit-juice-processing-2001`

##### 废物流

###### 废橙皮（`waste_orange_peel`）

将废橙皮按处理去向分开，在回收抵扣或净额处理前记录。

- 选定流：橙皮食品残余废物流
- 流属性/单位：Mass / kg
- 数量规则：未作为共产品放行的实测橙皮量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 中间橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_wastewater`
- 来源：`world-bank-fruit-vegetable-processing-1998`

###### 废橙果肉与汁胞（`waste_orange_pulp_cells`）

将废橙果肉与汁胞按处理去向分开，在回收抵扣或净额处理前记录。

- 选定流：橙果肉或汁胞残余废物流
- 流属性/单位：Mass / kg
- 数量规则：未作为共产品放行的实测果肉与汁胞量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 中间橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_wastewater`
- 来源：`world-bank-fruit-vegetable-processing-1998`

###### 废橙籽（`waste_orange_seeds`）

将废橙籽按处理去向分开，在回收抵扣或净额处理前记录。

- 选定流：橙籽残余废物流
- 流属性/单位：Mass / kg
- 数量规则：未作为共产品放行的实测橙籽量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 中间橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_wastewater`
- 来源：`world-bank-fruit-vegetable-processing-1998`

###### 榨汁废水（`extraction_wastewater`）

将榨汁废水按处理去向分开，在回收抵扣或净额处理前记录。

- 选定流：与接收处理路线匹配的废水流
- 流属性/单位：Volume / m3
- 数量规则：计量排放量或经核对的榨汁水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 中间橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_wastewater`
- 来源：`world-bank-fruit-vegetable-processing-1998`

##### 基本流

### 过程：橙汁浓缩与浓缩汁储存（`juice_concentration_storage`）

#### 输入

##### 产品流

###### 浓缩进料橙汁（`juice_feed_concentration`）

记录进入蒸发或其他物理浓缩操作的关联橙汁质量和实测 °Brix。

- 选定流：内部中间产品；不规定外部 Tiangong 流
- 流属性/单位：Mass / kg
- 数量规则：实测进料质量并配对 °Brix
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 浓缩橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality_mass`

###### 浓缩电力（`concentration_electricity`）

将浓缩电力作为纳入浓缩路线的独立流记录。

- 选定流：与设施电压和地域匹配的外购电力供应
- 流属性/单位：Energy / kWh
- 数量规则：蒸发器、泵、真空和冷却系统的计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩橙汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：eu-jrc-fdm-bref-2019

###### 浓缩蒸汽（`concentration_steam`）

将浓缩蒸汽作为纳入浓缩路线的独立流记录。

- 选定流：与声明蒸汽条件匹配的外购蒸汽供应
- 流属性/单位：Energy 或 Mass / MJ 或 kg 蒸汽
- 数量规则：按蒸汽条件和冷凝水回流修正的仪表读数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩橙汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：eu-jrc-fdm-bref-2019

###### 浓缩天然气（`concentration_natural_gas`）

将浓缩天然气作为纳入浓缩路线的独立流记录。

- 选定流：与设施地域和压力匹配的天然气供应
- 流属性/单位：Energy 或 Volume / MJ（低位热值）或 Nm3
- 数量规则：燃料仪表读数，并保留低位热值和标准状态换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩橙汁
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：eu-jrc-fdm-bref-2019

###### 浓缩冷却补水（`concentration_cooling_water`）

将浓缩冷却补水作为纳入浓缩路线的独立流记录。

- 选定流：与设施水源匹配的过程水供应
- 流属性/单位：Volume / m3
- 数量规则：分开循环和排污后的补水仪表读数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩橙汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：eu-jrc-fdm-bref-2019

###### 浓缩 R717 补充量（`concentration_r717_makeup`）

将浓缩 R717 补充量作为纳入浓缩路线的独立流记录。

- 选定流：氨（R717）制冷剂产品流
- 流属性/单位：Mass / kg
- 数量规则：维修日志补充质量；循环充注量不是消耗量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩橙汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：eu-jrc-fdm-bref-2019

###### 浓缩 R404A 补充量（`concentration_r404a_makeup`）

将浓缩 R404A 补充量作为纳入浓缩路线的独立流记录。

- 选定流：R404A 制冷剂产品流
- 流属性/单位：Mass / kg
- 数量规则：维修日志补充质量；循环充注量不是消耗量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩橙汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：eu-jrc-fdm-bref-2019

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 浓缩橙汁（`orange_juice_concentrate`）

记录浓缩汁质量、°Brix、回添的香气或挥发性组分和储存条件。

- 选定流：有公开可用且语义匹配的现行特定 Tiangong 浓缩橙汁流时使用；否则使用代表性 Orange juice 流并明确浓缩产品限定信息
- 流属性/单位：Mass / kg
- 数量规则：实测浓缩汁输出质量并配对 °Brix
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 浓缩橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality_mass`
- 来源：`fao-who-cxs-247-2005`; `fao-fruit-juice-processing-2001`

###### 回收橙香气（`concentration_recovered_aroma`）

在内部复用、出售或判定为废物前，按去向分别记录该回收组分。

- 选定流：橙香气产品流
- 流属性/单位：Mass / kg
- 数量规则：实测回收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 浓缩橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_allocation`
- 来源：`fao-fruit-juice-processing-2001`

###### 回收橙挥发性组分（`concentration_recovered_volatiles`）

在内部复用、出售或判定为废物前，按去向分别记录该回收组分。

- 选定流：橙挥发性组分产品流
- 流属性/单位：Mass / kg
- 数量规则：实测回收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 浓缩橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_allocation`
- 来源：`fao-fruit-juice-processing-2001`

###### 回收橙油（`concentration_recovered_oil`）

在内部复用、出售或判定为废物前，按去向分别记录该回收组分。

- 选定流：橙精油产品流
- 流属性/单位：Mass / kg
- 数量规则：实测回收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 浓缩橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_allocation`
- 来源：`fao-fruit-juice-processing-2001`

##### 废物流

###### 浓缩冷凝液（`concentration_condensate`）

按复用、排放或处理去向分别记录蒸发器冷凝液。

- 选定流：过程冷凝液流
- 流属性/单位：Volume / m3
- 数量规则：计量冷凝液或浓缩水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 浓缩橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_wastewater`
- 来源：`world-bank-fruit-vegetable-processing-1998`

###### 浓缩设备清洗废水（`concentration_cleaning_wastewater`）

将浓缩设备清洗废水与过程冷凝液分开记录。

- 选定流：与接收处理路线匹配的废水流
- 流属性/单位：Volume / m3
- 数量规则：计量排放量或有记录的清洗水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 浓缩橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_wastewater`
- 来源：`world-bank-fruit-vegetable-processing-1998`

##### 基本流

###### 在浓缩与储存期间释放的 R717（`concentration_r717_emission`）

按物质分别记录实测或核对的制冷剂损失；不得合并不同制冷剂。

- 选定流：排放至空气的氨（R717）基本流
- 流属性/单位：Mass / kg
- 数量规则：补充充注量减去有记录回收量和库存变化，并分配至纳入设备
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 在浓缩与储存期间释放的 R404A（`concentration_r404a_emission`）

按物质分别记录实测或核对的制冷剂损失；不得合并不同制冷剂。

- 选定流：排放至空气的 R404A 基本流
- 流属性/单位：Mass / kg
- 数量规则：补充充注量减去有记录回收量和库存变化，并分配至纳入设备
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-fdm-bref-2019`

### 过程：橙汁复原与调配（`juice_reconstitution_blending`）

#### 输入

##### 产品流

###### 外购或前景浓缩橙汁（`concentrate_for_reconstitution`）

记录浓缩汁质量、供应商或关联前景数据集、实测 °Brix，以及外购或内部转移状态。

- 选定流：匹配时使用现行特定 Tiangong 浓缩汁流；否则使用代表性 Orange juice 流并明确浓缩限定信息和上游数据集
- 流属性/单位：Mass / kg
- 数量规则：投批浓缩汁的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 调配橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality_mass`
- 来源：`fao-who-cxs-247-2005`

###### 饮用级复原水（`reconstitution_water`）

记录为使浓缩汁恢复到所声明产品规格而添加的水。供水应满足适用饮用水要求。

- 选定流：与实际供水匹配的数据集特定 Tiangong 饮用水产品流；构建前景数据包时选择 UUID 并回读确认
- 流属性/单位：Volume / m3
- 数量规则：批次计量加水量，并与最终质量和可溶性固形物平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 调配橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality_mass`
- 来源：`fao-who-cxs-247-2005`

###### 复原橙香气（`blending_orange_aroma`）

仅在法规允许、已声明且实际加入时，将复原橙香气单独记录；不得用作平衡流。

- 选定流：橙香气产品流
- 流属性/单位：Mass / kg
- 数量规则：实测批次添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 混合橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`fao-who-cxs-247-2005`

###### 复原橙挥发性组分（`blending_orange_volatiles`）

仅在法规允许、已声明且实际加入时，将复原橙挥发性组分单独记录；不得用作平衡流。

- 选定流：橙挥发性组分产品流
- 流属性/单位：Mass / kg
- 数量规则：实测批次添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 混合橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`fao-who-cxs-247-2005`

###### 复原橙果肉与汁胞（`blending_orange_pulp_cells`）

仅在法规允许、已声明且实际加入时，将复原橙果肉与汁胞单独记录；不得用作平衡流。

- 选定流：橙果肉或汁胞产品流
- 流属性/单位：Mass / kg
- 数量规则：实测批次添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 混合橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`fao-who-cxs-247-2005`

###### 添加抗坏血酸（`blending_ascorbic_acid`）

仅在法规允许、已声明且实际加入时，将添加抗坏血酸单独记录；不得用作平衡流。

- 选定流：抗坏血酸产品流
- 流属性/单位：Mass / kg
- 数量规则：实测批次添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 混合橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`fao-who-cxs-247-2005`

###### 添加柠檬酸（`blending_citric_acid`）

仅在法规允许、已声明且实际加入时，将添加柠檬酸单独记录；不得用作平衡流。

- 选定流：柠檬酸产品流
- 流属性/单位：Mass / kg
- 数量规则：实测批次添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 混合橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`fao-who-cxs-247-2005`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调配或复原橙汁（`blended_orange_juice`）

记录稳定化或交付前的最终调配质量和实测 °Brix。

- 选定流：内部中间产品；仅当其为参考产品交付时使用代表性 Tiangong 流
- 流属性/单位：Mass / kg
- 数量规则：实测输出质量，并配对 °Brix 和质量平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 调配橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality_mass`
- 来源：`fao-who-cxs-247-2005`

##### 废物流

###### 不合格橙汁与调配损失（`blending_losses`）

将返工物料记录为内部转移；仅将返工后的净废弃产品按去向记录为废物。

- 选定流：与产品状态和处理去向匹配的数据集特定 Tiangong 废物流；构建前景数据包时选择 UUID 并回读确认
- 流属性/单位：Mass / kg
- 数量规则：返工后的实测净废弃质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 调配橙汁输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`

##### 基本流

### 过程：稳定化、灌装与交付（`stabilization_filling_handoff`）

#### 输入

##### 产品流

###### 进入最终调理的橙汁（`juice_for_final_conditioning`）

记录进入最终受控过程的关联或外购橙汁质量、°Brix、温度和路线状态。

- 选定流：与现行 Tiangong 流匹配的内部中间或外购橙汁；选择外部流时回读确认 UUID
- 流属性/单位：Mass / kg
- 数量规则：实测输入质量并配对产品质量记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality_mass`

###### 最终调理电力（`final_electricity`）

将巴氏杀菌或其他声明保藏、冷却、储存与灌装所用最终调理电力作为独立流记录。

- 选定流：与设施电压和地域匹配的外购电力供应
- 流属性/单位：Energy / kWh
- 数量规则：巴氏杀菌、冷却、储存和灌装的计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 最终调理蒸汽（`final_steam`）

将巴氏杀菌或其他声明保藏、冷却、储存与灌装所用最终调理蒸汽作为独立流记录。

- 选定流：与声明蒸汽条件匹配的外购蒸汽供应
- 流属性/单位：Energy 或 Mass / MJ 或 kg 蒸汽
- 数量规则：按蒸汽条件和冷凝水回流修正的仪表读数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 最终调理天然气（`final_natural_gas`）

将巴氏杀菌或其他声明保藏、冷却、储存与灌装所用最终调理天然气作为独立流记录。

- 选定流：与设施地域和压力匹配的天然气供应
- 流属性/单位：Energy 或 Volume / MJ（低位热值）或 Nm3
- 数量规则：燃料仪表读数，并保留低位热值和标准状态换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 最终调理冷却补水（`final_cooling_water`）

将巴氏杀菌或其他声明保藏、冷却、储存与灌装所用最终调理冷却补水作为独立流记录。

- 选定流：与设施水源匹配的过程水供应
- 流属性/单位：Volume / m3
- 数量规则：分开循环和排污后的补水仪表读数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 最终调理 R717 补充量（`final_r717_makeup`）

将巴氏杀菌或其他声明保藏、冷却、储存与灌装所用最终调理 R717 补充量作为独立流记录。

- 选定流：氨（R717）制冷剂产品流
- 流属性/单位：Mass / kg
- 数量规则：维修日志补充质量；循环充注量不是消耗量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 最终调理 R404A 补充量（`final_r404a_makeup`）

将巴氏杀菌或其他声明保藏、冷却、储存与灌装所用最终调理 R404A 补充量作为独立流记录。

- 选定流：R404A 制冷剂产品流
- 流属性/单位：Mass / kg
- 数量规则：维修日志补充质量；循环充注量不是消耗量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 供应的钢制包装（`packaging_steel`）

将钢制包装与每种其他一级、二级或三级包装材料分开记录。

- 选定流：镀锡钢或钢制包装产品流
- 流属性/单位：Mass / kg
- 数量规则：材料领用量减去实测未用退回量，再按合格产品输出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

###### 供应的铝制包装（`packaging_aluminium`）

将铝制包装与每种其他一级、二级或三级包装材料分开记录。

- 选定流：铝制包装产品流
- 流属性/单位：Mass / kg
- 数量规则：材料领用量减去实测未用退回量，再按合格产品输出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

###### 供应的玻璃包装（`packaging_glass`）

将玻璃包装与每种其他一级、二级或三级包装材料分开记录。

- 选定流：容器玻璃包装产品流
- 流属性/单位：Mass / kg
- 数量规则：材料领用量减去实测未用退回量，再按合格产品输出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

###### 供应的PET 包装（`packaging_pet`）

将PET 包装与每种其他一级、二级或三级包装材料分开记录。

- 选定流：聚对苯二甲酸乙二醇酯包装产品流
- 流属性/单位：Mass / kg
- 数量规则：材料领用量减去实测未用退回量，再按合格产品输出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

###### 供应的聚丙烯包装（`packaging_pp`）

将聚丙烯包装与每种其他一级、二级或三级包装材料分开记录。

- 选定流：聚丙烯包装产品流
- 流属性/单位：Mass / kg
- 数量规则：材料领用量减去实测未用退回量，再按合格产品输出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

###### 供应的聚乙烯包装（`packaging_pe`）

将聚乙烯包装与每种其他一级、二级或三级包装材料分开记录。

- 选定流：与声明牌号匹配的聚乙烯包装产品流
- 流属性/单位：Mass / kg
- 数量规则：材料领用量减去实测未用退回量，再按合格产品输出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

###### 供应的纸板包装（`packaging_paperboard`）

将纸板包装与每种其他一级、二级或三级包装材料分开记录。

- 选定流：纸板包装产品流
- 流属性/单位：Mass / kg
- 数量规则：材料领用量减去实测未用退回量，再按合格产品输出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

###### 供应的瓦楞纸板包装（`packaging_corrugated_board`）

将瓦楞纸板包装与每种其他一级、二级或三级包装材料分开记录。

- 选定流：瓦楞纸板包装产品流
- 流属性/单位：Mass / kg
- 数量规则：材料领用量减去实测未用退回量，再按合格产品输出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

###### 供应的纸标签（`packaging_paper_label`）

将纸标签与每种其他一级、二级或三级包装材料分开记录。

- 选定流：纸标签产品流
- 流属性/单位：Mass / kg
- 数量规则：材料领用量减去实测未用退回量，再按合格产品输出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

###### 供应的木托盘（`packaging_wood_pallet`）

将木托盘与每种其他一级、二级或三级包装材料分开记录。

- 选定流：木托盘产品流
- 流属性/单位：Mass / kg
- 数量规则：材料领用量减去实测未用退回量，再按合格产品输出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制造商门口参考橙汁（`orange_juice_reference_output`）

本行为定量参考。记录在所声明散装或包装交付点的合格净输出，并保留全部必需限定信息。

- 选定流：橙汁 `858ebbd0-452b-443d-9964-94ee3f2c1c57`；若更具体的现行公开 Tiangong 流更准确匹配实际声明产品，则予以替换
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由实测合格净输出归一化后恰为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 不合格橙汁（`filling_rejected_juice`）

将不合格橙汁按材料和处理去向分开，在回收抵扣或净额处理前记录。

- 选定流：橙汁产品残余废物流
- 流属性/单位：Mass / kg
- 数量规则：返工或回收前的实测不合格橙汁
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 灌装与清洗废水（`filling_wastewater`）

将灌装与清洗废水按材料和处理去向分开，在回收抵扣或净额处理前记录。

- 选定流：与接收处理路线匹配的废水流
- 流属性/单位：Volume / m3
- 数量规则：计量排放量或生产线水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 钢制包装废物（`packaging_waste_steel`）

将钢制包装废物按材料和处理去向分开，在回收抵扣或净额处理前记录。

- 选定流：钢制包装废物流
- 流属性/单位：Mass / kg
- 数量规则：钢制包装领用量减去纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 铝制包装废物（`packaging_waste_aluminium`）

将铝制包装废物按材料和处理去向分开，在回收抵扣或净额处理前记录。

- 选定流：铝制包装废物流
- 流属性/单位：Mass / kg
- 数量规则：铝制包装领用量减去纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 玻璃包装废物（`packaging_waste_glass`）

将玻璃包装废物按材料和处理去向分开，在回收抵扣或净额处理前记录。

- 选定流：废容器玻璃流
- 流属性/单位：Mass / kg
- 数量规则：玻璃包装领用量减去纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### PET 包装废物（`packaging_waste_pet`）

将PET 包装废物按材料和处理去向分开，在回收抵扣或净额处理前记录。

- 选定流：废聚对苯二甲酸乙二醇酯包装流
- 流属性/单位：Mass / kg
- 数量规则：PET 包装领用量减去纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 聚丙烯包装废物（`packaging_waste_pp`）

将聚丙烯包装废物按材料和处理去向分开，在回收抵扣或净额处理前记录。

- 选定流：废聚丙烯包装流
- 流属性/单位：Mass / kg
- 数量规则：PP 包装领用量减去纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 聚乙烯包装废物（`packaging_waste_pe`）

将聚乙烯包装废物按材料和处理去向分开，在回收抵扣或净额处理前记录。

- 选定流：与声明牌号匹配的废聚乙烯包装流
- 流属性/单位：Mass / kg
- 数量规则：PE 包装领用量减去纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 纸板包装废物（`packaging_waste_paperboard`）

将纸板包装废物按材料和处理去向分开，在回收抵扣或净额处理前记录。

- 选定流：废纸板包装流
- 流属性/单位：Mass / kg
- 数量规则：纸板领用量减去纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 瓦楞纸板包装废物（`packaging_waste_corrugated_board`）

将瓦楞纸板包装废物按材料和处理去向分开，在回收抵扣或净额处理前记录。

- 选定流：废瓦楞纸板包装流
- 流属性/单位：Mass / kg
- 数量规则：瓦楞纸板领用量减去纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 纸标签废物（`packaging_waste_paper_label`）

将纸标签废物按材料和处理去向分开，在回收抵扣或净额处理前记录。

- 选定流：废纸标签流
- 流属性/单位：Mass / kg
- 数量规则：纸标签领用量减去纳入量和有记录退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 木托盘废物（`packaging_waste_wood_pallet`）

将木托盘废物按材料和处理去向分开，在回收抵扣或净额处理前记录。

- 选定流：废木托盘流
- 流属性/单位：Mass / kg
- 数量规则：实测托盘损失或分配的不可复用托盘份额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

###### 在最终冷却与储存期间释放的 R717（`final_r717_emission`）

按物质分别记录实测或核对的制冷剂损失；不得合并不同制冷剂。

- 选定流：排放至空气的氨（R717）基本流
- 流属性/单位：Mass / kg
- 数量规则：补充充注量减去有记录回收量和库存变化，并分配至纳入设备
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 在最终冷却与储存期间释放的 R404A（`final_r404a_emission`）

按物质分别记录实测或核对的制冷剂损失；不得合并不同制冷剂。

- 选定流：排放至空气的 R404A 基本流
- 流属性/单位：Mass / kg
- 数量规则：补充充注量减去有记录回收量和库存变化，并分配至纳入设备
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考橙汁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 来源：`eu-jrc-fdm-bref-2019`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多输出橙汁操作 | 首先通过分别计量或细分避免分配，区分只服务于橙汁、橙皮油、果肉、干橙皮、饲料物料、果胶原料、回收香气或其他共产品的操作。返回同一产品路线的果肉、香气、水、冷凝水或返工品属于内部循环，不是共产品。 | `eu-pef-method-2021`; `fao-fruit-juice-processing-2001` |
| `allocation_physical` | 无法继续细分的多输出过程 | 无法细分时，仅在能够表示过程输入或运行强度如何随共产品功能改变的情况下使用有记录的因果物理关系。不得仅因质量数据易得就采用质量分配。 | `eu-pef-method-2021` |
| `allocation_economic` | 不存在合理物理关系的共产品 | 若不存在合理的因果物理关系，按同一代表期内共产品的相对经济价值分配剩余共同负荷。披露零价格、负价格、季节性或受补贴输出；分配有实质影响时进行敏感性分析。 | `eu-pef-method-2021` |
| `allocation_waste_recovery` | 残余物、废物、回收、能量回收和避免产品声明 | 作为废物离开的物料承担所选废物建模约定分配的处理负荷。除非单独报告声明的后果型或系统扩展情景及替代假设，否则不得在本前景数据集内给予避免产品抵扣。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `orange_receiving_preparation`; `juice_extraction_finishing`; `juice_reconstitution_blending` | 水果、配料、助剂、中间转移、拒收物、残余物和损失 | 称重单、批记录、库存领料和去向记录 | timestamp; batch_id; material_id; gross_mass; tare_mass; net_mass; route; destination; instrument_id | 经校准秤及经核对的批次或库存记录 | kg | 每批或每次接收 | 至少 12 个有代表性的月；季节性生产期较短时覆盖完整季节并披露 | 每个纳入设施和受控外包操作 | 按物料和去向汇总净质量；核对期初库存加接收量与期末库存加输出和损失；分配后归一化 | 秤校准、批次签核、库存核对和去向证据 |
| `cp_product_quality_mass` | `juice_extraction_finishing`; `juice_concentration_storage`; `juice_reconstitution_blending`; `stabilization_filling_handoff` | 橙汁质量、°Brix、路线状态、果肉、处理和交付质量 | 流量计或秤记录、实验室结果、产品规格和批次放行记录 | timestamp; batch_id; input_mass; output_mass; brix; sample_temperature; method; pulp_content; treatment; product_state; release_status | 使用适用分析方法，将质量与代表性产品取样配对 | kg 和 °Brix | 每批、每罐或每个交接批次 | 与清单相同期间 | 每条纳入产品线和产品状态 | 按质量加权批次结果；不得在未分层时平均浓缩和单倍浓度状态 | 仪器校准、实验室方法、样品链、产品规格和放行记录 |
| `cp_utility_records` | `juice_concentration_storage`; `stabilization_filling_handoff` | 电力、燃料、蒸汽、热、冷却和制冷剂平衡 | 专用仪表、发票、设备日志和制冷剂维修记录 | timestamp; meter_id; opening; closing; unit; fuel_or_refrigerant_id; purchase; recovery; closing_inventory; operating_hours | 优先使用专用仪表；否则用有记录的工程驱动因子分配共享公用工程 | 仪表或发票原始单位 | 连续或每月，可用时关联批次 | 至少 12 个有代表性的月或完整季节 | 每个纳入设施及相关公用工程系统 | 扣除非生产用途和内部转移；用所声明驱动因子分配共享用量；仅换算一次并在分配后归一化 | 仪表校准、发票、运行日志、维修记录和分配计算 |
| `cp_water_wastewater` | `orange_receiving_preparation`; `juice_extraction_finishing`; `juice_concentration_storage`; `stabilization_filling_handoff` | 供水、内部循环、净废水和污染物负荷 | 供排水仪表、清洗日志、处理记录和实验室分析 | timestamp; source; supplied_volume; recirculated_volume; discharged_volume; destination; pollutant; concentration; sample_method | 计量主要水回路和排放点；在代表运行条件下取样污染物 | m3 和污染物特定单位 | 连续或每批；分析按许可或风险频率 | 至少 12 个有代表性的月或完整季节 | 每个纳入设施、排放点和外包处理路线 | 分别报告总供水、内部循环和净排放；污染物质量为体积乘实测浓度 | 仪表校准、取样方案、实验室报告、许可记录和处理凭证 |
| `cp_coproduct_allocation` | `juice_extraction_finishing`; `juice_concentration_storage` | 可销售共产品数量、功能、价格和去向 | 称重单、销售记录、规格和合同 | timestamp; batch_id; coproduct_id; mass; specification; destination; price; currency; price_basis; revenue | 测量外运数量并采用同一期间的交易或合同价格 | kg 和每声明单位的货币 | 每次发运；价格按月或季节汇总 | 与清单相同代表期 | 生产共产品的所有设施 | 首先细分；否则按选定物理驱动因子或同期经济价值计算分配份额 | 秤校准、发票、合同、规格、分配工作表和敏感性记录 |
| `cp_packaging_records` | `stabilization_filling_handoff` | 一级、二级和三级包装 | 物料清单、领退记录、件数和包装质量测试 | packaging_id; material; items_issued; items_returned; item_mass; filled_units; scrap_mass | 核对领用与退回件数，并以代表性称重验证单件质量 | item 和 kg | 每个生产批次或包装运行 | 与清单相同代表期 | 每种纳入包装配置和生产线 | 净使用件数乘实测单件质量，加实测废料，再除以合格产品质量 | 批准的物料清单、秤校准、包装质量样本和核对记录 |
| `cp_waste_records` | `stabilization_filling_handoff` | 不合格橙汁、逐材料包装废物及灌装或清洗废水 | 不合格日志、包装核对、废物外运记录和废水仪表 | timestamp; batch_id; waste_id; material; mass; volume; origin; destination; treatment; rework_or_recovery | 在返工、回收、处理或分配前分别计量每种废物材料和排放 | kg 和 m3 | 每批、每次废物外运或排放区间 | 与清单相同代表期 | 每条纳入灌装线、包装配置和排放点 | 按流身份和去向汇总；包装废物与领退记录核对，废水与水量平衡核对 | 校准秤和仪表、不合格日志、废物接收单、排放记录和核对表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景清单行 | 分配后数量除以合格橙汁净输出质量 kg，再乘以 1 kg | 分配后数量；合格产品净质量 | 每 1 kg 参考橙汁的数量 |  |
| `calc_mass_balance` | 每个过程及关联前景路线 | 核对期初库存加实测输入与期末库存加实测产品输出、共产品、废物、排放和有记录内部转移；调查实质残差，不得创建未标识平衡流 | `cp_material_mass_balance` 和 `cp_product_quality_mass` 的质量记录 | 有解释的过程及路线质量平衡残差 | `fao-fruit-juice-processing-2001` |
| `calc_reconstituted_juice` | 浓缩还原橙汁 | 最终批次质量等于浓缩汁质量加饮用水和允许添加物，再减实测损失；依据实测输入与最终 °Brix 检查可溶性固形物平衡 | 浓缩汁质量和 °Brix；水；添加物；损失；最终质量和 °Brix | 复原橙汁质量和可溶性固形物核对 | `fao-who-cxs-247-2005` |
| `calc_single_strength_equivalent` | 可选跨浓度结果 | 单倍浓度当量质量等于按销售状态质量乘实测按销售状态 °Brix，再除以声明的单倍浓度目标 °Brix | 按销售状态质量；实测 °Brix；目标 °Brix | 附加 kg 单倍浓度当量结果 | `fao-who-cxs-247-2005` |
| `calc_pollutant_load` | 废水污染物排放 | 污染物质量等于净排放废水体积乘代表性实测浓度，并保持单位一致 | 排放体积；实测浓度；取样期间 | 按排放去向的污染物质量 | `world-bank-fruit-vegetable-processing-1998` |
| `calc_economic_allocation` | 采用经济分配的共同负荷 | 某共产品分配份额等于其同期数量乘价格，再除以所有共产品数量乘价格之和；该份额仅作用于剩余不可细分负荷 | 共产品数量；同期价格；剩余共同输入输出 | 按共产品分配的清单 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品及所有外部流 | 在 Tiangong CLI 精确回读后记录流 UUID、流属性、参考单位、产品状态、路线限定信息及上游数据集身份。搜索排序本身不是证据。 | 保存在 PCR 外的 CLI 回读记录；数据集元数据；供应商和产品规格 |
| `dq_temporal` | 前景活动数据 | 至少采用 12 个有代表性的月；若生产具有季节性或场址运营时间更短，则覆盖完整可用生产期，并披露未覆盖季节、停机和异常运行。 | 带日期源记录和覆盖率计算 |
| `dq_technology_geography` | 前景和上游数据 | 使榨汁、浓缩、保藏、包装、水、能源、废物处理、地理和供应商技术匹配所声明路线，并解释每个代理。 | 过程说明、供应商记录、选定数据集元数据和代理理由 |
| `dq_completeness` | 所有纳入过程 | 核对主要物料、产品、共产品、废物、水、公用工程、包装和直接排放记录；列出缺失流，并在可能时量化已知覆盖率。 | 质量和公用工程核对、缺失数据登记及去向记录 |
| `dq_measurement` | 质量、°Brix、水、公用工程、排放和包装 | 对每类实质测量保留仪器身份、校准或核验状态、取样方法、换算因子和负责复核人。 | 校准证书、实验室方法、发票、仪表日志和复核签字 |
| `dq_allocation` | 多输出过程 | 保留细分证据、选定分配关系、数量、价格或物理驱动因子、代表期，以及分配对橙汁结果有实质影响时的敏感性结果。 | 分配工作表、合同、价格记录和敏感性分析 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 若实际产品不是橙汁，或属于果肉饮料、饮料、混合果汁、发酵产品或单独副产品，或缺失必需产品状态限定信息，则失败。 | `unsd-cpc-3-2025`; `fao-who-cxs-247-2005` |
| `validate_reference_mass` | 定量参考 | 要求归一化后按销售状态计的橙汁净输出恰为 1 kg、采用 Mass 属性和 kg 单位，并采用已回读的通用或更具体 Tiangong 产品流。 |  |
| `validate_route_completeness` | 过程覆盖 | 要求纳入所声明起始条件和交付之间的所有受控操作。鲜果路线需要接收和榨汁；浓缩与复原路线需要适用过程；所有路线需要最终调理，或明确声明未经处理的散装交付。 | `fao-fruit-juice-processing-2001` |
| `validate_concentration` | 浓缩及浓缩还原产品 | 要求实测输入输出质量和 °Brix、加水或去水量、适用 Codex 或市场规格及可溶性固形物核对。不得将不同浓度状态视为每 1 kg 提供相等橙可溶性固形物。 | `fao-who-cxs-247-2005` |
| `validate_mass_balance` | 每个过程及路线 | 要求有记录的质量平衡核对，覆盖产品、共产品、内部转移、废物、可获得质量的废水和已识别残差；拒绝无法解释的平衡流。 | `fao-fruit-juice-processing-2001` |
| `validate_allocation` | 多输出操作 | 要求证据表明首先尝试细分；任何物理或经济分配均遵循所声明次序，采用同期数据，并在有实质影响时披露敏感性。 | `eu-pef-method-2021` |
| `validate_environmental_releases` | 水、废物和直接排放 | 要求净用水和废水记录、处理去向、固体残余物去向，以及制冷剂或其他实测直接排放；不得把采购输入转化为直接排放。 | `world-bank-fruit-vegetable-processing-1998` |
| `validate_upstream_datasets` | 跨越边界的输入 | 橙、外购橙汁或浓缩汁、配料、包装、水、能源和处理服务均须有适当上游数据集或明确未解决数据缺口；拒绝递归重复供应商橙汁操作。 | `eu-pef-method-2021` |
| `validate_atomic_inventory` | 公用工程、包装、废物和制冷剂身份 | 若本 PCR 覆盖的电力、蒸汽、天然气、冷却补水、各制冷剂、各包装材料、包装废物、不合格橙汁或灌装废水仍以组合占位，而不是独立可识别的流行，则判定失败。 | `eu-pef-method-2021`; `eu-jrc-fdm-bref-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 在所声明制造商门口交付的前景橙汁生产数据集 |
| downstream_use | `secondary_dataset`；经过评审、具有代表性并附有必需质量披露时可作为 `background_dataset` |
| allowed_use | 与所声明橙汁路线、浓度、组成、保藏、包装边界、地理、技术、参考期和交付状态匹配的 LCA 模型 |
| excluded_use | 静默替代橙果肉饮料、饮料、混合果汁、发酵产品、单独柑橘副产品、单独果园生产，或浓度和加工限定信息存在实质差异的橙汁；未经功能等同性复核的比较声明 |
| required_metadata | PCR id 和版本；参考流 UUID 和限定信息；起始条件；纳入设施和过程；地理；参考期；产品质量和 °Brix；果肉、配料、保藏、包装和交付状态；上游数据集身份；截断；分配方法；数据所有者和评审状态 |
| required_quality_disclosure | 时间、地理和技术代表性；前景覆盖率；仪器和取样质量；质量及可溶性固形物核对；缺失数据和代理；分配份额与敏感性；废水、废物和制冷剂覆盖；任何新增下游阶段 |
| update_trigger | 起始物料、橙规格、浓缩或复原路线、榨汁或稳定化技术、能源或供水系统、包装、产品 °Brix、共产品市场、分配关系、设施地理、上游数据集、法规或代表期发生可实质改变清单的变化 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, Explanatory Notes, 30 June 2025, subclass 21431. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-11） | 分类范围以及与其他果汁和混合果汁的区分 |
| `fao-who-cxs-247-2005` | standard | FAO/WHO Codex Alimentarius, General Standard for Fruit Juices and Nectars, CXS 247-2005, amended 2025. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/tr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B247-2005%252FCXS_247e.pdf（检索日期 2026-08-11） | 橙汁、浓缩、复原、组成、°Brix、加工助剂、卫生和标签规则 |
| `fao-fruit-juice-processing-2001` | handbook | Bates, R.P., Morris, J.R. and Crandall, P.G. Principles and practices of small- and medium-scale fruit juice processing. FAO Agricultural Services Bulletin 146, 2001, ISBN 92-5-104661-1. https://www.fao.org/4/y2515e/y2515e13.htm（检索日期 2026-08-11） | 橙接收、清洗、榨汁、精制、浓缩、巴氏杀菌、储存、副产品和质量平衡过程分解 |
| `eu-pef-method-2021` | official_guidance | European Commission, Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I, 2021. https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:02021H2279-20211230（检索日期 2026-08-11） | 生命周期边界、数据质量、多功能性处理顺序、分配、回收和披露 |
| `world-bank-fruit-vegetable-processing-1998` | official_guidance | World Bank Group, Pollution Prevention and Abatement Handbook: Fruit and Vegetable Processing, effective July 1998. https://www.ifc.org/content/dam/ifc/doc/1990/fruitandvg-ppah.pdf（检索日期 2026-08-11） | 水、废水、固体废物、污染预防、排放监测和处理流识别 |
| `eu-jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document in the Food, Drink and Milk Industries, JRC118627, 2019. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf（检索日期 2026-08-11） | 食品和饮料加工清单中能源载体、冷却水、制冷剂、包装材料、废物、废水和直接排放的分别记录 |
