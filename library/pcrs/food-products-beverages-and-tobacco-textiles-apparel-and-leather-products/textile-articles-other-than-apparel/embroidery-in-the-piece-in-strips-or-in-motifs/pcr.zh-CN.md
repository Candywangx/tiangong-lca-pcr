---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.embroidery-in-the-piece-in-strips-or-in-motifs
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 成幅、成条或成花纹图案的刺绣品

## 1. 范围与适用性

本 PCR 适用于在刺绣制造工厂门口以成幅、成条或花纹图案形式供应的刺绣纺织材料。其涵盖通过机绣或手工导引刺绣，将已声明的刺绣线缝入或缝在已声明纺织基材上的产品，并包括前景路线中实际并入或消耗的衬料或稳定材料。前景数据集应明确产品以连续幅材、条带还是独立花纹图案形式供应；除非有形成文件的产量加权组合，否则不得平均这些市场状态。

前景边界始于收到的纺织基材、刺绣线以及路线特定的衬料或稳定材料，终止于经装框或稳定、刺绣、剪线、检验和包装后的净合格刺绣品。若数字化制版或针迹程序准备由报告组织实施，则应纳入，并记录其可归属电力。上游纤维、纱线、织物、刺绣线、衬料、电力和包装生产，进出厂运输，并入服装或其他制品，使用及寿命终止阶段在相关时由单独数据集表示。

本 PCR 不包括未刺绣的狭幅织物及饰边、花边和薄纱、簇绒织物或地毯、以绗缝为定义性工序的绗缝纺织品、按下游产品身份报告的刺绣成衣或制成品，以及没有可销售刺绣纺织品产出的刺绣服务。印花、染色、涂层、水洗、热定型、粘合层压或其他整理不属于默认路线；若为声明产品实施，应作为独立前景过程加入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.embroidery-in-the-piece-in-strips-or-in-motifs |
| classification_refs | CPC 3.0: 27913（精确范围参考） |
| covered_products | 以成幅、成条或花纹图案形式提供，采用已声明纺织基材、刺绣线及衬料组成的刺绣品 |
| excluded_products | 未刺绣狭幅织物及饰边；花边和薄纱；簇绒地毯或织物；绗缝纺织品；按下游产品身份分类的成衣和制成品；无产品产出的纯服务记录 |
| representative_product | 制造工厂门口净合格机绣纺织品，并声明产品形态、基材、刺绣线、衬料、针迹结构、尺寸、质量和整理状态 |
| production_route | 基材接收与准备；可选衬料或稳定；范围内的针迹程序准备；刺绣；剪线；检验和包装 |
| market_state | 刺绣制造工厂门口以成幅、成条或花纹图案形式交付的成品刺绣品；应声明形态和并入材料 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在刺绣制造工厂门口交付的刺绣纺织材料 |
| How much | 1 kg 净合格刺绣品，不含运输包装 |
| How well | 符合已声明的成幅、成条或花纹图案形态，以及基材、刺绣线、衬料、针迹结构、尺寸、外观要求和整理状态 |
| How long or cycle | 工厂门口一个前景生产批次；该中间纺织产品不分配使用阶段服务寿命 |
| reference_flow_link | ref_embroidery_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Embroidery in the piece, in strips or in motifs `0fed9734-6186-489c-a6a0-cca6894e944d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态：成幅/成条/花纹图案；基材纤维组成和结构；刺绣线组成及支数或线密度；衬料或稳定材料及是否保留；针迹类型和针数或针迹密度；刺绣面积和总体尺寸；颜色数；净产品质量和调湿状态；机器或手工导引路线；整理状态；场址和生产期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明的调湿状态，在检验后称量净合格刺绣品。1 kg 参考量不包括托盘、纸箱、薄膜、卷芯及其他运输包装。 |
| `conditioning_state` | 产品、基材、刺绣线、衬料、中间产品及纺织废物 | Mass | kg | 记录质量数据所采用的调湿环境或实测含湿状态。报告标准调湿质量时，应依据 ISO 139 或声明的等效方法对纺织试样进行一致的调湿和试验。 |
| `fibre_composition` | 基材、刺绣线及保留在产品中的衬料 | 纤维质量分数 | 质量百分比 | 记录每项并入纺织组分的供应商组成，并保留代表性核验。需要定量化学分析时，采用适用的 ISO 1833 方法并记录取样、非纤维物质去除、结果和公差。 |
| `supplementary_area` | 产品形态和刺绣覆盖范围 | Area | m2 | 在有意义时，将产品总面积和刺绣面积作为补充结果报告；不得以面积替代质量参考流。说明花纹图案数量、条带长度或幅材尺寸如何换算为面积。 |
| `normalization_consistency` | 全部清单行 | 行特定属性 | 行特定单位 | 使用相同的净合格产出质量和生产期对每项采集交换进行归一化。保留总产量、废次品、在制品变化和含湿修正，使 1 kg 分母可重现。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 跨越前景边界的已接收纺织基材、刺绣线以及任何衬料或稳定材料；每项均记录供应商产品身份、组成、数量、含湿或调湿状态、来源及上游数据集参考 |
| starting_condition_role | 采购或内部转移的前景投入；其上游纤维、纱线、织物、刺绣线、衬料及辅助材料生产由链接的上游数据集表示 |
| product_classification_scope | 以成幅、成条或花纹图案形式供应的刺绣品；下游成衣、制成品、花边、薄纱、簇绒纺织品和绗缝产品不属于本类别 |
| recursive_input_rule | 已刺绣的同类别材料进入进一步范围内刺绣或整理时，将其作为带有自身上游数据集的产品投入记录，不在当前数据包中重新创建已经完成的刺绣阶段 |
| upstream_dataset_requirement | 为每项已接收基材、刺绣线、衬料或稳定材料、电力供应、包装组件和场外废物处理路线链接代表性数据集；对实际使用的任何路线特定化学品、燃料、热、水或整理服务增加数据集 |
| disclosure | 声明产品形态、场址边界、纳入和外包工序、基材/刺绣线/衬料身份、针迹程序范围、设备路线、包装范围、生产期、分配选择、截断、废次品处理及未解决数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | 前景刺绣制造 | 纳入基材和刺绣线接收与准备、路线特定的衬料或稳定、刺绣机运行、可归属的空压机和直接支持用电、剪线、检验和包装。只有在数字化制版和其他整理由报告组织为声明产出实施时才纳入。 | `cay-embroidery-energy-2018`; `iso-4915-stitch-types-1991` |
| `boundary_same_category_input` | 对已接收刺绣品进行进一步刺绣或整理 | 将已接收同类别刺绣品作为带有上游数据集的已声明产品投入处理，并避免重复计算其已完成工序。 | `eu-pef-method-2021` |
| `boundary_cutoff` | 材料、能源、废物和排放流 | 避免截断。任何排除均应量化、说明理由并披露，且不得隐瞒路线定义性投入、有害物质、受管制排放或重要材料和能源流；PEF 累计截断上限是上限而非自动排除规则。 | `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `substrate_preparation` | 基材准备与稳定 | required | 始终纳入基材接收和准备；仅在使用时纳入衬料或稳定材料 | 前景材料准备 | 每 kg 转入刺绣的已准备基材，并归一化至 1 kg 净合格刺绣品 |
| `embroidery_operation` | 刺绣工序 | required | 始终纳入 | 前景针迹形成 | 每个机器或生产批次，并归一化至 1 kg 净合格刺绣品 |
| `inspection_and_packing` | 剪线、检验和包装 | required | 始终纳入剪线和检验；每项包装组件仅在使用时记录 | 前景最终处理 | 每 1 kg 净合格刺绣品 |

### 过程：基材准备与稳定（`substrate_preparation`）

#### 输入

##### 产品流

###### 已接收纺织基材（`received_substrate`）

记录声明批次用作纺织基材的单一供应商产品。其精确纤维组成、织物或片材结构、尺寸、质量、含湿状态及上游数据集应随交换记录。

- 选定流：Received textile substrate for embroidery, exact supplier product declared
- 流属性/单位：Mass / kg
- 数量规则：批次领用的基材称量值，扣除已记录的未开封退料并按在制品变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`iso-1833-fibre-analysis-2020`

###### 刺绣衬料或稳定材料（`embroidery_backing`）

记录声明路线中使用的一个衬料或稳定材料产品。使用实质不同的衬料产品时须分别记录；不得将纸、聚合物薄膜、非织造布和水溶性衬料合并为一个交换。

- 选定流：Embroidery backing, exact product and composition declared
- 流属性/单位：Mass / kg
- 数量规则：批次领用的衬料或稳定材料称量值，扣除未开封退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`iso-1833-fibre-analysis-2020`

###### 基材准备用电（`preparation_electricity`）

记录裁切、装框、绷框、稳定以及可直接归属的准备设备用电。纯手工准备以路线证据记录计量电量为零。

- 选定流：Site electricity supply for substrate preparation
- 流属性/单位：Energy / kWh
- 数量规则：准备批次的分表用电量或设备电表读数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入刺绣的已准备基材
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records`
- 来源：`cay-embroidery-energy-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入刺绣的已准备基材（`prepared_substrate`）

记录装框、绷框和路线特定稳定后的基材，并与已接收基材、衬料、边角料和在制品进行核对。

- 选定流：Prepared textile substrate for embroidery, declared batch intermediate
- 流属性/单位：Mass / kg
- 数量规则：转入刺绣的称量或受控转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

##### 废物流

###### 衬料或稳定材料边角料（`backing_offcuts`）

按精确材料和处理去向分别记录离开准备工序的衬料或稳定材料边角料。

- 选定流：Embroidery-backing offcuts, exact composition and destination declared
- 流属性/单位：Mass / kg
- 数量规则：从批次中移除的边角料称量值，扣除经核实的内部再利用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入刺绣的已准备基材
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

### 过程：刺绣工序（`embroidery_operation`）

#### 输入

##### 产品流

###### 已准备纺织基材（`prepared_substrate_input`）

将进入针迹形成的已准备基材作为精确批次中间产品记录。

- 选定流：Prepared textile substrate for embroidery, declared batch intermediate
- 流属性/单位：Mass / kg
- 数量规则：进入刺绣的称量或受控转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 聚酯刺绣线（`polyester_thread`）

仅在使用时记录聚酯刺绣线，并明确供应商产品、颜色批次、结构和线密度。

- 选定流：Polyester embroidery thread, exact supplier product declared
- 流属性/单位：Mass / kg
- 数量规则：刺绣线领用称量值减去退回可用线，并与线筒剩余量及剪线废物核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thread_mass_balance`
- 来源：`iso-1833-fibre-analysis-2020`; `iso-4915-stitch-types-1991`

###### 再生纤维素刺绣线（`regenerated_cellulose_thread`）

仅在使用时记录黏胶、人造丝或其他再生纤维素刺绣线，并明确供应商产品、颜色批次、结构和线密度。

- 选定流：Regenerated-cellulose filament embroidery thread, exact supplier product declared
- 流属性/单位：Mass / kg
- 数量规则：刺绣线领用称量值减去退回可用线，并与线筒剩余量及剪线废物核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thread_mass_balance`
- 来源：`iso-1833-fibre-analysis-2020`; `iso-4915-stitch-types-1991`

###### 棉刺绣线（`cotton_thread`）

仅在使用时记录棉刺绣线，并明确供应商产品、颜色批次、结构和线密度。

- 选定流：Cotton embroidery thread, exact supplier product declared
- 流属性/单位：Mass / kg
- 数量规则：刺绣线领用称量值减去退回可用线，并与线筒剩余量及剪线废物核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thread_mass_balance`
- 来源：`iso-1833-fibre-analysis-2020`; `iso-4915-stitch-types-1991`

###### 金属刺绣线（`metallic_thread`）

仅在使用时记录金属刺绣线，并识别载体纱线、金属层、涂层和供应商产品。

- 选定流：Metallic embroidery thread, exact supplier product and composition declared
- 流属性/单位：Mass / kg
- 数量规则：刺绣线领用称量值减去退回可用线，并与线筒剩余量及剪线废物核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thread_mass_balance`
- 来源：`iso-4915-stitch-types-1991`

###### 刺绣机及直接支持用电（`embroidery_electricity`）

记录刺绣机及直接支持设备可归属的电力，包括为空气剪线或机器执行机构服务的压缩空气发电耗电。不得将外购热或燃料合并到本电力交换中。

- 选定流：Site electricity supply for embroidery operation
- 流属性/单位：Energy / kWh
- 数量规则：批次分表用电；一个电表服务多条生产线时，保留电表总量和形成文件的分配驱动因子
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records`
- 来源：`cay-embroidery-energy-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入最终检验的刺绣纺织中间产品（`embroidered_intermediate`）

记录最终剪线和检验前的刺绣中间产品，并将针迹程序、针迹类型、针数、颜色数、基材、刺绣线和衬料状态链接至批次。

- 选定流：Embroidered textile before final inspection, declared batch intermediate
- 流属性/单位：Mass / kg
- 数量规则：刺绣后的称量或受控转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_quality_records`
- 来源：`iso-4915-stitch-types-1991`

##### 废物流

###### 刺绣线剪线废物（`thread_trimmings_waste`）

未内部再利用的剪线废物按纤维或材料组成及去向分别记录。

- 选定流：Embroidery-thread trimmings, exact composition and destination declared
- 流属性/单位：Mass / kg
- 数量规则：从批次中移除的剪线废物称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 机器运行中移除的刺绣次品（`defective_embroidery_waste`）

记录机器运行中剔除的刺绣片内基材、刺绣线和保留衬料，并按组成和处理去向分别记录。

- 选定流：Defective embroidered textile from machine operation, exact composition and destination declared
- 流属性/单位：Mass / kg
- 数量规则：最终检验前移除的刺绣次品称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

### 过程：剪线、检验和包装（`inspection_and_packing`）

#### 输入

##### 产品流

###### 进入最终检验的刺绣纺织品（`embroidered_intermediate_input`）

记录进入最终剪线和检验的刺绣批次中间产品。

- 选定流：Embroidered textile before final inspection, declared batch intermediate
- 流属性/单位：Mass / kg
- 数量规则：进入最终检验的称量或受控转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_quality_records`
- 来源：

###### 聚乙烯薄膜包装（`polyethylene_film_packaging`）

仅在聚乙烯薄膜随产品离开前景工厂门口时记录；识别聚合物牌号和再生含量。

- 选定流：Polyethylene film for embroidery packaging, exact grade declared
- 流属性/单位：Mass / kg
- 数量规则：用于已包装合格产出的薄膜领用称量值，扣除未用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 瓦楞纸板包装（`corrugated_board_packaging`）

仅在瓦楞纸板随产品离开前景工厂门口时记录；识别纸板等级和再生含量。

- 选定流：Corrugated board for embroidery packaging, exact grade declared
- 流属性/单位：Mass / kg
- 数量规则：用于已包装合格产出的瓦楞纸板领用称量值，扣除未用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 剪线、检验和包装用电（`inspection_electricity`）

记录动力剪线、检验照明或设备、计数、标签和包装设备用电。

- 选定流：Site electricity supply for trimming, inspection, and packing
- 流属性/单位：Energy / kWh
- 数量规则：批次的分表用电量或专用设备电表读数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records`
- 来源：`cay-embroidery-energy-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净合格刺绣品（`reference_output`）

记录添加运输包装前经检验的净产品质量，并链接至声明的成幅、成条或花纹图案形态及全部必需限定信息。

- 选定流：Embroidery in the piece, in strips or in motifs `0fed9734-6186-489c-a6a0-cca6894e944d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明调湿状态下 1 kg 净合格刺绣品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_quality_records`
- 来源：`un-cpc-3-0-27913-2025`

##### 废物流

###### 最终检验不合格刺绣品（`final_reject_waste`）

按精确基材、刺绣线、衬料组成和处理去向分别记录最终检验不合格的刺绣材料。

- 选定流：Final-inspection rejected embroidered textile, exact composition and destination declared
- 流属性/单位：Mass / kg
- 数量规则：从合格产出中移除的最终不合格品称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格刺绣品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用刺绣生产线和支持系统 | 首先通过批次级计量、分时记录、设备细分或独立生产批次避免分配。 | `eu-pef-method-2021` |
| `allocation_physical` | 共用电力、准备、检验和包装负荷 | 无法细分时，采用与资源使用存在因果关系的形成文件的物理驱动因子，例如机器运行时间、针数、空压机运行时间、处理基材质量或包装质量。针迹密度或机器时间实质驱动消耗时，不得仅使用产出质量。 | `eu-pef-method-2021`; `cay-embroidery-energy-2018` |
| `allocation_rejects` | 合格产出和刺绣废次品 | 在区分合格产出和废次品之前，将投入和加工负荷分配至批次。仅依据声明的下游建模方法计入回收或回收材料信用；没有可追溯内部再利用时，不得从投入记录中扣除废物质量。 | `eu-pef-method-2021` |
| `allocation_economic_exception` | 缺乏可辩护物理关系的联合产品 | 仅在无法细分且不存在因果物理关系时采用经济分配；记录价格、时期、币种、计算和敏感性。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `substrate_preparation`; `embroidery_operation` | 基材、衬料和中间产品 | 仓库领用、退料、称量和在制品记录 | batch_id; supplier_product_id; material_composition; opening_mass; issued_mass; returned_mass; closing_mass; transfer_mass; moisture_or_conditioning_state | 校准称量和批次核对 | kg | 每批次 | 代表性连续 12 个月或较短声明生产期内的全部批次 | 全部范围内生产线和储存点 | 按精确材料汇总净领用和转移量；核对期初 + 收料 - 退料 - 期末库存与产出及废物；归一化至净合格产出 | 衡器校准；供应商规格；库存核对；异常日志 |
| `cp_thread_mass_balance` | `embroidery_operation` | 每种刺绣线材料 | 线筒领用/退回记录、线筒质量和剪线收集记录 | batch_id; thread_product_id; fibre_composition; colour_lot; linear_density; full_cone_mass; issued_cones; returned_cone_mass; empty_cone_mass; trimming_mass | 按精确产品称量领用、退回、剩余和剪下的刺绣线 | kg | 每批次及每种刺绣线产品 | 与参考产出相同生产期 | 每台范围内机器及刺绣线库 | 刺绣线净消耗 = 领用质量 - 可用退回质量 - 未变化库存；与并入产品的线和剪线废物核对 | 校准天平；线筒皮重控制；批次追溯；核对差异 |
| `cp_electricity_records` | `substrate_preparation`; `embroidery_operation`; `inspection_and_packing` | 电力 | 公用电表、分表、机器电表和运行日志 | meter_id; opening_reading; closing_reading; batch_id; machine_id; operating_time; stitch_count; compressor_operating_time; allocation_driver | 优先使用分表；否则保留总表数据和因果物理分配驱动因子 | kWh | 每个抄表区间及每批次 | 代表性连续 12 个月或声明生产期 | 全部范围内机器和直接支持系统 | 计算电表读数差；仅扣除单独计量的范围外负荷；用声明驱动因子分配共用负荷；归一化至净合格质量 | 电表校准或电费账单核对；机器日志；分配工作表 |
| `cp_waste_records` | `substrate_preparation`; `embroidery_operation`; `inspection_and_packing` | 衬料边角料、剪线废物、刺绣次品和最终不合格品 | 分类容器质量和废物转移记录 | batch_id; waste_id; material_composition; gross_mass; tare_mass; net_mass; internal_reuse_mass; destination; transporter_or_treatment_reference | 称量每项具体废物流并记录去向 | kg | 每批次或每容器 | 与参考产出相同生产期 | 全部范围内废物收集点 | 按精确组成和去向汇总净废物；仅扣除经核实返回同一清单的内部再利用 | 衡器检查；照片或标签；转移联单；回收商或处理收据 |
| `cp_product_and_quality_records` | `embroidery_operation`; `inspection_and_packing` | 中间产品和合格刺绣产品 | 生产订单、针迹程序、质量检验、尺寸、计数和称量记录 | batch_id; product_form; substrate_id; thread_ids; backing_id; stitch_type; stitch_count; stitch_density; colour_count; embroidered_area; piece_or_strip_dimensions; gross_output_mass; reject_mass; net_saleable_mass; conditioning_state | 将生产和检验记录链接至校准的产出称量 | kg; m2; count; m | 每批次 | 与清单相同生产期 | 全部范围内刺绣和检验生产线 | 汇总最终检验后的净合格质量；单独保留不合格品；将全部交换归一化至合格质量 | 衡器校准；批准规格；针迹程序修订；检验报告；批次谱系 |
| `cp_packaging_records` | `inspection_and_packing` | 每项包装组件 | 包装领用、退回、规格和包装单元记录 | batch_id; packaging_product_id; material_grade; recycled_content; issued_mass; returned_mass; packed_units | 称量每项组件，或用经核实的单件质量乘以包装数量 | kg | 每批次和每项包装组件 | 与参考产出相同生产期 | 全部范围内包装线 | 包装净领用 = 领用 - 退回；与参考产品质量分开报告 | 供应商规格；单件质量核验；库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_exchange` | 每个清单行 | 归一化交换 = 同批次采集交换量 / 同批次净合格刺绣品质量 | 采集交换量；净合格质量 | 行特定单位/kg 净合格刺绣品 | `eu-pef-method-2021` |
| `calc_thread_consumption` | 每种刺绣线产品 | 刺绣线净消耗 = 刺绣线领用质量 - 可用退回刺绣线质量 - 期末库存增加量；将结果与并入产品的刺绣线和剪线废物核对 | 刺绣线领用、退回、库存、产品和废物记录 | 每批次及每 kg 产品消耗的刺绣线 kg |  |
| `calc_batch_mass_balance` | 基材、衬料、刺绣线、产品、废次品、废物和在制品 | 质量平衡残差 = 材料总投入 + 期初在制品 - 净合格产出 - 单独计量废物 - 期末在制品 - 已记录退料；调查并披露非零残差 | 材料、产出、废物、退料和在制品记录 | kg 和材料投入百分比 |  |
| `calc_shared_electricity` | 共用电表 | 分配电力 = 共用电表耗电量 × 声明的因果驱动因子份额；报告电表总量、全部分配份额和残差 | 电表耗电量；机器时间、针数、空压机时间、处理质量或其他形成文件的因果驱动因子 | 分配至批次的 kWh | `eu-pef-method-2021`; `cay-embroidery-energy-2018` |
| `calc_supplementary_area` | 成幅、成条或花纹图案报告 | 依据受控尺寸或设计数据确定产品面积和刺绣面积；说明循环单元、开孔和不完整花纹图案的处理 | 宽度；长度；花纹图案数量；花纹图案尺寸；数字化刺绣面积 | m2/kg 及声明形态特定的补充结果 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品、基材、刺绣线、衬料、包装和废物 | 保留精确供应商产品或废物流身份、组成、生产路线及已核验的 Tiangong UUID；不得用更宽泛集合流替代未解决 UUID。 | 供应商规格；批次谱系；组成记录；UUID 核验记录 |
| `dq_temporal` | 前景活动数据 | 有数据时采用代表性连续 12 个月。较短生产期应声明日期、覆盖率、季节性、产品组合、停机以及代表性理由。 | 电表日期；生产日历；覆盖率计算；生产期理由 |
| `dq_completeness` | 材料和能源平衡 | 纳入全部路线定义性材料、电力、实测废物和实际整理工序。量化并说明排除理由，证明其满足声明截断规则。 | 完整性清单；质量平衡；能源核对；截断评估 |
| `dq_measurement` | 质量、电力、尺寸和计数 | 使用校准仪器或经核实的供应商/公用事业记录；保留单位、分辨率、可得的不确定性和换算因子。 | 校准证书；公用事业账单；衡器和电表检查；换算工作表 |
| `dq_representativeness` | 上游和处理数据集 | 尽量匹配地理、技术、时间、基材/刺绣线/衬料组成、电力供应、包装等级和废物去向；披露代理及其局限。 | 数据集选择日志；数据质量评分；代理理由 |
| `dq_conditioning` | 纺织质量比较 | 对基材、中间产品、产品和纺织废物采用一个声明的含湿或调湿基准，或明确记录修正。 | ISO 139 调湿记录或等效记录；含湿量测量；修正工作表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 产品类别和参考流 | 确认精确 CPC 27913 范围、成幅/成条/花纹图案形态、参考 UUID、Mass 属性、kg 单位和全部必需限定信息；拒绝下游成衣、花边、薄纱、簇绒、绗缝或纯服务产出。 | `un-cpc-3-0-27913-2025` |
| `validate_atomic_inventory` | 过程清单 | 确认每张卡只表示一个具体材料、能源、废物或产品交换。拒绝组合公用工程、混合材料选择器、复数废物集合以及未经精确公开行回读确认的 UUID。 |  |
| `validate_mass_balance` | 基材、衬料、刺绣线、产品、不合格品、废物和在制品 | 要求批次质量平衡计算并调查无法解释的残差；不得通过更改实测记录强制闭合。 | `eu-pef-method-2021` |
| `validate_electricity` | 准备、刺绣和最终处理用电 | 确认电表边界、分配驱动因子、运行期和 kWh 单位。共用电力应与电表总量核对，不得重叠或遗漏残差。 | `cay-embroidery-energy-2018`; `eu-pef-method-2021` |
| `validate_composition` | 基材、刺绣线和保留衬料 | 根据供应商记录和代表性核验确认声明组成；使用 ISO 1833 时记录适用部分、取样、结果和公差。 | `iso-1833-fibre-analysis-2020` |
| `validate_conditioning` | 参考质量和平衡质量 | 确认纺织质量采用声明的统一调湿或含湿基准，并确认包装不计入参考量。 | `iso-139-conditioning-2005` |
| `validate_sources_and_quality` | 数据包 | 确认全部引用来源可解析，前景记录覆盖声明时期和场址，代理和截断已披露，未解决 UUID 保持明确。 | `eu-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查和补全后可发布为 `secondary_dataset` 或 `background_dataset` 的前景刺绣制造数据集 |
| downstream_use | 对成幅、成条或花纹图案形式刺绣品进行产品系统建模，并将其纳入下游服装、家居装饰、配饰或其他纺织产品模型 |
| allowed_use | 当产品形态、基材、刺绣线、衬料、针迹结构、设备路线、电力供应、整理状态、地理、生产期和工厂门口边界具有实质代表性时使用 |
| excluded_use | 未经形成文件的调整，不得作为花边、薄纱、簇绒或绗缝纺织品、无产品产出的刺绣服务、刺绣成衣或制成品，或实质不同的基材/刺绣线/整理路线的代理 |
| required_metadata | PCR id 和版本；产品形态；CPC 参考；参考流 UUID；基材、刺绣线、衬料和包装身份及组成；针迹类型/针数/密度；尺寸和刺绣面积；调湿状态；场址和时期；过程覆盖；电力供应；分配；截断；废物去向；上游数据集；未解决身份 |
| required_quality_disclosure | 初级数据覆盖；仪器和校准证据；质量平衡残差；电表分配；时间、地理和技术代表性；组成核验；代理使用；排除；不确定性；审查状态 |
| update_trigger | 产品形态、基材/刺绣线/衬料组成、针迹结构、机器技术、空压机配置、电力供应、整理路线、包装、废物处理、场址、分配方法或生产组合发生实质改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-27913-2025` | `official_guidance` | 联合国统计司，《产品总分类》第 3.0 版解释性说明，子类 27913，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 精确产品类别范围及与相邻纺织类别的排除边界 |
| `eu-pef-method-2021` | `official_guidance` | 欧盟委员会建议 (EU) 2021/2279，附件 I，产品环境足迹方法。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 功能单位和参考流、系统边界、企业特定数据、分配层级、截断披露、数据质量、核验和代理报告 |
| `iso-139-conditioning-2005` | `standard` | ISO 139:2005，纺织品——调湿和试验用标准大气；2025 年确认。https://www.iso.org/standard/35179.html | 一致的纺织品调湿及质量比较证据 |
| `iso-1833-fibre-analysis-2020` | `standard` | ISO 1833-1:2020，纺织品——定量化学分析——第 1 部分：试验通则。https://www.iso.org/standard/74881.html | 基材、刺绣线和保留纺织衬料的纤维组成定量核验 |
| `iso-4915-stitch-types-1991` | `standard` | ISO 4915:1991，纺织品——针迹类型——分类和术语；2021 年确认。https://www.iso.org/standard/10932.html | 一致声明针迹结构以及过程/产品限定信息 |
| `cay-embroidery-energy-2018` | `literature` | Çay, A. (2018). Energy consumption and energy saving potential in clothing industry. Energy, 159, 74–85. https://doi.org/10.1016/j.energy.2018.06.128 | 同行评审证据：刺绣工厂需明确记录前景电力和直接支持能源，并对机器、空压机和照明负荷进行计量或因果分配 |
