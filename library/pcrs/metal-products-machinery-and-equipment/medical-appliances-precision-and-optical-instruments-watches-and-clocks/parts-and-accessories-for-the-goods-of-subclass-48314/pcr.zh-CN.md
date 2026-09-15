---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48314
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 第 48314 子类货物的零件和附件

## 1. 范围与适用性

本 PCR 适用于可明确识别为双筒望远镜、单筒望远镜、其他光学望远镜、非射电天文仪器或复式光学显微镜专用的成品零件和附件。它用于编制机械外壳、安装座、载物台、调焦或对准机构、结构支承件及其他非光学零件或附件的工厂门前景生产数据集。代表性路线为初级铝合金板材的精密机加工、按需清洗、干式装配、检验和包装。

完整仪器、射电天文仪器、单独归类的透镜、棱镜、反射镜及其他光学元件、无法证明与目标仪器关系的通用紧固件或材料，以及使用、维护和报废阶段不在本 PCR 范围内。采用其他材料或制造路线时，应保留本类别识别和参考流规则，并用原子化、路线特定的前景交换替换代表性路线清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48314 |
| classification_refs | CPC 3.0：48351，第 48314 子类货物的零件和附件 |
| covered_products | 专为双筒望远镜、单筒望远镜、光学望远镜、非射电天文仪器或复式光学显微镜设计，或有文件证明用于这些仪器的非光学成品零件和附件 |
| excluded_products | CPC 48314 完整仪器；射电天文仪器；透镜、棱镜、反射镜及其他单独归类的光学元件；无法证明与目标仪器关系的通用材料和五金件 |
| representative_product | 用于已声明 CPC 48314 母体仪器的、经精密机加工、检验并包装的铝合金机械零件或附件成品 |
| production_route | 接收初级铝合金板材；精密机加工和精加工；有条件的水基碱性清洗；干式装配与尺寸或功能检验；防护包装 |
| market_state | 制造场址门口的适销成品零件或附件，包括生产商已声明的包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为已声明的 CPC 48314 母体仪器提供机械支承、定位、调焦、对准、封装或安装功能 |
| How much | 1 kg 适销零件或附件成品净质量，不含包装质量 |
| How well | 符合已声明的图样版本、材料规范、尺寸公差、表面状态、洁净度要求和验收试验 |
| How long or cycle | 工厂门交付的一个生产批次；使用寿命另行报告，不属于质量型参考数量 |
| reference_flow_link | 参考产品输出 `finished_optical_instrument_part`，按 1 kg 成品净质量归一化 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品净质量 |
| 参考产品流 | 光学仪器成品零件或附件（Tiangong UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件编号和图样版本；母体仪器类型和型号；零件或附件功能；主要材料及牌号；制造路线；表面处理和洁净状态；产品净质量；包装纳入情况；场址和地域；生产期间；验收准则和试验结果 |

构建前景数据包时，每项必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺少限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品和合格输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终检验后测量合格产品净质量；包装单独报告，并将所有清单交换归一化至 1 kg 成品净质量。 |
| `material_mass_balance` | 铝材投入、产品、内部转移、废料和废品 | 由所选流确定的 Mass 或 Aluminium content | kg | 各流采用一致的干基或收到状态基准，并核对投入铝与合格产品、在制品、废料、废品及已记录损失中的铝。 |
| `electricity_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始读数和换算系数；记录以 kWh 表示时，按 1 kWh = 3.6 MJ 换算，不得将电力与燃料或外购热合并。 |
| `solution_mass` | 切削液、工艺用水、氢氧化钠和废液 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录交付或排出的质量；以体积计量时，保留温度、密度来源和换算所用浓度。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system_boundary | 边界从半成品材料、工艺化学品和外购部件进入场址开始，纳入精密制造、适用的清洗或精加工、装配、检验、内部返工和包装，直至适销产品离开制造场址。 | `us-epa-2003-mpm-development` |
| `boundary_upstream_inputs` | upstream_datasets | 每项外购材料、化学品、电力和包装的生产与交付均须采用地域和技术适配的上游数据集表示，不得把这些负荷并入未明确的材料投入。 | `eu-2021-2279-pef` |
| `boundary_conditional_operations` | route_specific_operations | 仅在记录表明操作或交换实际发生时，才纳入水基清洗、氢氧化钠使用、废切削油排出及每种包装材料；不适用的行须明确声明，不得替换为合并的公用工程、化学品、废物或包装标签。 | `ec-jrc-2006-stm-bref`; `us-epa-2003-mpm-development` |
| `boundary_exclusions` | excluded_life_cycle_stages | 除非研究明确扩展边界并单独报告，否则不纳入零件离开场址后的母体仪器装配、工厂门之后的配送、使用、维护和报废阶段。 | `un-cpc-3-0-structure-2025` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 半成品材料、工艺化学品、外购部件和包装已到达前景制造场址 |
| starting_condition_role | `received_input` |
| product_classification_scope | CPC 3.0 代码 48351 所识别、专用于 CPC 48314 仪器的成品零件和附件 |
| recursive_input_rule | 已属于本 PCR 类别的外购投入作为产品投入仅记录一次，并配置独立上游数据集和已声明的完成状态；不得对同一投入递归套用此前景路线。 |
| upstream_dataset_requirement | 每项外购投入优先采用供应商特定数据集；否则采用产品状态和交付边界相符、且有文件说明的地域与技术代理数据集。 |
| disclosure | 声明材料牌号、收到形态、与母体仪器的关系、制造路线、外包操作、清洗或表面处理、包装、地域、生产期间、再生含量主张及任何扩展的生命周期阶段。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `precision_fabrication` | 精密机加工、精加工和清洗 | required | 仅在进行水基碱性清洗时适用清洗交换；否则保留代表路线的机加工交换，并将清洗行记为不适用。 | 前景成形和表面准备 | 转入最终装配和检验的已机加工、已清洗部件质量 |
| `finalization` | 装配、检验和包装 | required | 单件式零件的装配记录可以为零；每个包装行仅在相应材料随产品交付时适用。 | 前景完工、质量验收和工厂门准备 | 1 kg 合格成品净质量 |

### 过程：精密机加工、精加工和清洗（`precision_fabrication`）

#### 输入

##### 产品流

###### 初级铝合金板材（`primary_aluminium_alloy_sheet`）

初级铝合金板材作为代表性路线的工件原料跨越场址边界。批次记录须保留牌号、状态、厚度、供应商和收到质量。

- 选定流：初级铝合金板材 `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- 流属性/单位：Mass / kg
- 数量规则：发给生产批次的板材实测质量减去有记录且退回受控库存的未用板材
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging`
- 来源：`us-epa-2003-mpm-development`

###### 精密制造用外购电力（`fabrication_electricity`）

电力用于本过程的机加工、精加工、清洗及可直接归属的辅助设备。场址共享电力仅按第 7 节规则分配。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：实测过程用电量加上有文件依据的共享电力分配量，并换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`ec-jrc-2006-stm-bref`

###### 切削液（`cutting_fluid`）

切削液在投入机加工时记录，包括补加液，但不包括在同一前景过程闭环中回收再用的液体。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：期初库存加采购和补加量，减期末库存和未用转出量，并扣除场内闭环再用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_process_chemicals`
- 来源：`us-epa-2003-mpm-development`

###### 水基清洗用工艺用水（`process_water`）

仅在进行水基漂洗或清洗时记录工艺用水。在同一过程回路内循环的水应披露，但不得再次计作边界投入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：通过计量或槽体平衡确定的、跨越前景边界的补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量；未进行水基清洗时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`ec-jrc-2006-stm-bref`; `us-epa-2003-mpm-development`

###### 碱性清洗用氢氧化钠（`sodium_hydroxide`）

仅在氢氧化钠作为独立碱性清洗化学品加入时记录。报告购入溶液质量和浓度，以区分有效化学品质量与载体水。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：加入清洗槽的氢氧化钠产品实测质量，减去退回库存的未开封材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量；未进行氢氧化钠清洗时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_chemicals`
- 来源：`ec-jrc-2006-stm-bref`; `us-epa-2003-mpm-development`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已机加工、已清洗的光学仪器部件（`machined_cleaned_component_output`）

该内部中间流是从制造过程转入最终装配和检验的实测部件。其前景流身份必须保留图样、材料、表面和洁净状态。

- 选定流：已机加工、已清洗的光学仪器部件（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：从制造过程放行至完工过程的实测质量，包括随后在最终检验中被拒收的件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按生产批次记录，并归一化至每 1 kg 合格成品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_transfer`
- 来源：`us-epa-2003-mpm-development`

##### 废物流

###### 铝合金机加工切屑（`metal_machining_scrap`）

从已声明铝合金原料上去除的切屑在离开场内受控再用环节时记录。切削液污染和回收去向须分别报告。

- 选定流：金属机加工废料 `beebbc0a-d5fe-44aa-a686-2cf0756973b1`
- 流属性/单位：Aluminium content / kg
- 数量规则：运往场外或转入单独建模回收过程的机加工废料中实测铝含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes_and_rejects`
- 来源：`us-epa-2003-mpm-development`

###### 废切削油（`waste_cutting_oil`）

仅对油基切削液路线中跨越过程边界的废油记录本流。水基废冷却液须采用独立具体流，不得并入本行。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：Mass / kg
- 数量规则：送往处理或回收的废切削油实测质量，减去回收并返回同一过程的油量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量；未排出油基切削液时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes_and_rejects`
- 来源：`us-epa-2003-mpm-development`

###### 废碱液（`waste_alkaline_liquor`）

仅在废氢氧化钠清洗槽液离开前景过程时记录废碱液。漂洗水和已外部中和的废物不得并入本流。

- 选定流：废碱液 `ce738ef0-a711-4650-a38b-34479efd7559`
- 流属性/单位：Mass / kg
- 数量规则：送往场内处理或场外接收方的废碱性槽液实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量；未排放碱性槽液时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastes_and_rejects`
- 来源：`ec-jrc-2006-stm-bref`; `us-epa-2003-mpm-development`

##### 基本流

### 过程：装配、检验和包装（`finalization`）

#### 输入

##### 产品流

###### 已机加工、已清洗的光学仪器部件（`machined_cleaned_component_input`）

本流与 `precision_fabrication` 放行的场址特定内部中间流相同；两个过程之间的数量和身份必须完全核对一致。

- 选定流：已机加工、已清洗的光学仪器部件（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：从制造过程接收的实测质量，包括随后被拒收的件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按生产批次记录，并归一化至每 1 kg 合格成品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_transfer`
- 来源：`us-epa-2003-mpm-development`

###### 装配和检验用外购电力（`final_assembly_electricity`）

电力用于装配工具、尺寸或功能检验及可直接归属的包装设备。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：实测过程用电量加上有文件依据的共享电力分配量，并换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`us-epa-2003-mpm-development`

###### 瓦楞纸箱（`corrugated_board_boxes`）

瓦楞纸箱在随适销产品交付时记录。其质量不计入参考产品净质量，而作为独立交换报告。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：发给合格产品货运的纸箱实测质量，减去退回库存的未用纸箱
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量；未提供瓦楞纸箱时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging`
- 来源：

###### 低密度聚乙烯防护膜（`ldpe_protective_film`）

低密度聚乙烯薄膜作为随产品交付的独立防护包裹或袋使用时记录。不得与其他塑料或缓冲材料合并。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：发给合格产品货运的 PE-LD 薄膜实测质量，减去退回库存的未用薄膜
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量；未提供 PE-LD 薄膜时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_packaging`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 光学仪器成品零件或附件（`finished_optical_instrument_part`）

本流是完成适用装配、检验和包装后的合格适销参考产品。由于未找到与目标类别精确匹配的公开 state-100 流，UUID 仍未解决。

- 选定流：光学仪器成品零件或附件（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：参考流固定为 1 kg 合格成品净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finished_output`
- 来源：

##### 废物流

###### 被拒收的光学仪器零件（`rejected_optical_instrument_part`）

不符合验收准则的目标类别成品或近成品零件在离开受控返工环节时作为独立废物输出记录。材料特定回收比例另行披露。

- 选定流：被拒收的光学仪器零件（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：根据不合格品处置记录计算的、离开受控返工环节的被拒收零件实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastes_and_rejects`
- 来源：`us-epa-2003-mpm-development`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared_processes | 首先通过将电表、材料领用、工单和废物记录细分到产品批次来避免分配；仅在明确报告附加功能和扩展结果时采用系统扩展。 | `eu-2021-2279-pef` |
| `allocation_physical` | unavoidable_shared_burdens | 无法细分时，共享机台用电按实测运行时间或机时分配，清洗负荷按处理表面积或槽体装载量分配，其他共享负荷按有文件支持的因果物理关系分配；须论证并披露所选驱动因子。 | `eu-2021-2279-pef` |
| `allocation_scrap` | machining_scrap_and_rejects | 废料和被拒收零件在离开受控返工环节时作为废物输出报告；除非提供并单独报告明确扩展的回收模型，否则不得在前景过程中扣减材料替代信用。 | `eu-2021-2279-pef` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_packaging` | precision_fabrication; finalization | 铝材和独立包装投入 | 采购、收货、物料清单及领退料记录 | 材料身份；牌号；供应商；收到质量；领用质量；退回质量；包装组件；批次 | 将经校准秤量记录和库存交易核对到生产批次 | kg | 每次收货和每个生产批次 | 至少一个有代表性的连续 12 个月；批次生产则覆盖完整生产活动 | 已声明场址的全部前景生产和包装操作 | 按流汇总净领用量并除以合格产品净质量 | 秤具校准、供应商规范、交易追踪和批次核对 |
| `cp_energy` | precision_fabrication; finalization | 外购电力 | 分表、机台控制器和场址电表记录 | 电表编号；期初和期末读数；单位；时间戳；机时；分配因子；换算系数 | 优先采用过程分表；否则将机台记录与场址总表核对并记录分配方法 | kWh and MJ | 每批或每班，按月汇总 | 与产品输出相同期间 | 全部可直接归属设备及已披露共享服务 | 将 kWh 换算为 MJ，并以可归属电量除以合格产品净质量 | 电表校准或电费单核对及分配工作表 |
| `cp_process_chemicals` | precision_fabrication | 切削液和氢氧化钠 | 采购、配槽、补加、回收和库存记录 | 产品身份；配方；浓度；期初库存；添加量；回收量；期末库存 | 在生产期间对每种化学品作质量平衡 | kg | 每次添加和月末盘点 | 与产品输出相同期间 | 为已声明产品服务的机加工和碱性清洗系统 | 边界净投入除以合格产品净质量 | 供应商规范、经校准秤或交付记录及签字槽液日志 |
| `cp_water` | precision_fabrication | 工艺用水 | 分表或槽体平衡记录 | 水表编号；读数；补充量；循环量；排放量；密度；时间戳 | 计量补充水，或在不重复计算循环水的前提下建立可核对槽体平衡 | kg | 每批或每日，按月汇总 | 与产品输出相同期间 | 已声明产品的水基清洗和漂洗操作 | 补充水净量除以合格产品净质量 | 仪表校准、槽容核查和水平衡核对 |
| `cp_internal_transfer` | precision_fabrication; finalization | 已机加工、已清洗部件转移 | 流转卡、工单和秤量记录 | 零件编号；图样版本；材料；表面状态；洁净状态；件数；转移质量；时间戳 | 以同一转移编号记录制造放行和完工过程接收 | kg | 每个转移批次 | 与产品输出相同期间 | 前景场址内的过程间转移 | 归一化前准确核对输出和输入转移质量 | 签字流转卡和经校准秤量记录 |
| `cp_wastes_and_rejects` | precision_fabrication; finalization | 机加工废料、废液和被拒收零件 | 废物容器、运输、处理和不合格品处置记录 | 废物身份；来源操作；毛重和皮重；适用时的铝含量；污染物；回收；去向；拒收原因 | 秤量每个外运废物或受控内部处理转移，并将拒收品与检验记录核对 | kg | 每个容器或运输批次及每次不合格品处置 | 与产品输出相同期间 | 已声明产品的全部前景废物和拒收点 | 按原子流汇总废物净质量并除以合格产品净质量 | 秤具校准、废物转移联单、处理收据和不合格记录 |
| `cp_finished_output` | finalization | 合格参考产品 | 最终检验、包装和发运记录 | 零件编号；母体仪器；图样版本；合格件数；净质量；包装质量；试验结果；发运编号 | 产品与包装分别秤量，并将验收记录关联到发运 | kg | 每批和每次发运 | 与清单投入相同期间 | 已声明产品的全部最终检验和包装工位 | 汇总合格产品净质量并作为归一化分母 | 经校准秤、签字检验报告和发运核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_input` | primary_aluminium_alloy_sheet; cutting_fluid; sodium_hydroxide; packaging | 边界净投入 = 期初库存 + 收货 + 补加 - 期末库存 - 批次外退回的未用材料 - 在同一前景回路内回收再用的材料。 | 库存记录；收货记录；领退料记录；回收记录 | 各原子流每 kg 参考产品的净投入质量 | `us-epa-2003-mpm-development` |
| `calc_electricity` | fabrication_electricity; final_assembly_electricity | 可归属电力（MJ）= 实测 kWh × 3.6；仅有共享电表时，归一化前乘以已披露的因果分配比例。 | 电表读数；机时或其他已批准物理驱动因子；合格产品净质量 | 每 kg 参考产品的 MJ 电力 | `eu-2021-2279-pef` |
| `calc_scrap_balance` | metal_machining_scrap | 核对：铝领用量 = 合格产品中的铝 + 内部在制品中的铝 + 废料铝含量 + 被拒收零件中的铝 + 已量化残差。调查并披露所有材料残差。 | 材料领用；合格产品；内部转移；废料铝含量；被拒收零件 | 已核对的铝质量平衡 | `us-epa-2003-mpm-development` |
| `calc_reference_normalization` | all_inventory_rows | 归一化交换 = 期间内可归属交换量 / 同期合格零件成品净质量。 | 可归属交换量；合格产品净质量 | 每 1 kg 成品净质量的交换量 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和每项清单流 | 保留零件编号、图样版本、母体仪器关系、材料牌号、过程状态、已确认的 Tiangong UUID；未确认时明确标记未解决。 | 图样、物料清单、流转卡、供应商规范和 UUID 审计 |
| `dq_temporal` | 全部前景记录 | 投入、输出和分配驱动因子须覆盖同一代表期间；说明停机、原型、异常返工和批次边界。 | 期间核对和生产日志 |
| `dq_completeness` | 材料、能源、水、化学品、废物和废品 | 核对采购、库存、计量、生产和废物记录；不得用伞式标签替代缺失的原子交换。 | 质量、能源和记录完整性检查 |
| `dq_measurement` | 质量、电力和液体换算 | 保留校准状态、原始单位、换算系数、适用时的密度和浓度，以及记录责任人或系统。 | 校准证书、计量记录和换算工作表 |
| `dq_technology_geography` | 上游数据集和前景路线 | 匹配产品状态、材料牌号、电力地域、供应商路线和处理去向；记录每项代理及其对代表性的影响。 | 供应商数据集及地域和技术比较 |
| `dq_source_traceability` | 外部规则和基于来源的过程选择 | 保留准确来源标题、稳定定位符、检索日期及其支持的规则或过程选择；不得把搜索摘要视为最终证据。 | 来源登记和归档原文引用 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference_product | 若数据集未识别成品零件或附件、其 CPC 48314 母体仪器、图样版本、功能、材料、完成状态和参考净质量，或以完整仪器或单独归类的光学元件替代，则失败。 | `un-cpc-3-0-structure-2025` |
| `validate_inventory_atomicity` | process_inventory | 若电力与燃料或热合并、化学品合并、包装材料合并、废物合并，或某行是选择指令而非一个物理交换，则失败。 | |
| `validate_internal_transfer` | machined_cleaned_component_output; machined_cleaned_component_input | 除非存在单独记录并解释的损失，否则内部中间流在放行和接收时的身份与质量不一致即失败。 | |
| `validate_mass_balance` | aluminium_and_output_balance | 若同期铝投入、合格输出、机加工废料、被拒收零件、在制品和量化残差未核对，则失败。 | `us-epa-2003-mpm-development` |
| `validate_energy` | electricity | 若缺少或错误处理 kWh 至 MJ 换算、电表范围、共享能源分配或两个前景过程间的重复计算，则失败。 | `eu-2021-2279-pef` |
| `validate_conditionals` | cleaning_wastes_and_packaging | 若条件行出现正值却无操作或材料实际发生的证据，或条件行被省略且未明确声明不适用，则失败。 | `ec-jrc-2006-stm-bref`; `us-epa-2003-mpm-development` |
| `validate_uuid_and_sources` | identity_and_evidence | 若把未解决 UUID 表述为已确认、带 UUID 的中文选定流名称与 Tiangong 直读中文 baseName 不同，或基于来源的规则无法追溯至已核验原文，则失败。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 48351 成品零件和附件在制造场址门口的前景生产数据集 |
| downstream_use | `secondary_dataset`；经独立审查并替换或接受未解决身份和范围证据需求后可作为 `background_dataset` |
| allowed_use | 当材料、路线、母体仪器、地域、期间、分配和包装具有代表性时，用于已声明光学仪器成品零件或附件的产品碳足迹和 LCA 建模 |
| excluded_use | 完整仪器；光学元件；射电天文设备；无法证明母体仪器关系的通用金属零件；未明确扩展边界的使用阶段性能或报废阶段 |
| required_metadata | PCR id 和版本；零件编号和图样版本；母体仪器类型和型号；功能；主要材料和牌号；场址和地域；生产期间；路线和外包操作；表面和洁净状态；产品净质量；包装；电力组合；分配；废物去向；UUID 状态 |
| required_quality_disclosure | 前景与代理数据占比、数据时效、电表和秤具覆盖、分配驱动因子、质量平衡残差、废品和返工处理、密度和浓度换算、未解决 UUID、缺失范围证据和来源核验状态 |
| update_trigger | 零件设计或材料、制造或清洗路线、场址、电力供应、包装、分配驱动因子、废物去向、验收准则、代表期间发生变化，或 UUID/证据需求得到解决 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类》第 3.0 版结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-07） | CPC 48351 身份、与 CPC 48314 的关系，以及从零件参考产品中排除完整母体仪器 |
| `us-epa-2003-mpm-development` | 官方指南（`official_guidance`） | 美国环境保护署，Development Document for the Final Effluent Limitations Guidelines and Standards for the Metal Products & Machinery Point Source Category，EPA-821-B-03-001，2003 年 2 月，https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf（检索于 2026-09-07） | 机加工、清洗、装配和试验的过程分解；切削液、切屑、废液和漂洗水记录要求 |
| `ec-jrc-2006-stm-bref` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics，2006 年 8 月，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf（检索于 2026-09-07） | 条件性表面准备和处理；水、电力、酸、碱、漂洗和废槽液的独立记录 |
| `eu-2021-2279-pef` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279，附件一 Product Environmental Footprint Method，2021 年 12 月 30 日合并文本，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-09-07） | 上游数据集完整性、分配层级、细分、物理分配和回收披露 |
