---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclasses-43410-and-43420-parts-of-non-electric-bakery-ovens
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 子类43410和43420所列货物的零件；非电热式面包烘炉的零件

## 1. 范围与适用性

本PCR适用于下列成品零件的工厂门生产：专用于或主要用于炉用燃烧器、机械加煤机、机械炉篦、机械出灰器、工业或实验室用炉及烘箱、工业感应或介电加热设备以及非电热式面包烘炉的零件。覆盖对象为按一套已申报物料清单和制造路线生产的单个零件或同质零件族。

前景系统始于外购金属、铸件、耐火陶瓷构件、工艺耗材、能源和水进入制造场址，止于合格零件通过最终检验并达到工厂门出厂状态。完整的燃烧器、加煤机、炉篦、出灰器、炉、烘箱和面包烘炉，以及无法识别为所覆盖设备专用零件的通用紧固件和轴承，还有安装、使用、维护和报废阶段，均不在本PCR范围内。

鉴于该产品类别包含实质不同的零件和路线，数据集应申报零件标识、配套主机、物料清单、材料牌号、制造工序、表面状态和包装纳入情况。实际物料清单中下列清单未列出的每种附加投入，或生产中产生而未列出的每种废物，均应作为独立原子交换加入前景清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclasses-43410-and-43420-parts-of-non-electric-bakery-ovens |
| classification_refs | CPC 3.0: 43430 (exact) |
| covered_products | CPC 43410和43420所列货物的成品替换零件、备件和可识别分总成，以及非电热式面包烘炉的零件 |
| excluded_products | 完整设备；家用或商用电烤箱；不能专门识别为所覆盖设备零件的通用紧固件、轴承、阀门、控制器和电气元件；安装和维修服务 |
| representative_product | 1件用于炉、烘箱、燃烧器、加煤机、炉篦、出灰器、感应加热设备、介电加热设备或非电热式面包烘炉的已完成制造、机加工、铸造、装配、涂装或耐火材料衬里的零件 |
| production_route | 来料准备，随后按申报路线采用切割、成形、机加工、连接、热处理、表面处理、涂装、装配和检验中的适用组合 |
| market_state | 制造商工厂门处的合格成品零件，并明确申报包装是否纳入 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供1件合格且可识别的零件，用于所覆盖炉、烘箱、燃烧器、加煤机、炉篦、出灰器、感应加热设备、介电加热设备或非电热式面包烘炉的装配或维护 |
| How much | 1 kg成品零件 |
| How well | 符合所申报图纸版次、材料规范、尺寸、表面状态、检验准则及配套主机预定功能 |
| How long or cycle | 中间产品采用质量型申报单位；以服役期开展性能比较时，应披露设计寿命或更换周期 |
| reference_flow_link | 制造商工厂门处1 kg合格成品零件 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 43410和43420次级所列制品的零件，非电热式烘箱用零件 `4f1bd154-312e-48d6-8284-9ae52680a079` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件标识和图纸版次；配套主机类型和零件功能；材料组成和牌号；生产路线和纳入工序；尺寸和成品质量；表面处理或涂层；适用时的耐火材料牌号；工厂门地理范围；生产期；检验和验收依据；包装纳入情况 |

构建前景数据包时，`必需限定信息`中的项目应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺少必需限定信息的数据包，其参考流定义视为不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及质量清单行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 应一致记录净干质量或供货状态质量，说明采用的基准，并将全部结果归一化至1 kg验收合格的成品零件。 |
| `energy_conversion` | 外购电力 | 净热值 `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留计量能量和换算因子；采用1 kWh = 3.6 MJ，且不得把能量改标为质量。 |
| `gas_volume_basis` | 天然气、氧气和氩气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 说明每项气体体积对应的温度、压力、干湿基准和换算方法；不得合并不同气体。 |
| `water_mass_basis` | 工艺用水和清洗废水 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用实测质量，或使用有文件依据的密度和参考条件将实测体积换算为质量。 |
| `emission_mass_basis` | 直接大气排放 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 如有实测，应分别报告捕集和未捕集排放，并披露测试、平衡或计算方法。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料和耗材在制造场址收货点验收完毕，并已记录供应商身份、产品状态、牌号、采用时的再生含量声明和交付数量 |
| starting_condition_role | 从门到门前景起始条件；当研究目标纳入上游开采、材料生产和入厂运输时，通过链接背景数据集表示 |
| product_classification_scope | 经审查的语义边界内、与CPC 3.0子类43430完全对应的零件，与目录身份无关 |
| recursive_input_rule | 外购投入若本身属于所覆盖零件，应作为一个原子产品投入记录并链接其上游数据集；不得在本前景过程中再次展开其制造过程 |
| upstream_dataset_requirement | 每种外购材料、燃料、电力、气体、水、涂料和所覆盖零件投入，均应链接到与地理、技术、时间及产品状态相适配的上游数据集 |
| disclosure | 申报零件族、路线、场址、时期、纳入及排除工序、上游链接、分配选择、包装纳入情况和每项有依据的排除 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景系统 | 纳入从接收所申报外购投入，到合格零件完成最终检验并达到工厂门出厂状态之间的全部场内工序。 | ec-pef-method-2021 |
| `boundary_route_condition` | 路线特定工序 | 切割、成形、机加工、焊接、热切割、热处理、喷砂、清洗、涂装和装配仅在所申报零件实际采用时纳入；识别每项适用工序及其交换。 | us-epa-metal-fabrication-finishing-2008 |
| `boundary_inventory_completeness` | 投入与产出 | 将每项实际物料清单投入、能源载体、工艺气体、水流、废物和直接基本流排放逐项列为原子交换；说明并披露任何排除。 | ec-pef-method-2021 |
| `boundary_background_links` | 外购投入 | 使用适当链接数据集建模上游生产和交付，不在前景过程内重复这些过程。 | ec-pef-method-2021 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_part_manufacturing` | 零件一体化制造、精整、装配和检验 | `required` | 始终纳入；各路线工序及交换仅在适用于所申报零件时记录 | 从接收投入至验收合格工厂门零件的前景生产 | 1 kg验收合格的成品零件 |

### 过程：零件一体化制造、精整、装配和检验（`integrated_part_manufacturing`）

本过程仅组合所申报零件实际采用的工序。只有在计量、工程分配或其他有文件依据的计算能够把设施总量关联到生产期和合格产出后，方可将其分配至本过程。

#### 输入

##### 产品流

###### 热轧碳钢板（`hot_rolled_carbon_steel_plate_input`）

当申报物料清单使用热轧碳钢板制造壳体、框架、风道、炉篦、防护件或结构件时，记录本投入。

- 选定流：热轧碳钢板
- 流属性/单位：质量 / kg
- 数量规则：计入所申报零件生产期的外购钢板净投料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_consumable_records`
- 来源：

###### 不锈钢薄板（`stainless_steel_sheet_input`）

当申报物料清单使用不锈钢薄板制造耐腐蚀或食品接触部位时，记录本投入。

- 选定流：不锈钢薄板
- 流属性/单位：质量 / kg
- 数量规则：计入所申报零件生产期的外购不锈钢薄板净投料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_consumable_records`
- 来源：

###### 灰铸铁铸件（`grey_cast_iron_casting_input`）

当外购灰铸铁铸件经机加工或装配后成为所申报零件的一部分时，记录本投入。

- 选定流：灰铸铁铸件
- 流属性/单位：质量 / kg
- 数量规则：所申报零件生产期内领用的铸件净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_consumable_records`
- 来源：

###### 成型耐火陶瓷构件（`refractory_ceramic_component_input`）

当成型耐火陶瓷构件被装入所申报零件时，记录本投入。

- 选定流：成型耐火陶瓷构件
- 流属性/单位：质量 / kg
- 数量规则：所申报零件生产期内领用的耐火陶瓷构件净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_consumable_records`
- 来源：

###### 外购电力（`electricity_input`）

记录切割、成形、机加工、焊接、通风、除尘、涂装、装配、检验及可归属辅助设备消耗的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：所申报生产期实测或有文件依据分配的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：

###### 天然气（`natural_gas_input`）

当气态天然气直接用于热处理、涂层固化、工艺加热或其他已申报场内工序时，记录本投入。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：按规定参考条件计量并分配至所申报生产期的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：

###### 工业氧气（`industrial_oxygen_input`）

当工业氧气用于氧燃料切割或其他已申报制造工序时，记录本投入。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：体积 / m3
- 数量规则：按规定参考条件计量或根据钢瓶库存分配至所申报生产期的氧气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：us-epa-metal-fabrication-finishing-2008

###### 实芯碳钢焊丝（`solid_carbon_steel_welding_wire_input`）

仅在焊接路线采用这种特定状态的填充金属时记录实芯碳钢焊丝；不得以药芯焊丝或焊条替代。

- 选定流：实芯碳钢焊丝
- 流属性/单位：质量 / kg
- 数量规则：所申报生产期内焊丝领用质量减退回未用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_consumable_records`
- 来源：us-epa-metal-fabrication-finishing-2008

###### 工业氩气（`industrial_argon_gas_input`）

当气态工业氩气用作焊接保护气时记录；混合气和二氧化碳保护气应设置独立原子清单行。

- 选定流：工业氩气
- 流属性/单位：体积 / m3
- 数量规则：按规定参考条件计量或根据钢瓶库存分配至所申报生产期的气态氩气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：us-epa-metal-fabrication-finishing-2008

###### 工艺用水（`process_water_input`）

当工艺用水用于湿法清洗、漂洗、冷却或其他已申报场内零件制造工序时，记录本投入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：实测水质量，或用有文件依据的密度将实测体积换算后分配至所申报生产期
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：

###### 溶剂型环氧防护涂料（`solvent_borne_epoxy_coating_input`）

仅当所申报零件施加溶剂型环氧防护层时记录该涂料；其他涂层化学体系应设置独立原子清单行。

- 选定流：溶剂型环氧防护涂料
- 流属性/单位：质量 / kg
- 数量规则：所申报生产期内涂料领用质量减退回未用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_consumable_records`
- 来源：us-epa-metal-fabrication-finishing-2008

##### 废物流

本PCR不规定废物投入。若再生废物以废物流形式跨入本过程，应另设一个可单独识别的原子清单行，并记录其处理角色。

##### 基本流

本PCR不规定基本流投入。任何直接跨越前景边界的实测资源开采均应作为独立基本流加入。

#### 输出

##### 产品流

###### 验收合格的炉、烘箱、燃烧器或面包烘炉零件（`reference_part_output`）

仅记录已经通过所申报检验和验收准则的合格产出。

- 选定流：43410和43420次级所列制品的零件，非电热式烘箱用零件 `4f1bd154-312e-48d6-8284-9ae52680a079`
- 流属性/单位：质量 / kg
- 数量规则：1 kg验收合格成品零件的参考流
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 采集协议：
- 来源：un-cpc-3-0-structure-2025; ec-pef-method-2021

##### 废物流

###### 碳钢加工废料（`carbon_steel_scrap_output`）

记录经分类收集、以废物形式离开过程的碳钢边角料、切屑和不合格碳钢件。

- 选定流：碳钢加工废料
- 流属性/单位：质量 / kg
- 数量规则：所申报生产期内产生并实测的分类碳钢废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 不锈钢加工废料（`stainless_steel_scrap_output`）

记录经分类收集、以废物形式离开过程的不锈钢边角料、切屑和不合格不锈钢件。

- 选定流：不锈钢加工废料
- 流属性/单位：质量 / kg
- 数量规则：所申报生产期内产生并实测的分类不锈钢废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 耐火陶瓷加工废料（`refractory_ceramic_scrap_output`）

记录经分类收集、以废物形式离开过程的成型耐火陶瓷边角料和不合格件。

- 选定流：耐火陶瓷加工废料
- 流属性/单位：质量 / kg
- 数量规则：所申报生产期内产生并实测的耐火陶瓷废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 废切削油（`waste_cutting_oil_output`）

记录从机加工设备排出并送往回收或处理的废油基切削液；废水溶性冷却液应另设清单行。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：质量 / kg
- 数量规则：所申报生产期内排出并实测的废切削油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 废旧喷砂磨料（`spent_abrasive_blasting_media_output`）

记录从喷砂系统排出、离开过程并送往回收或处理的喷砂磨料。

- 选定流：废旧喷砂磨料 `45f09708-d116-43d2-96a2-f0918bf373d3`
- 流属性/单位：质量 / kg
- 数量规则：所申报生产期内产生并实测的废喷砂磨料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：us-epa-metal-fabrication-finishing-2008

###### 废溶剂型环氧涂料（`waste_solvent_borne_epoxy_coating_output`）

仅在未固化溶剂型环氧涂料、喷漆室残余物和清理残余物作为同一申报废物流共同管理时记录；单独管理的溶剂应另设清单行。

- 选定流：废溶剂型环氧涂料
- 流属性/单位：质量 / kg
- 数量规则：所申报生产期内产生并实测的废溶剂型环氧涂料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：us-epa-metal-fabrication-finishing-2008

###### 水基零件清洗废水（`aqueous_parts_cleaning_wastewater_output`）

记录零件清洗和漂洗后、任何场外处理前排出的水基废水；其他来源的废水应另设清单行。

- 选定流：水基零件清洗废水
- 流属性/单位：质量 / kg
- 数量规则：所申报生产期内排放的实测废水质量，或使用有文件依据的密度将体积换算所得质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：

##### 基本流

###### 向空气排放的化石源二氧化碳（`carbon_dioxide_fossil_output`）

记录场内燃烧天然气或另一种已单独列入清单的化石燃料产生的直接化石源二氧化碳；不包括上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：实测直接排放，或依据已核实燃料用量、组成和氧化方法计算所得数值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：

###### 向空气排放的颗粒物，粒径未特指（`particulate_matter_output`）

记录适用的切割、焊接、机加工、磨削、喷砂或涂装工序经治理后向未特指空气直接排放的颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 / kg
- 数量规则：所申报生产期的烟道或工作场所排气测量、物料平衡，或有文件依据的场址特定计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：us-epa-metal-fabrication-finishing-2008

###### 向空气排放的非甲烷挥发性有机化合物（`nmvoc_output`）

记录溶剂型涂装和清洗工序经捕集或治理后向未特指空气直接排放的非甲烷挥发性有机化合物。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：场址测量，或采用有文件依据的VOC含量、传递效率、捕集效率和去除效率开展的涂料及溶剂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg验收合格的成品零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：us-epa-metal-fabrication-finishing-2008

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共用制造、精整和公用工程过程 | 优先按零件族、生产订单、机器工时或批次进行直接计量或过程细分，以隔离可归属于所申报零件的投入与产出。 | ec-pef-method-2021 |
| `allocation_physical_relationship` | 无法细分的共用过程 | 采用代表共用过程驱动因素且有文件依据的因果物理关系进行分配，例如机器工时、涂装面积、焊缝长度、处理质量或合格产出质量。 | ec-pef-method-2021 |
| `allocation_economic_fallback` | 缺少合理物理关系的共用过程 | 仅将经济分配作为有文件依据的后备方法，披露价格、时期、币种和敏感性，且不得以此掩盖生产记录缺失。 | ec-pef-method-2021 |
| `allocation_scrap_treatment` | 金属废料及其他废物 | 分别报告废物质量和处理去向；除非下游研究的主管方法明确要求并记录，否则不得在本从门到门前景内计入避免负荷抵扣。 | ec-pef-method-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_consumable_records` | `integrated_part_manufacturing` | 金属、耐火构件、焊丝和涂料投入 | 采购、仓库领用、退料和物料清单记录 | 材料身份；牌号；供应商；收货质量；领用质量；退回质量；生产订单；日期 | 将物料清单与称重或发票记录的领退料量核对 | kg | 按生产订单，月度汇总 | 至少一个有代表性的生产年度，或完整的较短生产活动期 | 报告场址内生产所申报零件的全部产线 | 按原子材料求和净领用质量，再除以合格成品零件质量 | 校准秤记录、发票、材料证书、仓储核对和生产订单追溯记录 |
| `cp_energy_and_gas_records` | `integrated_part_manufacturing` | 电力、天然气、氧气和氩气投入 | 仪表、分表、钢瓶库存和发票 | 期初与期末读数；购入；退回；气体身份；温度；压力；干湿基准；分配动因；生产订单 | 有分表时采用分表计量，否则用因果物理动因分配有文件依据的净用量 | MJ or m3 | 按批次或月度 | 与产出同期，且至少一个有代表性的生产年度或完整的较短生产活动期 | 报告场址内全部适用设备和辅助系统 | 每种原子能源载体或气体的净用量除以合格成品零件质量 | 仪表校准、发票、钢瓶日志、换算因子和分配工作表 |
| `cp_water_and_wastewater_records` | `integrated_part_manufacturing` | 工艺用水投入和水基零件清洗废水产出 | 水表、批次单、罐液位和排放记录 | 来源；仪表读数；批次体积；密度；排放体积或质量；处理去向；生产订单 | 分别计量每股水和废水；由体积推导质量时记录密度换算 | kg | 按批次或月度 | 与产出同期，且至少一个有代表性的生产年度或完整的较短生产活动期 | 所有可归属于所申报零件的湿法清洗、漂洗和冷却工序 | 各股水流净质量除以合格成品零件质量 | 仪表校准、罐体标定、批次单、排放联单和质量平衡核对 |
| `cp_waste_records` | `integrated_part_manufacturing` | 分类废料、废切削油、喷砂磨料和废涂料产出 | 磅单、废物联单、容器计数和回收记录 | 废物身份；材料牌号；毛重和皮重；去向；处理；日期；生产订单 | 称量每股原子废物流，并核对报告期内库存变化 | kg | 按每次运输，月度汇总 | 与产出同期，且至少一个有代表性的生产年度或完整的较短生产活动期 | 报告场址内全部适用废物收集点 | 产生量等于运输量加期末库存减期初库存，再除以合格成品零件质量 | 衡器校准、联单、回收商凭证、库存记录和废物分类文件 |
| `cp_direct_air_emissions` | `integrated_part_manufacturing` | 化石源CO2、颗粒物和NMVOC产出 | 烟道测试、连续或定期测量、燃料记录、涂料记录和治理设施日志 | 污染物；浓度；流量；测试时长；燃料用量和组成；VOC含量；捕集效率；去除效率；运行小时；生产订单 | 采用有代表性的测量，或使用采集的活动数据开展有文件依据的计算；仅扣除经核实捕集或去除的量 | kg | 按测试及月度活动记录 | 测试应代表报告期；活动数据与产出覆盖同期 | 报告场址内全部适用排放点和无组织排放 | 计算报告期污染物质量，再除以合格成品零件质量 | 测试报告、实验室QA/QC、校准、燃料分析、涂料技术资料、治理日志和计算工作表 |
| `cp_finished_part_output` | `integrated_part_manufacturing` | 验收合格的参考产品产出 | 检验、称重和生产记录 | 零件标识；图纸版次；合格数量；单位质量；合格总质量；不合格品；日期 | 称量合格产出，或以合格数量乘经核实的单位质量；不合格品单独记录 | kg | 按生产订单 | 与所有已分配投入和产出同期 | 报告场址内生产所申报零件的全部产线 | 求和合格成品零件质量，并将清单归一化至1 kg | 校准秤、检验放行、不合格品日志和生产核对记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 所有清单行 | 归一化数量 = 报告期数量 / 合格成品零件质量 | 原子交换报告期数量；合格成品零件质量 | 每1 kg合格成品零件的数量 | ec-pef-method-2021 |
| `calc_electricity_mj` | 电力投入 | 电力MJ = 实测kWh × 3.6 | 实测kWh | 电力MJ |  |
| `calc_gas_reference_volume` | 天然气、氧气和氩气投入 | 使用有文件依据的计量或气体定律方法，将实测体积换算至所申报温度和压力；不得合并不同气体 | 实测体积；温度；压力；采用时的压缩因子 | 所申报参考条件下的m3 |  |
| `calc_water_mass` | 水和水基废水 | 无直接质量数据时，质量 = 实测体积 × 有文件依据的密度 | 实测体积；密度 | 水或废水kg |  |
| `calc_direct_co2` | 化石源CO2产出 | 对采集的燃料用量采用经核实的燃料碳含量和氧化计算；排除上游燃料和电力排放 | 燃料用量；燃料碳含量；氧化因子 | 直接化石源CO2 kg |  |
| `calc_period_reconciliation` | 共用投入和废物记录 | 报告期净量 = 购入或运出 + 期初库存 - 期末库存 - 有文件依据的退回量，并按记录类型调整正负号 | 采购、运输、退回和库存记录 | 可归属于报告期的净量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 参考产品和材料投入 | 保持从每份生产订单到零件标识、图纸版次、配套主机、材料牌号、供应商和检验放行的可追溯性。 | 物料清单、材料证书、流转卡、检验放行和生产订单 |
| `dq_temporal_alignment` | 全部前景交换 | 合格产出与已分配投入、废物和排放应使用相同报告期；说明停产、异常批次和库存跨期。 | 带日期记录和期间核对 |
| `dq_meter_quality` | 能源、气体、水、废水和称重废物 | 使用经校准设备；无法直接计量时，应记录不确定性和替代核对方法。 | 校准证书、仪表核查、磅单和不确定性说明 |
| `dq_completeness` | 前景清单 | 对照物料清单和过程图核对全部原子投入、废物和直接排放，包括实际采用的条件性工序。 | 完整性检查表、质量平衡、路线记录和排除日志 |
| `dq_representativeness` | 发布数据集 | 披露场址和所申报零件族的技术、地理、时间代表性和精度。 | 按ec-pef-method-2021开展的数据质量评价 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认产出UUID、质量属性、质量单位组、1 kg数量、零件标识、配套主机角色和市场状态相互一致。 | un-cpc-3-0-structure-2025 |
| `validate_route_inventory` | 过程图和清单 | 核查所申报路线实际采用的每项工序均已识别，其材料、能源、气体、水、废物和直接排放均以原子清单行记录。 | us-epa-metal-fabrication-finishing-2008 |
| `validate_mass_reconciliation` | 材料、合格产出、废料和在制品库存 | 核对材料投入质量与合格产出、分类废料、不合格品、过程损失和库存变化；解释残差。 |  |
| `validate_energy_and_gases` | 电力、天然气、氧气和氩气 | 确认仪表、发票、钢瓶平衡、参考条件、换算因子和分配动因覆盖与合格产出相同的时期。 |  |
| `validate_emissions` | 化石源CO2、颗粒物和NMVOC | 确认排放方法采用采集的活动数据或有代表性的测试，计入经核实的治理效果，并从直接产出中排除上游电力排放。 | us-epa-metal-fabrication-finishing-2008 |
| `validate_allocation` | 共用过程 | 确认已优先尝试过程细分，且每项保留的分配动因均具有记录在案的因果依据，并在影响重大时进行敏感性分析。 | ec-pef-method-2021 |
| `validate_data_quality` | 数据集包 | 确认完整性、方法一致性、技术、地理、时期、精度、文件、命名和审查披露均已提供。 | ec-pef-method-2021 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；经独立审查和发布控制后可作为`background_dataset` |
| downstream_use | 构建所覆盖炉、烘箱、燃烧器、加煤机、炉篦、出灰器、感应加热设备、介电加热设备和非电热式面包烘炉零件的process或lifecyclemodel记录 |
| allowed_use | 当全部必需限定信息和数据质量披露相匹配时，用于所申报零件族、材料牌号、路线、场址地理范围、技术、时期和工厂门边界 |
| excluded_use | 完整设备；身份不明的通用机械零件；未经调整的不同材料或涂层体系；安装、使用、维护或报废阶段；缺少功能性能和寿命等效性的比较声明 |
| required_metadata | PCR id及版本；零件标识；图纸版次；配套主机及功能；材料组成和牌号；生产路线；纳入工序；工厂门地理范围；报告期；合格质量；包装纳入情况；上游数据集链接；分配方法 |
| required_quality_disclosure | 记录覆盖和核对；计量和分配方法；不确定性；数据缺口；排除项；技术、地理、时间和精度评价；未解决UUID或范围限制 |
| update_trigger | 图纸、配套主机功能、物料清单、牌号、路线、涂层、能源或气体供应、治理设施、场址、分配方法或报告期发生实质变化；出现新审查UUID或定量证据 |

## 11. 数据源

| 来源id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类》第3.0版结构，2025年6月30日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05） | 产品分类身份，以及零件类别与完整设备的区分 |
| `ec-pef-method-2021` | 官方指南（`official_guidance`） | 欧洲委员会，Commission Recommendation (EU) 2021/2279，附件I Product Environmental Footprint Method，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230（检索日期：2026-09-05） | 申报单位与参考流、系统边界、分配层级及数据质量要求 |
| `us-epa-metal-fabrication-finishing-2008` | 官方指南（`official_guidance`） | 美国环境保护署，Nine Metal Fabrication and Finishing Source Categories Area Source NESHAP brochure，https://www.epa.gov/sites/default/files/2016-06/documents/metfab_brochure.pdf（检索日期：2026-09-05） | 条件性制造与精整工序、颗粒物与焊接烟尘控制，以及过程记录结构 |
