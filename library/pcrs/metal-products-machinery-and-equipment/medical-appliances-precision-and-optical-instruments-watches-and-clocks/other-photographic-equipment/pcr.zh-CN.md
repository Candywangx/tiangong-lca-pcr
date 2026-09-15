---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-photographic-equipment
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他摄影设备

## 1. 范围与适用性

本 PCR 适用于下列独立规范身份均未涵盖的摄影成品设备：单独销售的物镜、摄影或电影摄影机、电影放映机、感光摄影介质、摄影用化学制剂以及零件和附件。按照构成该剩余设备边界的 HS 品目，涵盖的产品包括摄影闪光装置；非电影用图像放映机和摄影放大机或缩小机；摄影实验室仪器和设备；底片观察器；以及投影屏幕。

前景边界是从收到的材料、组件及包装起，到最终装配、场址内实际实施的清洗或调试、功能测试及包装结束的出厂生产。由于该剩余类别包含电子、光学、机电和无源屏幕产品，生产者必须声明具体设备系列和物料清单（BOM）。除非研究目标明确扩展边界，否则不包括分销、使用、维护和生命末期阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-photographic-equipment |
| classification_refs | CPC 3.0：48329，其他摄影设备（`exact`） |
| covered_products | 摄影闪光装置成品；非电影用图像放映机；摄影放大机和缩小机；摄影实验室仪器；底片观察器；投影屏幕 |
| excluded_products | 单独销售的物镜；摄影机和电影摄影机；电影放映机；感光硬片、胶片或一次成像胶片；摄影用化学制剂；单独销售的零件和附件；数码相机及电视/视频摄像机 |
| representative_product | 出厂电子摄影闪光灯成品；仅用作过程和 BOM 提示的代表性路线，不限制其他涵盖设备 |
| production_route | 接收外购材料和组件；报告场址实际实施的产品特定制造或调试；最终装配；适用时清洗；功能测试；包装 |
| market_state | 完整、经测试的出厂设备成品，并声明随附附件及销售包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供完成所声明摄影照明、图像投影/放大/缩小、实验室处理、底片观察或投影屏幕功能的设备成品 |
| How much | 1 kg 完整出厂设备成品净质量 |
| How well | 符合生产者声明的型号规格及验收测试，并声明设备系列、型号、BOM 版本、随附附件和包装范围 |
| How long or cycle | 仅指出厂生产；使用寿命或运行循环属于元数据，不改变 1 kg 生产参考量 |
| reference_flow_link | `finished_other_photographic_equipment` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 其他摄影设备（Tiangong UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 设备系列；制造商和型号；BOM 版本；电子、光学、实验室仪器或无源屏幕路线；产品净质量；随附附件；包装范围；制造场址和地理范围；报告期；验收测试规格 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有按质量归一化的清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对不含销售包装的完整合格设备称重，得到参考产品净质量。将报告期内每项交换除以合格产品净输出质量，归一化为 1 kg；披露随附附件是否计入产品净质量。 |
| `energy_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始单位，并严格按 1 kWh = 3.6 MJ 转换。记录电压等级、电网地理范围、现场发电处理方式和损耗边界。 |
| `water_mass_basis` | 工艺用水和清洗废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用直接质量记录。按体积计量时，应采用在报告温度下测得或供应商提供并有记录的密度，不得默认为某一密度。 |
| `bom_component_mass` | 材料、组件和包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用供应商质量声明或经核实的称重值。区分外购组件质量与其原材料当量质量，不得对两种表示重复计量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 到达报告场址门口的材料、组件、子组件、附件和包装 |
| starting_condition_role | 前景装配/制造投入边界；上游生产由单独关联的供应商或背景数据集表示 |
| product_classification_scope | 产品类别识别中所述摄影设备剩余类别成品，不依赖任何单一型号或路线 |
| recursive_input_rule | 收到的投入若本身属于本 PCR 的设备成品，应仅作为产品投入记录一次并关联其上游数据集；不得既在接收过程内递归拆解，又关联完整设备数据集 |
| upstream_dataset_requirement | 每项材料、组件、能源、水、包装和废物处理交换均须关联地理及技术适宜的上游或下游数据集，并披露代理数据 |
| disclosure | 声明工厂地点、报告期、设备系列/型号、BOM 版本、场址内包含的组件制造、清洗和测试路线、分配、截断、数据缺口、再生含量假设及包装范围 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_received_inputs` | 前景起始条件 | 前景清单从到达场址的材料和组件开始；研究边界涵盖其上游生产和入厂运输时，应分别关联相应数据集。 | `kth-moqvist-photo-flash-2020` |
| `boundary_site_operations` | 出厂生产 | 纳入生产合格设备所需且在场址实施的制造、装配、清洗或调试、功能测试、废品、废水及包装。 | `kth-moqvist-photo-flash-2020` |
| `boundary_downstream_exclusion` | 分销、使用和生命末期 | 本出厂 PCR 不包括下游分销、使用阶段电力或耗材、维护和生命末期；研究目标另行增加时，须作为独立模块报告。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `final_assembly_test_pack` | 最终装配、清洗、功能测试和包装 | `required` | 始终纳入；各原子交换仅在所声明型号 BOM 或场址路线中实际存在时适用 | 前景生产 | 1 kg 合格设备成品净质量 |

### 过程：最终装配、清洗、功能测试和包装（`final_assembly_test_pack`）

#### 输入

##### 产品流

###### 用于外壳、框架或反射器的铝板材（`aluminium_sheet`）

铝板材作为外购材料进入前景过程时记录。产品设计、合金、厚度、再生含量和成形边界仍为前景限定信息。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：报告期内实测净投入量，扣除未开封退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`kth-moqvist-photo-flash-2020`

###### ABS 成型树脂（`abs_granulate`）

仅在报告场址用 ABS 粒料成型零件或消耗外购 ABS 粒料时记录；不得同时计入由其制成的外购成型件质量。

- 选定流：丙烯腈-丁二烯-苯乙烯共聚物（ABS），粒料 `8f1317c1-aa51-4524-8692-74079c923e2c`
- 流属性/单位：Mass / kg
- 数量规则：投入场址内成型的实测粒料净量，包括有记录的过程损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`kth-moqvist-photo-flash-2020`

###### 印制线路板（`printed_wire_board`）

电子设备路线中每块进入过程的外购印制线路板均应记录。声明其为裸板还是已装配板；选定流未包含的已安装零件须有独立 BOM 记录或有说明的组件数据集。

- 选定流：印制线路板 `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- 流属性/单位：Mass / kg
- 数量规则：进入合格品和废品的线路板供应商声明质量或称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`kth-moqvist-photo-flash-2020`

###### 物镜（`photographic_objective_lens`）

仅当设备 BOM 中含有单独收到的物镜时记录。

- 选定流：照相机、放映机或照相放大机或缩影器用物镜 `cfef9f14-3271-428b-bebe-47ded2db11d4`
- 流属性/单位：Mass / kg
- 数量规则：进入合格品和废品的物镜供应商声明质量或称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`wco-hs-2022-chapter-90`

###### 氙气摄影闪光管（`xenon_flash_tube`）

仅对氙气放电摄影闪光产品记录。Tiangong 身份尚未解决；不得以玻璃、二甲苯或镇流器替代。

- 选定流：氙气摄影闪光管（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：进入合格品和废品的闪光管供应商声明质量或称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`wco-hs-2022-chapter-90`

###### 电子闪光电容器（`electronic_flash_capacitor`）

仅对 BOM 含独立储能电容器的电子闪光产品记录。Tiangong 身份尚未解决；绝缘油不可作为替代。

- 选定流：电子闪光电容器（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：进入合格品和废品的电容器供应商声明质量或称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`kth-moqvist-photo-flash-2020`

###### 聚酯投影屏幕织物（`polyester_projection_screen_fabric`）

仅对采用聚酯基光学表面的投影屏幕产品记录。声明涂层、背衬、织造或针织方式、再生含量和阻燃处理。

- 选定流：聚酯投影屏幕织物（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：进入合格及废弃屏幕的成品织物供应商声明质量或称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`wco-hs-2022-chapter-90`

###### 外购电力（`electricity`）

记录场址内制造、装配、清洗或调试、测试和包装消耗的电力。共用电表按第 7 节规则分配。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：可归属于报告过程的计量或发票核对电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter`
- 来源：`kth-moqvist-photo-flash-2020`

###### 水基清洗工艺用水（`process_water`）

仅当报告场址实施水基清洗时记录工艺用水。卫生或无关建筑服务用水不属于本行。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：报告期内向产品或组件清洗供应的实测水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meter`
- 来源：

###### 瓦楞纸销售包装箱（`corrugated_board_box`）

记录随设备成品提供的成型瓦楞纸箱；不得另将其纸板质量作为原料投入重复计量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：随合格产品包装的纸箱供应商声明质量或称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：`kth-moqvist-photo-flash-2020`

###### 低密度聚乙烯保护膜（`ldpe_packaging_film`）

仅当 PE-LD 薄膜作为销售或保护包装随产品提供时记录。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：随合格产品包装的 PE-LD 薄膜供应商声明质量或称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格设备成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_mass`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格设备成品（`finished_other_photographic_equipment`）

这是装配、验收测试和包装后跨越工厂边界的参考产品。设备净质量与销售包装应分别记录。

- 选定流：其他摄影设备（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：报告期内生产的合格设备成品实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格设备成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output_mass`
- 来源：`un-cpc-3-0-2025`；`wco-hs-2022-chapter-90`

##### 废物流

###### 废弃电子组件（`weee_manufacturing_scrap`）

仅对电子路线记录废弃电子组件，且应在下游处理前计量。若可回收组件作为独立废物流计量，应分别记录。

- 选定流：废弃电气电子设备制造废料 `46be0534-0f3c-44a9-8523-63c4ad41ed8e`
- 流属性/单位：Mass / kg
- 数量规则：从生产控制转交废物处理或回收路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：

###### 清洗废水（`cleaning_wastewater`）

仅在实施水基清洗时记录废水。前景记录应描述污染物和处理状态。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：转交场内或场外处理的实测废水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_mass`
- 来源：

###### 铝边角料和废弃零件（`aluminium_scrap`）

仅当报告场址进行板材成形、切边或产生废品时记录铝废料。不得从铝投入中扣减。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：转交回收或废物处理的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格设备成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`kth-moqvist-photo-flash-2020`

##### 基本流

本 PCR 不规定笼统的基本排放流。每项实测直接排放必须作为独立且化学物种明确的基本流记录；不得把上游电力或材料生产排放转入本前景过程。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 多产品工厂运行 | 在可独立计量时，首先细分计量过程、生产线、批次和废物记录。 |  |
| `allocation_shared_operations` | 共用装配、调试、测试和建筑服务 | 无法细分时，按机器时间、测试时间、批次数或实测吞吐量等有记录的因果驱动因素分配共用电力、水和废物；仅在没有更合理因果驱动因素时采用质量，并披露敏感性。 |  |
| `allocation_scrap_no_credit` | 铝废料和废弃电子组件 | 在前景边界按毛量报告废物流。不得从前景清单中扣除废料收益或原生材料避免负荷；回收后果应在所选下游数据集或明确独立的情景中建模。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_mass` | `final_assembly_test_pack` | BOM 材料、组件、附件或包装投入 | 供应商声明、收货及发料记录 | 物料编码；材料说明；供应商；批次；数量；单位质量；退料质量；BOM 版本；合格和废弃件数 | 将批准 BOM 与采购/仓库记录核对，并用校准秤验证代表性单位质量 | kg | 每批，按月汇总 | 完整报告期 | 声明场址边界内的所有产线及外包步骤 | 按物料汇总净发料质量，每项物料只映射到一个原子流 | BOM 批准记录、供应商质量证据、秤校准及核对记录 |
| `cp_energy_meter` | `final_assembly_test_pack` | 电力投入 | 电表区间或电费发票 | 电表编号；起止读数；区间用电；电压；电力供应商；现场发电/外送；分配驱动因素 | 读取专用电表或将分表合计与发票核对 | kWh 和 MJ | 至少每月 | 完整报告期 | 所有纳入的制造、装配、清洗、测试及包装运行 | 将 kWh 转为 MJ，并按第 7 节分配共用电量 | 电表校准或发票核对及分配工作表 |
| `cp_water_meter` | `final_assembly_test_pack` | 工艺用水投入 | 水表、批次日志或供应记录 | 来源；水表编号；体积或质量；温度；密度来源；批次；清洗路线 | 对纳入的水基清洗供水计量或称重 | kg | 每批或每月 | 完整报告期 | 仅纳入的清洗设备 | 必要时将有记录的体积转换为质量，并按合格输出质量归一化 | 水表校准、密度记录及批次核对 |
| `cp_product_output_mass` | `final_assembly_test_pack` | 合格设备成品输出 | 生产及验收记录 | 型号；序列号或批次；BOM 版本；合格数；废弃数；实测单位质量；随附附件；排除包装 | 将验收放行记录与校准称重结果核对 | kg | 每批 | 完整报告期 | 场址生产的每个涵盖型号 | 按型号和报告期汇总合格产品净质量 | 验收记录、秤校准及生产核对 |
| `cp_waste_mass` | `final_assembly_test_pack` | 固体制造废物输出 | 废物转移及内部废料记录 | 废物类型；来源过程；容器皮重/毛重；污染；去向；处理路线；日期 | 对每次废物转移称重并核对内部废料移动 | kg | 每次转移，按月汇总 | 完整报告期 | 所有纳入的生产废物去向 | 按原子废物身份汇总净质量，不扣减收益 | 秤校准、转移单据及处理凭证 |
| `cp_wastewater_mass` | `final_assembly_test_pack` | 清洗废水输出 | 排水计量及表征记录 | 体积或质量；温度；密度来源；污染物；处理状态；去向；批次/日期 | 计量废水并保留代表性表征 | kg | 每批或每月 | 完整报告期 | 仅纳入的水基清洗排水 | 必要时将有记录的体积转换为质量，并按合格输出质量归一化 | 仪表校准、采样记录及处理凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每一清单行 | 归一化数量 = 报告期该行总量 / 报告期合格设备净质量 | 采集的行总量；合格设备净质量 | 每 1 kg 合格设备成品净质量的交换量 |  |
| `calc_electricity_mj` | 电力 | MJ = 计量 kWh × 3.6 | 计量 kWh | 以 MJ 表示的电力 |  |
| `calc_material_balance_screen` | 材料和废物 | 比较材料总投入与合格产品、单独报告的废物、库存变化及有记录的蒸发或未测残差；调查差异，不得强制平衡 | BOM 投入质量；产品输出质量；废物质量；期初/期末库存 | 物料平衡残差及说明 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和清单身份 | 保留型号、BOM 版本、设备系列、材料/零件规格、已解决的 Tiangong 流 UUID 以及供应商或废物路线身份。 | 批准 BOM、供应商规格、流映射记录、废物转移记录 |
| `dq_temporal` | 前景活动 | 在可获得时覆盖有代表性的连续 12 个月；否则披露起止日期、季节性、爬坡、停产及外推。 | 仪表覆盖、生产日历、核对工作表 |
| `dq_completeness` | 出厂清单 | 将产品输出与生产记录、组件投入与 BOM/采购、电力和水与仪表/发票、废物与转移记录核对；量化所有排除项。 | 签署的完整性检查表及核对记录 |
| `dq_technology_geography` | 上游数据集和共用运行 | 匹配组件状态、制造技术、电力地理范围/电压、再生含量及废物处理路线；记录每项代理。 | 数据集选择日志及代理理由 |
| `dq_uncertainty` | 缺失的外部范围 | 不得以未标注的单一案例值替代缺失的独立范围证据。报告采集期的前景波动和不确定性，并标记外部基准证据缺口。 | 批次统计、仪表波动及审查元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_scope` | 参考产品 | 确认产品是涵盖边界内的设备成品，而非摄影机、电影放映机、单独销售的物镜、感光介质、化学制剂或零件/附件。 | `un-cpc-3-0-2025`；`wco-hs-2022-chapter-90` |
| `validate_reference_mass` | 功能单位和参考流 | 确认合格设备净质量等于归一化分母、包装单独报告，且所有必需限定信息齐全。 |  |
| `validate_atomic_inventory` | 过程清单 | 拒绝合并或笼统交换；每项产品流、废物流和基本流必须有一个物理或化学身份以及一个适用的属性/单位。 |  |
| `validate_bom_and_meter_reconciliation` | 前景完整性 | 确认 BOM/材料、合格输出、电力、水、废水及固体废物记录与报告期和声明场址范围一致；解释每项残差或排除路线。 | `kth-moqvist-photo-flash-2020` |
| `validate_uuid_and_range_gaps` | 未解决引用和范围 | UUID 未解决行须留空并关联清单审查元数据。不得把单一产品特定 LCA 视为外部数量范围；推断范围须有两个独立且边界兼容的来源。 | `kth-moqvist-photo-flash-2020` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 所声明其他摄影设备型号或同质型号系列的出厂前景生产数据集 |
| downstream_use | `secondary_dataset`；经审查和发布后可作 `background_dataset` |
| allowed_use | 需要所声明型号和路线、按质量归一化的出厂生产数据的产品碳足迹及 LCA 模型 |
| excluded_use | 未限定的全部 CPC 48329 设备平均值；摄影机生产；使用阶段服务比较；生命末期声明；无独立建模的替代或避免负荷声明 |
| required_metadata | PCR id/版本；设备系列/型号；BOM 版本；产品净质量；随附附件；包装范围；场址/地理范围；报告期；路线；验收测试；分配驱动因素；截断；未解决 UUID；上游数据集和代理选择 |
| required_quality_disclosure | 前景数据覆盖和核对；仪表和秤质量；供应商数据占比；时间/地理/技术代表性；再生含量；废物处理路线；不确定性；独立范围证据缺口 |
| update_trigger | 型号或 BOM、组件供应商/技术、生产场址、电力供应、清洗/测试路线、包装、分配驱动因素、废物处理发生实质变化，或 Tiangong 参考产品/清单 UUID 新近解决 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | 联合国统计司，CPC 3.0 版结构及说明，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-09-07） | 正式分类身份及层级 |
| `wco-hs-2022-chapter-90` | `standard` | 世界海关组织，HS 2022 年版，第 90 章，https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1890_2022e.pdf?la=en（检索日期 2026-09-07） | 构成剩余设备边界的具体涵盖货物及零件排除项 |
| `kth-moqvist-photo-flash-2020` | `literature` | Tim Storfeldt Moqvist，Environmental Impact of a Portable Photo Flash – Using Life Cycle Assessment Methodology，KTH，2020，https://urn.kb.se/resolve?urn=urn:nbn:se:kth:diva-275710（检索日期 2026-09-07） | 代表性电子闪光路线、BOM/组件清单、装配、电力、塑料、铝反射器、PCB 和纸板包装的过程分解；不用于外部数量范围 |
