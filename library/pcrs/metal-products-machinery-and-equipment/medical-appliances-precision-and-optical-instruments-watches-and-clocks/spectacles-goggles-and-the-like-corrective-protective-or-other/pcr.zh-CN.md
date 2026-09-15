---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.spectacles-goggles-and-the-like-corrective-protective-or-other
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 矫正、防护或其他用途的眼镜、护目镜及类似品

## 1. 范围与适用性

本 PCR 适用于作为完整产品供应、可佩戴并具备视力矫正、针对已声明眼部危害的防护、太阳辐射衰减、运动休闲或其他已声明光学功能的成品眼镜。范围包括眼镜、安全眼镜、护目镜、太阳镜、游泳或运动护目镜，以及镜架或镜体与镜片已经装配、可供分销的类似眼部防护用品。

前景边界起于制造场址接收外购原材料、半成品组件或成品镜架和镜片，止于工厂门口交付合格眼镜及单独记录的初级包装。若由报告组织实施，则纳入一体化镜架制造、镜片模塑或表面加工、镀膜、磨边、装配、清洗、检验和包装。外购投入的上游生产和进厂运输采用地域和技术具有代表性的背景数据集表示。

范围不包括作为产品出售的未装配镜架及装配件、未加工眼镜玻璃、接触镜、非佩戴式光学仪器、未单独建模的智能眼镜电子功能、未明确纳入的可拆卸眼镜盒和清洁布、零售验配、验光、工厂门后分销、使用期清洁、维修及生命周期终点。数据集可扩展边界，但必须披露扩展内容并使工厂门结果可单独分离。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.spectacles-goggles-and-the-like-corrective-protective-or-other |
| classification_refs | CPC 3.0：48312，精确映射语境 |
| covered_products | 成品矫正眼镜；防护眼镜和护目镜；太阳镜；运动和游泳护目镜；具有已声明光学或防护功能的类似成品眼镜 |
| excluded_products | 单独出售的未装配镜架及装配件；未加工眼镜玻璃；接触镜；非佩戴式光学仪器；未声明的可拆卸眼镜盒和清洁布；未单独建模的电子功能 |
| representative_product | 一个合格可销售眼镜单位，即一副眼镜或护目镜，或按销售状态计的一个类似单体眼部防护用品 |
| production_route | 外购组件装配，或已披露的一体化镜架制造和/或镜片模塑、表面加工、镀膜、磨边、装配、检验及包装 |
| market_state | 工厂门口已完成、清洁、检验并可供分销；声明处方、滤光、防护危害、镀膜及包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供已声明的视力矫正、眼部防护、太阳辐射衰减、运动或其他光学功能 |
| How much | 一个合格可销售眼镜单位：一副眼镜或护目镜，或按销售状态计的一个类似单体防护用品 |
| How well | 满足已声明处方或光学订单及适用性能或合格类别，例如 ISO 21987、ISO 12312-1、ISO 16321-1 或已声明司法管辖区等效要求 |
| How long or cycle | 已声明设计或质保使用寿命；本工厂门清单不含使用及更换，除非明确扩展 |
| reference_flow_link | 不含可拆卸附件及包装的成品眼镜实测质量，并保留单位数和单位质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 一个合格可销售眼镜单位的实测 kg，不含可拆卸附件及包装 |
| 参考产品流 | 眼镜、护目镜及类似品矫正视力、保护眼睛或其他用途的眼镜 `0e324723-d349-47ea-9c61-c324c8e11d9a` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 可销售单位定义及数量；矫正/防护/太阳/运动/其他功能；镜片材料；适用时的光焦度、滤光类别或防护危害；镜架材料及结构；镀膜和染色；适用合格标准及类别；不含包装的实测产品质量；制造路线；生产地域；工厂门及包装状态；已声明使用寿命 |

构建前景数据包时，`必需限定信息` 中每项信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失限定信息即视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 成品参考产品 | 质量 | kg | 称量不含可拆卸眼镜盒、清洁布、标签和包装的合格眼镜；作为单独原子投入报告已纳入物品，并披露不可避免的偏差。 |
| `saleable_unit_conversion` | 单位到质量换算 | 质量 | kg/unit | 记录已检验可销售单位数及代表性实测质量；按一个可销售单位的实测 kg 归一化全部清单行，同时保留件或副的定义。 |
| `energy_conversion` | 电力行 | 净热值 | MJ | 保留计量能源；按 1 kWh = 3.6 MJ 换算，且不得将电力换算为燃料质量。 |
| `wet_waste_basis` | 废水和湿磨削废物 | 质量 | kg | 记录跨边界湿质量，并分别保留干固体质量、含水率、组成和处理去向，避免重复计算水与固体。 |
| `route_mass_balance` | 一体化镜架和镜片路线 | 质量 | kg | 对同一报告期和路线的材料总投入、内部产品产出、分类废物、回收量及库存变化进行核对。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在报告场址门口接收的外购材料、半成品组件或成品镜架/镜片，并按材料、产品状态、供应商地域及上游数据集识别 |
| starting_condition_role | 具有链接背景数据集表示上游生产和进厂运输的前景制造投入 |
| product_classification_scope | 本 PCR 覆盖的成品可佩戴眼镜；镜架、镜片和原材料为投入或内部中间产品，并非替代参考产品 |
| recursive_input_rule | 接收用于重新包装、定制或再制造的成品眼镜必须披露为同类别投入并保留其上游数据集，不得改标为原生原料或静默遗漏 |
| upstream_dataset_requirement | 优先使用供应商特定数据；否则每项外购原子材料、组件、能源载体、处理和运输服务均使用在地域、技术、组成和时间方面具有代表性的数据集 |
| disclosure | 声明一体化或外购镜架和镜片路线、镀膜与磨边地点、不合格品处理、包装范围、供应商地域、运输方式、截断及任何边界扩展 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | foreground_and_upstream_boundary | 纳入上游投入生产、进厂运输、场内镜架和镜片作业（如实施）、装配、清洗、检验、初级包装、内部回收负荷、废物和直接排放，直至工厂门口。 | `ace-tate-eyewear-lca-2018`; `vanni-eyewear-lca-2023`; `eu-pef-method-2021` |
| `boundary_route_condition` | integrated_processes | 仅当一体化镜架或镜片过程在报告边界内实施时才应用；否则记录外购镜架或镜片并链接其完整上游数据集，不得重复计算其制造。 | `ace-tate-eyewear-lca-2018`; `zeiss-spectacle-lens-manufacturing` |
| `boundary_atomic_completeness` | bill_of_materials_and_outputs | 对实际跨越边界的每项附加材料、镀膜物质、组件、废物、处理、燃料、运输服务及直接基本流排放分别增加原子行；不得以伞形流替代。 | `eu-pef-method-2021` |
| `boundary_use_exclusion` | downstream_stages | 工厂门结果排除零售验配、消费者交通、使用期清洁、维修和生命周期终点，除非单独报告扩展情景。 | `ace-tate-eyewear-lca-2018` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_frame_manufacturing` | 一体化镜架制造 | 条件纳入 | 镜架零件或完整镜架在报告边界内进行切割、模塑、成形、机加工、连接、精加工或镀膜时纳入 | 前景组件制造 | 转入最终装配的镜架产出 kg |
| `integrated_lens_manufacturing` | 一体化镜片制造与精加工 | 条件纳入 | 镜片在报告边界内进行模塑、车削成形、抛光、清洗、染色、镀膜、磨边或雕刻时纳入 | 前景光学组件制造 | 转入最终装配的合格成品镜片产出 kg |
| `final_assembly_packaging` | 最终装配、检验与包装 | 必须纳入 | 成品眼镜始终纳入 | 前景最终生产 | 一个合格可销售单位及其实测 kg 参考流 |

### 过程：一体化镜架制造（`integrated_frame_manufacturing`）

#### 输入

##### 产品流

###### 醋酸纤维素板材（`cellulose_acetate_sheet`）

记录实际切割或成形成镜架的醋酸纤维素板材，不得以通用塑料板替代。

- 选定流：醋酸纤维素板材
- 流属性/单位：质量 / kg
- 数量规则：该路线发出的醋酸纤维素板材实测总量，扣除有记录的同质退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 转入最终装配的实测镜架产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frame_materials`
- 来源：`ace-tate-eyewear-lca-2018`; `vanni-eyewear-lca-2023`

###### 不锈钢（`stainless_steel`）

记录进入金属镜架零件的不锈钢，并保留合金牌号和半成品形态。

- 选定流：不锈钢 `84c2403f-5062-5d68-8276-838384d32b89`
- 流属性/单位：质量 / kg
- 数量规则：发往已声明镜架路线的不锈钢实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 转入最终装配的实测镜架产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frame_materials`
- 来源：`ace-tate-eyewear-lca-2018`

###### 聚碳酸酯镜架颗粒（`polycarbonate_frame_granulate`）

仅对使用该聚合物的注塑或增材镜架路线记录聚碳酸酯颗粒。

- 选定流：聚碳酸酯颗粒 `0c945ca0-edf2-41f3-ba9e-23af3e75c6d1`
- 流属性/单位：质量 / kg
- 数量规则：发往已声明镜架路线的聚碳酸酯颗粒实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 转入最终装配的实测镜架产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frame_materials`
- 来源：

###### 镜架过程电力（`frame_process_electricity`）

记录镜架切割、模塑、机加工、连接、精加工及可归属辅助设备的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：分表电力，或按有记录机器时间和功率从核对后的总表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入最终装配的实测镜架产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frame_electricity`
- 来源：`ace-tate-eyewear-lca-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流
###### 制造镜架产出（`manufactured_frame_output`）

记录由一体化镜架制造转入最终装配的合格镜架，不得再次计算外购镜架。

- 选定流：眼镜、护目镜或类似品框架 `8b6b0bdd-aae1-44f1-a5f8-11a984c38cf1`
- 流属性/单位：质量 / kg
- 数量规则：转入最终装配的合格镜架实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一体化镜架生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frame_outputs`
- 来源：`ace-tate-eyewear-lca-2018`; `vanni-eyewear-lca-2023`

##### 废物流

###### 醋酸纤维素镜架边角料（`cellulose_acetate_frame_offcuts`）

记录离开过程并送往再利用、回收或处理的分类醋酸纤维素边角料和机加工屑。

- 选定流：醋酸纤维素镜架边角料
- 流属性/单位：质量 / kg
- 数量规则：实测收到状态的湿重或干重，并声明状态和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 转入最终装配的实测镜架产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frame_outputs`
- 来源：`ace-tate-eyewear-lca-2018`; `vanni-eyewear-lca-2023`

###### 工业后钢废料（`post_industrial_steel_scrap`）

记录跨界送往回收或处理的分类钢切屑和不合格金属镜架零件。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：离开过程的实测质量，并声明合金牌号和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 转入最终装配的实测镜架产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frame_outputs`
- 来源：`ace-tate-eyewear-lca-2018`

###### 聚碳酸酯镜架边角料（`polycarbonate_frame_offcuts`）

记录分类聚碳酸酯浇口料、边角料和不合格模塑件；排除同一实测批次内部重新造粒并返回的材料。

- 选定流：聚碳酸酯镜架边角料
- 流属性/单位：质量 / kg
- 数量规则：从过程跨界进入回收或处理的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 转入最终装配的实测镜架产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_frame_outputs`
- 来源：

##### 基本流

### 过程：一体化镜片制造与精加工（`integrated_lens_manufacturing`）

#### 输入

##### 产品流

###### 光学玻璃毛坯（`optical_glass_pressing_blank`）

仅对已声明玻璃镜片路线记录光学玻璃毛坯。

- 选定流：光学玻璃毛坯 `a68c2948-174f-4e17-a3ee-f2b289d50d18`
- 流属性/单位：质量 / kg
- 数量规则：进入车削成形、研磨、抛光或磨边的毛坯实测总质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 合格成品镜片实测产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lens_materials`
- 来源：`ace-tate-eyewear-lca-2018`; `zeiss-spectacle-lens-manufacturing`

###### 聚碳酸酯镜片颗粒（`polycarbonate_lens_granulate`）

仅当镜片在前景边界内由该聚合物模塑时记录聚碳酸酯颗粒。

- 选定流：聚碳酸酯颗粒 `0c945ca0-edf2-41f3-ba9e-23af3e75c6d1`
- 流属性/单位：质量 / kg
- 数量规则：发往镜片模塑的实测颗粒量，扣除有记录的同质退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 合格成品镜片实测产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lens_materials`
- 来源：

###### 氧化铈（`cerium_oxide`）

记录玻璃镜片抛光消耗的氧化铈，并声明纯度和浆料配制方式。

- 选定流：氧化铈 `b23ee368-01e2-4fcd-8e8f-e8115ee04555`
- 流属性/单位：质量 / kg
- 数量规则：报告期采购量加期初库存，减期末库存、回收量和实测废物量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 合格成品镜片实测产出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_lens_materials`
- 来源：`zeiss-spectacle-lens-manufacturing`

###### 异丙醇（`isopropanol`）

记录进入镜片或最终清洗的异丙醇，分别保留水溶液浓度和回收溶剂。

- 选定流：异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位：质量 / kg
- 数量规则：按实测溶液质量和浓度计算外购或配制清洗液中的纯异丙醇质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品镜片实测产出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_lens_materials`
- 来源：`zeiss-spectacle-lens-manufacturing`

###### 工艺用水（`process_water`）

记录用于研磨、抛光、脱模、漂洗或清洗的工艺用水；内部循环水不得再次作为外部投入计算。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：跨越场址或过程边界的计量补充水质量；体积按实测或已声明密度换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品镜片实测产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lens_water`
- 来源：`ace-tate-eyewear-lca-2018`; `zeiss-spectacle-lens-manufacturing`

###### 镜片精加工电力（`lens_finishing_electricity`）

记录可归属于模塑、车削成形、研磨、抛光、镀膜、磨边、清洗和检验的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：分表电力，或按有记录设备时间和负荷从核对后总表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品镜片实测产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lens_electricity`
- 来源：`ace-tate-eyewear-lca-2018`; `zeiss-spectacle-lens-manufacturing`

##### 废物流

##### 基本流

#### 输出

##### 产品流


###### 成品眼镜片产出（`finished_spectacle_lens_output`）

记录通过适用光学及表面质量检验并转入最终装配的镜片。

- 选定流：成品眼镜片
- 流属性/单位：质量 / kg
- 数量规则：合格镜片实测质量，并保留镜片数量、材料和光学订单
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一体化镜片生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lens_outputs`
- 来源：`zeiss-spectacle-lens-manufacturing`; `iso-21987-2017`

##### 废物流

###### 聚碳酸酯镜片磨削废料（`polycarbonate_lens_grinding_waste`）

记录跨界处理的分类聚碳酸酯磨屑或不合格镜片；与玻璃固体及废水分别记录。

- 选定流：聚碳酸酯镜片磨削废料
- 流属性/单位：质量 / kg
- 数量规则：实测收到状态的质量，并声明含水率、清洗污染和处理去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 合格成品镜片实测产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lens_outputs`
- 来源：`zeiss-spectacle-lens-manufacturing`

###### 玻璃生产废料（`optical_glass_production_waste`）

记录离开玻璃镜片路线的分类玻璃磨削固体、不合格毛坯和不合格镜片。

- 选定流：玻璃生产废料 `9e75655e-039d-421e-abec-bbe625491bc6`
- 流属性/单位：质量 / kg
- 数量规则：离开过程的实测收到状态质量，并声明湿干状态和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 合格成品镜片实测产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lens_outputs`
- 来源：`zeiss-spectacle-lens-manufacturing`

###### 镜片磨削废水（`lens_grinding_wastewater`）

记录离开场址或过程的镜片研磨和抛光废水；保留水、悬浮固体和处理去向，不得与单独固体行重复计算。

- 选定流：镜片磨削废水
- 流属性/单位：质量 / kg
- 数量规则：实测排放湿质量，并按代表性取样计算和披露干固体含量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品镜片实测产出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_lens_outputs`
- 来源：`zeiss-spectacle-lens-manufacturing`

##### 基本流

###### 异丙醇向空气排放（`isopropanol_to_air`）

仅记录实测通风排放或完整溶剂平衡所证实的、向未指定空气区室直接排放的异丙醇。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：优先实测排放；否则以纯异丙醇投入扣除回收、废水、固体废物、产品残留和库存增加后计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品镜片实测产出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_release`
- 来源：`zeiss-spectacle-lens-manufacturing`

### 过程：最终装配、检验与包装（`final_assembly_packaging`）

#### 输入

##### 产品流

###### 成品镜架投入（`finished_frame_input`）

记录外购或内部转入最终装配的合格镜架；内部转入仅作过程链接，不得重复承担一体化制造负荷。

- 选定流：眼镜、护目镜或类似品框架 `8b6b0bdd-aae1-44f1-a5f8-11a984c38cf1`
- 流属性/单位：质量 / kg
- 数量规则：装配批次消耗的合格镜架实测质量，并保留数量和内购/外购状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一个合格可销售眼镜单位
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：`ace-tate-eyewear-lca-2018`; `vanni-eyewear-lca-2023`

###### 成品眼镜片投入（`finished_spectacle_lens_input`）

记录装入成品眼镜的外购或内部合格镜片，并保留材料、数量、处方或滤光状态及镀膜。

- 选定流：成品眼镜片
- 流属性/单位：质量 / kg
- 数量规则：装配批次消耗的合格镜片实测质量，并保留数量和内购/外购状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一个合格可销售眼镜单位
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：`ace-tate-eyewear-lca-2018`; `zeiss-spectacle-lens-manufacturing`

###### 装配电力（`assembly_electricity`）

记录可归属于磨边后的镜片安装、紧固、调校、清洗、检验及包装的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：分表电力，或按有记录机器时间和负荷从核对后的总表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一个合格可销售眼镜单位
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_electricity`
- 来源：`ace-tate-eyewear-lca-2018`

###### 瓦楞纸箱（`corrugated_board_box`）

记录报告边界内实际随参考产品供应的瓦楞纸箱；外箱和运输箱应按可归属份额分别记录。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：每个包装组件实测质量乘以每可销售单位的可归属数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一个合格可销售眼镜单位
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`ace-tate-eyewear-lca-2018`

###### 低密度聚乙烯包装膜（`ldpe_packaging_film`）

仅记录实际随参考产品供应的低密度聚乙烯膜、袋或包裹；其他聚合物分别建行。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：每个低密度聚乙烯包装组件实测质量乘以每可销售单位数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一个合格可销售眼镜单位
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`ace-tate-eyewear-lca-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品眼镜产出（`finished_eyewear_output`）

记录不含可拆卸附件和包装、已通过适用检验的完整可销售眼镜产品；这是定量参考产品。

- 选定流：眼镜、护目镜及类似品矫正视力、保护眼睛或其他用途的眼镜 `0e324723-d349-47ea-9c61-c324c8e11d9a`
- 流属性/单位：质量 / kg
- 数量规则：一个合格可销售单位的实测不含包装质量，并核对合格单位总数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一个合格可销售眼镜单位
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_product`
- 来源：`un-cpc-3-0-structure-2025`; `ace-tate-eyewear-lca-2018`; `vanni-eyewear-lca-2023`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_foreground_operations | 在实施分配前，只要存在独立计量记录，就应细分并分表计量镜架、镜片、镀膜、装配和包装作业。 | `eu-pef-method-2021` |
| `allocation_residual_facility` | shared_electricity_water_and_auxiliaries | 仅使用有记录的因果驱动因素（如机器时间、计量负荷、水量或过程占用时间）分配剩余共享场址投入；无法建立因果关系时，使用质量或单位数并报告敏感性检查。 | `eu-pef-method-2021` |
| `allocation_scrap_no_avoided_burden` | recoverable_scrap | 在实测边界报告外运废料和回收溶剂，不得静默计入避免原生生产的抵扣；任何回收或替代抵扣应置于单独声明的下游情景。 | `ace-tate-eyewear-lca-2018`; `eu-pef-method-2021` |
| `allocation_rework` | internal_rework | 内部返工负荷保留在最终产出合格眼镜的生产批次中，不得为不可销售返工品创建共产品抵扣。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_frame_materials` | `integrated_frame_manufacturing` | 镜架材料投入 | 采购、库存、领料和退料记录 | 材料；牌号；总领料；退库；再生含量；供应商；批次 | 核对 BOM、仓储和生产记录 | kg | 每批并每月核对 | 代表性连续 12 个月或已声明生产期 | 各镜架制造场址和路线 | 汇总进入路线的材料净量并按合格镜架产出归一化 | 发票、称重单、BOM 版本、库存核对 |
| `cp_frame_electricity` | `integrated_frame_manufacturing` | 镜架电力 | 电表和机器记录 | 表读数；机器时间；实测或额定负荷；产出质量 | 优先分表，否则将设备计算与场址总表核对 | kWh 和 MJ | 连续或每班 | 代表性连续 12 个月或已声明生产期 | 各镜架制造场址 | kWh 换算 MJ 后除以合格镜架产出 | 校准电表、核对、停机日志 |
| `cp_frame_outputs` | `integrated_frame_manufacturing` | 镜架产品和分类废物 | 生产和废物记录 | 合格镜架质量；废物质量；材料；水分；去向；内部返回 | 称量合格转出物和各分类废物流 | kg | 每批 | 与镜架投入同期 | 各镜架制造场址和路线 | 按原子材料和去向汇总；外运废物排除同批内部返回 | 校准秤、废物转移单、质量平衡 |
| `cp_lens_materials` | `integrated_lens_manufacturing` | 镜片材料和清洗化学品 | 采购、库存、领料、浓度及回收记录 | 物质；等级；溶液质量；浓度；期初期末库存；回收；批次 | 核对领料记录和浓度证明 | kg | 每批并每月核对 | 代表性连续 12 个月或已声明生产期 | 各镜片制造场址和路线 | 计算纯物质质量并按合格镜片产出归一化 | 发票、证明、库存记录、配制单 |
| `cp_lens_water` | `integrated_lens_manufacturing` | 工艺水投入 | 水表或罐体记录 | 补充水；循环；排放；批次产出 | 在过程边界计量补充水 | kg 或 m3 | 连续或每批 | 代表性连续 12 个月或已声明生产期 | 各镜片精加工场址 | 外部补充水仅计一次，体积按实测或声明密度换算 | 校准水表、罐体日志、水平衡 |
| `cp_lens_electricity` | `integrated_lens_manufacturing` | 镜片电力 | 电表和设备记录 | 表读数；设备时间；负荷；路线；产出质量 | 优先分表，否则将设备计算与场址总表核对 | kWh 和 MJ | 连续或每班 | 代表性连续 12 个月或已声明生产期 | 各镜片制造场址和路线 | kWh 换算 MJ 并按合格镜片产出归一化 | 校准电表、核对、设备日志 |
| `cp_lens_outputs` | `integrated_lens_manufacturing` | 成品镜片、固体和废水 | 生产、废水和废物记录 | 镜片质量/数量；废品质量；废物身份；湿/干质量；含水率；排放质量；处理 | 称量镜片产出和固体；计量或称量废水；取样分析组成 | kg | 每批，定期代表性取样 | 与镜片投入同期 | 各镜片制造场址和路线 | 各聚合物、玻璃废物和废水分开并闭合湿干质量平衡 | 秤和仪表校准、实验室结果、转移单 |
| `cp_solvent_release` | `integrated_lens_manufacturing` | 异丙醇向空气排放 | 排气测试或溶剂平衡 | 纯投入；回收；废水；固废；库存变化；排气浓度和流量 | 优先排气实测，否则完成经核对溶剂平衡 | kg | 测量期并每月平衡 | 代表性运行条件和连续 12 个月平衡 | 各使用溶剂场址 | 排放=投入−回收−废水−固废−产品残留−库存增加；结果不低于零并调查失衡 | 排气测试、浓度证明、回收和废物记录 |
| `cp_assembly_materials` | `final_assembly_packaging` | 镜架和镜片投入 | BOM、领料和转移记录 | 镜架质量/数量；镜片质量/数量；材料；来源；内部/外购；型号 | 称量代表性组件并将数量与完工单位核对 | kg 和数量 | 每型号和批次 | 代表性连续 12 个月或已声明生产期 | 各装配场址 | 外购投入仅汇总一次；保留内部转移用于单元过程链接且不重复上游负荷 | BOM、称重、转移记录、供应商身份 |
| `cp_assembly_electricity` | `final_assembly_packaging` | 装配电力 | 电表和设备记录 | 表读数；机器时间；负荷；合格单位数 | 优先分表，否则核对设备计算 | kWh 和 MJ | 连续或每班 | 代表性连续 12 个月或已声明生产期 | 各装配场址 | kWh 换算 MJ 并按合格单位归一化 | 校准电表、核对、停机日志 |
| `cp_packaging_materials` | `final_assembly_packaging` | 原子包装投入 | 包装规格和领料记录 | 材料；单件质量；领料件数；退库；包装单位数 | 称量各包装组件并核对领料数 | kg 和数量 | 每包装规格和批次 | 当前包装规格 | 各包装场址 | 单件质量乘可归属数量，聚合物和纸制品分开 | 规格、供应商声明、称重、领料核对 |
| `cp_finished_product` | `final_assembly_packaging` | 参考产品产出 | 检验和称重记录 | 合格单位数；件/副定义；产品质量；型号；镜片和镜架状态；废品 | 称量代表性样本或全部单位，并与检验数量核对 | kg 和数量 | 每批或统计合理抽样方案 | 代表性连续 12 个月或已声明生产期 | 各最终装配场址 | 计算加权平均产品质量和合格总产出，包装排除 | 校准秤、抽样方案、检验及合格记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | 成品眼镜 | 实测无包装合格产品质量总和除以合格可销售单位数，并保留加权型号组合 | 产品质量；合格数量；可销售单位定义 | kg/可销售单位及总 kg 产出 | `ace-tate-eyewear-lca-2018`; `vanni-eyewear-lca-2023` |
| `calc_energy_mj` | 所有电力行 | MJ = 实测 kWh × 3.6 | kWh | MJ |  |
| `calc_neat_isopropanol` | 异丙醇投入 | 纯异丙醇质量 = 溶液质量 × 实测质量分数 | 溶液质量；浓度证明或实测 | kg 异丙醇 |  |
| `calc_solvent_release` | 异丙醇向空气排放 | 排放 = 纯投入 − 回收溶剂 − 废水负荷 − 固废负荷 − 产品残留 − 库存增加；仅在各项完成核对后使用 | 已采集溶剂平衡字段 | 向空气排放 kg | `eu-pef-method-2021` |
| `calc_process_mass_balance` | 一体化镜架和镜片路线 | 质量平衡残差 = 原子材料总投入 − 合格内部产出 − 外运原子废物 − 实测回收 − 库存增加 | 同期材料、产出、废物、回收和库存记录 | kg 残差及其占总投入比例 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和组件 | 声明型号族、可销售单位定义、功能、镜片材料和光学状态、镜架材料、镀膜/染色及适用合格类别。 | BOM、技术文件、处方/订单类别、合格或测试记录 |
| `dq_temporal` | 所有前景数据 | 使用代表性连续 12 个月，或披露较短生产期及其季节和产品组合限制。 | 有日期电表、生产、采购、库存及废物记录 |
| `dq_geography_technology` | 外购投入和公用工程 | 匹配供应商地域、电力市场、材料等级、再生含量和生产技术；记录代理及敏感性。 | 供应商声明、数据集元数据、公用工程账单、路线披露 |
| `dq_completeness` | 材料和能源平衡 | 核对所有实测主要前景材料质量及全部单独计量过程能源；调查并披露残差，不得强行配平。 | 签署的质量/能源核对及异常日志 |
| `dq_wastewater` | 镜片磨削废水 | 保留湿质量或体积、干固体、颗粒/材料组成、处理路线、取样方法和水是否循环。 | 仪表或称重、实验室报告、处理联单 |
| `dq_conformity` | 成品 | 保留产出满足已声明处方、滤光、危害或性能类别的证据；不合格单位不是参考产品。 | 检验、测试、技术文件或符合性声明 |
| `dq_uncertainty` | 计算和分配行 | 披露计算投入、分配驱动因素、仪表覆盖、抽样误差及未解决 UUID 或范围证据需求。 | 计算工作簿、校准、抽样方案、敏感性结果 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | 确认产出是完整可佩戴眼镜，而非未装配镜架、镜片、未加工玻璃、眼镜盒或电子服务，并确认 UUID、质量属性和必需限定信息一致。 | `un-cpc-3-0-structure-2025` |
| `validate_unit_and_count` | normalization | 确认报告的 kg 参考量等于已声明可销售单位的实测无包装质量，并保留副或件的数量。 | `ace-tate-eyewear-lca-2018`; `vanni-eyewear-lca-2023` |
| `validate_route_consistency` | process_map | 必须纳入最终装配和包装；一体化过程仅在实际实施时纳入，并拒绝其内部产出与外购组件数据集之间的重复计算。 | `ace-tate-eyewear-lca-2018`; `zeiss-spectacle-lens-manufacturing` |
| `validate_atomic_inventory` | process_inventory | 确认每个选定流均为具有单一方向和流类型的原子交换；每种实际聚合物、金属、镀膜物质、化学品、包装组件、废物和基本流排放必须分别建行。 | `eu-pef-method-2021` |
| `validate_mass_balance` | integrated_processes | 调查一体化路线中所有无法解释的显著质量平衡残差，禁止仅为强行闭合而调整废物或产品值。 | `eu-pef-method-2021` |
| `validate_optical_conformity` | finished_product_quality | 确认已声明处方/订单或防护/滤光性能类别和适用标准；从参考流中排除不合格产出。 | `iso-21987-2017`; `iso-12312-1-2022`; `iso-16321-1-2021`; `eu-ppe-regulation-2016-425` |
| `validate_unresolved_evidence` | readiness | UUID 为空的行及范围证据需求保持明确未解决；不得将代理 UUID 或单一公开案例值提升为最终身份或范围证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已声明成品眼镜系列和制造路线的前景工厂门生产数据集 |
| downstream_use | 当成熟度、地域、技术、时间和质量匹配时，可作为使用成品眼镜的产品之 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 归因型工厂门建模、供应商足迹、产品系统组装，以及功能等效眼镜和一致使用寿命假设下的已披露比较研究 |
| excluded_use | 临床或安全性能认证；不同矫正、防护、太阳或运动功能间的比较；未披露以镜架或镜片单独数据替代；未增加情景即作使用期或生命周期终点声明 |
| required_metadata | PCR id 和版本；可销售单位定义；产品和包装质量；功能；镜片材料和光学/滤光/危害类别；镜架材料；镀膜；一体化或外购路线；场址及供应商地域；数据期；分配；背景数据集；未解决身份和范围需求 |
| required_quality_disclosure | 电表和秤覆盖；BOM 核对；质量平衡残差；废水表征；合格证据；供应商代表性；分配及敏感性；排除和截断 |
| update_trigger | 材料、镜片、镜架、镀膜、包装、供应商地域、电力结构、过程技术、废物处理、合格标准、产品组合或使用寿命发生实质改变 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 48312 官方分类身份 |
| `ace-tate-eyewear-lca-2018` | literature | Pre Sustainability 为 Ace & Tate 编制，Life Cycle Assessment，2018，https://assets.ctfassets.net/utaji99zkvj6/54Bbp0yCIH2i8Pb7GtBzXF/e769d8fcc03271fe8bbbf62326806470/A_T_-_LCA_Report.pdf | 以副为功能单位的先例，以及镜架、镜片、磨边、装配、包装、公用工程、废物和边界分解 |
| `vanni-eyewear-lca-2023` | literature | VANNI，Impact Report 2023 眼镜 LCA 部分，https://www.vanniocchiali.com/storage/builder/82/media-53.pdf?v=2026-01-15-05-37-22 | 独立的以副为功能单位先例和醋酸纤维素镜架切割/装配相关性 |
| `zeiss-spectacle-lens-manufacturing` | extension_guidance | ZEISS Vision Care，How are spectacle lenses manufactured?，https://www.zeiss.com/vision-care/en/eye-health-and-care/understanding-vision/how-are-spectacle-lenses-manufactured.html | 镜片上盘、车削成形、抛光、清洗、染色、镀膜和检验过程分解 |
| `iso-21987-2017` | standard | BS EN ISO 21987:2017，Ophthalmic optics — Mounted spectacle lenses，BSI 官方标准页面，https://knowledge.bsigroup.com/products/ophthalmic-optics-mounted-spectacle-lenses | 矫正用装配镜片处方订单要求及测试语境 |
| `iso-12312-1-2022` | standard | BS EN ISO 12312-1:2022，Eye and face protection — Sunglasses and related eyewear — Part 1: Sunglasses for general use，BSI 官方标准页面，https://knowledge.bsigroup.com/products/eye-and-face-protection-sunglasses-and-related-eyewear-sunglasses-for-general-use-1 | 一般用途太阳镜的范围及声明符合性语境 |
| `iso-16321-1-2021` | standard | BS EN ISO 16321-1:2022+A1:2025（等同采用 ISO 16321-1:2021/Amd 1），Eye and face protection for occupational use — Part 1: General requirements，BSI 官方标准页面，https://knowledge.bsigroup.com/products/eye-and-face-protection-for-occupational-use-general-requirements-1 | 职业防护眼镜的范围及已声明危害/性能语境 |
| `eu-ppe-regulation-2016-425` | standard | 欧盟法规 (EU) 2016/425（个人防护装备），https://eur-lex.europa.eu/eli/reg/2016/425/oj | 防护眼镜的司法管辖区符合性和技术文件语境 |
| `eu-pef-method-2021` | method_factor | 欧盟委员会建议 (EU) 2021/2279（环境足迹方法）附件一，https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng | 生命周期边界、数据质量、分配、电力、运输、包装、废物和校验规则 |
