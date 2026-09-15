---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.objective-lenses-for-cameras-projectors-or-photographic-enlargers-or-reducers
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 照相机、放映机或照相放大机或缩影器用物镜

## 1. 范围与适用性

本 PCR 适用于照相机、放映机、照相放大机或缩影器用成品装配式物镜在制造商工厂门口的生产。范围包括定焦和变焦产品、玻璃/聚合物/混合光学元件设计，以及在报告组织内实施的光学镀膜、镜筒与光机零件制造、装配、校准、测试和销售包装。

范围不包括整机照相机和放映机、图像传感器、照明系统、未装配的通用光学元件、眼镜片、显微镜或望远镜物镜、出厂后的运输、使用、维护和寿命终止。外购零件或外包过程由上游数据集表示，不在前景生产中重复。除非研究目标明确纳入，否则产品设计、样机开发、资本设备和建筑物不在范围内。

CPC 叶级验证产品身份，但不规定制造路线。前景数据包应声明实际基片材料、镀膜体系、光机结构、调焦或光圈机构、电子内容、生产地域、技术、报告期和包装状态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.objective-lenses-for-cameras-projectors-or-photographic-enlargers-or-reducers |
| classification_refs | CPC 3.0：48321，精确分类语境 |
| covered_products | 照相机、放映机、照相放大机或缩影器用成品物镜组件，包括玻璃、聚合物或混合光学元件设计 |
| excluded_products | 整机照相机或放映机；未装配的通用光学元件；所述应用之外的眼镜、显微镜、望远镜或仪器物镜；单独销售的镜头盖、滤镜、转接环、传感器和其他附件 |
| representative_product | 在工厂门口已校准、测试、清洁并包装的装配式多片成像物镜 |
| production_route | 由场址声明的外购或内部玻璃镜片制造、聚合物镜片成型、清洗和镀膜、光机零件制造、装配、校准、测试和包装组合 |
| market_state | 在制造商工厂门口处于所声明销售包装状态的成品物镜组件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为所声明的照相机、放映机、照相放大机或缩影器应用提供形成或投射影像的成品物镜组件 |
| How much | 制造商工厂门口 1 kg 合格物镜组件 |
| How well | 满足所代表产品系列的光学、机械、接口、清洁度和验收测试规范 |
| How long or cycle | 一个生产报告期；使用寿命性能不属于本工厂门口参考流 |
| reference_flow_link | `objective_lens_assembly_testing_packaging` 的合格输出 `assembly_objective_lens`，按实测成品净质量归一化 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 照相机、放映机或照相放大机或缩影器用物镜 `cfef9f14-3271-428b-bebe-47ded2db11d4` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 预定应用；产品系列或型号；焦距范围；最大光圈或 f 值；成像幅面或投影格式；卡口与接口；基片材料；镀膜规范；调焦与光圈机构；电子内容；工厂门口包装状态；生产地域；技术；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有质量归一化行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有前景数量归一化为 1 kg 合格成品物镜组件；分母不含运输托盘和三级运输包装。 |
| `electricity_energy` | 外购电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表值和换算记录；按 1 kWh = 3.6 MJ 将 kWh 换算为 MJ，并报告设施边界处交付的电力。 |
| `water_mass` | 工艺用水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先直接测量质量；若按体积计量，应保留体积、温度、密度来源及换算为 kg 的记录。 |
| `batch_mass_balance` | 材料、中间体、产品、不合格品和废物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 固体材料采用干质量，除非采购流或废物流明确为溶液或浆料；湿废物应记录含水率或固含量。 |

## 5. 系统边界

前景边界从外购光学玻璃毛坯、聚合物粒料、镀膜化学品、光机原料或外购零件、装配材料和包装组件进入报告设施时开始，以合格、测试、清洁并包装的物镜组件到达工厂门口时结束。应纳入所代表路线所需的全部场址操作，包括公用工程、内部循环及其损失、不合格品、返工、废物至首次场外处理或回收交接的管理，以及可测量或可计算的直接基本流排放。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购光学玻璃毛坯、光学聚合物粒料、镀膜材料、光机原料或零件、装配材料和包装组件进入报告设施时的接收状态 |
| starting_condition_role | 前景进入条件；上游生产和入厂运输由所链接的上游数据集表示 |
| product_classification_scope | CPC 3.0 代码 48321 所述应用的成品装配式物镜；分类不规定材料或制造路线 |
| recursive_input_rule | 外购成品物镜若作为子组件，应作为同类别外部产品投入记录一次并链接上游数据集，不得在本前景数据包内递归重建其生产 |
| upstream_dataset_requirement | 每种外购材料、零件、能源载体、供水、运输服务和废物处理交接均需链接地域与技术具有代表性的上游数据集，或明确记录数据缺口 |
| disclosure | 声明光学元件、镀膜、光机、装配、测试和包装步骤哪些为内部实施、哪些为外购；披露排除项、截断、共用公用工程、返工循环、处理路线和数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_product_identity` | 产品纳入 | 仅纳入所述摄影和投影应用的成品物镜组件；不得与整机设备或通用光学元件合并。 | `un-cpc-3-0-structure-2025` |
| `boundary_route_completeness` | 前景操作 | 表示所声明路线需要的每项内部操作；若场址实施，应包括玻璃研磨和抛光、聚合物成型、清洗、镀膜、光机制造、装配、校准、测试和包装。 | `nikon-tochigi-lens-process`; `canon-production-technology` |
| `boundary_waste_separation` | 废物记录 | 将固体玻璃废物、废水、聚合物镜片不合格品、铝废料和最终装配不合格品作为不同交换，不得合并为“残余物”。 | `nikon-lens-environment`; `epa-optical-fabrication-waste-1991` |
| `boundary_upstream_avoidance` | 外购投入 | 将外购流链接上游数据集，并从前景设备记录中排除其生产，避免重复计算。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `glass_lens_element_fabrication` | 光学玻璃镜片元件制造 | `conditional` | 当报告边界内对光学玻璃毛坯进行研磨、抛光、定心或其他精加工时纳入。 | 前景光学元件生产 | kg 合格已抛光光学玻璃镜片元件 |
| `polymer_lens_element_molding` | 聚合物光学镜片成型 | `conditional` | 当报告边界内对 PMMA、聚碳酸酯、环烯烃共聚物或其他已声明光学聚合物进行成型时纳入。 | 前景光学元件生产 | kg 合格成型聚合物镜片元件 |
| `optical_coating` | 光学清洗与镀膜 | `conditional` | 当报告边界内对镜片元件进行清洗或镀膜时纳入。 | 前景表面精加工 | kg 合格镀膜光学镜片元件 |
| `optomechanical_component_fabrication` | 光机零件制造 | `conditional` | 当报告边界内加工或成型镜筒、壳体、隔圈、调焦件或光圈件时纳入。 | 前景零件生产 | kg 合格光机零件 |
| `objective_lens_assembly_testing_packaging` | 物镜装配、校准、测试与包装 | `required` | 成品装配式物镜生产始终纳入。 | 前景最终生产 | 工厂门口 1 kg 合格物镜组件 |

### 过程：光学玻璃镜片元件制造（`glass_lens_element_fabrication`）

本过程将光学玻璃毛坯加工为经抛光和定心的镜片元件。`nikon-tochigi-lens-process`、`nist-optical-surfaces-1997` 和 `nikon-lens-environment` 支持该工序顺序以及能源和玻璃损失的分别记录。

#### 输入

##### 产品流

###### 光学玻璃毛坯（`glass_optical_glass_blank`）

记录进入内部光学精加工的外购毛坯。

- 选定流：光学玻璃毛坯 `a68c2948-174f-4e17-a3ee-f2b289d50d18`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：投入生产的实测净质量，扣除有记录的未开封退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_glass_fabrication_records`
- 来源：

###### 氧化铈抛光材料（`glass_cerium_oxide`）

仅当抛光路线实际领用氧化铈时记录；其他抛光材料应设单独原子行。

- 选定流：氧化铈 `b23ee368-01e2-4fcd-8e8f-e8115ee04555`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：实测氧化铈消耗质量，扣除退回或内部回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_glass_fabrication_records`
- 来源：

###### 研磨、抛光和清洗用工艺水（`glass_process_water`）

记录跨越过程边界的供给工艺水；闭路循环水不重复计算，但补充水和排污水应计入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：实测补充水和一次通过工艺水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_glass_fabrication_records`
- 来源：

###### 玻璃镜片制造用外购电力（`glass_electricity`）

记录分配给本过程的压制、研磨、抛光、定心、清洗、抽排和辅助过程的交付电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66`；能量 `93a60a57-a3c8-11da-a746-0800200c9a66`；MJ
- 数量规则：实测交付电力，由 kWh 换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_glass_fabrication_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已抛光光学玻璃镜片元件（`glass_polished_lens_element`）

记录研磨、抛光、定心和过程检验后的合格内部中间体。

- 选定流：已抛光光学玻璃镜片元件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：转入镀膜或装配的实测合格中间体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_glass_fabrication_records`
- 来源：

##### 废物流

###### 光学玻璃研磨细屑（`glass_waste`）

记录离开本过程的已收集光学玻璃研磨细屑。边角料和不合格镜片须各自设置原子废物流行，不得与废水合并。

- 选定流：玻璃废弃物 `018da71b-2e3f-41d6-a889-eee14fddf3a1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：离开过程的已收集光学玻璃研磨细屑实测干质量，扣除有记录的内部再利用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_glass_fabrication_records`
- 来源：

###### 光学玻璃研磨抛光废水（`glass_grinding_polishing_wastewater`）

记录首次处理或场外交接处含水、玻璃细粉和抛光残留物的湿废物流，并保留实测固含量和水分记录。

- 选定流：光学玻璃研磨抛光废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：实测湿废水质量及固含量记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_glass_fabrication_records`
- 来源：

##### 基本流

### 过程：聚合物光学镜片成型（`polymer_lens_element_molding`）

仅纳入所代表产品实际使用的各树脂卡。`canon-production-technology` 支持塑料光学件成型路线；未列出的聚合物应作为场址特定原子交换另行增加。

#### 输入

##### 产品流

###### PMMA 粒料（`polymer_pmma_granulate`）

生产 PMMA 光学元件时记录 PMMA 成型粒料。

- 选定流：聚甲基丙烯酸甲酯（PMMA）粒料 `9e35bc6c-2239-4305-9c8a-5a2b3d27caf8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：实测 PMMA 粒料领用量，扣除返回同一过程的有记录洁净回料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_polymer_molding_records`
- 来源：

###### 聚碳酸酯粒料（`polymer_polycarbonate_granulate`）

生产聚碳酸酯光学元件时记录聚碳酸酯成型粒料。

- 选定流：聚碳酸酯颗粒 `f4ad7c9a-3141-4c38-b932-45b7e67e05c6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：实测聚碳酸酯粒料领用量，扣除返回同一过程的有记录洁净回料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_polymer_molding_records`
- 来源：

###### 环烯烃共聚物树脂（`polymer_coc_resin`）

仅在采用该聚合物路线时记录光学级环烯烃共聚物树脂。

- 选定流：环烯烃共聚物树脂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：实测环烯烃共聚物树脂领用量，扣除返回同一过程的有记录洁净回料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_polymer_molding_records`
- 来源：

###### 聚合物成型用外购电力（`polymer_electricity`）

记录干燥、成型、模温控制、检验及分配的过程辅助用交付电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66`；能量 `93a60a57-a3c8-11da-a746-0800200c9a66`；MJ
- 数量规则：实测交付电力，由 kWh 换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_polymer_molding_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成型聚合物光学镜片元件（`polymer_molded_lens_element`）

将合格成型光学元件作为内部中间体记录，并保留聚合物牌号和产品规范。

- 选定流：成型聚合物光学镜片元件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：转入镀膜或装配的实测合格中间体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_polymer_molding_records`
- 来源：

##### 废物流

###### 不合格成型聚合物光学镜片元件（`polymer_rejected_lens_element`）

记录作为废物离开过程的不合格成型光学元件，并声明聚合物组成和处理路线。

- 选定流：不合格成型聚合物光学镜片元件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：未作为洁净回料返回的实测不合格品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_polymer_molding_records`
- 来源：

##### 基本流

### 过程：光学清洗与镀膜（`optical_coating`）

本过程清洗镜片元件，采用真空或其他已声明技术施加镀膜，并检验镀膜元件。`nikon-tochigi-lens-process` 和 `canon-fluorite-lens-process` 支持该顺序；下列未列出的每种实际镀膜物质均需单独原子交换。

#### 输入

##### 产品流

###### 未镀膜光学玻璃镜片元件（`coating_uncoated_glass_lens_element`）

采用玻璃路线时，记录合格未镀膜玻璃元件的内部转移。

- 选定流：已抛光光学玻璃镜片元件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：进入镀膜的实测未镀膜玻璃元件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_records`
- 来源：

###### 未镀膜聚合物光学镜片元件（`coating_uncoated_polymer_lens_element`）

采用聚合物路线时，记录合格未镀膜聚合物元件的内部转移。

- 选定流：成型聚合物光学镜片元件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：进入镀膜的实测未镀膜聚合物元件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_records`
- 来源：

###### 氟化镁镀膜材料（`coating_magnesium_fluoride`）

仅当所声明镀膜配方使用氟化镁时记录；其他靶材或前驱体化学品应设单独卡片。

- 选定流：氟化镁 `93bc64cc-df82-4a13-aa0f-9f05cb4b40c9`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：实测原生靶材或前驱体消耗质量，扣除回收材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_records`
- 来源：

###### 清洗和镀膜用外购电力（`coating_electricity`）

记录分配给清洗、干燥、真空生成、沉积、环境控制和检验的交付电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66`；能量 `93a60a57-a3c8-11da-a746-0800200c9a66`；MJ
- 数量规则：实测交付电力，由 kWh 换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coating_records`
- 来源：

###### 光学清洗用工艺水（`coating_process_water`）

当镀膜前或装配前采用湿法或超声清洗时，记录供给的工艺水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：实测补充水和一次通过清洗水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 镀膜光学镜片元件（`coating_coated_lens_element`）

将合格镀膜元件作为内部中间体记录，并保留基片、膜层堆叠和检验规范。

- 选定流：镀膜光学镜片元件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：转入装配的实测合格镀膜元件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_records`
- 来源：

##### 废物流

##### 基本流

### 过程：光机零件制造（`optomechanical_component_fabrication`）

镜筒或其他光机零件在内部制造时纳入本过程。所选合金行具有条件性；每种其他实际金属或聚合物均应另设原子行。

#### 输入

##### 产品流

###### 机加工零件用铝镁合金（`machining_aluminium_magnesium_alloy`）

仅对内部机加工零件使用该合金的产品系列记录铝镁合金。

- 选定流：铝镁合金 `ab57ae32-8ffe-47fe-9550-53381391a038`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：投入零件制造的实测合金原料，扣除未开封退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optomechanical_fabrication_records`
- 来源：

###### 光机制造用外购电力（`machining_electricity`）

记录分配给机加工、成型、清洗、检验、抽排和辅助过程的交付电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66`；能量 `93a60a57-a3c8-11da-a746-0800200c9a66`；MJ
- 数量规则：实测交付电力，由 kWh 换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_optomechanical_fabrication_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 机加工物镜镜筒（`machining_optomechanical_components`）

记录转入装配的合格机加工物镜镜筒。每一种其他自制或外购物镜光机零件均须单设原子清单行。

- 选定流：机加工物镜镜筒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：转入装配的实测合格机加工镜筒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optomechanical_fabrication_records`
- 来源：

##### 废物流

###### 机加工铝废料（`machining_aluminium_scrap`）

记录离开内部零件制造的已分选铝废料；受污染污泥须另设废物流。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：交给内部回收或外部接收方的实测铝废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optomechanical_fabrication_records`
- 来源：

##### 基本流

### 过程：物镜装配、校准、测试与包装（`objective_lens_assembly_testing_packaging`）

本必需过程接收镀膜元件和光机零件，进行清洗、装配、校准和功能测试，并包装合格物镜。`nikon-tochigi-lens-process` 支持该制造与检验顺序。

#### 输入

##### 产品流

###### 装配用镀膜光学镜片元件（`assembly_coated_lens_element`）

记录进入最终装配的镀膜光学元件，无论内部生产或外购。

- 选定流：镀膜光学镜片元件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：投入合格及不合格装配批次的实测镀膜元件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_testing_packaging_records`
- 来源：

###### 装配用机加工物镜镜筒（`assembly_optomechanical_components`）

记录进入装配的单个机加工物镜镜筒。隔圈、压圈、调焦件、光圈件、紧固件及其他每一种光机零件在实际存在时均须单设原子清单行。

- 选定流：机加工物镜镜筒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：投入合格及不合格装配批次的实测或物料清单镜筒质量，并与退料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_testing_packaging_records`
- 来源：

###### 光学装配用环氧胶粘剂（`assembly_epoxy_adhesive`）

仅在固定光学或机械零件时实际使用配制环氧胶粘剂时记录；其他胶粘剂化学品应设单独原子行。

- 选定流：环氧胶粘剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：实测混合后施胶质量加有记录的未固化损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_testing_packaging_records`
- 来源：

###### 装配和测试用外购电力（`assembly_electricity`）

记录分配给清洗、装配、校准、调焦或光圈检查、光学测试、环境控制和包装的交付电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66`；能量 `93a60a57-a3c8-11da-a746-0800200c9a66`；MJ
- 数量规则：实测交付电力，由 kWh 换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_testing_packaging_records`
- 来源：

###### 瓦楞纸运输箱（`assembly_corrugated_board_boxes`）

记录随成品供应的瓦楞纸箱实测质量；内衬、袋、泡沫、说明书和其他包装组件应设各自原子行。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：与合格产品一起包装的实测瓦楞纸箱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_testing_packaging_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格成品物镜组件（`assembly_objective_lens`）

仅记录通过所声明光学、机械、清洁度和包装验收标准的组件。

- 选定流：照相机、放映机或照相放大机或缩影器用物镜 `cfef9f14-3271-428b-bebe-47ded2db11d4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：合格成品净质量归一化为恰好 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：工厂门口 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_testing_packaging_records`
- 来源：

##### 废物流

###### 不合格装配式物镜组件（`assembly_rejected_objective_lens`）

记录未经完全拆解即作为废物离开过程的最终不合格组件；单独回收的玻璃、金属或零件应记录为不同回收输出并从本复合废物质量中扣除。

- 选定流：不合格装配式物镜组件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66`；kg
- 数量规则：送往所声明处理路线的实测不合格组件净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格物镜组件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_testing_packaging_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用过程和公用工程 | 记录允许时，先按产品系列、路线、设备、生产单元或计量区域细分，再进行分配。 |  |
| `allocation_physical_driver` | 剩余共用电力、水、压缩服务和处理 | 使用有记录的因果物理驱动因素分配剩余共用负荷，例如设备时间、计量消耗、加工质量或处理负荷；存在因果物理驱动因素时不得采用收入分配。 |  |
| `allocation_rework` | 返工循环 | 将返工材料、能源、不合格品和损失归属于引发返工的产品系列；内部转移只计一次，并披露重复加工。 |  |
| `allocation_recovered_material` | 玻璃、聚合物、金属和镀膜材料回收 | 在所声明回收交接点之前，将收集、预处理和运输负荷保留在前景边界内；任何替代收益或避免负荷仅在单独披露的情景中报告。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_glass_fabrication_records` | `glass_lens_element_fabrication` | 光学玻璃材料、水、电力、合格元件、玻璃废物和废水 | 批次领料、计量、生产和废物记录 | 产品型号；玻璃牌号；毛坯质量；氧化铈领用和退回；水表；电表；合格元件质量；玻璃废物质量；废水质量；固含量；处理路线 | 按生产批次核对材料领用、校准计量、合格输出和废物转移票据 | kg；kWh；MJ | 每批次，公用工程汇总不得粗于每月 | 代表性连续 12 个月或有说明的生产活动期 | 各报告设施和适用生产单元 | 按过程和产品系列求和，扣除有记录内部退回，换算单位后除以合格物镜质量 | 采购与领用记录；计量校准；批次流转单；检验结果；废物票据；质量平衡核对 |
| `cp_polymer_molding_records` | `polymer_lens_element_molding` | 聚合物粒料、电力、合格成型元件和不合格品 | 批次领料、计量、成型和不合格品记录 | 型号；聚合物牌号；原生粒料质量；回料返回；电力；合格元件质量；不合格品质量；处理路线 | 核对干燥机和成型单元记录、材料领用与检验后批次输出 | kg；kWh；MJ | 每成型批次，公用工程汇总不得粗于每月 | 代表性连续 12 个月或有说明的生产活动期 | 各报告设施和成型单元 | 按聚合物和产品系列汇总原生投入及未回收不合格品，换算电力后按合格物镜质量归一化 | 树脂证明；领用记录；设备日志；计量记录；检验和不合格品记录 |
| `cp_coating_records` | `optical_coating` | 镜片元件、镀膜材料、清洗水、电力和合格镀膜元件 | 镀膜批次、靶材领用、计量、清洗和检验记录 | 基片身份；膜层配方；靶材或前驱体领用与退回；投入镜片质量和合格输出；水；电力；不合格质量；腔体和批次编号 | 核对镀膜流转单、靶材质量变化或领用记录、计量和验收检验 | kg；kWh；MJ | 每镀膜批次，公用工程汇总不得粗于每月 | 代表性连续 12 个月或有说明的生产活动期 | 各报告设施、清洗线和镀膜腔体 | 仅汇总采用相同已声明技术和配方的批次，再按合格物镜质量归一化 | 配方批准；靶材领用或称量；校准计量；腔体日志；镀膜检验 |
| `cp_optomechanical_fabrication_records` | `optomechanical_component_fabrication` | 合金投入、电力、合格零件和铝废料 | 材料领用、设备、计量、检验和废料记录 | 产品型号；合金牌号；原料质量；电力；合格零件质量；铝废料质量；切削液污染状态；回收路线 | 核对原料领用和退回、合格零件与已分选废料称量 | kg；kWh；MJ | 每批次，公用工程汇总不得粗于每月 | 代表性连续 12 个月或有说明的生产活动期 | 各报告设施和机加工单元 | 按合金和零件系列求和，换算电力后按合格物镜质量归一化 | 材料证明；称重票据；设备和计量记录；检验结果；回收方收据 |
| `cp_assembly_testing_packaging_records` | `objective_lens_assembly_testing_packaging` | 零件、胶粘剂、电力、包装、合格产品和最终不合格品 | 物料清单、批次领用、计量、测试、包装和不合格品记录 | 型号；光学元件质量；零件组合质量；胶粘剂混合与损失；电力；各包装组件质量；合格产品净质量；测试结果；不合格品质量与路线 | 将 BOM 领用与序列号或批次验收、包装记录和不合格组件处置核对 | kg；kWh；MJ | 每装配批次，公用工程汇总不得粗于每月 | 代表性连续 12 个月或有说明的生产活动期 | 各报告设施和装配或测试线 | 按产品系列汇总合格和不合格批次，换算电力，并将每项交换除以合格成品净质量 | BOM 版本；领用记录；计量校准；测试报告；序列号或批次验收；包装规范；废物票据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 归属于所代表产品系列的净交换量 / 合格物镜净质量。 | 净行数量；合格物镜净质量 | 每 1 kg 参考产品的交换数量 |  |
| `calc_electricity_conversion` | 电力行 | 交付电力 MJ = 实测电力 kWh × 3.6；扣除单独计量的外送电，并从前景基本流中排除上游发电排放。 | 实测 kWh；有记录的外送电 | MJ 交付电力 |  |
| `calc_water_conversion` | 工艺用水行 | 水质量 = 实测体积 × 测量条件下记录或有依据的密度；保留原体积和密度证据。 | 水体积；温度；密度 | kg 工艺用水 |  |
| `calc_material_return` | 材料投入行 | 净材料投入 = 领用原生材料 + 外部供应再生材料 - 未开封退料 - 已计入领用记录的同过程内部退回。 | 领用、退回和库存记录 | kg 净材料投入 |  |
| `calc_reject_yield` | 产品和不合格品行 | 合格率 = 合格产品质量 /（合格产品质量 + 未回收不合格品质量）；按产品系列和路线分别报告。 | 合格质量；不合格品质量 | 合格率和归一化不合格品质量 |  |
| `calc_mass_balance` | 各材料加工过程 | 核对实测材料投入与合格输出、转移中间体、废物、排放、库存变化和有记录内部退回；发布前调查无法解释的差额。 | 投入、输出、废物、退回和库存变化记录 | 过程质量平衡残差 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 将记录关联至型号或产品系列，并声明全部必需限定信息、验收规范和工厂门口包装状态。 | 产品规范、BOM 版本、工艺路线和验收测试记录 |
| `dq_route_completeness` | 过程图 | 识别所有内部和外购步骤，并解释每个不适用的条件过程；对上述卡片未表示的实际材料、包装组件、废物和直接排放增加原子行。 | 批准的过程流程、供应商清单、公用工程图、废物登记和完整性审查 |
| `dq_measurement` | 计量和称量交换 | 使用经校准或验证的仪器；保留单位换算、分配驱动因素、计量覆盖和弥补数据缺口的估算。 | 校准证书、计量点图、称量记录和计算工作簿 |
| `dq_temporal` | 前景数据 | 优先采用代表性连续 12 个月；对生产活动期，记录起止日期、产量、季节性、维护及其代表正常运行的理由。 | 报告期记录和代表性说明 |
| `dq_mass_balance` | 材料加工过程 | 解决质量平衡差异，防止内部中间体、返回浆料、聚合物回料、返工和回收废料重复计算。 | 按过程和产品系列签署的核对记录 |
| `dq_source_match` | 上游数据集 | 匹配材料牌号、产品状态、电网、供水、地域、技术和废物处理路线；披露代理数据集。 | 数据集选择日志和缺口登记 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | 参考流 | `assembly_objective_lens` 应使用 UUID `cfef9f14-3271-428b-bebe-47ded2db11d4`、Mass 和 kg，并归一化为恰好 1 kg 合格成品。 | `un-cpc-3-0-structure-2025` |
| `validation_required_process` | 过程图 | 应存在 `objective_lens_assembly_testing_packaging`；每个条件过程应纳入，或提供产品与场址特定的不适用说明。 | `nikon-tochigi-lens-process` |
| `validation_atomic_inventory` | 清单 | 每种实际材料、电力供应、水供应、包装组件、废物流和直接基本流排放均应由一个原子行表示，并具备方向、流类型、数量规则、基准、证据以及 UUID 或已声明未解决身份。 |  |
| `validation_internal_transfers` | 中间流 | 每项内部镜片元件或零件转移的质量与身份应在供应和接收过程中一致；不得将内部转移计为外购投入。 |  |
| `validation_route_materials` | 玻璃、聚合物、镀膜和光机路线 | 只纳入适用材料卡，并为每种实际未列出的玻璃、聚合物、抛光材料、镀膜物质、金属、塑料、胶粘剂或包装组件增加单独行。 | `canon-production-technology`; `nikon-tochigi-lens-process` |
| `validation_waste_routes` | 废物输出 | 固体玻璃废物、废水、聚合物不合格品、铝废料和复合装配不合格品不得合并；应声明含水率或固含量以及首次处理或回收交接。 | `nikon-lens-environment`; `epa-optical-fabrication-waste-1991` |
| `validation_electricity_scope` | 电力 | 电力应按过程归属并一致换算为 MJ，且不得将上游电网排放再次列为前景基本流。 |  |
| `validation_data_period` | 前景数据包 | 数据应覆盖所声明期间和设施，识别估算及分配份额，并披露记录不符合采集协议的过程。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；仅在独立方法与数据质量审查后可作为 `background_dataset` |
| downstream_use | 使用照相机、放映机、照相放大机或缩影器物镜的产品的前景过程数据集和生命周期模型投影 |
| allowed_use | 与所声明应用、光学性能、材料路线、镀膜、光机内容、工厂门口状态、地域、技术和报告期相匹配的产品 |
| excluded_use | 整机设备；未装配通用光学元件；眼镜、显微镜、望远镜或无关仪器物镜；未经调整的显著不同基片、镀膜、电子或装配路线 |
| required_metadata | PCR id 和版本；型号或产品系列；必需限定信息；内部和外购过程；设施地域；技术；报告期；分配；截断；上游数据集引用；UUID 缺口；包装状态 |
| required_quality_disclosure | 一手数据份额；计量与质量覆盖；分配份额和驱动因素；合格率和不合格品处理；质量平衡残差；数据缺口；代理；不确定性；审查状态 |
| update_trigger | 产品设计、光学基片、镀膜配方、光机或电子内容、供应商结构、过程技术、设施、电力组合、废物路线、包装、分配、参考 UUID 或证据合同发生实质变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《产品总分类 3.0 版结构》，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 英文分类身份及 CPC 48321 精确边界语境 |
| `un-cpc-1-1-chinese-2004` | `official_guidance` | 联合国统计司，《产品总分类 1.1 版》中文版，Series M No. 77/Ver.1.1。https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf | 核验未改变的 CPC 48321 名称之专业中文表述 |
| `nikon-tochigi-lens-process` | `handbook` | 株式会社栃木ニコン，ニッコールレンズ作業工程。https://www.jp.nikon.com/company/corporate/group/ktn/businesses/imaging/process/ | 关于研削、精研削、抛光、镀膜、零件加工和成型、装配及性能检查的独立制造商证据 |
| `nikon-lens-environment` | `handbook` | Nikon Corporation，Reducing CO2 emissions from lens manufacturing process through technology。https://www.nikon.com/company/sustainability/highlight/1803_co2/ | 能源重要性、压制玻璃研磨抛光、玻璃损失和不合格品跟踪；案例值不作为 PCR 范围 |
| `canon-production-technology` | `handbook` | Canon Inc.，Production Technology。https://global.canon/en/technology/canon-tech/tech/production-tech/ | 塑料成型作为相机镜头光学件路线，以及相机非球面镜片精密研磨抛光 |
| `canon-fluorite-lens-process` | `handbook` | Canon Camera Museum，Fluorite lenses: Corrective capabilities beyond the limits of ordinary optical glass。https://global.canon/en/c-museum/special/exhibition2.html | 相机镜片元件的切边、研磨、抛光、高真空镀膜、干涉仪检验和装配交接 |
| `nist-optical-surfaces-1997` | `official_guidance` | T. V. Vorburger、C. J. Evans 与 C. Asmail，Calibration and Fabrication Facilities for Optical Surfaces，NIST，1997。https://www.nist.gov/publications/calibration-and-fabrication-facilities-optical-surfaces | 光学研磨、抛光、表面检验和计量过程证据 |
| `epa-optical-fabrication-waste-1991` | `official_guidance` | M. Drabkin 与 E. Rissmann，Waste Minimization Opportunity Assessment: Optical Fabrication Laboratory，EPA/600/S2-91/031，1991。https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=30003U24.TXT | 旧式眼镜玻璃镜片设施中玻璃细粉与清洗废水的分开记录；仅用于废物流识别，不用于数量或含铅固定技术适用性 |
