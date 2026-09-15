---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-for-measuring-length-for-use-in-the-hand-including-measuring-rods-and-tapes-b639b90a
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 手用长度测量仪器（包括量杆和量带、千分尺及卡尺），未另分类

## 1. 范围与适用性

本 PCR 适用于便携式手用长度测量仪器从摇篮到制造工厂门的生产。这些仪器以直接用手测量长度为主要功能，包括量杆、量带等实物量具，内径或外径千分尺以及未另分类的卡尺。当长度测量仍是主要功能时，也包括模拟式、机械数字式和电子数字式产品。

本 PCR 不包括量块及其他参考标准器、固定式或坐标测量机、大地测量或测绘仪器、非接触式电子测距仪、主要被测量不是长度的仪器、单独供应的零部件和附件，也不包括分销、使用、维修和报废阶段。数据包可以扩展边界，但必须披露扩展内容并单独列出清单。

产品市场状态为在制造商工厂门完成检验并在有声明时完成校准、已包装待发运的仪器。具体产品必须声明仪器类别、结构、指示方式、测量范围、分度值或分辨力、准确度等级或最大允许误差、净质量、包装及合格评定依据。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-for-measuring-length-for-use-in-the-hand-including-measuring-rods-and-tapes-b639b90a |
| classification_refs | CPC 3.0: 48233 |
| covered_products | 手用量杆和量带；卡尺；内径、外径和深度千分尺；类似的未另分类便携式接触长度测量仪器 |
| excluded_products | 量块和参考标准器；固定式、坐标式、大地测量、测绘和非接触式测距系统；非长度测量仪器；单独供应的零部件和附件 |
| representative_product | 具有已声明计量特性的已包装合格手用卡尺、千分尺、量杆或量带 |
| production_route | 接收金属或聚合物半成品；精密成形、机械加工或模塑；有条件的刻度标记和表面处理；装配；计量检定、验证或校准；包装 |
| market_state | 制造工厂门处已完成检验并包装的仪器 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门制造并提供以长度测量为主要功能的手用仪器 |
| How much | 1 kg 合格成品仪器净质量，不含包装 |
| How well | 已声明仪器类别、指示方式、测量范围、分度值或分辨力、准确度等级或最大允许误差、结构及合格评定依据 |
| How long or cycle | 一个完整工厂门生产批次；预期使用寿命须披露但不作为归一化基准 |
| reference_flow_link | hand_held_length_instrument_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 合格仪器净产出 |
| 参考产品流 | 手用长度测量仪器 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 仪器类别和型号；模拟式、指针式、机械数字式或电子数字式指示；测量范围；分度值或分辨力；准确度等级或最大允许误差；主要材料、牌号及再生含量；表面处理；仪器净质量；包装规格；工厂地理位置；生产期；电力供应结构；检定、验证或校准程序及溯源性；预期使用寿命 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

参考产品 UUID 有意保持未解决状态：限定范围的混合检索未找到完全匹配的公开 state-100 手用长度测量仪器产品流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品及所有归一化清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 最终验证后、包装前测定合格成品仪器净质量。排除包装、不合格品、夹具及校准器具。按批次合格仪器净质量总和对交换进行归一化。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表读数和分配依据。按 1 kWh 准确等于 3.6 MJ 换算；不得混合场内发电、外购电力和外送电力。 |
| `water_mass_conversion` | 工艺用水和清洗废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先直接测量质量。测量体积时，保留体积、温度及换算所用密度来源；不得默认密度。 |
| `material_and_waste_mass` | 材料投入及分类废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明的组成和状态记录入厂材料质量及出厂废物质量。不得从实物质量记录中抵扣废料价值、回收抵扣、水分或附着液体。 |

## 5. 系统边界

前景边界始于半成品材料、零部件、工艺流体、包装和外购能源跨越制造场址边界，止于合格并已包装、可发运的仪器。这些投入的上游生产及废物的下游处理用关联数据集表示，不在前景过程内重复展开。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在仪器制造场址接收的金属半成品、聚合物原料或复合材料带、工艺耗材、包装组件和能源 |
| starting_condition_role | 零件制造、标记、装配、计量检定、验证或校准及包装的前景入口 |
| product_classification_scope | 属于本 PCR 语义边界且以长度测量为主要功能的便携式手用仪器 |
| recursive_input_rule | 同类仪器作为外购投入时，以具有自身上游数据集的产品投入仅记录一次；不得在本前景中递归展开其制造 |
| upstream_dataset_requirement | 每项外购材料、耗材、能源载体、包装组件和外运废物均须关联具有地理和技术代表性的上游生产或处理数据集 |
| disclosure | 声明纳入场址、外包工序、截断、仪器类别及结构、过程分配、包装、生产期、电力结构、废物去向和工厂门后扩展 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | cradle_to_factory_gate_foreground | 纳入实际使用的精密成形、机械加工或模塑，实际使用的刻度标记和表面处理，装配、最终检验、支持市场声明的计量检定、验证或校准以及包装。 | `oiml-r35-1-2007-amd-2014`; `iso-13385-1-2019`; `iso-3611-2023` |
| `boundary_variant_applicability` | route_conditioned_operations | 仅在声明的路线条件满足时启用相应材料、工艺流体、标记和废物行。不得同时建模所有仪器类别或材料结构。 |  |
| `boundary_upstream_links` | purchased_inputs_and_waste_treatment | 关联每项外购投入的上游生产及每项外运废物的处理。供应商运输默认不属于本 PCR；研究明确扩展边界时须单独报告。 |  |
| `boundary_exclusions` | default_exclusions | 默认排除资本设备、建筑物、员工出行、分销、使用、维护、维修和报废；任何重大的研究特定纳入均须披露。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `precision_component_fabrication` | 精密零件制造 | `required` | 始终纳入；各材料和流体行仅适用于声明的产品结构和制造路线。 | 前景成形、机械加工、模塑、水洗及制造废物分类 | 归属于批次的合格成品仪器净质量（kg） |
| `scale_marking_and_finishing` | 刻度标记和表面处理 | `conditional` | 在报告场址进行刻度、文字、涂层、电镀或其他表面处理时纳入。 | 前景标记和表面处理工序 | 接受该工序的合格成品仪器净质量（kg） |
| `assembly_verification_packaging` | 装配、计量验证及包装 | `required` | 始终纳入装配、最终检验和包装；进行或声明校准时纳入校准活动。 | 前景最终装配、检定、验证或校准及包装 | 1 kg 合格仪器净产出 |

### 过程：精密零件制造（`precision_component_fabrication`）

#### 输入

##### 产品流

###### 不锈钢板材原料（`stainless_steel_sheet_input`）

仅对含不锈钢板材零件的仪器记录进入制造过程的不锈钢板材；声明合金牌号、厚度、再生含量、供应商和收货状态。

- 选定流：不锈钢板材
- 流属性/单位：Mass / kg
- 数量规则：投向生产批次的实测质量，并扣除有记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`

###### 铝板材原料（`aluminium_sheet_input`）

仅对含铝板材的产品记录进入制造过程的铝板材；声明合金、状态、厚度、再生含量、供应商和表面状态。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：投向生产批次的实测质量，并扣除有记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`

###### ABS 共聚物粒料（`abs_granulate_input`）

仅对含 ABS 零件的产品记录模塑原料；声明牌号、颜色、添加剂组合、再生含量、供应商和水分调节基准。

- 选定流：丙烯腈-丁二烯-苯乙烯共聚物（ABS），粒料 `8f1317c1-aa51-4524-8692-74079c923e2c`
- 流属性/单位：Mass / kg
- 数量规则：投向生产批次的实测干基进料质量，并扣除有记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`

###### 玻璃纤维增强聚合物原料（`gfrp_input`）

仅对适用的量带或量杆结构记录复合材料原料；声明树脂体系、纤维比例、带材尺寸、涂层和供应商。

- 选定流：玻璃纤维增强聚合物 `dab98d11-c76c-4d40-bac9-a3d082f1fb36`
- 流属性/单位：Mass / kg
- 数量规则：投向生产批次的实测质量，并扣除有记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`

###### 制造用电力（`fabrication_electricity_input`）

记录成形、机械加工、模塑、清洗及直接辅助制造设备使用的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电量，或依据设备运行时间及额定或实测功率将场址电量分配给制造过程
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_electricity`

###### 水洗工艺用水（`process_water_input`）

仅在制造过程采用水洗或漂洗时记录工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量送入制造清洗和漂洗的水量，扣除单独计量的循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_water`

###### 切削液（`cutting_fluid_input`）

仅对机械加工路线记录切削液；声明配方、浓度、补加水处理、再利用和库存变化基准。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：报告期采购量加期初库存，减期末库存和有记录的场外退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_process_fluids`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 分类不锈钢机加工废料（`stainless_steel_scrap_output`）

仅在单独分类时记录清洁的不锈钢边角料和切屑；声明合金、附着流体状态和去向。

- 选定流：不锈钢机加工废料
- 流属性/单位：Mass / kg
- 数量规则：由过程转入储存、回收商或处理设施的实测质量，不计避免负荷抵扣
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_wastes`

###### 分类铝机加工废料（`aluminium_scrap_output`）

仅在单独分类时记录铝边角料和切屑；声明合金、附着流体状态和去向。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：由过程转入储存、回收商或处理设施的实测质量，不计避免负荷抵扣
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_wastes`

###### 分类 ABS 模塑废料（`abs_moulding_scrap_output`）

仅在可确认 ABS 单一组成和去向时记录流道料、清机料和不合格模塑件。

- 选定流：ABS 模塑废料
- 流属性/单位：Mass / kg
- 数量规则：离开受控内部回用循环的实测分类 ABS 废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_wastes`

###### 废切削油（`waste_cutting_oil_output`）

仅对油基切削路线记录本流；不得将水混溶性废切削液赋予此身份。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：Mass / kg
- 数量规则：报告期实测外运质量加期末储存废物，减期初储存废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_wastes`

###### 清洗废水（`cleaning_wastewater_output`）

记录送往场内或场外处理的水洗废水；任何直接基本流排放须按物种作为单独流记录。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：实测废水质量，或用记录的温度和密度依据将实测体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_wastes`

##### 基本流

### 过程：刻度标记和表面处理（`scale_marking_and_finishing`）

#### 输入

##### 产品流

###### 水性标记油墨（`water_based_marking_ink_input`）

仅在印刷或填充刻度及文字时记录一种已声明配方的水性油墨；其他油墨或涂层须采用各自原子流身份。

- 选定流：水性标记油墨
- 流属性/单位：Mass / kg
- 数量规则：标记生产批次的领用质量减有记录的未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 接受该标记路线的合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_marking_materials`

###### 标记和表面处理电力（`marking_electricity_input`）

记录实际运行的印刷、雕刻、激光标记、固化或表面处理设备使用的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电量，或依据设备运行时间及额定或实测功率进行有记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受该过程的合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_marking_electricity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：装配、计量验证及包装（`assembly_verification_packaging`）

#### 输入

##### 产品流

###### 装配用润滑油（`lubricating_oil_input`）

记录施用于滑动、螺纹、铰链或回卷机构的润滑油；声明牌号和用途。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass / kg
- 数量规则：装配生产批次的领用质量减有记录的未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`

###### 瓦楞纸箱（`corrugated_box_input`）

记录随参考产品供应的瓦楞纸箱质量；声明尺寸、纸板等级、再生含量和每批装箱数量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：将包装材料清单质量与合格出货产品消耗的纸箱核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`

###### 聚乙烯保护膜（`polyethylene_film_input`）

仅在产品附带聚乙烯膜保护包装时记录；声明聚合物牌号、厚度、再生含量和质量。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：Mass / kg
- 数量规则：将包装材料清单质量与合格出货产品消耗的薄膜核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`

###### 装配、验证及包装电力（`assembly_electricity_input`）

记录装配工具、电子配置、检定、验证或校准设备及包装设备使用的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电量，或依据设备运行时间及额定或实测功率进行有记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_electricity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格手用长度测量仪器（`hand_held_length_instrument_output`）

仅记录通过已声明最终检验和计量检定、验证或校准判定准则的产品。产品流不含包装质量。

- 选定流：手用长度测量仪器
- 流属性/单位：Mass / kg
- 数量规则：报告批次所有合格成品仪器的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_product`
- 来源：`un-cpc-3-0-structure-2025`; `oiml-r35-1-2007-amd-2014`; `iso-13385-1-2019`; `iso-3611-2023`

##### 废物流

###### 废润滑油（`used_lubricating_oil_output`）

记录从装配或验证设备中排出并送往处理的润滑油；不得与切削液合并。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：报告期实测外运质量加期末储存废物，减期初储存废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品仪器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_wastes`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_foreground_operations | 在技术可行时细分并计量仪器类别、批次和工序。仅对确实共用且不能单独测量的交换采用分配。 |  |
| `allocation_physical_mass` | residual_shared_exchanges | 按合格仪器净质量分配剩余的共用材料、能源、水和废物交换。当质量不能代表因果驱动时，记录并使用设备运行时间、循环次数或占用工时等实测驱动量。 |  |
| `allocation_scrap_no_credit` | exported_scrap_and_waste | 按实测质量和去向报告每项外运废物。不得从前景交换中扣除收入或避免原生生产；任何回收替代或报废抵扣均属于另行披露的下游模型。 |  |
| `allocation_rejects` | rejected_instruments_and_rework | 将返工交换计入返工后恢复的合格产出，将报废不合格品计入产生该不合格品的生产批次。披露不合格和返工质量；不得将不合格品计入参考产品。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_materials` | precision_component_fabrication | 产品特定制造材料 | 供应商收货及批次领退料记录 | 材料身份；牌号；供应商；批号；期初质量；领用质量；退回质量；期末质量；批次 id | 经校准秤量记录，与库存台账和材料清单核对 | kg | 每次领用和退回；按月汇总 | 至少连续 12 个代表性月份或完整较短生产期 | 每个报告场址和已声明产品类别 | 按原子材料和批次汇总净领用质量；除以合格产品净质量 | 秤标识和校准状态；供应商证书；批号追溯；核对差异 |
| `cp_fabrication_electricity` | precision_component_fabrication | 制造电力 | 电表和设备分配记录 | 电表 id；期初与期末读数；kWh；设备运行时间；功率；批次 id | 优先使用专用电表；否则根据场址总表进行有记录的运行时间—功率分配 | kWh 和 MJ | 连续或每批；按月汇总 | 至少连续 12 个代表性月份或完整较短生产期 | 每个报告场址 | 将 kWh 换算为 MJ，并将归属于制造的电力除以合格产品净质量 | 电表校准或验证；分配工作表；场址电费账单核对 |
| `cp_fabrication_water` | precision_component_fabrication | 工艺用水 | 水表或批次加水记录 | 水源；水表 id；体积或质量；温度；密度来源；循环量；批次 id | 专用水表、罐体称重或经验证的批次体积记录 | kg，并保留源体积 | 每批或每日；按月汇总 | 至少连续 12 个代表性月份或完整较短生产期 | 每个报告场址 | 仅按记录的密度换算体积；排除单独计量的循环水；除以合格产品净质量 | 水表检查；密度依据；水平衡 |
| `cp_fabrication_process_fluids` | precision_component_fabrication | 切削液 | 采购、补加、退回和库存记录 | 配方；浓度；采购质量；期初库存；期末库存；退回质量；批次 id | 库存质量平衡并以实测补加量支持 | kg | 每次补加和盘存；按月汇总 | 至少连续 12 个代表性月份或完整较短生产期 | 每个报告场址和加工技术 | 采购加期初库存减期末库存和退回量；除以合格产品净质量 | 配方记录；库存核对；秤量证据 |
| `cp_fabrication_wastes` | precision_component_fabrication | 分类制造废物 | 废物过磅单、容器日志和储存库存 | 废物身份；组成；容器 id；毛质量；皮重；期初库存；期末库存；去向；批次关联 | 称量每次分类废物转移并核对储存变化 | kg | 每次转移；按月汇总 | 与生产分母相同期间 | 每个报告场址 | 外运量加期末库存减期初库存，并分配至因果批次；除以合格产品净质量 | 过磅单；皮重记录；废物联单；分类审核 |
| `cp_marking_materials` | scale_marking_and_finishing | 标记材料 | 库存领退料记录 | 配方；供应商；批号；领用质量；退回质量；批次 id；已标记产品质量 | 经校准秤或供应商容器质量差，并与库存核对 | kg | 每个标记批次 | 报告期内所有纳入的标记生产期 | 每个报告场址和标记技术 | 净领用质量除以接受该工序的合格产品净质量 | 配方表；批号追溯；秤量证据 |
| `cp_marking_electricity` | scale_marking_and_finishing | 标记和表面处理电力 | 电表和设备分配记录 | 电表 id；kWh；运行时间；功率；批次 id；工序 | 优先使用专用电表；否则按运行时间—功率分配并记录 | kWh 和 MJ | 连续或每批；按月汇总 | 报告期内所有纳入的标记生产期 | 每个报告场址和标记技术 | 将 kWh 换算为 MJ；除以接受该工序的合格产品净质量 | 电表检查；运行日志；分配工作表 |
| `cp_assembly_materials` | assembly_verification_packaging | 装配润滑剂和包装组件 | 供应商及批次领用记录 | 原子材料身份；供应商；批号；领用质量；退回质量；包装数量；批次 id | 经校准秤和包装材料清单核对 | kg | 每批；按月汇总 | 至少连续 12 个代表性月份或完整较短生产期 | 每个报告场址和已声明产品类别 | 各原子材料净消耗质量除以合格产品净质量 | 供应商记录；材料清单；秤校准状态 |
| `cp_assembly_electricity` | assembly_verification_packaging | 装配、验证和包装电力 | 电表和设备分配记录 | 电表 id；kWh；运行时间；功率；工序；批次 id | 优先使用专用电表；否则按运行时间—功率分配并记录 | kWh 和 MJ | 连续或每批；按月汇总 | 至少连续 12 个代表性月份或完整较短生产期 | 每个报告场址 | 将 kWh 换算为 MJ；除以合格产品净质量 | 电表检查；运行日志；分配工作表 |
| `cp_assembly_wastes` | assembly_verification_packaging | 废润滑油 | 废物外运和库存记录 | 废物身份；毛质量；皮重；期初库存；期末库存；去向；期间 | 称量转移量并核对储存废物 | kg | 每次转移；按月汇总 | 与生产分母相同期间 | 每个报告场址 | 外运量加期末库存减期初库存；除以合格产品净质量 | 过磅单；废物联单；库存核对 |
| `cp_finished_product` | assembly_verification_packaging | 合格参考产品 | 生产、检验和净质量记录 | 型号；批次 id；件数；单件净质量；合格质量；不合格质量；返工质量；测量范围；分辨力；准确度准则；校准状态 | 经校准衡器以及签字的最终检验和计量检定、验证或校准记录 | kg | 每个批次 | 完整报告期 | 每个报告场址和已声明产品类别 | 仅汇总合格净质量；排除包装和不合格品 | 衡器校准；检验结果；适用时的检定、验证或校准证书及不确定度声明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_input` | 每项外购材料和耗材 | 净投入 = 采购或领用 + 期初库存 - 期末库存 - 有记录退回 | 采购或领用质量；期初库存；期末库存；退回量；批次关联 | 每报告期及每 kg 参考流的净投入（kg） |  |
| `calc_normalized_exchange` | 每项清单交换 | 归一化交换 = 归属于合格生产的交换 / 合格仪器净质量 | 原子交换记录；必要时的分配驱动量；合格仪器净质量 | 每 1 kg 参考流的 kg 或 MJ 交换 |  |
| `calc_electricity_conversion` | 所有电力行 | MJ = 电表 kWh × 3.6；保留原始 kWh 和电表边界 | 计量或分配的 kWh | 每 1 kg 参考流的电力（MJ） |  |
| `calc_waste_inventory_change` | 有库存的废物输出 | 产生废物 = 外运质量 + 期末储存质量 - 期初储存质量 - 有记录的第三方入场废物 | 过磅单；期初和期末库存；第三方接收记录 | 每 1 kg 参考流产生的废物（kg） |  |
| `calc_uncertainty_report` | 计量验证或校准结果 | 识别输入量，评定标准不确定度，通过已声明测量模型合成，并报告扩展不确定度、包含因子和包含概率。 | 校准标准器证书；重复观测；分辨力；环境条件；测量模型 | 与批次或型号关联的可溯源不确定度声明 | `jcgm-100-2008` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留型号、类别、指示方式、测量范围、分度值或分辨力、准确度或最大允许误差、材料结构、净质量和包装身份。 | 产品规格、材料清单、检验记录和 `un-cpc-3-0-structure-2025`；按适用情况使用 `oiml-r35-1-2007-amd-2014`、`iso-13385-1-2019` 或 `iso-3611-2023` |
| `dq_temporal_coverage` | 所有前景交换 | 至少采用连续 12 个代表性月份；若生产期更短则采用完整生产期。说明停产、异常批次、缺失期间和外推。 | 带日期的电表、水表、台账、生产日志和覆盖率计算 |
| `dq_mass_reconciliation` | 材料和废物质量 | 按声明材料核对领料、合格产品、退库、在制品、不合格品和分类废物。调查并披露重大未解释差异。 | 签字质量平衡表和经校准秤量记录 |
| `dq_energy_reconciliation` | 电力 | 将分表计量和分配电力与同一时间和场址边界的总表或账单核对。 | 电表层级、账单、运行记录及核对结果 |
| `dq_metrological_traceability` | 验证和校准 | 识别参考标准器、校准状态、环境条件、测量点、判定准则、结果，并在声明校准时报告测量不确定度。 | 溯源链、校准或验证记录、遵循 `jcgm-100-2008` 的不确定度预算 |
| `dq_completeness` | 清单 | 确认每行适用性，并记录省略的材料、表面处理、涂层、电子元件、电池、包装组件、废物和直接基本流排放。每项适用但省略的交换均须作为一个原子行补充。 | 适用性检查表、材料清单、过程走查、废物登记和许可审查 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_qualifiers` | reference_product | 拒绝缺少仪器类别、型号、指示方式、测量范围、分度值或分辨力、准确度或最大允许误差、净质量、结构、工厂地理位置、生产期或合格评定依据的数据包。 | `un-cpc-3-0-structure-2025`; `oiml-r35-1-2007-amd-2014`; `iso-13385-1-2019`; `iso-3611-2023` |
| `validate_reference_mass` | normalization | 确认分母为合格仪器净质量，排除包装和不合格品，并在分配后等于批次层面合格产品记录总和。 |  |
| `validate_boundary_and_routes` | process_coverage | 确认纳入所有适用的制造、标记或表面处理、装配、检定、验证或校准及包装工序；确认有条件材料和废物行仅对声明路线启用。 |  |
| `validate_atomic_inventory` | inventory_rows | 确认每项交换为一个具有方向、流类型、属性、单位、数量规则、协议和路线条件的物理、化学、废物或能源流。拒绝统称或组合交换。 |  |
| `validate_uuid_semantics` | tiangong_references | 对每个已填 UUID 确认公开 state 100、准确 baseName、流类型、分类、产品状态、属性、单位组及路线适用性。UUID 未解决时保持空白，不得替换为代理。 |  |
| `validate_reconciliation` | foreground_records | 将质量、电力、水、生产、不合格品和废物记录核对至同一场址和期间；披露覆盖率、分配、库存变化和未解释差异。 |  |
| `validate_metrological_evidence` | final_verification_or_calibration | 确认所声明校准或合格性有型号特定结果、溯源性、环境条件、判定准则及适用时已声明的不确定度方法支持。 | `oiml-r35-1-2007-amd-2014`; `iso-13385-1-2019`; `iso-3611-2023`; `jcgm-100-2008` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已声明手用长度测量仪器类别和制造路线的前景从摇篮到制造工厂门生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 当仪器功能、路线、地理、期间和边界相容时，用于产品碳足迹、比较筛选、供应链建模和 lifecyclemodel 构建 |
| excluded_use | 未经限定比较不同仪器类别、测量范围、准确度、使用寿命、结构路线或系统边界；未明确扩展边界时表示使用、维护、分销或报废阶段 |
| required_metadata | PCR id 和版本；仪器类别和型号；指示方式；测量范围；分度值或分辨力；准确度或最大允许误差；主要材料和再生含量；净质量；包装；工厂地理位置；生产期；电力结构；过程路线；检定、验证或校准依据；预期使用寿命；分配；截断；来源和协议 id |
| required_quality_disclosure | 时间和场址覆盖；前景与上游状态；电表、水表和秤校准；材料、能源、水和废物核对；抽样和分配；声明校准的不确定度及溯源性；未解决 UUID 或范围证据；排除项和数据缺口 |
| update_trigger | 型号结构、供应商组合、再生含量、制造或标记技术、电子元件、包装、电力结构、场址、分配、检定、验证或校准依据、废物处理发生重大变化，或变化超过生产者记录的重要性阈值 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 第 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-07） | CPC 48233 正式分类身份和涵盖产品表述 |
| `oiml-r35-1-2007-amd-2014` | standard | OIML R 35-1:2007，《通用实物量具 第 1 部分：计量和技术要求》，含 2014 年修订，https://www.oiml.org/en/files/pdf_r/r035-1-e07.pdf（检索于 2026-09-07） | 实物量具范围；标称长度、分度值、指示、参考条件和准确度等级限定信息 |
| `iso-13385-1-2019` | standard | ISO 13385-1:2019，《产品几何技术规范（GPS）—尺寸测量设备—第 1 部分：卡尺的设计和计量特性》，https://committee.iso.org/standard/71149.html?browse=tc（检索于 2026-09-07） | 卡尺的游标式、指针式和数字式类型及设计或计量特性披露 |
| `iso-3611-2023` | standard | ISO 3611:2023，《产品几何技术规范（GPS）—尺寸测量设备—外径千分尺的设计和计量特性》，https://committee.iso.org/standard/77951.html?browse=tc（检索于 2026-09-07） | 外径千分尺的模拟式、机械数字式和电子数字式类型及计量特性披露 |
| `jcgm-100-2008` | method_factor | JCGM 100:2008，《测量数据的评定—测量不确定度表示指南》，https://doi.org/10.59161/JCGM100-2008E（检索于 2026-09-07） | 产品验证或校准证据的不确定度评定和报告 |
