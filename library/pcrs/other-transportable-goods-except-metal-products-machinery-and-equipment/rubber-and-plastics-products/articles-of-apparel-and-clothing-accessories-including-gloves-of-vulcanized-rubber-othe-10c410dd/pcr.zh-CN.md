---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.articles-of-apparel-and-clothing-accessories-including-gloves-of-vulcanized-rubber-othe-10c410dd
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 配合胶乳浸渍法生产氯化无粉天然橡胶手套

## 1. 范围与适用性

适用于由接收的水性熟化配合胶乳生产的非无菌、无织物支撑、氯化无粉天然橡胶手套。每个数据集固定一种产品规格、尺寸、调湿质量及声明的工业防护性能。路线依据生产者的B支路，不采用其上粉或丙烯酸涂层支路（`topglove-manufacture-2016`）。本生产参考不确立不同材质防护服务等价性，也不认证法规符合性。


硫化成品手套属于服装/附件标题，而非未硫化配合胶或织物片材。排除再生橡胶（36210）、未硫化配合胶及橡胶型材（36220）、软管（36230）、带（36240）、橡胶化纺织物（36250）、非服装制品及硬橡胶制品（36270）。塑料手套属于28243，针织纺织附件属于28229，均排除。其他橡胶材质的手套也可能属于36260，但超出本限定路线。UNSD第177页未为36260另列说明段落；上述排除来自近邻标题，不是虚构的解释注（`un-cpc3-2025`）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.articles-of-apparel-and-clothing-accessories-including-gloves-of-vulcanized-rubber-othe-10c410dd |
| classification_refs | CPC 3.0 36260；已接受本限定范围的 narrower 映射，见 docs/adr/2026-11-22-accept-cpc-36260-chlorinated-natural-rubber-gloves.md |
| covered_products | 单一声明等级的非无菌、无支撑氯化无粉天然橡胶手套 |
| excluded_products | 其他橡胶服装/附件；硬质橡胶；丁腈/氯丁/PVC手套；织物支撑手套；有粉或聚合物涂层手套；无菌手套；现场胶乳配合；溶剂胶液浸渍 |
| representative_product | 配合胶乳浸渍法生产氯化无粉天然橡胶手套 |
| production_route | 接收熟化配合胶乳→手模清洗→凝固剂浸渍→胶乳浸渍→预浸出/卷边→硫化/后浸出→氯化/漂洗→干燥/脱模/包装→质量放行 |
| market_state | 调湿成品手套，以不含包装的净质量为参考；包装单独记录 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 质量放行门的声明天然橡胶手套屏障产品 |
| How much | 1 千克经调湿的新增质量放行手套净质量 |
| How well | 明确尺寸、厚度、拉伸/伸长及泄漏/屏障验收准则；识别客户规格与实际试验方法 |
| How long or cycle | 一个生产放行队列；声明实际储存寿命和预期使用周期，不作通用耐久性等价 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 氯化无粉硫化天然橡胶手套 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 天然胶乳配合物身份; 无支撑结构; 非无菌状态; 氯化无粉路线; SKU/尺寸/厚度; 试验验收及调湿含水率; 放行队列/门; 供货溶液含量; 上游配合供方; 公用工程及外部处理边界 |

前景数据包必须声明全部必需限定信息。缺失限定信息或参考身份不兼容将阻止数据包完成。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为cp_release实测新增质量放行的调湿手套净质量。以经校准的秤称量验收手套并排除包装；仅无法直接称重时，使用实测件数与该批抽样单件净质量。不虚构单件重量。 |
| `solution_basis` | 供货液体投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将供货制剂质量、活性物种质量与载水分作分析账。同一外购制剂仅跨清单一次。密度/含量及水合状态须实测，不设默认。 |
| `gas_volume` | natural_gas | Volume | m3 | 链接前核对计量表与供方参考温度、绝压、干湿状态、组成与压缩因子；兼容性未知时保持未决。 |
| `electricity_basis` | electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | MJ | 计量电能；采用已核实的能源单位组`93a60a57-a3c8-11da-a746-0800200c9a66`，参考单位MJ，1千瓦时=3.6兆焦。电表能量不证明供方流及其原生参考属性。链接前独立核实实际地域、电压、组合、交付接口和供方原生属性；不得推定燃料需求或效率。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收熟化天然胶乳配合物、独立凝固/清洗/氯化投入及公用工程 |
| starting_condition_role | 前景接收材料门；通过兼容供方继承上游配合生产负荷 |
| product_classification_scope | 仅CPC36260内所定义的手套子集 |
| recursive_input_rule | 不假定同类别成品手套作为原料。退货须保留来源与继承负荷；不得改称原生胶乳或将重复放行计作新增生产。 |
| upstream_dataset_requirement | 供方须覆盖实际湿配方与熟化状态、天然橡胶来源、配合、供货等级、运输与参考数量；仅原胶乳数据不完整 |
| disclosure | 声明全部现场阶段及精确交接点；外购蒸汽/热、现场配合或处理须先扩展为独立清单后才能使用 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_route` | 将浸渍与整理合理聚合为一个前景单元，同时保留阶段计量。纳入清洗、浴液、浸出、硫化、氯化/漂洗、干燥、脱模、质量检验和包装，含不合格品及启停损失。 | `topglove-manufacture-2016` |
| `boundary_waste` | 外部废水处理与固废管理负荷仍须链接。不得将排入下水道视为直接淡水排放或省略处理。 | `epa-latex-1974` |
| `boundary_utilities` | 仅表示实际现场燃气燃烧和外购电力。内部热/水循环作为实物内部账，不重复外部交换。真实外部蒸汽/冷凝水交接须独立产品行，并核对焓/压力/供方。 | `epa-gas-combustion` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| glove_manufacture | 浸渍、硫化、氯化与整理 | required | 仅声明的外购配合胶乳路线 | foreground | reference_product |

### 过程：浸渍与整理（`glove_manufacture`）

#### 输入

##### 产品流

###### 外购熟化配合胶乳（`latex_feed`）

接收一种有明确供方组成、干胶含量、总固体、水分、稳定剂和硫化体系说明的湿配合胶乳。继承上游配合工序负荷；未配合胶乳或干态轮胎混炼胶不等同。本边界不包括现场配合。

- 选定流：水性熟化天然橡胶配合胶乳
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`topglove-manufacture-2016`; `vaisala-bath`

###### 手模硝酸清洗液（`nitric_cleaner`）

分别记录供货溶液质量、实测含量和浴液稀释补水。必须核对实际供货等级，数据库40%或50%等级均不提供默认浓度。

- 选定流：手模清洗用硝酸水溶液
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`topglove-manufacture-2016`

###### 手模碱性清洗剂（`alkaline_cleaner`）

每行表示一种有SKU和组成说明的外购制剂。不能由通用工序描述推定氢氧化钠、磷酸盐或洗涤剂配方；额外外购制剂另列单行。

- 选定流：手模清洗用水性碱性制剂
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`topglove-manufacture-2016`

###### 硝酸钙凝固剂投入（`calcium_nitrate`）

明确水合状态、硝酸钙含量和供货载水。按到货溶液记录；活性盐只作分析分账，不再次记录外购交换。排除硝酸钙与硝酸铵肥料混合物。

- 选定流：手套凝固用硝酸钙水溶液
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`topglove-manufacture-2016`; `vaisala-bath`

###### 碳酸钙脱模助剂（`calcium_carbonate`）

仅对应实际凝固/脱模浴使用的碳酸钙固体；核对等级、粒径、纯度及供方。物理身份不确定天然或沉淀生产路线。若供货为浆液，链接前须保留载水和供方参考基准。

- 选定流：碳酸钙
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`topglove-manufacture-2016`

###### 氯化处理溶液（`chlorine_solution`）

分别识别溶解Cl2、有效氯分析基准及实际酸/次氯酸盐试剂。纯氯气和次氯酸钠均不等同整份供货溶液。实际额外试剂须各列一行；不规定通用配方。

- 选定流：手套表面氯化用氯水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`topglove-manufacture-2016`

###### 外购电力（`electricity`）

在声明的电表/交付接口计量电能，千瓦时仅换算一次至兆焦。边界内变压损失只计一次。不假定供电地域、电压或组合。电表Energy是物理计量基准；电力产品UUID、供方及其原生参考属性仍分别待决，须以兼容原件核实。

- 选定流：交流电
- 流属性/单位：Energy / MJ
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`topglove-manufacture-2016`

###### 外购工艺补充水（`process_water`）

计入清洗、配浴、浸出和漂洗的外部补水；区分分支水表与内部循环水。实测体积仅在有实测密度和温度时换算。外购溶液已含载水不再记入本行。

- 选定流：工艺用水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`topglove-manufacture-2016`; `vaisala-bath`

###### 有条件现场燃气供热（`natural_gas`）

仅实际在边界内以管道天然气供烘箱或热水时纳入。参考属性为Volume；记录绝压、温度、干湿组成和压缩因子，核对供方/背景立方米定义。次级质量系数不是密度。不设默认热值或效率。

- 选定流：气态天然气
- 流属性/单位：Volume / m3
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`epa-gas-combustion`

###### 瓦楞运输纸箱（`carton`）

本行仅记录真实采购，每种独立供货等级/制剂分别记录。首次非采购接收和真实退回使用下列同材料独立行，不混入采购。称量实际单个纸箱，声明纤维组成、涂层及供方。无对应证据时不采用限定16.6%原生/83.4%再生纤维的候选。排除泛化包装集合。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`topglove-manufacture-2016`

###### 有条件PE内包装（`pe_film`）

本行仅记录真实采购，每种独立供货等级/制剂分别记录。首次非采购接收和真实退回使用下列同材料独立行，不混入采购。仅用于实际聚乙烯薄膜；核对等级、厚度、添加剂、制袋负荷和供方。源分类CPC29220与名称/CAS9002-88-4/薄膜描述冲突，保留元数据澄清债务。这不是PET。实际无此包装则记录不适用。

- 选定流：聚乙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`topglove-manufacture-2016`

###### 首次非采购接收的瓦楞运输纸箱（`carton_first_receipt`）

记录首次非采购外部接收，无论随来料附着、独立借入或无偿取得。即使其上游负荷已含在来料供方中，也须记录实物接收。无同一件此前由本站外发的证明，不能认作退回。分别保留所有权及上游负荷包含证据。 若不存在，保留不存在的证据。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`ilcd-allocation`

###### 可追溯真实退回的瓦楞运输纸箱（`carton_true_return`）

只记录能链接本站此前外发同一实物件的真实退回。保留件号/批次谱系及原外发凭证、自由或附着状态和继承负荷向量。无该谱系的新借入、无偿接收或来料包装均为首次接收。退回不是新采购，不重新产生原生生产负荷。实际退回运输、清洗和修复仍须分别计量负荷。 若不存在，保留不存在的证据。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`ilcd-allocation`

###### 首次非采购接收的聚乙烯薄膜（`pe_film_first_receipt`）

记录首次非采购外部接收，无论随来料附着、独立借入或无偿取得。即使其上游负荷已含在来料供方中，也须记录实物接收。无同一件此前由本站外发的证明，不能认作退回。分别保留所有权及上游负荷包含证据。 若不存在，保留不存在的证据。

- 选定流：聚乙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`ilcd-allocation`

###### 可追溯真实退回的聚乙烯薄膜（`pe_film_true_return`）

只记录能链接本站此前外发同一实物件的真实退回。保留件号/批次谱系及原外发凭证、自由或附着状态和继承负荷向量。无该谱系的新借入、无偿接收或来料包装均为首次接收。退回不是新采购，不重新产生原生生产负荷。实际退回运输、清洗和修复仍须分别计量负荷。 若不存在，保留不存在的证据。

- 选定流：聚乙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`ilcd-allocation`

##### 废物流

本路线未声明额外交换。

##### 基本流

本路线未声明额外交换。

#### 输出

##### 产品流

###### 新增质量放行手套（`reference_product`）

参考输出：1 千克新增质量放行、经规定调湿后的手套净质量，排除全部包装。Q为对应生产队列新增放行质量，每批只计一次，不把成品期末库存再加到Q。

- 选定流：氯化无粉硫化天然橡胶手套
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`topglove-manufacture-2016`

##### 废物流

###### 不合格硫化手套（`glove_reject`）

实际不可销售的不合格手套及检验耗用手套；声明天然橡胶、氯化状态、污染情况和接收处置。通用废橡胶身份包含服装来源，但不证明处理兼容。可销售降等品须另列产品输出并重新裁定分配。

- 选定流：废旧橡胶
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes`
- 来源：`topglove-manufacture-2016`; `ilcd-allocation`

###### 分离的胶乳结皮与凝块（`latex_solid`）

若实际从浸渍浴或泄漏中移出，则对应一种分离胶乳固体流。记录湿质量、干固体、添加剂、污染与接收方。排除仍含于废水的固体；不得改称消化市政污泥。

- 选定流：未硫化天然胶乳凝块
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes`
- 来源：`epa-latex-1974`

###### 送外部处理的混合工艺废水（`process_effluent`）

以处理交接点实际混合排水为对象，记录体积、密度、pH、固体、COD、氮物种、余氯及按配方筛查的金属。混合前保留各源排水。此为废物转移而非向水体的基本排放。须链接兼容外部处理数据集及其排放。

- 选定流：送外部处理的胶乳手套清洗浸出混合废水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes`
- 来源：`epa-latex-1974`; `topglove-manufacture-2016`

##### 基本流

###### 氨逸散（`ammonia`）

胶乳稳定或其他实际氨来源；核对实际氮投入、有组织和无组织逸散。仅物种存在时适用，保留测量及未检出证据。介质为室外空气、子介质未特指。不设默认正排放；已知其他接收子介质时使用相符的已核流。

- 选定流：氨
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`vaisala-bath`

###### 氯逸散（`chlorine_air`）

收集措施后实际跨入室外的有组织/无组织Cl2；区分氯离子和次氯酸盐。仅物种存在时适用，保留测量及未检出证据。介质为室外空气、子介质未特指。不设默认正排放；已知其他接收子介质时使用相符的已核流。

- 选定流：氯
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`topglove-manufacture-2016`

###### 化石二氧化碳（`co2_fossil`）

采用实测化石碳平衡，适用时包括非燃烧碳酸盐反应；与天然橡胶生物碳分开。仅物种存在时适用，保留测量及未检出证据。介质为室外空气、子介质未特指。不设默认正排放；已知其他接收子介质时使用相符的已核流。

- 选定流：二氧化碳（化石源）
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-gas-combustion`

###### 生物源二氧化碳（`co2_biogenic`）

仅记录实际生物碳氧化或降解；留在手套或废物中的碳不视为即时CO2。温室气体统计排除不能删除真实LCI排放。仅物种存在时适用，保留测量及未检出证据。介质为室外空气、子介质未特指。不设默认正排放；已知其他接收子介质时使用相符的已核流。

- 选定流：二氧化碳（生物源）
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ilcd-allocation`

###### 化石甲烷（`methane`）

实际燃气泄漏和不完全燃烧；不得将总VOC作为甲烷。仅物种存在时适用，保留测量及未检出证据。介质为室外空气、子介质未特指。不设默认正排放；已知其他接收子介质时使用相符的已核流。

- 选定流：甲烷 (化石源)
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-gas-combustion`

###### 氧化亚氮（`n2o`）

实际燃烧N2O；不计入NOx合计。仅物种存在时适用，保留测量及未检出证据。介质为室外空气、子介质未特指。不设默认正排放；已知其他接收子介质时使用相符的已核流。

- 选定流：一氧化二氮
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-gas-combustion`

###### 化石一氧化碳（`co`）

现场燃烧的实际化石CO；若证实存在生物源CO须另列一行。仅物种存在时适用，保留测量及未检出证据。介质为室外空气、子介质未特指。不设默认正排放；已知其他接收子介质时使用相符的已核流。

- 选定流：一氧化碳（化石源）
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-gas-combustion`

###### 一氧化氮（`no`）

实际NO物种质量，不是氮质量或NO2当量。未分物种NOx不能直接确定本行数量。仅物种存在时适用，保留测量及未检出证据。介质为室外空气、子介质未特指。不设默认正排放；已知其他接收子介质时使用相符的已核流。

- 选定流：一氧化氮
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-gas-combustion`

###### 二氧化氮（`no2`）

实际NO2物种质量；不得在已分别报告NO与NO2后再叠加NOx总量。仅物种存在时适用，保留测量及未检出证据。介质为室外空气、子介质未特指。不设默认正排放；已知其他接收子介质时使用相符的已核流。

- 选定流：二氧化氮
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-gas-combustion`

###### 二氧化硫（`so2`）

实际燃烧SO2或其他已证实来源；核对燃料/加臭剂硫及留存硫。仅物种存在时适用，保留测量及未检出证据。介质为室外空气、子介质未特指。不设默认正排放；已知其他接收子介质时使用相符的已核流。

- 选定流：二氧化硫
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-gas-combustion`

###### 细颗粒物外排（`pm25`）

仅记录收集后排出边界的不大于2.5微米颗粒，含适用的燃烧颗粒。仅物种存在时适用，保留测量及未检出证据。介质为室外空气、子介质未特指。不设默认正排放；已知其他接收子介质时使用相符的已核流。

- 选定流：颗粒物 (PM2.5)
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-gas-combustion`

###### 中粒径颗粒物外排（`pm25_10`）

仅为实际操作/释放的大于2.5至10微米非重叠区间，不是PM10总量。仅物种存在时适用，保留测量及未检出证据。介质为室外空气、子介质未特指。不设默认正排放；已知其他接收子介质时使用相符的已核流。

- 选定流：颗粒物 (PM2.5 - PM10)
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-gas-combustion`

###### 粗颗粒物外排（`pm_over10`）

仅为大于10微米区间。收集后内部回用的碳酸钙粉尘不算室外排放。仅物种存在时适用，保留测量及未检出证据。介质为室外空气、子介质未特指。不设默认正排放；已知其他接收子介质时使用相符的已核流。

- 选定流：颗粒物（> PM10）
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`topglove-manufacture-2016`

###### 水蒸气（`water_vapour`）

浴液及烘箱实际净蒸发，加适用燃烧产水；区分溶液载水、内部冷凝水和外排废水。仅物种存在时适用，保留测量及未检出证据。介质为室外空气、子介质未特指。不设默认正排放；已知其他接收子介质时使用相符的已核流。

- 选定流：水蒸气
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`topglove-manufacture-2016`

###### 甲醛排放（`formaldehyde`）

有条件记录室外空气、子介质未特指的实际甲醛（CAS 50-00-0），仅用实测物种质量。适用时分物种记录VOC，不将总VOC与其组成物种重复累加。

- 选定流：甲醛
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-gas-combustion`

###### 苯排放（`benzene`）

有条件记录室外空气、子介质未特指的实际苯（CAS 71-43-2），仅用实测物种质量。适用时分物种记录VOC，不将总VOC与其组成物种重复累加。

- 选定流：苯
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-gas-combustion`

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocation_order` | 优先细分与直接归属。对确实不可分的共用公用工程，逐交换确立决定性物理因果关系（实测热量、负荷/时间或有证据的处理量）。本归因模型中无因果驱动的残余负荷使用有记录的过程出口经济价值，并作敏感性分析。不得任意选择质量或收入份额。 | `ilcd-allocation` |
| `physical_ledger` | 未分配湿物料/固体/水/碳实物账与归属环境负荷账分开。不得把实际联产品质量、内部链接或废水交接量乘分配份额。普通不可销售不合格品作废物；不假定替代产品收益。销售降等手套须另列输出并重新评价分配。 | `ilcd-allocation` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | glove_manufacture | reference_product | batch acceptance | 批号；放行事件ID；尺寸；调湿净质量；验收件数；抽样单件质量；含水率；秤ID；验收结果；在制品期初/期末；成品期初/期末；发运；退货；核销 | 经校准净称重或可追溯件数与该批质量抽样；每个实物批次识别唯一放行事件 | kg; Item(s) | 每批 | 完整对应生产队列 | 全部贡献阶段和库存 | 仅保留原始放行、在制品、成品及移动记录；不采归一值 | 秤校准、验收报告、批次谱系 |
| cp_materials | glove_manufacture | latex_feed; nitric_cleaner; alkaline_cleaner; calcium_nitrate; calcium_carbonate; chlorine_solution | stock and assay | 物料ID；SKU；供方；配方；含量基准；干胶含量；总固体；密度；水；期初；接收；期末；退料；转移；批号 | 经校准称量/库存记录与有效化学测定；浴液与外部投入分开 原始汇总约束（采集保持未除原始量）：仅采原始接收、库存变化及分析值；不采每千克因子。aggregation_rule报告基准指唯一的下游normalize_release结果，不在采集端归一。 | kg; kg/kg | 每次到货/批次与换浴 | 同队列含启停及跨期结转 | 接收投入与浴液/在制品库存 | 每 1 kg 参考流 | CoA/SDS、湿/干基测定与库存核对 |
| cp_utilities | glove_manufacture | electricity; process_water; natural_gas | metering | 表ID；期初；期末；分支；时间；电压；千瓦时；水体积；水密度；燃气体积；T；绝压；干湿；燃气组成；Z；热值基准；供热负荷；运行时间 | 读取校准分表记录与供货规格；核对共用水电气分支和实际因果驱动 原始汇总约束（采集保持未除原始量）：仅采原始表增量与运行记录；不归一、不假定转换因子。aggregation_rule报告基准指唯一的下游normalize_release结果，不在采集端归一。 | kWh; m3; kg; MJ | 连续或每班并含启停 | 对应队列与在制品结转 | 现场公用工程交接与内部分配 | 每 1 kg 参考流 | 校准、燃气标准体积定义与供方规格 |
| cp_packaging | glove_manufacture | carton; pe_film; carton_first_receipt; carton_true_return; pe_film_first_receipt; pe_film_true_return | weighing and stock | material_id; SKU; article_or_lot_id; composition; unit_mass; free_open; free_close; attached_WIP_open_close; attached_FG_open_close; purchase_in; first_nonpurchase_in_free_attached; true_return_in_free_attached; prior_site_dispatch_id; ownership; upstream_burden_included; inherited_burden_vector; newly_attached; detached_to_free; gross_dispatch_attached; other_out_free_attached; scrap_free_attached; lot_id | 逐材料称量，分别记录采购、首次非采购接收、已证明同件退回，并区分自由/附着状态。不得从付款或负荷包含情况推定实物流动。原始移动量不除分母，仅normalize_release形成报告基准。 | kg; Item(s) | 每次接收、外发、附着和期末盘点 | 匹配放行队列与移动期间 | 自由库存、附着在制品/成品及外部交接 | 每 1 kg 参考流 | 校准称量、BOM、原外发谱系、借入/无偿凭证、上游负荷边界 |
| cp_wastes | glove_manufacture | glove_reject; latex_solid; process_effluent | waste handover | 流ID；来源；湿质量；干固体；体积；密度；pH；COD；氮物种；余氯；金属；日期；接收方；处理；库存变化 | 分别称固体，实际混合前逐支排水计量/采样；链接接收方记录 原始汇总约束（采集保持未除原始量）：仅保留原始质量、浓度及体积/时间。aggregation_rule报告基准指唯一的下游normalize_release结果，不在采集端归一。 | kg; m3; mg/L | 每车/批；废水按流量比例采样 | 同队列及废物库存移动期间 | 制造边界至外部处理 | 每 1 kg 参考流 | 秤/地磅、采样QA和处理接收凭证 |
| cp_air | glove_manufacture | individual air emission rows | stack/fugitive monitoring | 物种；CAS；碳来源；源；浓度；气流量；采样时间；温度；压力；水分；氧修正；收集；检出限；粒径分割；化石/生物碳；边界位置 | 用有效物种/粒径方法测量控制措施后室外排出；分别评价无组织损失与碳/水闭合 原始汇总约束（采集保持未除原始量）：仅原始浓度、气量、状态、时间和检出数据。aggregation_rule报告基准指唯一的下游normalize_release结果，不在采集端归一。 | mg/m3; m3; h; kg | 代表性运行/负荷与启停状态 | 同队列并披露运行覆盖 | 逐排放源与室外边界 | 每 1 kg 参考流 | 方法、校准、空白、不确定性与未检出边界 |

### 计算规则

| rule_id | 适用对象 | Formula or rule（公式或规则） | Inputs（输入） | Output（输出） | source_ids |
| --- | --- | --- | --- | --- | --- |
| `release_gate` | reference_product | Q=唯一新增放行、调湿手套净质量之和。不加成品期末库存或总发运量。不合格/检验耗用手套不进入Q。通过在制品追踪放行队列；不得以不匹配日历期间公用工程合计除以另一队列放行量。 | cp_release | Q | `topglove-manufacture-2016` |
| `normalize_release` | 所有清单行 | x_i=A_i/Q；A_i为库存/在制品核对后匹配放行队列的交换量；发生分配时分别保留未分配实物量与归属负荷量；x_i为每1千克参考流交换。仅归一一次。 | A_i; Q; cp_release | x_i，以清单行单位/千克手套表示 | `ilcd-allocation` |
| `wet_material_balance` | 物料实物账 | 期初+外部接收=实物输出+期末+实测损失。分别闭合干胶、添加剂固体、水、碳及有关元素，含浴液和在制品。载水随供货混合物仅计一次；内部循环两端同实物量相抵。不设默认收率或纯度。 | cp_materials; cp_wastes; cp_air; cp_release | 未分配实物账与残差 | `vaisala-bath`; `epa-latex-1974` |
| `stock_burden_carryover` | 在制品和成品 | 将期初在制品物料及其完整继承上游/公用工程负荷归入对应放行队列，期末在制品负荷结转至以后放行，已放行成品不进入Q。另核对成品期初+新增放行+实物退回=总发运+核销+成品期末。退货保留原负荷，不因改标签成为新生产。 | cp_release; cp_materials; cp_utilities | 匹配队列负荷账 | `ilcd-allocation` |
| `packaging_ledger` | carton; pe_film; carton_first_receipt; carton_true_return; pe_film_first_receipt; pe_film_true_return | 逐材料分别核对：自由期初+自由采购接收+自由首次非采购接收+自由真实退回+拆卸回自由库存=自由期末+新增附着+自由废料+自由其他外发。附着在制品/成品期初+附着采购接收+附着首次非采购接收+附着真实退回+新增附着=附着在制品/成品期末+随总发运外出+拆卸回自由库存+附着废料+附着其他外发。接收类别互斥；附着/拆卸为内部移动并相抵。无论上游是否含负荷，首次非采购接收仍为实物输入。真实退回保留继承负荷向量，不新增生产负荷。每项负荷只指定一个所有者，含已在来料供方中的负荷。内部复用既非采购也非外部接收。数据集完成前，实际缺少的外发/废物交换须补同材料独立卡片。包装排除于Q，仅归一一次。 | cp_packaging; cp_release | 逐材料/状态实物账及继承负荷账 | `ilcd-allocation` |
| `air_species_mass` | 逐物种空气排放行 | 在相同温压/干湿/氧基准下积分浓度乘气量，转为物种质量并加独立实测无组织质量。保留检出不确定性。NO与NO2分开；NOx是否为NO2当量未知时保持未决。仅在兼容实测粒径切割下拆分累计PM，不能将PM2.5、PM10总量及总PM作为独立区间相加。 | cp_air | A_i | `epa-gas-combustion` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement（要求） | Evidence（证据） |
| --- | --- | --- | --- |
| identity | 每项供货交换 | 分别核实原始身份与供方数量基准；宽流仅在无相反材质/路线限定时可用。 | 原生记录、CoA/SDS、供方参考量 |
| coverage | 所有阶段 | 分别记录实际存在、不存在、未检出和未测量。额外每种化学品、包装组件、耗材、废物及排放均增列原子行。未测不等于零。 | 现场工艺调查、表计/排水图及不确定性 |
| representativeness | 前景队列 | 声明场址、期间、班次/负荷、配方与库存覆盖；历史或单厂资料不提供通用配方、定量范围、收率或公用工程因子。 | 实际记录及各来源限定 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_reference` | 须有唯一reference_product产品输出，与已核实成品UUID、Mass/kg及必需限定信息一致。影响指标单位不能确定实物生产数量。 | `topglove-manufacture-2016` |
| `validate_balances` | 分别校验固体/水/碳实物闭合、在制品/成品及两套包装账，不与负荷分配混淆。Q须为正，队列覆盖匹配且仅归一一次；未解释残差须调查，不能虚构平衡排放。 | `ilcd-allocation` |
| `validate_native` | 每个采用UUID须匹配类型、实物身份、已提供CAS、参考属性/单位及接收介质。复核供方兼容、正式中文名与数量定义；未决关系须明确，并阻止前景数据包完成。 | `vaisala-bath` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 完成且经独立评价、含继承上游配合与外部处理链接的特定生产门手套清单 |
| excluded_use | 其他手套材质/路线、CPC36260全覆盖、医疗合规认证或未经功能评价的等服务比较 |
| required_metadata | 精确产品、队列、实物范围、配合物/供方、湿干基、门、库存继承和实际公用工程 |
| required_quality_disclosure | 测量覆盖、未检出边界、平衡、分配驱动、未决身份/供方限定 |
| update_trigger | 材质、配方、整理、公用工程、门、供方、处理或验收规格变化 |

## 11. 数据源

| Source id（来源） | Type（类型） | Reference（参考文献） | Used for（用途） |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | [UNSD CPC 3.0 Explanatory Notes, 30 June 2025, p.177](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 仅分类边界，不提供工艺方法 |
| `topglove-manufacture-2016` | literature | [Top Glove Introductory Document, 24 June 2016, printed pp.103–105/PDF104–106](https://links.sgx.com/FileOpen/Top%20Glove%20Corporation%20Bhd%20-%20Introductory%20Document%20%2824%20June%202016%29.ashx?App=IPO&FileID=5179) | 历史生产者B路线及投入/阶段定性作用；无数值默认 |
| `vaisala-bath` | extension_guidance | [Vaisala, Rubber Gloves Manufacturing Process, undated application note](https://www.vaisala.com/nl/node/120711) | 浴液浓度监测与浸出补水；流程顺序依生产者而非本说明；TDS不等同干胶含量 |
| `epa-latex-1974` | official_guidance | [EPA440/1-74/030-a, December1974, Latex-Based Dipped Goods, printed pp.52–55](https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=00000P72.TXT) | 历史胶乳/凝固剂残留定性筛查；不移植旧溶剂配方、限值或数量 |
| `epa-gas-combustion` | official_guidance | [EPA AP-42 1.4, Natural Gas Combustion, §1.4.3 pp.1.4-2–3, accessed2026-11-20, printed10/26](https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf) | 仅有条件燃气锅炉/炉排放物种筛查；无排放、效率、组成或热值默认 |
| `ilcd-allocation` | official_guidance | [EC JRC ILCD Handbook, Detailed Guidance, First edition March2010, §7.9.3 pp.257–258/PDF277–278](https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf) | 归因分配顺序与虚拟细分；无固定份额或自动废物收益 |
