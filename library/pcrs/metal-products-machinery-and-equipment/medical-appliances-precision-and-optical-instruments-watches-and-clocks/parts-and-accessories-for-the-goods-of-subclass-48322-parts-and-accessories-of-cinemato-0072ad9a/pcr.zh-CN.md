---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48322-parts-and-accessories-of-cinemato-0072ad9a
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 特定摄影及投影设备的零件和附件

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 48353 所列的成品替换零件和附件：摄影及电影摄影机、电影放映机、摄影闪光灯设备、非电影用图像投影仪与非电影摄影用放大机或缩小机、未另分类的摄影实验室仪器和设备，以及观片灯和投影幕的零件和附件。前景数据包报告的产品必须是具有明确兼容对象和功能的一种实物零件或附件。

本 PCR 覆盖该适销产品从摇篮到报告工厂大门的生产。前景活动包括报告制造商实施的材料和组件接收、成形、机械加工、模塑、光学加工、表面处理、装配、测试及包装（如实施）。外购材料和成品组件通过上游数据集进入。

完整摄影机、完整投影仪、完整摄影闪光灯设备、完整实验室设备、完整观片灯、完整投影幕、另行分类的物镜、摄影服务、感光摄影介质以及作为产品销售的摄影化学品均不包括在内。默认边界不包括使用和寿命终止阶段。若某产品将所涵盖附件与其他功能组合，仅在能够单独识别所涵盖功能及其质量时方可纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48322-parts-and-accessories-of-cinemato-0072ad9a |
| classification_refs | CPC 3.0: 48353 (exact) |
| covered_products | CPC 48353 所列摄影、电影摄影、投影、摄影实验室、观片灯和投影幕产品的成品替换零件和附件 |
| excluded_products | 完整设备；另行分类的物镜；摄影服务；感光介质；作为产品销售的摄影化学品；无法证明与所涵盖设备兼容的通用零件 |
| representative_product | 具有明确配置且质量合格、可供销售的一种替换零件或附件 |
| production_route | 按配置选用金属成形或机械加工、聚合物模塑、光学玻璃加工、投影幕织物转换、表面处理、电子装配、最终装配、测试和包装 |
| market_state | 在报告工厂大门处完成并放行销售；若产品交付时附带包装，则包含该包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 所涵盖产品类别内质量合格、可供销售的一种成品零件或附件 |
| How much | 1 kg 成品净质量，不含包装 |
| How well | 满足所声明图纸或规格、兼容性、功能测试、表面质量及放行要求 |
| How long or cycle | 工厂大门参考流不适用；如声明质保寿命，应作为限定信息报告，不得用于改变参考数量 |
| reference_flow_link | 过程 `product_manufacturing` 的参考产品输出行 `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 48322 子类货物的零件和附件，电影放映机的零件和附件，照相手电筒装置的零件和附件，图像放映机（电影放映机除外）和照相（电影放映机除外）放大机和缩小机的零件和附件，照相实验室仪器和设备的零件和附件（未另列明），底片镜和投影屏幕的零件和附件 `44db14dc-0192-46b9-afaf-d9c90db9f97b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件或附件类型；制造商及型号或图号；兼容的主设备；功能；主要材料及物料清单版本；制造路线标志；净质量；包装状态及包装质量；工厂地理位置；技术与报告期；质量和功能测试标准；适用时的表面处理与涂层配方；适用时的再生材料含量声明 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失必需限定信息时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经质量检验合格的成品净质量；参考数量不包括包装和不合格品。 |
| `batch_normalization` | 所有清单行 | Mass 或行特定属性 | 每 kg 参考产品 | 用报告期内的交换总量除以相同期间、相同产品配置的合格放行产品净质量。 |
| `energy_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 源记录保留电表 kWh，并按 1 kWh = 3.6 MJ 转换；披露是否包括变压及配电损耗。 |
| `count_to_mass` | 按件计数的产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅可使用配置特定的抽样平均单件质量将件数换算为质量，并保留样本数、称量记录和抽样日期。 |
| `water_mass` | 工艺用水和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先使用直接质量或体积记录。由体积换算质量时，保留实测密度及温度或状态并说明换算依据。 |

## 5. 系统边界

默认报告边界始于外购材料、成品组件、工艺化学品、包装、水和能源进入报告工厂，止于经测试和放行的产品在工厂大门处备妥。上游开采、材料生产和外购组件生产由上游数据集表示。在采用任何抵扣或下游处理模型之前，记录前景废料、废水、直接大气排放和不合格品。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料和组件在报告工厂收货时的状态，包括牌号、形态、供应商地理位置、再生含量及上游数据集标识 |
| starting_condition_role | 配置特定前景生产的上游产品输入 |
| product_classification_scope | CPC 48353 内的一种成品零件或附件；CPC 标识不使完整设备或另行分类的物镜成为参考产品 |
| recursive_input_rule | 若外购输入本身属于 CPC 48353，则作为产品输入记录其上游数据集和所声明配置；不得在同一单元过程中递归重现其生产 |
| upstream_dataset_requirement | 每种外购材料、组件、化学品、包装品、水和能源必须具有地理及技术代表性上游数据集，或披露数据缺口 |
| disclosure | 报告产品配置、路线标志、纳入和排除的工序、外包工序、包装状态、截断决定、上游数据集替代、工厂地理位置和报告期 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | 前景生产 | 纳入报告制造商控制的、与配置有关的全部成形、机械加工、模塑、光学加工、清洗、表面处理、装配、测试及包装工序。 | `un-cpc-3-0-structure-2025`; `eu-jrc-stm-bref-2006` |
| `boundary_02` | 外购输入 | 外购材料和成品组件采用上游数据集建模，不得将供应商负荷视为零。 | `ghg-protocol-product-standard-2011` |
| `boundary_03` | 表面处理 | 若实施电解、化学或涂装处理，应纳入跨越边界的预处理、处理、漂洗、干燥或固化、水、电力、涂层或处理材料、废水、固体残渣和直接排放。 | `eu-jrc-stm-bref-2006`; `us-epa-ap42-general-industrial-surface-coating` |
| `boundary_04` | 使用与寿命终止 | 默认工厂大门数据集不包括产品使用、主设备能耗、维护及寿命终止；仅可在另行声明的下游生命周期模型中加入。 | `ghg-protocol-product-standard-2011` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `product_manufacturing` | 配置特定的产品制造、测试与包装 | required | 始终纳入；每项条件性交换仅在所声明产品物料清单或路线采用该交换时适用 | 前景生产 | 1 kg 合格放行成品零件或附件净质量 |

### 过程：配置特定的产品制造、测试与包装（`product_manufacturing`）

#### 输入

##### 产品流

###### 铝板材（`aluminium_sheet`）

仅在向所声明产品配置发料时记录铝板材。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：生产批次领用的板材实测质量，扣除有记录的退库未用板材
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：

###### 不锈钢板材（`stainless_steel_sheet`）

仅在领用时记录并声明合金牌号和厚度。尚未确认精确的 TianGong UUID。

- 选定流：不锈钢板材
- 流属性/单位：Mass / kg
- 数量规则：生产批次领用的板材实测质量，扣除有记录的退库未用板材
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：

###### ABS 粒料（`abs_granulate`）

仅当所声明配置包含 ABS 模塑件时记录。

- 选定流：丙烯腈丁二烯苯乙烯共聚物（ABS）粒料 `b895c3a1-076e-4a42-a2c0-6088890c0bd9`
- 流属性/单位：Mass / kg
- 数量规则：投入的干燥粒料实测质量，扣除有记录的未用退库材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：

###### 光学玻璃毛坯（`optical_glass_blank`）

仅当所涵盖产品实施光学玻璃加工时记录。

- 选定流：光学玻璃毛坯 `a68c2948-174f-4e17-a3ee-f2b289d50d18`
- 流属性/单位：Mass / kg
- 数量规则：生产批次领用的光学玻璃毛坯实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：

###### 投影幕织物（`projection_screen_fabric`）

仅当所涵盖零件采用时，记录一种明确的投影幕基材织物。尚未确认精确的 TianGong UUID。

- 选定流：聚酯机织投影幕织物
- 流属性/单位：Mass / kg
- 数量规则：生产批次裁切织物的实测质量，扣除有记录的退库未裁织物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：

###### 涂层（`coating`）

仅当所声明路线包含涂装时记录，并披露配方、固含量和施涂技术。

- 选定流：涂层 `59808a77-a33c-493f-8e5f-c0eb3e837943`
- 流属性/单位：Mass / kg
- 数量规则：涂料领用质量减去实测退回涂料和另行回收的涂料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`eu-jrc-stm-bref-2006`; `us-epa-ap42-general-industrial-surface-coating`

###### 外购电力（`electricity`）

记录配置所需生产、处理、装配、测试、包装及直接辅助设备消耗的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：采用分表计量；无专用电表时采用有记录的设备电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter`
- 来源：`eu-jrc-stm-bref-2006`

###### 工艺用水（`process_water`）

记录清洗、漂洗、冷却补水、光学加工或表面处理使用的新供工艺水；仅在证明确实不跨越过程边界时排除一次通过的非接触用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量或水箱平衡得到的工艺水输入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meter`
- 来源：`eu-jrc-stm-bref-2006`

###### 印制电路板组件（`pcb_assembly`）

仅当所声明附件含电子部分时记录已装配 PCB。

- 选定流：电子元器件及印制电路板组件 `1e37f859-cb9b-47ff-8b0b-5b47d65fa236`
- 流属性/单位：Mass / kg
- 数量规则：BOM 数量乘以经核验的单件质量，并与供应商收货记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_bom`
- 来源：

###### 环氧树脂（`epoxy_resin`）

仅在采用环氧粘接或灌封配方时记录。实际另行使用的其他树脂或固化剂物种必须在结果数据包中分别建立原子行。

- 选定流：环氧树脂 `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- 流属性/单位：Mass / kg
- 数量规则：生产批次领用并消耗的树脂实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：

###### 瓦楞纸箱（`corrugated_box`）

仅当适销产品附带瓦楞纸箱时记录。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：纸箱件数乘以配置特定的抽样纸箱质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_bom`
- 来源：

###### 低密度聚乙烯薄膜（`ldpe_film`）

仅当适销产品附带 LDPE 薄膜时记录。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：薄膜领用实测质量，或根据保留的规格由长度和定量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：

##### 废物流

本 PCR 不规定废物输入。若将外部供应废物用作再生材料，前景数据包必须将其作为化学或物理上明确的独立废物输入流记录。

##### 基本流

本 PCR 不规定基本输入。若直接测量且未包含在上游数据集中的基本资源输入，应逐项作为独立流加入。

#### 输出

##### 产品流

###### 成品参考产品（`reference_product`）

仅记录经测试、已放行且可供销售的产品质量；不含包装和不合格品。

- 选定流：48322 子类货物的零件和附件，电影放映机的零件和附件，照相手电筒装置的零件和附件，图像放映机（电影放映机除外）和照相（电影放映机除外）放大机和缩小机的零件和附件，照相实验室仪器和设备的零件和附件（未另列明），底片镜和投影屏幕的零件和附件 `44db14dc-0192-46b9-afaf-d9c90db9f97b`
- 流属性/单位：Mass / kg
- 数量规则：1 kg 质量合格的放行产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：标识引用（`identity_reference`）
- 采集协议：
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 铝废料（`aluminium_scrap`）

记录适用路线产生并分流的铝边角料和机加工屑。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：在采用回收抵扣前，实测离开生产的铝废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：

###### 工业后钢废料（`post_industrial_steel_scrap`）

记录适用路线产生并分流的钢边角料和机加工屑。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：在采用回收抵扣前，实测离开生产的钢废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：

###### ABS 模塑废料（`abs_moulding_scrap`）

仅记录分流的 ABS 浇口、流道、清机料和不合格模塑件。尚未确认精确的 TianGong UUID。

- 选定流：ABS 模塑废料
- 流属性/单位：Mass / kg
- 数量规则：内部再用或外部处理前，实测离开生产的 ABS 废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：

###### 光学玻璃研磨污泥（`optical_glass_grinding_sludge`）

仅在产生时记录脱水的光学玻璃研磨污泥。尚未确认精确的 TianGong UUID。

- 选定流：光学玻璃研磨污泥
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量和固含量，按明确声明的湿基或干基报告，不得混用基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：

###### 表面处理废水（`surface_treatment_wastewater`）

记录清洗、漂洗、光学加工或表面处理产生并在外部处理前跨越边界的废水；披露是否包括场内处理。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：计量排放质量，或按照水质量规则由体积换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`eu-jrc-stm-bref-2006`

###### 不合格成品零件（`rejected_finished_part`）

记录作为废物离开的一种明确配置的不合格成品零件或附件。尚未确认精确的 TianGong UUID。

- 选定流：不合格摄影或投影设备成品零件或附件
- 流属性/单位：Mass / kg
- 数量规则：经测试不合格且未返工为合格输出的产品净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：

##### 基本流

###### 排放到空气的非甲烷挥发性有机化合物（`nmvoc_to_air`）

记录适用的涂装、清洗和固化工序在收集与治理后的直接 NMVOC 排放；不得计入上游电力排放。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：采用烟道及无组织排放实测值；如无实测值，则采用涂层与溶剂质量平衡，并扣除回收量、产品留存量、进入收集废物的量及治理销毁量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_nmvoc_mass_balance`
- 来源：`us-epa-ap42-general-industrial-surface-coating`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | 共用生产线 | 通过分表、生产订单、设备时间和按所声明产品配置进行过程细分，尽量避免分配。 | `ghg-protocol-product-standard-2011` |
| `allocation_02` | 无法避免的共用公用工程 | 若无法实际细分，按引起消耗的物理驱动因素（如机器时间、处理表面积或实测吞吐量）分配电力、水和共用耗材，并披露驱动因素和敏感性。 | `ghg-protocol-product-standard-2011` |
| `allocation_03` | 金属废料及其他废物 | 在回收抵扣前报告废物产生总量；不得在前景单元过程中计入避免生产抵扣，下游回收应在另行声明的情景中建模。 | `ghg-protocol-product-standard-2011` |
| `allocation_04` | 具有经济价值的共产品 | 细分后仍存在有价值共产品时，优先采用因果物理关系；仅在无合理物理关系时采用经济分配，并披露价格、期间、币种和敏感性。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_bom` | `product_manufacturing` | 材料、组件、化学品和包装输入 | 批准的 BOM、领退料记录、供应商收货记录、抽样单件质量 | 产品配置；材料标识；牌号或配方；批次；领用量；退回量；单件质量；包装状态 | 将批准的 BOM 与仓库领料、退料和供应商收货记录核对；对计件物品进行代表性称量 | kg | 每生产批次，按月汇总 | 代表性连续 12 个月，或较短完整生产活动 | 每个报告工厂及外包前景工序 | 按原子材料汇总净领用质量并除以合格输出质量 | 批准的 BOM 版本、经校准称量记录、批次追踪、供应商规格、核对差异 |
| `cp_energy_meter` | `product_manufacturing` | 外购电力 | 电表和设备日志 | 电表起止读数；kWh；生产订单；机器时间；分配驱动因素；所含损耗 | 优先采用专用分表；否则仅针对直接辅助设备按有记录驱动因素分配工厂电表 | 源记录 kWh，报告 MJ | 每月及路线变化时 | 与输出相同期间 | 每个报告工厂 | kWh 换算 MJ 后除以合格输出质量 | 电表编号、校准或公用事业账单、分配工作表 |
| `cp_water_meter` | `product_manufacturing` | 工艺用水输入 | 水表、水箱平衡或批次记录 | 水体积或质量；密度依据；工序；批次；退回或循环水 | 计量工艺补水，并区分循环水和新供水 | kg | 每月；批式处理按批次 | 与输出相同期间 | 每个报告工厂 | 汇总新供工艺水并除以合格输出质量 | 电表编号、平衡闭合、换算时的密度记录 |
| `cp_output_mass` | `product_manufacturing` | 合格及不合格产品 | 放行、测试、计数和称量记录 | 配置；放行件数；不合格件数；单件质量；返工状态；包装质量 | 将质量放行和测试记录与产品净称量核对 | kg | 每生产批次 | 与输入相同期间 | 每个报告工厂 | 分别汇总合格净质量和未返工不合格质量 | 放行授权、功能测试记录、经校准称量、不合格品处置 |
| `cp_waste_mass` | `product_manufacturing` | 分流固体废物 | 容器称量票和废物转移记录 | 废物标识；材料；毛重/皮重；水分或固体基准；去向；内部再用 | 每种分流废物流在外部处理或抵扣前分别称量 | kg | 每容器或批次 | 与输出相同期间 | 每个报告工厂 | 汇总每种原子废物流，扣除经核验皮重，并除以合格输出质量 | 称量票、废物代码、照片或成分证据、转移文件 |
| `cp_wastewater` | `product_manufacturing` | 表面处理废水 | 排放计量和取样记录 | 质量或体积；密度；处理状态；去向；pH；相关金属和有机物 | 分别计量各工艺废水路线并保留代表性成分分析 | kg | 连续或每个排放批次 | 与输出相同期间 | 每个报告工厂 | 汇总跨越边界的废水并除以合格输出质量 | 计量记录、取样方案、实验室结果、处理流程图 |
| `cp_nmvoc_mass_balance` | `product_manufacturing` | 直接排入空气的 NMVOC | 涂层/溶剂领用、回收、废物、产品留存、收集和治理记录 | 配方 VOC 比例；使用质量；退回质量；进入废物质量；留存质量；收集效率；去除效率；实测排放 | 优先采用经验证的烟道和无组织排放实测值；否则闭合配方特定质量平衡 | kg NMVOC | 每次涂装活动，按月汇总 | 与输出相同期间 | 报告工厂的每条涂装线 | 直接排放 = VOC 输入减去回收、产品留存、作为废物收集及治理销毁量，再除以合格输出质量 | SDS 或配方证明、领退料记录、治理测试、质量平衡闭合 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01` | 归一化交换 | 归一化数量 = 期间交换量 / 期间合格放行产品净质量 | 交换量；合格输出质量 | 每 kg 参考产品的 kg、MJ 或行特定单位 |  |
| `calc_02` | 计件输入 | 输入质量 = 验收件数 × 抽样平均单件质量 | 验收件数；抽样单件质量 | kg 输入 |  |
| `calc_03` | 电力 | 报告 MJ = 电表 kWh × 3.6 | 电表 kWh | MJ 电力 |  |
| `calc_04` | NMVOC | NMVOC 排放量 = 配方 VOC 输入 − 回收 VOC − 产品留存 VOC − 随废物转移 VOC − 治理销毁 VOC | `cp_nmvoc_mass_balance` 的配方和质量平衡字段 | kg NMVOC 排放 | `us-epa-ap42-general-industrial-surface-coating` |
| `calc_05` | 产品与固体废物质量平衡 | 闭合差 = 总质量输入 − 合格产品 − 分别实测废物 − 直接质量排放 − 库存变化 | 材料和化学品输入；输出；库存变化 | 未解释质量及闭合率 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_01` | 产品标识 | 每个汇总组固定零件号、图号或型号、兼容主设备、BOM 版本、路线和包装状态。 | 批准的规格和 BOM 版本 |
| `dq_02` | 时间代表性 | 使用代表性连续 12 个月；仅新产品、季节性或停产产品可采用较短的完整生产活动，并必须披露。 | 带日期的输入、输出、计量和生产订单记录 |
| `dq_03` | 完整性 | 核对材料领用、输出、不合格品、废物、废水和直接排放；解释排除项和未解决质量平衡残差。 | 质量平衡工作表和签署的异常日志 |
| `dq_04` | 地理和技术 | 识别每个报告工厂、外包前景工序、电力供应地理范围和主要上游数据集替代。 | 场址清单、路线图、供应商及数据集映射 |
| `dq_05` | 测量质量 | 保留电表和衡器编号、校准或核验状态、抽样方案、换算系数、分配驱动因素和核对差异。 | 校准记录和计算工作簿 |
| `dq_06` | 来源质量 | 区分前景记录、计算、TianGong 标识引用和外部方法来源；不得将单一发表案例转换为范围。 | 行级证据元数据和来源登记表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_01` | 产品和参考流 | 确认产品是所涵盖的一种成品零件或附件，而非完整设备或另行分类的物镜；参考输出恰为 1 kg 合格产品净质量。 | `un-cpc-3-0-structure-2025` |
| `validation_02` | 配置完整性 | 确认所有必需限定信息和路线标志已填写，跨越边界的每项 BOM 材料、组件、化学品、包装品、废物和直接排放均以原子交换表示，或有数据缺口说明。 |  |
| `validation_03` | 条件行 | 仅当固定的 BOM、工艺路线或包装规格证明不适用时，方可省略条件性材料或排放行。 |  |
| `validation_04` | 质量与能源 | 复算单位换算、归一化、输入/输出质量平衡闭合、不合格品分离和共用公用工程分配，并调查未解释残差。 |  |
| `validation_05` | 表面处理 | 若声明表面处理或溶剂型涂装，核验涂层或处理材料输入、工艺用水、电力、废水、产生时的固体残渣以及直接 NMVOC 或有记录的零排放依据。 | `eu-jrc-stm-bref-2006`; `us-epa-ap42-general-industrial-surface-coating` |
| `validation_06` | 分配 | 核验在分配前已尝试细分，且剩余驱动因素反映物理因果关系，或已披露敏感性。 | `ghg-protocol-product-standard-2011` |
| `validation_07` | 证据和未解决事项 | 确认无 UUID 的行仍记录为未解决；外部数字范围必须由至少两项相互独立、边界相容且经核验的原始来源支持。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对一种明确成品零件或附件配置的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 作为工厂大门输入用于主设备制造、维修、替换零件供应、产品足迹研究，或另行建模的分销/使用/寿命终止生命周期模型 |
| allowed_use | 当产品标识、配置、地理、技术、期间、包装状态、分配和数据质量与研究相符时，用于归因型摇篮到工厂大门建模 |
| excluded_use | 直接比较功能或兼容类别不同的产品；表示完整设备；替代物镜特定 PCR；在无附加模型时作使用或寿命终止声明；用于固定 BOM 未涵盖的配置 |
| required_metadata | PCR id 和版本；CPC 背景；零件号或图号；兼容主设备；功能；净质量；BOM 版本；路线标志；包装状态；工厂地理位置；技术；期间；分配；上游数据集；未解决数据缺口 |
| required_quality_disclosure | 记录覆盖率；测量和校准状态；质量平衡闭合；公用工程分配方法；供应商数据比例；处理和排放方法；不合格品处理；范围证据缺口；UUID 缺口 |
| update_trigger | 产品配置、BOM、主要材料、供应商地理、制造或涂装路线、工厂、电力供应、包装、分配驱动因素、排放治理发生变化，或实测强度发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 第 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-07） | CPC 48353 正式标识和产品边界 |
| `eu-jrc-stm-bref-2006` | official_guidance | 欧盟委员会联合研究中心，《金属和塑料表面处理最佳可行技术参考文件》，2006-08，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf（检索日期 2026-09-07） | 条件性表面处理过程结构；电力、水、废水、固体残渣和直接排放采集要求 |
| `us-epa-ap42-general-industrial-surface-coating` | official_guidance | 美国环境保护署，AP-42 第 4.2.2.1 节《一般工业表面涂装》，1995-01 重新排版，https://19january2021snapshot.epa.gov/sites/static/files/2020-10/documents/c4s02_2a.pdf（检索日期 2026-09-07） | 涂层及另购溶剂记录；配方特定 NMVOC 质量平衡 |
| `ghg-protocol-product-standard-2011` | standard | 世界资源研究所和世界可持续发展工商理事会，《产品生命周期核算与报告标准》，2011，https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf（检索日期 2026-09-07） | 边界披露、分配层级、数据质量、报告和更新规则 |
